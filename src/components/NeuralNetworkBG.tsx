import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNode({ position, connections, color }: { position: [number, number, number], connections: [number, number, number][], color: string }) {
    const nodeRef = useRef<THREE.Mesh>(null!);
    const glowRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
        if (nodeRef.current) {
            nodeRef.current.scale.set(pulse, pulse, pulse);
        }
        if (glowRef.current) {
            glowRef.current.scale.set(pulse * 1.5, pulse * 1.5, pulse * 1.5);
        }
    });

    return (
        <group position={position}>
            {/* Node core */}
            <mesh ref={nodeRef}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={1}
                />
            </mesh>

            {/* Outer glow */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </group>
    );
}

function NeuralNetwork() {
    const networkRef = useRef<THREE.Group>(null!);
    const linesRef = useRef<THREE.LineSegments>(null!);

    // Generate network structure
    const { nodes, linePositions } = useMemo(() => {
        const nodes: { pos: [number, number, number], color: string, connections: [number, number, number][] }[] = [];
        const linePositions: number[] = [];

        // Create layered structure
        const layers = 4;
        const nodesPerLayer = 6;
        const layerSpacing = 4;
        const nodeSpacing = 2;

        const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4'];

        for (let l = 0; l < layers; l++) {
            for (let n = 0; n < nodesPerLayer; n++) {
                const x = (l - layers / 2) * layerSpacing;
                const y = (n - nodesPerLayer / 2) * nodeSpacing;
                const z = Math.sin(l + n) * 2;

                const nodePos: [number, number, number] = [x, y, z];
                const connections: [number, number, number][] = [];

                // Connect to next layer
                if (l < layers - 1) {
                    for (let nn = Math.max(0, n - 2); nn < Math.min(nodesPerLayer, n + 3); nn++) {
                        const nextX = (l + 1 - layers / 2) * layerSpacing;
                        const nextY = (nn - nodesPerLayer / 2) * nodeSpacing;
                        const nextZ = Math.sin(l + 1 + nn) * 2;

                        connections.push([nextX, nextY, nextZ]);

                        // Add line segment
                        linePositions.push(x, y, z);
                        linePositions.push(nextX, nextY, nextZ);
                    }
                }

                nodes.push({
                    pos: nodePos,
                    color: colors[l % colors.length],
                    connections
                });
            }
        }

        return { nodes, linePositions: new Float32Array(linePositions) };
    }, []);

    // Animate flowing energy
    useFrame((state) => {
        if (networkRef.current) {
            networkRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        }

        if (linesRef.current && linesRef.current.material) {
            const material = linesRef.current.material as THREE.LineBasicMaterial;
            material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
        }
    });

    return (
        <group ref={networkRef}>
            {/* Connection lines */}
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>

            {/* Nodes */}
            {nodes.map((node, i) => (
                <NeuralNode
                    key={i}
                    position={node.pos}
                    connections={node.connections}
                    color={node.color}
                />
            ))}

            {/* Energy particles flowing through network */}
            <Points positions={useMemo(() => {
                const points = new Float32Array(200 * 3);
                for (let i = 0; i < 200; i++) {
                    points[i * 3] = (Math.random() - 0.5) * 20;
                    points[i * 3 + 1] = (Math.random() - 0.5) * 15;
                    points[i * 3 + 2] = (Math.random() - 0.5) * 10;
                }
                return points;
            }, [])} stride={3}>
                <PointMaterial
                    transparent
                    color="#ec4899"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function NeuralNetworkBG() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-40">
            <Canvas camera={{ position: [0, 0, 18], fov: 50 }}>
                <color attach="background" args={['transparent']} />
                <fog attach="fog" args={['#0f172a', 15, 35]} />

                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
                <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ec4899" />

                <NeuralNetwork />
            </Canvas>
        </div>
    );
}

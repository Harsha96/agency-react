import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
    const helixRef = useRef<THREE.Group>(null!);
    const particlesRef = useRef<THREE.Points>(null!);

    // Generate DNA helix structure
    const { helixPoints, connections } = useMemo(() => {
        const helixPoints: number[] = [];
        const connections: number[] = [];

        const height = 20;
        const radius = 3;
        const turns = 4;
        const stepsPerTurn = 50;
        const totalSteps = turns * stepsPerTurn;

        for (let i = 0; i < totalSteps; i++) {
            const t = i / totalSteps;
            const angle = t * Math.PI * 2 * turns;
            const y = (t - 0.5) * height;

            const x1 = Math.cos(angle) * radius;
            const z1 = Math.sin(angle) * radius;
            helixPoints.push(x1, y, z1);

            const x2 = Math.cos(angle + Math.PI) * radius;
            const z2 = Math.sin(angle + Math.PI) * radius;
            helixPoints.push(x2, y, z2);

            if (i % 5 === 0) {
                connections.push(x1, y, z1);
                connections.push(x2, y, z2);
            }
        }

        return {
            helixPoints: new Float32Array(helixPoints),
            connections: new Float32Array(connections)
        };
    }, []);

    useFrame((state) => {
        if (helixRef.current) {
            helixRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }

        if (particlesRef.current && particlesRef.current.material) {
            const material = particlesRef.current.material as THREE.PointsMaterial;
            material.opacity = 0.7 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
        }
    });

    return (
        <group ref={helixRef} position={[0, 0, -5]}>
            <Points ref={particlesRef} positions={helixPoints} stride={3}>
                <PointMaterial
                    transparent
                    color="#8b5cf6"
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.9}
                />
            </Points>

            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={connections.length / 3}
                        array={connections}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#a78bfa" transparent opacity={0.4} />
            </lineSegments>

            {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2 * 4;
                const y = ((i / 12) - 0.5) * 20;
                const x = Math.cos(angle) * 3;
                const z = Math.sin(angle) * 3;

                return (
                    <mesh key={i} position={[x, y, z]}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial
                            color="#ec4899"
                            emissive="#ec4899"
                            emissiveIntensity={1}
                            transparent
                            opacity={0.95}
                        />
                    </mesh>
                );
            })}
        </group>
    );
}

function TechIcons() {
    const iconsRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if (iconsRef.current) {
            iconsRef.current.rotation.y = state.clock.elapsedTime * 0.06;

            iconsRef.current.children.forEach((icon, i) => {
                icon.position.y += Math.sin(state.clock.elapsedTime * 0.8 + i * 2) * 0.01;
                icon.rotation.y = state.clock.elapsedTime * 0.4 + i;
            });
        }
    });

    return (
        <group ref={iconsRef}>
            {/* Database Stack */}
            <group position={[-9, 2, -12]}>
                {[0.6, 0.2, -0.2].map((yPos, idx) => (
                    <mesh key={idx} position={[0, yPos, 0]}>
                        <cylinderGeometry args={[0.9, 0.9, 0.25, 32]} />
                        <meshStandardMaterial
                            color="#8b5cf6"
                            emissive="#8b5cf6"
                            emissiveIntensity={1.2}
                            transparent
                            opacity={0.9}
                            metalness={0.6}
                        />
                    </mesh>
                ))}
                <mesh>
                    <sphereGeometry args={[1.5, 16, 16]} />
                    <meshBasicMaterial color="#8b5cf6" transparent opacity={0.15} />
                </mesh>
            </group>

            {/* Code Brackets </> */}
            <group position={[9, -3, -11]}>
                <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI]}>
                    <torusGeometry args={[0.7, 0.14, 8, 16, Math.PI]} />
                    <meshStandardMaterial
                        color="#06b6d4"
                        emissive="#06b6d4"
                        emissiveIntensity={1.3}
                        transparent
                        opacity={0.95}
                    />
                </mesh>
                <mesh position={[0.7, 0, 0]}>
                    <torusGeometry args={[0.7, 0.14, 8, 16, Math.PI]} />
                    <meshStandardMaterial
                        color="#06b6d4"
                        emissive="#06b6d4"
                        emissiveIntensity={1.3}
                        transparent
                        opacity={0.95}
                    />
                </mesh>
                <mesh rotation={[0, 0, 0.3]}>
                    <boxGeometry args={[0.18, 1.3, 0.18]} />
                    <meshStandardMaterial
                        color="#06b6d4"
                        emissive="#06b6d4"
                        emissiveIntensity={1.3}
                    />
                </mesh>
                <mesh>
                    <sphereGeometry args={[1.6, 16, 16]} />
                    <meshBasicMaterial color="#06b6d4" transparent opacity={0.12} />
                </mesh>
            </group>

            {/* Gear */}
            <group position={[0, 6, -13]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.8, 0.25, 8, 24]} />
                    <meshStandardMaterial
                        color="#ec4899"
                        emissive="#ec4899"
                        emissiveIntensity={1.1}
                        metalness={0.7}
                    />
                </mesh>
                {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    return (
                        <mesh
                            key={i}
                            position={[Math.cos(angle) * 0.95, 0, Math.sin(angle) * 0.95]}
                            rotation={[0, angle, 0]}
                        >
                            <boxGeometry args={[0.15, 0.4, 0.25]} />
                            <meshStandardMaterial
                                color="#ec4899"
                                emissive="#ec4899"
                                emissiveIntensity={1.1}
                            />
                        </mesh>
                    );
                })}
                <mesh>
                    <sphereGeometry args={[1.5, 16, 16]} />
                    <meshBasicMaterial color="#ec4899" transparent opacity={0.1} />
                </mesh>
            </group>

            {/* Lightning Bolt */}
            <group position={[-6, -4, -9]} rotation={[0, 0, 0.3]}>
                <mesh position={[0.15, 0.5, 0]}>
                    <boxGeometry args={[0.4, 0.9, 0.2]} />
                    <meshStandardMaterial
                        color="#f59e0b"
                        emissive="#f59e0b"
                        emissiveIntensity={1.4}
                    />
                </mesh>
                <mesh position={[-0.15, -0.5, 0]}>
                    <boxGeometry args={[0.4, 0.9, 0.2]} />
                    <meshStandardMaterial
                        color="#f59e0b"
                        emissive="#f59e0b"
                        emissiveIntensity={1.4}
                    />
                </mesh>
                <mesh>
                    <sphereGeometry args={[1.3, 16, 16]} />
                    <meshBasicMaterial color="#f59e0b" transparent opacity={0.15} />
                </mesh>
            </group>

            {/* Cloud */}
            <group position={[6, 5, -10]}>
                <mesh position={[0, 0.1, 0]}>
                    <sphereGeometry args={[0.7, 16, 16]} />
                    <meshStandardMaterial
                        color="#10b981"
                        emissive="#10b981"
                        emissiveIntensity={0.9}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
                <mesh position={[-0.6, 0, 0]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial
                        color="#10b981"
                        emissive="#10b981"
                        emissiveIntensity={0.9}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
                <mesh position={[0.6, 0, 0]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial
                        color="#10b981"
                        emissive="#10b981"
                        emissiveIntensity={0.9}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
                <mesh>
                    <sphereGeometry args={[1.4, 16, 16]} />
                    <meshBasicMaterial color="#10b981" transparent opacity={0.12} />
                </mesh>
            </group>
        </group>
    );
}

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-70">
            <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                <color attach="background" args={['#0a0a0f']} />
                <fog attach="fog" args={['#0a0a0f', 10, 30]} />

                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
                <pointLight position={[0, 10, -10]} intensity={1} color="#06b6d4" />

                <DNAHelix />
                <TechIcons />
            </Canvas>
        </div>
    );
};

export default Hero3D;

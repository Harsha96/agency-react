import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function TechPlatform({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
    const platformRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        platformRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
        platformRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    });

    return (
        <group ref={platformRef} position={position} scale={scale}>
            {/* Platform base */}
            <mesh>
                <boxGeometry args={[2, 0.1, 2]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                    wireframe
                />
            </mesh>

            {/* Holographic column */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 6]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.6}
                />
            </mesh>

            {/* Floating icon representation */}
            <mesh position={[0, 2, 0]}>
                <octahedronGeometry args={[0.3, 0]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={1}
                    wireframe
                />
            </mesh>
        </group>
    );
}

function DataStream() {
    const streamRef = useRef<THREE.Points>(null!);

    const positions = useMemo(() => {
        const points = new Float32Array(500 * 3);
        for (let i = 0; i < 500; i++) {
            const t = i / 500;
            const angle = t * Math.PI * 4;
            points[i * 3] = Math.cos(angle) * (3 + t * 2);
            points[i * 3 + 1] = t * 10 - 5;
            points[i * 3 + 2] = Math.sin(angle) * (3 + t * 2);
        }
        return points;
    }, []);

    useFrame((state) => {
        if (streamRef.current) {
            streamRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Points ref={streamRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#06b6d4"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function FloatingTechEcosystem() {
    const ecosystemRef = useRef<THREE.Group>(null!);

    useFrame(() => {
        if (ecosystemRef.current) {
            ecosystemRef.current.rotation.y += 0.001;
        }
    });

    const platforms = [
        { pos: [-4, 0, -2] as [number, number, number], color: '#6366f1' },
        { pos: [4, 1, -2] as [number, number, number], color: '#8b5cf6' },
        { pos: [0, -1, 2] as [number, number, number], color: '#ec4899' },
        { pos: [-2, 2, 0] as [number, number, number], color: '#10b981' },
        { pos: [2, -2, 1] as [number, number, number], color: '#f59e0b' },
    ];

    return (
        <group ref={ecosystemRef}>
            {platforms.map((platform, i) => (
                <TechPlatform
                    key={i}
                    position={platform.pos}
                    color={platform.color}
                />
            ))}

            <DataStream />

            {/* Ambient particles */}
            <Points positions={useMemo(() => {
                const points = new Float32Array(300 * 3);
                for (let i = 0; i < 300; i++) {
                    points[i * 3] = (Math.random() - 0.5) * 15;
                    points[i * 3 + 1] = (Math.random() - 0.5) * 15;
                    points[i * 3 + 2] = (Math.random() - 0.5) * 15;
                }
                return points;
            }, [])} stride={3}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.3}
                />
            </Points>
        </group>
    );
}

export default function ServicesBG() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-30 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                <color attach="background" args={['transparent']} />
                <fog attach="fog" args={['#f8fafc', 10, 25]} />

                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={0.8} color="#6366f1" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

                <FloatingTechEcosystem />
            </Canvas>
        </div>
    );
}

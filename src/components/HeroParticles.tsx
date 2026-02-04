import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
    const meshRef = useRef<THREE.Points>(null!);
    // HYPER-DENSE Count for Flagship Expert UI
    const count = 15000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Wider distribution for better coverage
            pos[i * 3] = (Math.random() - 0.5) * 80;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }
        return pos;
    }, []);

    const colors = useMemo(() => {
        const cols = new Float32Array(count * 3);
        const color1 = new THREE.Color('#3b82f6'); // blue-500
        const color2 = new THREE.Color('#06b6d4'); // cyan-500
        for (let i = 0; i < count; i++) {
            const mixedColor = i % 2 === 0 ? color1 : color2;
            cols[i * 3] = mixedColor.r;
            cols[i * 3 + 1] = mixedColor.g;
            cols[i * 3 + 2] = mixedColor.b;
        }
        return cols;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.04;
        meshRef.current.rotation.y = time * 0.02;

        // Dynamic mouse interactivity - higher sensitivity for hyper-density
        const { x, y } = state.mouse;
        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 4, 0.05);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 4, 0.05);
    });

    return (
        <Points ref={meshRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                vertexColors
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.45}
                blending={THREE.AdditiveBlending}
            />
            {/* Direct buffer attribute for colors to enable dual-tone mix */}
            <bufferAttribute
                attach="geometry-attributes-color"
                count={colors.length / 3}
                array={colors}
                itemSize={3}
            />
        </Points>
    );
}

export function HeroParticles() {
    return (
        <div className="absolute inset-0 pointer-events-none z-10 w-full h-full opacity-70">
            <Canvas camera={{ position: [0, 0, 40], fov: 60 }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}

export function RainParticles() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 w-full h-full opacity-30">
            <Canvas camera={{ position: [0, 0, 40], fov: 60 }}>
                <MatrixFluxField />
            </Canvas>
        </div>
    );
}

function MatrixFluxField() {
    const meshRef = useRef<THREE.Points>(null!);
    const count = 4000;

    const [positions, shifts] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const shift = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            // Distribute in columns/streaks
            const col = (Math.random() - 0.5) * 80;
            pos[i * 3] = col + (Math.random() - 0.5) * 2; // slight scatter
            pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
            shift[i] = Math.random() * 0.2 + 0.05; // speed variation
        }
        return [pos, shift];
    }, []);

    const colors = useMemo(() => {
        const cols = new Float32Array(count * 3);
        const colorBase = new THREE.Color('#3b82f6'); // blue
        const colorHighlight = new THREE.Color('#a5f3fc'); // cyan light
        for (let i = 0; i < count; i++) {
            const mixed = i % 10 === 0 ? colorHighlight : colorBase;
            cols[i * 3] = mixed.r;
            cols[i * 3 + 1] = mixed.g;
            cols[i * 3 + 2] = mixed.b;
        }
        return cols;
    }, []);

    useFrame(() => {
        if (!meshRef.current) return;
        const positions = meshRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            // Falling motion using precomputed shifts
            positions[i * 3 + 1] -= shifts[i];

            // Reset with slight horizontal variance
            if (positions[i * 3 + 1] < -50) {
                positions[i * 3 + 1] = 50;
            }
        }
        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={meshRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                vertexColors
                size={0.12}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
                blending={THREE.AdditiveBlending}
            />
            <bufferAttribute
                attach="geometry-attributes-color"
                count={colors.length / 3}
                array={colors}
                itemSize={3}
            />
        </Points>
    );
}

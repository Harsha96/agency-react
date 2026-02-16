import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

function ParallaxDust() {
    const meshRef = useRef<THREE.Points>(null!);
    const { scrollYProgress } = useScroll();

    // Ultra-High Density for Expert Atmosphere
    const count = 5000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 60;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 60;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const scroll = scrollYProgress.get();

        meshRef.current.rotation.y = time * 0.02;
        meshRef.current.rotation.x = time * 0.01;
        meshRef.current.position.y = -scroll * 15;
    });

    return (
        <Points ref={meshRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#3b82f6"
                size={0.04}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.15}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function LiquidEnergy() {
    const meshRef = useRef<THREE.Points>(null!);
    const { scrollYProgress } = useScroll();

    const count = 150;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * count * 3);
        const step = 0.6;
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const x = (i - count / 2) * step;
                const z = (j - count / 2) * step;
                const idx = (i * count + j) * 3;
                pos[idx] = x;
                pos[idx + 1] = 0;
                pos[idx + 2] = z;
            }
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const scroll = scrollYProgress.get();
        const posAttr = meshRef.current.geometry.attributes.position;

        for (let i = 0; i < posAttr.count; i++) {
            const x = posAttr.getX(i);
            const z = posAttr.getZ(i);

            // Advanced fluid-like wave math
            const wave1 = Math.sin(x * 0.15 + time * 0.4) * 0.5;
            const wave2 = Math.cos(z * 0.12 + time * 0.3) * 0.4;
            const wave3 = Math.sin((x + z) * 0.1 + time * 0.2) * 0.3;

            const intensity = THREE.MathUtils.lerp(1.2, 0.1, scroll);
            const targetY = (wave1 + wave2 + wave3) * intensity;
            posAttr.setY(i, targetY);
        }

        posAttr.needsUpdate = true;

        if (meshRef.current.material instanceof THREE.PointsMaterial) {
            meshRef.current.material.opacity = THREE.MathUtils.lerp(0.2, 0.05, scroll);
        }
    });

    return (
        <Points ref={meshRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                depthWrite={false}
                color="#93c5fd"
                blending={THREE.NormalBlending}
                sizeAttenuation={true}
                size={0.1}
            />
        </Points>
    );
}

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-white overflow-hidden">

            {/* Expert Liquid Mesh Gradients - CSS Animated */}
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] animate-pulse opacity-40 mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-100 rounded-full blur-[150px] animate-pulse opacity-40 mix-blend-multiply transition-all duration-1000" />
                <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px] animate-pulse opacity-30 mix-blend-multiply" />
            </div>

            <Canvas camera={{ position: [0, 15, 50], fov: 45 }}>
                <fog attach="fog" args={['#ffffff', 30, 100]} />
                <LiquidEnergy />
                <ParallaxDust />
                <ambientLight intensity={1} />
                <pointLight position={[20, 20, 20]} intensity={1.5} color="#3b82f6" />
            </Canvas>

            {/* Final Crystal Overlay */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
        </div>
    );
}

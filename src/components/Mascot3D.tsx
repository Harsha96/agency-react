import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FoxMascotProps {
    hoverMessage: string | null;
}

function EmotionalFox({ hoverMessage }: { hoverMessage: string | null }) {
    const foxRef = useRef<THREE.Group>(null!);
    const tailRef = useRef<THREE.Group>(null!);
    const leftEarRef = useRef<THREE.Mesh>(null!);
    const rightEarRef = useRef<THREE.Mesh>(null!);
    const leftEyeRef = useRef<THREE.Mesh>(null!);
    const rightEyeRef = useRef<THREE.Mesh>(null!);
    const mouthRef = useRef<THREE.Mesh>(null!);

    const isActive = !!hoverMessage;

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        // Gentle bobbing with breathing
        if (foxRef.current) {
            foxRef.current.position.y = Math.sin(time * 1.2) * 0.1;
            const breathScale = 1 + Math.sin(time * 1.5) * 0.02;
            foxRef.current.scale.set(breathScale, breathScale, breathScale);
            foxRef.current.rotation.y = Math.sin(time * 0.4) * 0.1;
        }

        // Excited tail wagging when active
        if (tailRef.current) {
            const wagSpeed = isActive ? 6 : 3;
            const wagAmount = isActive ? 0.6 : 0.5;
            tailRef.current.rotation.z = Math.sin(time * wagSpeed) * wagAmount;
            tailRef.current.rotation.x = Math.sin(time * wagSpeed * 0.7) * 0.2;
        }

        // Perky ears when active
        if (leftEarRef.current && rightEarRef.current) {
            const earTilt = isActive ? 0.5 : 0.4;
            leftEarRef.current.rotation.z = earTilt + Math.sin(time * 2.3) * 0.15;
            rightEarRef.current.rotation.z = -earTilt + Math.sin(time * 2.3 + Math.PI) * 0.15;
        }

        // Eye blinking
        if (leftEyeRef.current && rightEyeRef.current) {
            const blink = Math.floor(time * 0.5) % 5 === 0 && (time * 0.5) % 1 < 0.1 ? 0.3 : 1;
            leftEyeRef.current.scale.y = blink;
            rightEyeRef.current.scale.y = blink;
        }

        // Smile changes based on state
        if (mouthRef.current) {
            // Wider smile when active
            const smileScale = isActive ? 1.2 : 1;
            mouthRef.current.scale.x = smileScale;
        }

        // Mouse tracking
        foxRef.current.rotation.x = THREE.MathUtils.lerp(
            foxRef.current.rotation.x,
            -state.mouse.y * 0.15,
            0.05
        );
    });

    // Emotion-based colors
    const eyeColor = isActive ? '#fbbf24' : '#10b981'; // Yellow when active, green default
    const furColor = isActive ? '#ff7849' : '#ff6b35'; // Brighter orange when excited
    const accentColor = isActive ? '#fff9e6' : '#fff5e6'; // Brighter cream when active
    const blushColor = isActive ? '#ff69b4' : '#ffb3ba'; // Pink blush more visible when active

    return (
        <Float speed={isActive ? 2 : 1.5} rotationIntensity={isActive ? 0.3 : 0.2} floatIntensity={isActive ? 0.5 : 0.3}>
            <group ref={foxRef} scale={1.4}>
                {/* Head */}
                <mesh position={[0, 0, 0]} castShadow>
                    <sphereGeometry args={[0.65, 32, 32]} />
                    <meshStandardMaterial color={furColor} roughness={0.7} metalness={0.1} />
                </mesh>

                {/* Cheeks with blush */}
                <mesh position={[-0.45, -0.15, 0.35]} castShadow>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshStandardMaterial color={accentColor} roughness={0.6} />
                </mesh>
                <mesh position={[0.45, -0.15, 0.35]} castShadow>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshStandardMaterial color={accentColor} roughness={0.6} />
                </mesh>

                {/* Blush marks - more visible when active */}
                <mesh position={[-0.5, -0.05, 0.5]}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshBasicMaterial color={blushColor} transparent opacity={isActive ? 0.8 : 0.5} />
                </mesh>
                <mesh position={[0.5, -0.05, 0.5]}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshBasicMaterial color={blushColor} transparent opacity={isActive ? 0.8 : 0.5} />
                </mesh>

                {/* Snout */}
                <mesh position={[0, -0.2, 0.5]} scale={[0.7, 0.55, 0.7]} castShadow>
                    <sphereGeometry args={[0.35, 16, 16]} />
                    <meshStandardMaterial color={accentColor} roughness={0.6} />
                </mesh>

                {/* Nose */}
                <mesh position={[0, -0.08, 0.75]} castShadow>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="#2d2d2d" roughness={0.3} metalness={0.5} />
                </mesh>
                <mesh position={[0.03, -0.05, 0.82]}>
                    <sphereGeometry args={[0.03, 8, 8]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>

                {/* BIG sparkly eyes */}
                <mesh ref={leftEyeRef} position={[-0.22, 0.2, 0.52]} castShadow>
                    <sphereGeometry args={[0.16, 20, 20]} />
                    <meshStandardMaterial
                        color={eyeColor}
                        emissive={eyeColor}
                        emissiveIntensity={isActive ? 1.8 : 0.8}
                        roughness={0.2}
                    />
                </mesh>
                <mesh ref={rightEyeRef} position={[0.22, 0.2, 0.52]} castShadow>
                    <sphereGeometry args={[0.16, 20, 20]} />
                    <meshStandardMaterial
                        color={eyeColor}
                        emissive={eyeColor}
                        emissiveIntensity={isActive ? 1.8 : 0.8}
                        roughness={0.2}
                    />
                </mesh>

                {/* Eye sparkles - extra when active */}
                <mesh position={[-0.24, 0.24, 0.65]}>
                    <sphereGeometry args={[0.06, 12, 12]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
                <mesh position={[0.2, 0.24, 0.65]}>
                    <sphereGeometry args={[0.06, 12, 12]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
                {isActive && (
                    <>
                        <mesh position={[-0.18, 0.18, 0.66]}>
                            <sphereGeometry args={[0.04, 8, 8]} />
                            <meshBasicMaterial color="#ffffff" />
                        </mesh>
                        <mesh position={[0.26, 0.18, 0.66]}>
                            <sphereGeometry args={[0.04, 8, 8]} />
                            <meshBasicMaterial color="#ffffff" />
                        </mesh>
                    </>
                )}

                {/* Ears */}
                <mesh ref={leftEarRef} position={[-0.4, 0.6, 0]} rotation={[0.3, -0.2, 0.4]} castShadow>
                    <coneGeometry args={[0.25, 0.6, 20]} />
                    <meshStandardMaterial color={furColor} roughness={0.7} />
                </mesh>
                <mesh ref={rightEarRef} position={[0.4, 0.6, 0]} rotation={[0.3, 0.2, -0.4]} castShadow>
                    <coneGeometry args={[0.25, 0.6, 20]} />
                    <meshStandardMaterial color={furColor} roughness={0.7} />
                </mesh>

                {/* Ear insides */}
                <mesh position={[-0.4, 0.55, 0.08]} rotation={[0.3, -0.2, 0.4]}>
                    <coneGeometry args={[0.15, 0.4, 16]} />
                    <meshStandardMaterial color="#ffb3ba" roughness={0.5} />
                </mesh>
                <mesh position={[0.4, 0.55, 0.08]} rotation={[0.3, 0.2, -0.4]}>
                    <coneGeometry args={[0.15, 0.4, 16]} />
                    <meshStandardMaterial color="#ffb3ba" roughness={0.5} />
                </mesh>

                {/* Fluffy tail */}
                <group ref={tailRef} position={[0, -0.4, -0.7]} rotation={[0.7, 0, 0]}>
                    <mesh position={[0, -0.25, 0]} castShadow>
                        <sphereGeometry args={[0.3, 16, 16]} />
                        <meshStandardMaterial color={furColor} roughness={0.9} />
                    </mesh>
                    <mesh position={[0, -0.45, 0]} castShadow>
                        <sphereGeometry args={[0.25, 16, 16]} />
                        <meshStandardMaterial color={furColor} roughness={0.9} />
                    </mesh>
                    <mesh position={[0, -0.62, 0]} castShadow>
                        <sphereGeometry args={[0.22, 16, 16]} />
                        <meshStandardMaterial color={accentColor} roughness={0.8} />
                    </mesh>
                </group>

                {/* Whiskers */}
                {[-1, 1].map((side) => (
                    <group key={side}>
                        {[0, 1, 2].map((i) => (
                            <mesh
                                key={i}
                                position={[side * 0.3, -0.1 - i * 0.08, 0.62]}
                                rotation={[0, 0, side * (0.15 - i * 0.05)]}
                            >
                                <cylinderGeometry args={[0.008, 0.008, 0.6, 6]} />
                                <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
                            </mesh>
                        ))}
                    </group>
                ))}

                {/* Happy smile - wider when active */}
                <mesh ref={mouthRef} position={[0, -0.18, 0.72]}>
                    <torusGeometry args={[0.08, 0.015, 8, 16, Math.PI]} />
                    <meshStandardMaterial color="#2d2d2d" />
                </mesh>

                {/* Heart particle when active */}
                {isActive && (
                    <mesh position={[0.6, 0.8, 0.3]}>
                        <sphereGeometry args={[0.1, 16, 16]} />
                        <meshBasicMaterial color="#ff69b4" transparent opacity={0.6 + Math.sin(Date.now() * 0.005) * 0.2} />
                    </mesh>
                )}
            </group>
        </Float>
    );
}

export default function Mascot3D({ hoverMessage }: FoxMascotProps) {
    return (
        <Canvas
            camera={{ position: [0, 0, 3.5], fov: 50 }}
            style={{ background: 'transparent' }}
            shadows
        >
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} intensity={1.5} color="#fbbf24" castShadow />
            <pointLight position={[-5, -2, -3]} intensity={0.8} color="#ff6b35" />
            <spotLight
                position={[0, 10, 5]}
                angle={0.5}
                penumbra={1}
                intensity={1}
                color="#ffffff"
                castShadow
            />

            <EmotionalFox hoverMessage={hoverMessage} />
        </Canvas>
    );
}

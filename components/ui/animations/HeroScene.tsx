'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function RobotModel() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    const isLight = mounted && theme === 'light';
    const robot = useRef<THREE.Group>(null);
    const glowCore = useRef<THREE.Mesh>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useFrame((state) => {
        if (robot.current) {
            robot.current.rotation.y = Math.sin(state.clock.elapsedTime / 3) * 0.12;
            robot.current.position.y = Math.sin(state.clock.elapsedTime) * 0.04;
        }
        if (glowCore.current) {
            glowCore.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
        }
    });

    const galaxyBlue = "#4B7BF5";
    const galaxyPurple = "#8B5CF6";
    const pureWhite = "#FFFFFF";
    const darkVisor = "#000000";

    return (
        <group ref={robot} position={[0, -0.8, 0]} scale={1.35}>
            {/* Head */}
            <group position={[0, 0.5, 0]}>
                {/* Main head - spherical */}
                <mesh castShadow>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial
                        color={pureWhite}
                        metalness={isLight ? 0.3 : 0.2}
                        roughness={isLight ? 0.2 : 0.3}
                    />
                </mesh>

                {/* Black Visor */}
                <group>
                    {/* Main visor front */}
                    <mesh position={[0, 0, 0.28]} castShadow>
                        <boxGeometry args={[0.55, 0.15, 0.05]} />
                        <meshStandardMaterial
                            color={darkVisor}
                            metalness={0.8}
                            roughness={0.2}
                        />
                    </mesh>
                    {/* Left temple */}
                    <mesh position={[-0.27, 0, 0.15]} rotation={[0, -Math.PI / 2.5, 0]} castShadow>
                        <boxGeometry args={[0.35, 0.15, 0.05]} />
                        <meshStandardMaterial
                            color={darkVisor}
                            metalness={0.8}
                            roughness={0.2}
                        />
                    </mesh>
                    {/* Right temple */}
                    <mesh position={[0.27, 0, 0.15]} rotation={[0, Math.PI / 2.5, 0]} castShadow>
                        <boxGeometry args={[0.35, 0.15, 0.05]} />
                        <meshStandardMaterial
                            color={darkVisor}
                            metalness={0.8}
                            roughness={0.2}
                        />
                    </mesh>
                </group>

                {/* Purple Eyes */}
                {[-0.1, 0.1].map((x, i) => (
                    <group key={i} position={[x, 0, 0.31]} rotation={[0, 0, Math.PI / 2]}>
                        {/* Main eye glow */}
                        <mesh>
                            <capsuleGeometry args={[0.03, 0.04, 8, 16]} />
                            <meshStandardMaterial
                                color={galaxyPurple}
                                emissive={galaxyPurple}
                                emissiveIntensity={isLight ? 6 : 2}
                                transparent
                                opacity={1}
                            />
                        </mesh>
                        {/* Outer glow */}
                        <mesh>
                            <capsuleGeometry args={[0.035, 0.045, 8, 16]} />
                            <meshStandardMaterial
                                color={galaxyPurple}
                                emissive={galaxyPurple}
                                emissiveIntensity={isLight ? 4 : 1}
                                transparent
                                opacity={0.8}
                            />
                        </mesh>
                    </group>
                ))}

                {/* Antenna with glowing tip */}
                <group position={[0, 0.3, 0]}>
                    <mesh castShadow>
                        <cylinderGeometry args={[0.01, 0.01, 0.2, 8]} />
                        <meshStandardMaterial
                            color={pureWhite}
                            metalness={0.3}
                            roughness={0.2}
                        />
                    </mesh>
                    <mesh position={[0, 0.12, 0]}>
                        <sphereGeometry args={[0.02, 16, 16]} />
                        <meshStandardMaterial
                            color={galaxyPurple}
                            emissive={galaxyPurple}
                            emissiveIntensity={isLight ? 6 : 2}
                        />
                    </mesh>
                </group>
            </group>

            {/* Body */}
            <group position={[0, -0.1, 0]}>
                {/* Main torso - solid white */}
                <mesh castShadow>
                    <cylinderGeometry args={[0.25, 0.2, 0.6, 32]} />
                    <meshStandardMaterial
                        color={pureWhite}
                        metalness={0.3}
                        roughness={0.2}
                    />
                </mesh>

                {/* Energy core center */}
                <mesh position={[0, 0, 0.15]} ref={glowCore}>
                    <sphereGeometry args={[0.08, 32, 32]} />
                    <meshStandardMaterial
                        color={galaxyPurple}
                        emissive={galaxyPurple}
                        emissiveIntensity={isLight ? 6 : 2}
                    />
                </mesh>
            </group>

            {/* Floating Arms */}
            {[-0.4, 0.4].map((x, i) => (
                <group key={i} position={[x, 0.1, 0]}>
                    {/* Arm segment */}
                    <mesh position={[0, -0.2, 0]} castShadow>
                        <cylinderGeometry args={[0.04, 0.04, 0.35, 8]} />
                        <meshStandardMaterial
                            color={galaxyPurple}
                            metalness={0.3}
                            roughness={0.2}
                            emissive={galaxyPurple}
                            emissiveIntensity={isLight ? 1 : 0.3}
                        />
                    </mesh>

                    {/* Hand sphere */}
                    <mesh position={[0, -0.4, 0]} castShadow>
                        <sphereGeometry args={[0.06, 16, 16]} />
                        <meshStandardMaterial
                            color={galaxyBlue}
                            emissive={galaxyBlue}
                            emissiveIntensity={isLight ? 3 : 0.8}
                        />
                    </mesh>
                </group>
            ))}

            {/* Energy particles - reduced significantly to match reference */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={150}
                        array={new Float32Array(Array(450).fill(0).map(() => (Math.random() - 0.5) * 3))}
                        itemSize={3}
                        // @ts-ignore - Three.js types are not fully compatible with the latest version
                        args={[
                            new Float32Array(Array(450).fill(0).map(() => (Math.random() - 0.5) * 3)),
                            3
                        ]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color={galaxyBlue}
                    transparent
                    opacity={isLight ? 0.8 : 0.6}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </group>
    );
}

function EnergyParticles({ count = 800, color = "#61dafb" }: { count?: number, color?: string }) {
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const scales = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 5;
            positions[i3 + 1] = (Math.random() - 0.5) * 5;
            positions[i3 + 2] = (Math.random() - 0.5) * 5;
            scales[i] = Math.random();
        }

        return {
            positions,
            scales
        };
    }, [count]);

    const particlesRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.x += 0.0005;
            particlesRef.current.rotation.y += 0.001;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particles.positions}
                    count={count}
                    itemSize={3}
                    // @ts-ignore - Three.js types are not fully compatible with the latest version
                    args={[particles.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-scale"
                    array={particles.scales}
                    count={count}
                    itemSize={1}
                    // @ts-ignore - Three.js types are not fully compatible with the latest version
                    args={[particles.scales, 1]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color={color}
                sizeAttenuation
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function HeroScene() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    const isLight = mounted && theme === 'light';

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{
                    background: 'transparent',
                    position: 'absolute',
                    top: '-60px',
                    left: '2%',
                    width: '100%',
                    height: '120%',
                    pointerEvents: 'none',
                    transform: 'translateX(-7%)'
                }}
            >
                {/* Adjusted lighting for better 3D robot visibility */}
                <ambientLight intensity={isLight ? 0.4 : 0.35} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={isLight ? 2 : 0.8}
                    castShadow
                />
                <pointLight position={[-10, -10, -10]} intensity={isLight ? 0.4 : 0.3} />
                <directionalLight
                    position={[-5, 5, 5]}
                    intensity={isLight ? 1.5 : 0.35}
                    castShadow
                />

                {/* The type definitions for PresentationControls are incomplete */}
                <PresentationControls
                    global
                    rotation={[0.13, 0.1, 0]}
                    polar={[-0.4, 0.4]}
                    azimuth={[-0.8, 0.8]}
                    // @ts-ignore - R3F types don't fully match the implementation
                    config={{ mass: 2, tension: 400 }}
                    // @ts-ignore - R3F types don't fully match the implementation
                    snap={{ mass: 4, tension: 400 }}
                >
                    {/* Temporarily hidden robot
                    <Float
                        speed={1.5}
                        rotationIntensity={0.4}
                        floatIntensity={0.3}
                    >
                        <group position={[0, 0.5, 0]} scale={0.88}>
                            <RobotModel />
                        </group>
                    </Float>
                    */}
                </PresentationControls>

                <Environment preset={isLight ? "studio" : "city"} />
            </Canvas>

            {/* Base background to ensure scene has a proper background */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Dark mode gradient overlays - subtle cosmic effect to match reference */}
            {!isLight && (
                <>
                    {/* Subtle viewport cosmic background glow effects */}
                    <div className="absolute inset-0 w-full h-full">
                        <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-gradient-to-br from-blue-700/5 to-transparent blur-3xl" />
                        <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-gradient-to-tl from-purple-900/5 to-transparent blur-3xl" />

                        {/* Temporarily hidden star field effect
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'radial-gradient(circle at center, white 0.1px, transparent 0.4px)',
                                backgroundSize: '600px 600px'
                            }}
                        />
                        */}
                    </div>
                </>
            )}

            {/* Light mode gradient overlays */}
            {isLight && (
                <>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-50/30 via-slate-100/20 to-purple-50/30 opacity-60" />
                    <div className="absolute inset-0 w-full h-full">
                        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
                    </div>
                </>
            )}
        </div>
    );
} 
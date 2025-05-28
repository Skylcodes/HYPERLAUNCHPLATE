'use client';

import React, { useRef, useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Users, Star } from 'lucide-react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, Html, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

// Define a type for the icon map keys
type IconType = 'DollarSign' | 'TrendingUp' | 'Users' | 'Star';

const iconMap: Record<IconType, React.ElementType> = {
    DollarSign,
    TrendingUp,
    Users,
    Star
};

// Define interface for notification items
// Define specific color values that can be used
const NotificationColors = {
    BLUE: 'bg-blue-500/10',
    PURPLE: 'bg-purple-500/10',
    PINK: 'bg-pink-500/10',
    EMERALD: 'bg-emerald-500/10',
    AMBER: 'bg-amber-500/10',
    ROSE: 'bg-rose-500/10'
} as const;

type NotificationColor = keyof typeof NotificationColors;

interface Notification {
    iconType: IconType;
    title: string;
    description: string;
    time: string;
    color: NotificationColor;
    highlight?: boolean;
}

const notifications: Notification[] = [
    {
        iconType: 'DollarSign',
        title: "Major Revenue Milestone",
        description: "Your revenue has increased by 25% this month!",
        time: "2h ago",
        color: "BLUE",
        highlight: true
    },
    {
        iconType: 'Users',
        title: "New Team Member",
        description: "Alex joined your team. Welcome them!",
        time: "1d ago",
        color: "PURPLE"
    },
    {
        iconType: 'Star',
        title: "Project Update",
        description: "The new feature has been deployed to production.",
        time: "3d ago",
        color: "PINK"
    },
    {
        iconType: 'TrendingUp',
        title: "Performance Boost",
        description: "Your app's performance has improved by 40%.",
        time: "1w ago",
        color: "EMERALD"
    }
];

function SuccessTrackerContent() {
    const [isLoading, setIsLoading] = useState(true);
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';

    useEffect(() => {
        // Artificial delay for smooth transition
        setTimeout(() => setIsLoading(false), 800);
    }, []);

    const renderSkeleton = () => (
        <div className="flex-1 divide-y divide-gray-200 dark:divide-white/[0.08]">
            {[1, 2, 3, 4].map((index) => (
                <div key={index} className="p-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
                        <div className="flex-1">
                            <div className="h-4 w-24 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded animate-pulse mb-2" />
                            <div className="h-3 w-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <motion.div
            className="relative h-full flex flex-col bg-white dark:bg-black rounded-3xl overflow-hidden shadow-inner w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%' }}
        >
            {/* Header */}
            <motion.div
                className="p-3 border-b border-gray-200 dark:border-white/[0.08]"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white tracking-tight">
                            Success Tracker
                        </h3>
                        <p className="text-xs text-gray-900 dark:text-gray-500">Real-time founder profits</p>
                    </div>
                    <div className="flex items-center gap-1 bg-gray-50 dark:bg-[#1C1C2E] px-2 py-0.5 rounded-full border border-green-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
                        <span className="text-[10px] font-medium text-green-700 dark:text-green-500">Live Feed</span>
                    </div>
                </div>
            </motion.div>

            {/* Notifications */}
            {isLoading ? renderSkeleton() : (
                <div className="flex-1 divide-y divide-gray-200 dark:divide-white/[0.08] overflow-y-auto">
                    {notifications.map((notification, index) => {
                        const IconComponent = iconMap[notification.iconType] as React.ElementType;
                        return (
                            <motion.div
                                key={index}
                                className={`relative p-3 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all duration-300 ${notification.highlight ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5' : ''
                                    }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-2">
                                    {/* Icon container */}
                                    <div className={`relative p-1.5 rounded-lg bg-gradient-to-br from-gray-100/80 to-gray-50/80 dark:from-[#1C1C2E]/80 dark:to-[#1C1C2E]/60 ${NotificationColors[notification.color]} shadow-sm`}>
                                        <IconComponent className="w-3.5 h-3.5 relative z-10" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <p className={`text-xs font-medium truncate transition-colors duration-300 ${notification.highlight
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'
                                                : 'text-gray-900 dark:text-white'}`}>
                                                {notification.title}
                                            </p>
                                            <p className="text-[10px] text-gray-900 dark:text-gray-500 ml-1">
                                                {notification.time}
                                            </p>
                                        </div>
                                        <p className="text-[10px] text-gray-900 dark:text-gray-500 mt-0.5">
                                            {notification.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {/* Stats Footer */}
            <motion.div
                className="p-3 border-t border-gray-200 dark:border-white/[0.08] bg-white dark:bg-black"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">24k</p>
                        <p className="text-[10px] text-gray-900 dark:text-gray-500">Users</p>
                        <div className="mt-1 text-[10px] text-green-700 dark:text-green-400 flex items-center justify-center font-medium">
                            <TrendingUp className="w-2 h-2 mr-0.5" />
                            +28%
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">$89k</p>
                        <p className="text-[10px] text-gray-900 dark:text-gray-500">MRR</p>
                        <div className="mt-1 text-[10px] text-green-700 dark:text-green-400 flex items-center justify-center font-medium">
                            <TrendingUp className="w-2 h-2 mr-0.5" />
                            +64%
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">98%</p>
                        <p className="text-[10px] text-gray-900 dark:text-gray-500">Growth</p>
                        <div className="mt-1 text-[10px] text-green-700 dark:text-green-400 flex items-center justify-center font-medium">
                            <TrendingUp className="w-2 h-2 mr-0.5" />
                            +124%
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function Phone(props: any) {
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    const phoneMesh = useRef<THREE.Group>(null);
    const { nodes, materials } = useGLTF('/3dstuff/iphone.glb') as any;

    // If the GLB doesn't load correctly, it could be due to file location
    // Alternative path
    if (!nodes || !materials) {
        const alt = useGLTF('/3dstuff/i_phone_14_pro_copy.glb') as any;
        if (alt?.nodes) {
            Object.assign(nodes || {}, alt.nodes);
            Object.assign(materials || {}, alt.materials);
        }
    }

    // Enhanced materials
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: isDarkTheme ? '#222222' : '#e6e6e6',
        metalness: 0.8,
        roughness: 0.1,
        envMapIntensity: 1
    });

    const frameMaterial = new THREE.MeshStandardMaterial({
        color: isDarkTheme ? '#333333' : '#d0d0d0',
        metalness: 0.9,
        roughness: 0.1,
        envMapIntensity: 1
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: isDarkTheme ? '#000000' : '#ffffff',
        metalness: 0.2,
        roughness: 0,
        transmission: 0.9,
        transparent: true,
        opacity: 0.8,
        envMapIntensity: 1
    });

    useFrame((state) => {
        if (phoneMesh.current) {
            phoneMesh.current.rotation.y = Math.sin(state.clock.elapsedTime / 5) * 0.1;
            phoneMesh.current.position.y = Math.sin(state.clock.elapsedTime / 3) * 0.05;
        }
    });

    return (
        <group {...props} ref={phoneMesh}>
            {nodes ? (
                <>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={6}>
                        {/* Phone body */}
                        <mesh
                            geometry={nodes.Phone_Body?.geometry}
                            material={bodyMaterial}
                            receiveShadow
                            castShadow
                        />

                        {/* Frame */}
                        <mesh
                            geometry={nodes.Phone_Frame?.geometry}
                            material={frameMaterial}
                            receiveShadow
                            castShadow
                        />

                        {/* Screen Glass */}
                        <mesh
                            geometry={nodes.Phone_Glass?.geometry}
                            material={glassMaterial}
                            receiveShadow
                        />

                        {/* Screen content - using Html for reactive content */}
                        <group position={[0, 0, 0.03]}>
                            <Html
                                transform
                                distanceFactor={5}
                                position={[0, 0, 0.01]}
                                rotation={[Math.PI / 2, 0, 0]}
                                style={{
                                    width: '120px',
                                    height: '250px',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                }}
                            >
                                <SuccessTrackerContent />
                            </Html>
                        </group>
                    </group>
                </>
            ) : (
                // Fallback if model fails to load
                <mesh>
                    <boxGeometry args={[1, 2, 0.1]} />
                    <meshStandardMaterial color={isDarkTheme ? "#333" : "#eee"} />
                    <Html
                        transform
                        distanceFactor={1}
                        position={[0, 0, 0.06]}
                        style={{
                            width: '120px',
                            height: '250px',
                            overflow: 'hidden',
                            borderRadius: '12px',
                        }}
                    >
                        <SuccessTrackerContent />
                    </Html>
                </mesh>
            )}
        </group>
    );
}

export default function PhoneDisplay() {
    return (
        <div className="absolute top-20 right-[5%] w-[360px] h-[640px] z-20 hidden lg:block">
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
                <ambientLight intensity={0.8} />
                <spotLight
                    position={[5, 10, 7.5]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={2048}
                />
                <directionalLight position={[-5, 5, -2]} intensity={0.5} />
                <PresentationControls
                    global
                    rotation={[0, 0, 0]}
                    polar={[-0.2, 0.2]}
                    azimuth={[-0.5, 0.5]}
                    snap={true}
                    speed={2}
                    zoom={1}
                >
                    <Phone rotation={[0.4, -0.3, 0]} position={[0, 0, 0]} />
                </PresentationControls>
                <ContactShadows
                    position={[0, -1.5, 0]}
                    opacity={0.6}
                    scale={10}
                    blur={2.5}
                    far={4}
                />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
} 
import { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

interface ProgressiveLoadingOptions {
    mobileLodPath?: string;
    desktopLodPath: string;
    onProgress?: (progress: number) => void;
    onError?: (error: Error) => void;
}

export function useProgressiveLoading({
    mobileLodPath,
    desktopLodPath,
    onProgress,
    onError,
}: ProgressiveLoadingOptions) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [currentLodPath, setCurrentLodPath] = useState<string>();
    const { viewport } = useThree();

    // Determine which LOD to use based on device capabilities
    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
            viewport.width < 768;

        setCurrentLodPath(isMobile && mobileLodPath ? mobileLodPath : desktopLodPath);
    }, [viewport.width, mobileLodPath, desktopLodPath]);

    // Load the model with progress tracking
    const model = useGLTF(currentLodPath || '', false, true, (xhr) => {
        const progress = (xhr.loaded / xhr.total) * 100;
        setLoadingProgress(progress);
        onProgress?.(progress);
    });

    // Handle loading errors
    useEffect(() => {
        if (model.scene) {
            // Apply optimizations
            model.scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    // Enable frustum culling
                    child.frustumCulled = true;

                    // Optimize geometries
                    if (child.geometry) {
                        child.geometry.computeBoundingSphere();
                        child.geometry.computeBoundingBox();
                    }

                    // Optimize materials
                    if (child.material) {
                        // @ts-ignore - material might be an array
                        const materials = Array.isArray(child.material) ? child.material : [child.material];
                        materials.forEach((material) => {
                            if (material instanceof THREE.MeshStandardMaterial) {
                                material.roughness = Math.min(material.roughness, 0.9);
                                material.metalness = Math.min(material.metalness, 0.9);
                            }
                        });
                    }
                }
            });
        }
    }, [model.scene]);

    return {
        model,
        progress: loadingProgress,
        isLoading: loadingProgress < 100,
    };
} 
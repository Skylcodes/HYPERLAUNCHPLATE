import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Stats from 'stats.js';

interface PerformanceMetrics {
    fps: number;
    memory: {
        geometries: number;
        textures: number;
    };
    render: {
        calls: number;
        triangles: number;
        points: number;
        lines: number;
    };
}

export const useThreePerformance = (
    showStats = false,
    warningThresholds = {
        minFps: 30,
        maxTriangles: 100000,
        maxDrawCalls: 1000,
    }
) => {
    const { gl } = useThree();
    const statsRef = useRef<Stats>();
    const metricsRef = useRef<PerformanceMetrics>({
        fps: 60,
        memory: {
            geometries: 0,
            textures: 0,
        },
        render: {
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0,
        },
    });

    useEffect(() => {
        if (showStats) {
            statsRef.current = new Stats();
            statsRef.current.showPanel(0);
            document.body.appendChild(statsRef.current.dom);

            return () => {
                document.body.removeChild(statsRef.current!.dom);
            };
        }
    }, [showStats]);

    useEffect(() => {
        const renderer = gl as THREE.WebGLRenderer;
        const originalRender = renderer.render;

        renderer.render = function (...args) {
            const result = originalRender.apply(this, args);
            const info = renderer.info;

            metricsRef.current = {
                fps: statsRef.current?.fps ?? 60,
                memory: {
                    geometries: info.memory.geometries,
                    textures: info.memory.textures,
                },
                render: {
                    calls: info.render.calls,
                    triangles: info.render.triangles,
                    points: info.render.points,
                    lines: info.render.lines,
                },
            };

            // Performance warnings
            if (metricsRef.current.fps < warningThresholds.minFps) {
                console.warn(`Low FPS detected: ${metricsRef.current.fps}`);
            }
            if (metricsRef.current.render.triangles > warningThresholds.maxTriangles) {
                console.warn(`High triangle count: ${metricsRef.current.render.triangles}`);
            }
            if (metricsRef.current.render.calls > warningThresholds.maxDrawCalls) {
                console.warn(`High draw call count: ${metricsRef.current.render.calls}`);
            }

            return result;
        };

        return () => {
            renderer.render = originalRender;
        };
    }, [gl, warningThresholds]);

    return metricsRef.current;
}; 
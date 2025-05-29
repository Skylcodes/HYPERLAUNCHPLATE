'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; // Removed useAnimation

// Tech logos
const technologies = [
  {
    name: 'Next.js',
    logo: '/official-tech-logos/nextjs.png',
    position: { x: 25, y: 50 },
    active: true,
  },
  {
    name: 'React',
    logo: '/tech/react.svg',
    position: { x: 75, y: 50 },
    active: true,
  },
  {
    name: 'TypeScript',
    logo: '/official-tech-logos/typescript.svg',
    position: { x: 25, y: 20 },
    active: true,
  },
  {
    name: 'Tailwind CSS',
    logo: '/official-tech-logos/tailwind.svg',
    position: { x: 75, y: 20 },
    active: true,
  },
  {
    name: 'Prisma',
    logo: '/official-tech-logos/prisma.svg',
    position: { x: 25, y: 80 },
    active: true,
  },
  {
    name: 'Stripe',
    logo: '/official-tech-logos/stripe.svg',
    position: { x: 75, y: 80 },
    active: true,
  },
  {
    name: 'Auth.js',
    logo: '/official-tech-logos/auth.png',
    position: { x: 50, y: 10 },
    active: true,
  },
  {
    name: 'Framer Motion',
    logo: '/official-tech-logos/framer-motion.svg',
    position: { x: 50, y: 85 },
    active: true,
  },
  {
    name: 'Vercel',
    logo: '/official-tech-logos/vercel.png',
    position: { x: 50, y: 50 },
    active: true,
  },
];

interface LineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  active: boolean;
}

// Simplified line component
const ConnectionLine: React.FC<LineProps> = ({ start, end }) => {
  const path = `M${start.x},${start.y} L${end.x},${end.y}`;
  
  return (
    <path
      d={path}
      stroke="url(#activeGradient)"
      strokeWidth={1.5}
      strokeLinecap="round"
      fill="none"
      opacity="0.3"
      className="transition-opacity duration-300 hover:opacity-70"
    />
  );
};

export function TechStackVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Set initial dimensions and handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate node positions based on container dimensions
  const getNodePosition = (position: { x: number; y: number }) => {
    return {
      x: (position.x * dimensions.width) / 100,
      y: (position.y * dimensions.height) / 100,
    };
  };

  // Updated symmetrical connections
  const connections = [
    // Core framework connections
    { from: 'TypeScript', to: 'Next.js' },     // Added TypeScript to Next.js
    { from: 'Next.js', to: 'Prisma' },         // Added Next.js to Prisma
    { from: 'Tailwind CSS', to: 'React' },     // Added Tailwind to React
    { from: 'React', to: 'Stripe' },           // Added React to Stripe

    // Existing connections
    { from: 'TypeScript', to: 'Tailwind CSS' },
    { from: 'Tailwind CSS', to: 'Stripe' },
    { from: 'Stripe', to: 'Prisma' },
    { from: 'Prisma', to: 'TypeScript' },

    // Center connections (Vercel)
    { from: 'TypeScript', to: 'Vercel' },
    { from: 'Tailwind CSS', to: 'Vercel' },
    { from: 'Prisma', to: 'Vercel' },
    { from: 'Stripe', to: 'Vercel' },
    { from: 'Auth.js', to: 'Vercel' },
    { from: 'Framer Motion', to: 'Vercel' },
    { from: 'Next.js', to: 'Vercel' },
    { from: 'React', to: 'Vercel' },

    // Additional connections
    { from: 'Auth.js', to: 'TypeScript' },
    { from: 'Auth.js', to: 'Tailwind CSS' },
    { from: 'Framer Motion', to: 'Prisma' },
    { from: 'Framer Motion', to: 'Stripe' }
  ];

  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Explanation block - now centered above */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="space-y-6 text-center">
            {/* Small box header */}
            <div className="inline-block">
              <div className="bg-[#1e293b]/70 backdrop-blur-sm border border-[#334155]/50 rounded-full px-4 py-1.5 text-sm text-blue-400">
                Production-Ready Tech Stack
              </div>
            </div>

            {/* Title with galaxy gradient for last word */}
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-white">Modern Infrastructure to </span>
              <span className="bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#c084fc] bg-clip-text text-transparent">
                Ship Instantly
              </span>
            </h2>

            <p className="text-gray-400 text-lg">
              Launch faster with our production-ready tech stack, trusted by developers to scale from MVP to millions of users without breaking a sweat.
            </p>
          </div>
        </div>

        {/* Tech stack visualization - slightly larger size */}
        <div ref={containerRef} className="relative w-full max-w-[56rem] mx-auto aspect-[16/9] bg-slate-950/60 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-900">
          {/* Background grid with subtle pulse animation */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-50">
            {Array.from({ length: 13 }).map((_, i) => (
              <div 
                key={`v-${i}`} 
                className="absolute left-0 right-0 h-px bg-slate-900" 
                style={{ top: `${(i * 100) / 12}%` }} 
              />
            ))}
            {Array.from({ length: 13 }).map((_, i) => (
              <div 
                key={`h-${i}`} 
                className="absolute top-0 bottom-0 w-px bg-slate-900" 
                style={{ left: `${(i * 100) / 12}%` }} 
              />
            ))}
          </div>

          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent opacity-70"></div>

          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connection lines */}
            {connections.map((connection, index) => {
              const fromNode = technologies.find(t => t.name === connection.from);
              const toNode = technologies.find(t => t.name === connection.to);

              if (!fromNode || !toNode) return null;

              const start = getNodePosition(fromNode.position);
              const end = getNodePosition(toNode.position);

              return (
                <ConnectionLine
                  key={`line-${index}`}
                  start={start}
                  end={end}
                  active={true}
                />
              );
            })}
          </svg>

          {/* Tech nodes with hover effect */}
          {technologies.map((tech, index) => {
            const position = getNodePosition(tech.position);
            const isHovered = hoveredTech === tech.name;

            return (
              <div
                key={tech.name}
                className="absolute rounded-full overflow-visible backdrop-blur-[2px] border bg-white/[0.02] border-blue-500/20"
                style={{
                  left: `${position.x - 28}px`,
                  top: `${position.y - 28}px`,
                  width: '56px',
                  height: '56px',
                  zIndex: isHovered ? 40 : 1
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div 
                  className="flex items-center justify-center w-full h-full p-3 relative rounded-full transition-all duration-300"
                  style={{
                    boxShadow: isHovered ? 'inset 0 0 15px rgba(59, 130, 246, 0.3)' : 'none'
                  }}
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={38}
                    height={38}
                    className={`transition-all duration-300 ${tech.name === 'Prisma'
                      ? 'opacity-100 brightness-[2] contrast-[1.2] filter'
                      : 'opacity-100'
                      }`}
                  />

                  {/* Technology name tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 40 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-md whitespace-nowrap shadow-lg border border-slate-700/50"
                        style={{ zIndex: 50 }}
                      >
                        {tech.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStackVisual; 
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, Star, ChevronUp } from 'lucide-react';
import { useAdaptiveUI } from '@/hooks/use-adaptive-ui';

import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/animations/ScrollReveal';
import GradientText from '@/components/ui/animations/GradientText';
import { cn } from '@/lib/utils';

// Define a type for the icon map keys
type IconType = 'DollarSign' | 'TrendingUp' | 'Users' | 'Star';

const iconMap: Record<IconType, React.ElementType> = {
  DollarSign,
  TrendingUp,
  Users,
  Star
};

// Define interface for notification items
interface Notification {
  iconType: IconType;
  title: string;
  description: string;
  time: string;
  color: string;
  highlight?: boolean;
}

const notifications: Notification[] = [
  {
    iconType: 'DollarSign',
    title: "Major Revenue Milestone",
    description: "$150K MRR achieved in 3 months",
    time: "2m ago",
    color: "text-green-400",
    highlight: true
  },
  {
    iconType: 'TrendingUp',
    title: "Enterprise Deal Closed",
    description: "$500K annual contract signed",
    time: "15m ago",
    color: "text-blue-400",
    highlight: true
  },
  {
    iconType: 'Users',
    title: "Rapid User Growth",
    description: "10,000 new users this month",
    time: "1h ago",
    color: "text-purple-400",
    highlight: true
  },
  {
    iconType: 'Star',
    title: "Success Story",
    description: "Client reached $1M ARR milestone",
    time: "2h ago",
    color: "text-yellow-400",
    highlight: true
  }
];

function NotificationFeed() {
  const [activeNotifications, setActiveNotifications] = useState(notifications);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('notificationState');
      if (saved) {
        setActiveNotifications(JSON.parse(saved));
      } else {
        localStorage.setItem('notificationState', JSON.stringify(notifications));
      }
    } catch (error) {
      console.error('Error loading notifications:', error);
      setActiveNotifications(notifications);
    } finally {
      // Artificial delay for smooth transition
      setTimeout(() => setIsLoading(false), 800);
    }
  }, []);

  // Save notifications whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('notificationState', JSON.stringify(activeNotifications));
    } catch (error) {
      console.error('Error saving notifications:', error);
    }
  }, [activeNotifications]);

  const renderSkeleton = () => (
    <div className="flex-1 divide-y divide-gray-200 dark:divide-white/[0.08]">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
            <div className="flex-1">
              <div className="h-5 w-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded animate-pulse mb-2" />
              <div className="h-4 w-48 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Use our adaptive UI hook to respond to screen size changes
  const { isMobile, isTablet, isDesktop, width } = useAdaptiveUI();
  
  // Calculate position and size based on screen width
  const getPositionStyles = () => {
    // Only show on desktop and larger screens
    if (width < 1024) return { display: 'none' };
    
    // For medium-sized screens, adjust position to prevent overlap
    if (width >= 1024 && width < 1280) {
      return {
        top: '20px',
        right: '20px',
        width: '320px',
        height: '580px'
      };
    }
    
    // For large screens, use original positioning
    return {
      top: '20px',
      right: '5%',
      width: '360px',
      height: '640px'
    };
  };
  
  const positionStyles = getPositionStyles();
  
  return (
    <div 
      className="absolute rounded-[32px] z-20 hidden lg:block transition-all duration-300"
      style={positionStyles}
    >
      {/* Premium border effect container */}
      <div className="absolute inset-0 rounded-[32px] p-[2px] overflow-visible">
        {/* Animated gradient border */}
        <div
          className="absolute -inset-[0.5px] rounded-[32px] bg-gradient-to-r from-[#4B7BF5] via-[#9181F2] to-[#4B7BF5] dark:opacity-100 opacity-80"
          style={{
            backgroundSize: '200% 100%',
            animation: 'gradientFlow 4s linear infinite'
          }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-[1px] rounded-[32px] blur-md bg-gradient-to-r from-[#4B7BF5] via-[#9181F2] to-[#4B7BF5] dark:opacity-60 opacity-40" />
        </div>

        {/* Main content container */}
        <div className="relative h-full w-full rounded-[32px] bg-white dark:bg-[#0A0A1B] overflow-hidden shadow-2xl">
          {/* Content */}
          <motion.div
            className="relative h-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <motion.div
              className="p-6 border-b border-gray-200 dark:border-white/[0.08]"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                    Success Tracker
                  </h3>
                  <p className="text-sm text-gray-900 dark:text-gray-500 mt-1">Real-time founder profits</p>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-[#1C1C2E] px-3 py-1 rounded-full border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
                  <span className="text-xs font-medium text-green-700 dark:text-green-500">Live Feed</span>
                </div>
              </div>
            </motion.div>

            {/* Notifications */}
            {isLoading ? renderSkeleton() : (
              <div className="flex-1 divide-y divide-gray-200 dark:divide-white/[0.08]">
                {activeNotifications.map((notification, index) => {
                  const IconComponent = iconMap[notification.iconType] as React.ElementType;
                  return (
                    <motion.div
                      key={index}
                      className={`relative p-6 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all duration-300 cursor-pointer group ${notification.highlight ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/10 dark:to-purple-500/10' : ''
                        }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Enhanced icon container with premium effect */}
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: [0, -10, 10, -10, 0] }}
                          className={`relative p-3 rounded-xl bg-gradient-to-br from-gray-100/80 to-gray-50/80 dark:from-[#1C1C2E]/80 dark:to-[#1C1C2E]/60 backdrop-blur-sm ${notification.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          {/* Animated gradient border */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              backgroundSize: '200% 100%',
                              animation: 'gradientFlow 4s linear infinite'
                            }}
                          />
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <IconComponent className="w-5 h-5 relative z-10" />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`text-base font-medium truncate transition-colors duration-300 ${notification.highlight
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'
                              : 'text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400'}`}>
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-500 ml-2">
                              {notification.time}
                            </p>
                          </div>
                          <p className="text-sm text-gray-900 dark:text-gray-500 mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300">
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
              className="p-6 border-t border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#0A0A1B]"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">24k</p>
                  <p className="text-xs text-gray-900 dark:text-gray-500 mt-1">Users</p>
                  <div className="mt-2 text-xs text-green-700 dark:text-green-400 flex items-center justify-center font-medium">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +28%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">$89k</p>
                  <p className="text-xs text-gray-900 dark:text-gray-500 mt-1">MRR</p>
                  <div className="mt-2 text-xs text-green-700 dark:text-green-400 flex items-center justify-center font-medium">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +64%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">98%</p>
                  <p className="text-xs text-gray-900 dark:text-gray-500 mt-1">Growth</p>
                  <div className="mt-2 text-xs text-green-700 dark:text-green-400 flex items-center justify-center font-medium">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +124%
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export function Hero(): React.JSX.Element {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use our adaptive UI hook for the main section as well
  const { width } = useAdaptiveUI();
  
  // Calculate the appropriate transform and padding based on screen width
  const getMainContentStyles = () => {
    // For mobile screens, center the content without any transform
    if (width < 640) {
      return {
        transform: 'none',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        maxWidth: '100%'
      };
    }
    
    // For small to medium screens, use a small transform
    if (width >= 640 && width < 1024) {
      return {
        transform: 'translateX(-3%)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        maxWidth: '100%'
      };
    }
    
    // For large screens with notification visible, adjust transform to prevent overlap
    if (width >= 1024 && width < 1280) {
      return {
        transform: 'translateX(-10%)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        maxWidth: '85%'
      };
    }
    
    // For extra large screens, use original transform
    return {
      transform: 'translateX(-7%)',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      maxWidth: '100%'
    };
  };
  
  const mainContentStyles = getMainContentStyles();
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full pb-20 pt-20 px-4">
      {/* Success tracker notification feed */}
      <NotificationFeed />

      {/* Main content - positioned based on reference UI with adaptive positioning */}
      <div 
        className="relative z-10 container mx-auto transition-all duration-300"
        style={mainContentStyles}
      >
        <ScrollReveal>
          <h1 className="text-center font-bold tracking-tight max-w-[95%] mx-auto">
            <GradientText className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.2rem] [text-shadow:_0_1px_3px_rgb(0_0_0_/_10%)] dark:[text-shadow:_0_1px_3px_rgb(255_255_255_/_10%)]">
              Launch Your SaaS
            </GradientText>
            <div className="mt-4">
              <GradientText
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.2rem] [text-shadow:_0_1px_3px_rgb(0_0_0_/_10%)] dark:[text-shadow:_0_1px_3px_rgb(255_255_255_/_10%)]"
                from="#4B7BF5"
                to="#9181F2"
                animate={true}
              >
                Generate Revenue
              </GradientText>
            </div>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.div
            className="mt-8 text-center text-2xl sm:text-3xl text-foreground max-w-5xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <span className="inline-block">
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 font-semibold relative group"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 dark:from-blue-500/30 dark:via-blue-400/50 dark:to-purple-500/30 blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    animation: "pulseGlow 3s ease-in-out infinite"
                  }}
                ></span>
                <span className="relative inline-block text-white">
                  Turn traffic into revenue
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-md opacity-0"
                    style={{
                      animation: "shineEffect 3s ease-in-out infinite",
                      backgroundSize: "200% 100%"
                    }}
                  />
                </span>
              </motion.span>{" "}
              <span>with a boilerplate{" "}</span>
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 font-semibold relative group"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 dark:from-blue-500/30 dark:via-blue-400/50 dark:to-purple-500/30 blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    animation: "pulseGlow 3s ease-in-out infinite alternate",
                    animationDelay: "0.5s"
                  }}
                ></span>
                <span className="relative inline-block text-white">
                  engineered for conversions
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-md opacity-0"
                    style={{
                      animation: "shineEffect 3s ease-in-out infinite",
                      animationDelay: "0.5s",
                      backgroundSize: "200% 100%"
                    }}
                  />
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                .{" "}
              </motion.span>
            </span>
            <span className="inline-block mt-1">
              <span>Scale effortlessly with a boilerplate that drives revenue and{" "}</span>
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-semibold relative group"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    animation: "pulseGlow 3s ease-in-out infinite alternate",
                    animationDelay: "1s"
                  }}
                ></span>
                <span className="relative inline-block text-white">
                  outperforms expensive alternatives
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-md opacity-0"
                    style={{
                      animation: "shineEffect 3s ease-in-out infinite",
                      animationDelay: "1s",
                      backgroundSize: "200% 100%"
                    }}
                  />
                </span>
              </motion.span>
              <span>.</span>
            </span>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5 items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-transparent text-white rounded-full px-8 py-6 text-lg w-full sm:w-auto group"
              >
                {/* Galaxy gradient background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#4B7BF5] via-[#9181F2] to-[#4B7BF5] opacity-100 group-hover:opacity-90 transition-all duration-300"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'gradientMove 8s linear infinite'
                  }}
                />
                {/* Button text with shine effect */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Now
                  <div className="w-px h-4 bg-white/20" />
                  <span className="text-sm opacity-80">Free Trial</span>
                </span>
              </Button>
            </motion.div>

            <Button
              size="lg"
              variant="outline"
              className="relative overflow-hidden bg-transparent backdrop-blur-sm border-white/10 text-white hover:text-white hover:bg-white/5 rounded-full px-8 py-6 text-lg w-full sm:w-auto"
            >
              <span className="relative z-10">
                Explore Features
              </span>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-7 right-7 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: showScrollButton ? 1 : 0,
          scale: showScrollButton ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative p-3.5 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4B7BF5] to-[#9181F2] opacity-90 group-hover:opacity-100 transition-opacity" />

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4B7BF5] to-[#9181F2] blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

          {/* Icon */}
          <ChevronUp className="w-5 h-5 text-white relative z-10" />
        </motion.button>
      </motion.div>

      {/* Add animations keyframes for the stars, gradient effects, and new highlight effects */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes flowingGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes pulseGlow {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
        
        @keyframes shineEffect {
          0% { opacity: 0; background-position: -100% 0; }
          20% { opacity: 0.5; }
          35% { opacity: 0.8; }
          50% { opacity: 0.5; }
          70% { opacity: 0; background-position: 200% 0; }
          100% { opacity: 0; background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
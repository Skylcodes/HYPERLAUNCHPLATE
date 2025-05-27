'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { Star, MessageSquareText } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface Review {
    id: number;
    avatar: string;
    name: string;
    title: string;
    company: string;
    rating: number;
    text: string | React.ReactNode;
}

const placeholderReviews: Review[][] = [
    [
        {
            id: 1,
            avatar: '/avatars/placeholder-1.png',
            name: 'Alex Johnson',
            title: 'Founder & CEO',
            company: 'Innovatech Solutions',
            rating: 5,
            text: <>Our growth trajectory <strong className="text-blue-400">skyrocketed</strong> after integrating this boilerplate. The conversion-focused UI is a game-changer!</>,
        },
        {
            id: 2,
            avatar: '/avatars/placeholder-2.png',
            name: 'Samantha Lee',
            title: 'VP of Marketing',
            company: 'Growth Wizards Inc.',
            rating: 5,
            text: <>The time saved on initial setup allowed us to focus on <strong className="text-purple-400">core business logic</strong> immediately. Highly recommended!</>,
        },
        {
            id: 3,
            avatar: '/avatars/placeholder-3.png',
            name: 'Michael Chen',
            title: 'Lead Developer',
            company: 'CodeCrafters Ltd.',
            rating: 4,
            text: 'As a developer, I appreciate the clean code and scalability. It made customization a breeze and our team loves it.',
        },
    ],
    [
        {
            id: 4,
            avatar: '/avatars/placeholder-4.png',
            name: 'Jessica Miller',
            title: 'Product Manager',
            company: 'NextGen SaaS',
            rating: 5,
            text: <>From idea to launch in <strong className="text-blue-400">under 3 weeks</strong>! This boilerplate is the real deal for rapid deployment and revenue generation.</>,
        },
        {
            id: 5,
            avatar: '/avatars/placeholder-5.png',
            name: 'David Rodriguez',
            title: 'CTO',
            company: 'ScaleUp Ventures',
            rating: 5,
            text: 'The pre-built authentication and billing saved us months of development time. Robust and incredibly well-structured.',
        },
        {
            id: 6,
            avatar: '/avatars/placeholder-6.png',
            name: 'Emily White',
            title: 'UX Lead',
            company: 'UserFirst Design',
            rating: 5,
            text: <>The UI components are not only beautiful but also <strong className="text-purple-400">highly intuitive</strong>, leading to better user engagement for our clients.</>,
        },
    ],
    [
        {
            id: 7,
            avatar: '/avatars/placeholder-7.png',
            name: 'Chris Brown',
            title: 'Indie Hacker',
            company: 'SoloDev Co.',
            rating: 5,
            text: 'Perfect for solo founders. I launched my micro-SaaS and hit <strong className="text-blue-400">$5k MRR in 2 months</strong>. Incredible value!',
        },
        {
            id: 8,
            avatar: '/avatars/placeholder-8.png',
            name: 'Laura Davis',
            title: 'Startup Advisor',
            company: 'Accelerate Hub',
            rating: 4,
            text: "I recommend this to all my early-stage startups. It's a solid foundation that scales as they grow their user base.",
        },
        {
            id: 9,
            avatar: '/avatars/placeholder-9.png',
            name: 'Kevin Wilson',
            title: 'Full-Stack Engineer',
            company: 'Tech Solutions LLC',
            rating: 5,
            text: <>The attention to detail in the <strong className="text-purple-400">security and performance aspects</strong> is truly impressive for a boilerplate.</>,
        },
    ],
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    return (
        <motion.div
            className={cn(
                "bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-6 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300"
            )}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            {/* Centered Avatar */}
            <div className="flex justify-center mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                    <Image src={review.avatar} alt={review.name} layout="fill" objectFit="cover" />
                </div>
            </div>

            {/* Name and Stars centered together */}
            <div className="flex flex-col items-center mb-4">
                <div className="flex items-center gap-2">
                    <h4 className="text-md font-semibold text-white">{review.name}</h4>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "h-4 w-4",
                                    i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-300 leading-relaxed">{review.text}</p>
        </motion.div>
    );
};

const ReviewColumn: React.FC<{ reviews: Review[]; duration?: number; className?: string }> = ({ reviews, duration = 60, className }) => {
    return (
        <motion.div
            className={cn("flex flex-col", className)}
            animate={{ y: ['0%', '-100%'] }}
            transition={{
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
            }}
        >
            {[...reviews, ...reviews].map((review, index) => (
                <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
        </motion.div>
    );
};

export function Reviews(): React.JSX.Element {
    return (
        <section className="w-full py-24 relative bg-gradient-to-b from-gray-950 via-gray-900/40 to-gray-950 overflow-hidden">
            {/* Background Glows - Standardized */}
            <div className="absolute -top-1/4 left-0 w-1/2 h-full bg-blue-600/5 blur-[150px] rounded-full opacity-50 animate-pulse-slow-left" />
            <div className="absolute -bottom-1/4 right-0 w-1/2 h-full bg-purple-600/5 blur-[150px] rounded-full opacity-50 animate-pulse-slow-right" />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge
                        variant="outline"
                        className="mb-6 bg-black/30 border-blue-500/30 text-blue-400 backdrop-blur-md text-sm px-4 py-1.5 rounded-full shadow-lg"
                    >
                        <MessageSquareText className="h-4 w-4 mr-2" />
                        Real Founders, Real Revenue
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        <span className="text-white">Hear From Our</span>{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Success Stories
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                        Our boilerplate isn't just code – it's a launchpad for profitable SaaS businesses. See what developers and founders are achieving.
                    </p>
                </motion.div>

                {/* Boxed container for reviews */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative w-full max-w-7xl mx-auto rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-2xl"
                >
                    <div className="relative h-[600px] md:h-[750px] overflow-hidden mask-image-b">
                        <div className="absolute inset-0 flex justify-center gap-6 md:gap-8 perspective">
                            <ReviewColumn reviews={placeholderReviews[0]} duration={70} className="w-[300px] md:w-[350px] review-column" />
                            <ReviewColumn reviews={placeholderReviews[1]} duration={90} className="w-[300px] md:w-[350px] mt-[-150px] review-column" />
                            <ReviewColumn reviews={placeholderReviews[2]} duration={80} className="w-[300px] md:w-[350px] hidden lg:flex review-column" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CSS for animations and layout */}
            <style jsx global>{`
        .mask-image-b {
          mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
        }
        .perspective {
          perspective: 1000px;
        }
        .review-column {
          transform-style: preserve-3d;
        }
        @keyframes pulse-slow-left {
          0%, 100% { transform: translate(-10%, -10%) scale(1); opacity: 0.4; }
          50% { transform: translate(10%, 10%) scale(1.1); opacity: 0.6; }
        }
        @keyframes pulse-slow-right {
          0%, 100% { transform: translate(10%, 10%) scale(1); opacity: 0.4; }
          50% { transform: translate(-10%, -10%) scale(1.1); opacity: 0.6; }
        }
        .animate-pulse-slow-left {
          animation: pulse-slow-left 15s infinite ease-in-out;
        }
        .animate-pulse-slow-right {
          animation: pulse-slow-right 15s infinite ease-in-out;
        }
      `}</style>
        </section>
    );
} 
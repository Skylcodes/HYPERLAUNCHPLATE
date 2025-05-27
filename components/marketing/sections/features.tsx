'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from 'next-themes';
import {
    BarChart3Icon,
    ShieldCheckIcon,
    UsersIcon,
    CreditCardIcon,
    SmartphoneIcon,
    LucideIcon,
    ServerIcon,
    DatabaseIcon,
    GlobeIcon,
    MailIcon,
    SunMoonIcon,
    LayoutIcon,
    SearchIcon,
    CheckCircleIcon,
    CreditCard,
    BarChart4,
    Users2,
    Mail,
    Smartphone,
    Moon,
    Globe2,
    ActivityIcon,
    UserCheckIcon,
    DollarSignIcon,
    ArrowRightIcon,
    MapPinIcon,
    SlidersHorizontalIcon,
} from 'lucide-react';

const features = [
    {
        title: 'Analytics Dashboard',
        description: 'Get insights into your business with our comprehensive analytics dashboard.',
        icon: BarChart4,
        preview: () => <div>Analytics Preview</div>,
    },
    // Add more features as needed
];

export function Features() {
    const { theme } = useTheme();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-12 md:py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Everything you need to build and grow your business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

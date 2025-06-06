'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
    MenuIcon,
    BookOpenIcon,
    HeartIcon,
    MessageCircleIcon,
    ShareIcon,
} from 'lucide-react';

// Device frame component for feature previews
const DeviceFrame = ({ children, type = 'phone' }: { children: React.ReactNode; type?: 'phone' | 'browser' }) => {
    return (
        <div className={`relative ${type === 'phone' ? 'w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] scale-[0.85] sm:scale-[0.9] md:scale-100 lg:scale-[1.15]' : 'w-full max-w-[90%] sm:max-w-[95%] md:max-w-[640px] scale-90 sm:scale-95 md:scale-100 lg:scale-105'} origin-center`}>
            {type === 'phone' ? (
                <div className="relative rounded-[40px] border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-t-[24px]">
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-700 rounded-full" />
                    </div>
                    <div className="pt-6 pb-2 overflow-hidden rounded-b-[32px]">
                        {children}
                    </div>
                </div>
            ) : (
                <div className="rounded-lg border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
                    <div className="h-8 bg-slate-800 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 h-5 bg-slate-700 rounded text-xs text-slate-400 flex items-center px-2">
                            https://yourapp.com/dashboard
                        </div>
                    </div>
                    <div className="p-4 bg-slate-950/50 min-h-[200px]">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

// Feature-specific preview components with realistic data
const SEOPreview = () => (
    <DeviceFrame type="browser">
        <div className="space-y-3 sm:space-y-4 scale-90 sm:scale-95 md:scale-100 origin-top">
            <div className="flex items-center gap-3">
                <SearchIcon className="w-5 h-5 text-blue-400" />
                <div className="flex-1 h-8 bg-slate-800 rounded flex items-center px-3">
                    <span className="text-slate-400 text-sm">Best SaaS Boilerplate 2024</span>
                </div>
            </div>
            <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-1">
                        <div className="h-4 bg-blue-500/30 rounded w-1/3" />
                        <div className="h-3 bg-slate-800/50 rounded w-full" />
                        <div className="h-3 bg-slate-800/50 rounded w-2/3" />
                        <div className="flex gap-2 pt-1">
                            <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                                Optimized
                            </span>
                            <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                                Fast Load
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </DeviceFrame>
);

const AuthPreview = () => (
    <DeviceFrame type="phone">
        <div className="space-y-4 p-4 bg-slate-950/70">
            <div className="text-center mb-4">
                <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-2">
                    <UserCheckIcon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-medium text-white">Welcome Back!</p>
            </div>
            <div className="space-y-3">
                <div className="h-10 bg-slate-800 rounded-lg w-full flex items-center px-3">
                    <span className="text-slate-500 text-sm">user@example.com</span>
                </div>
                <div className="h-10 bg-slate-800 rounded-lg w-full flex items-center px-3">
                    <span className="text-slate-500 text-sm">••••••••</span>
                </div>
            </div>
            <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full h-10 rounded-lg bg-blue-600 text-white font-medium flex items-center justify-center gap-2"
            >
                Login <ArrowRightIcon className="w-4 h-4" />
            </motion.button>
            <div className="text-center text-xs text-slate-500">Or continue with</div>
            <div className="flex gap-3 justify-center">
                {['G', 'Git', 'Twt'].map((provider) => (
                    <div key={provider} className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg text-slate-400 font-bold">
                        {provider}
                    </div>
                ))}
            </div>
        </div>
    </DeviceFrame>
);

const PaymentPreview = () => (
    <DeviceFrame type="browser">
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-white">Pro Plan Subscription</h4>
                    <p className="text-sm text-slate-400">Billed monthly</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-white">$49.00</p>
                    <p className="text-xs text-slate-500">USD</p>
                </div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg space-y-3">
                <div className="h-10 bg-slate-700 rounded w-full flex items-center px-3">
                    <span className="text-slate-400 text-sm">**** **** **** 4242</span>
                    <CreditCardIcon className="w-5 h-5 ml-auto text-blue-400" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="h-10 bg-slate-700 rounded flex items-center px-3">
                        <span className="text-slate-400 text-sm">MM / YY</span>
                    </div>
                    <div className="h-10 bg-slate-700 rounded flex items-center px-3">
                        <span className="text-slate-400 text-sm">CVC</span>
                    </div>
                </div>
            </div>
            <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
            >
                Confirm Payment <DollarSignIcon className="w-5 h-5" />
            </motion.button>
        </div>
    </DeviceFrame>
);

const DatabasePreview = () => (
    <DeviceFrame type="browser">
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <DatabaseIcon className="w-5 h-5 text-green-400" />
                <div className="flex-1 h-8 bg-slate-800 rounded font-mono text-xs text-slate-400 flex items-center px-3">
                    SELECT id, name, email FROM users LIMIT 5;
                </div>
            </div>
            <div className="rounded-lg border border-slate-800 overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-3 bg-slate-800/50">
                    {['ID', 'Name', 'Email'].map((header) => (
                        <div key={header} className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                            {header}
                        </div>
                    ))}
                </div>
                <div className="divide-y divide-slate-800 text-sm text-slate-400">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="grid grid-cols-3 gap-4 p-3 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="truncate">{`usr_${Math.random().toString(36).substring(2, 8)}`}</div>
                            <div className="truncate">{['Alice', 'Bob', 'Charlie', 'Diana'][i]} Smith</div>
                            <div className="truncate">{`${['alice', 'bob', 'charlie', 'diana'][i]}@example.com`}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </DeviceFrame>
);

const AnalyticsPreview = () => (
    <DeviceFrame type="browser">
        <div className="space-y-3 sm:space-y-4 scale-90 sm:scale-95 md:scale-100 origin-top">
            <div className="grid grid-cols-3 gap-3">
                {[{ title: 'Users', value: '1,284', change: '+12%', icon: Users2 },
                { title: 'Revenue', value: '$3,450', change: '+8%', icon: DollarSignIcon },
                { title: 'Activity', value: '78%', change: '-2%', icon: ActivityIcon }].map((item) => (
                    <div key={item.title} className="p-3 rounded-lg bg-slate-800/50 space-y-1 border border-slate-800">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>{item.title}</span>
                            <item.icon className="w-3 h-3" />
                        </div>
                        <p className="text-lg font-semibold text-white">{item.value}</p>
                        <span className={`text-xs ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{item.change}</span>
                    </div>
                ))}
            </div>
            <div className="h-[150px] rounded-lg bg-slate-800/50 p-4 border border-slate-800">
                <div className="h-full w-full flex items-end justify-between gap-2">
                    {[0.3, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: '10%' }}
                            animate={{ height: `${h * 100}%` }}
                            transition={{ duration: 0.5, delay: i * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                            className="w-full bg-gradient-to-t from-blue-600 to-purple-500 rounded-t"
                        />
                    ))}
                </div>
            </div>
        </div>
    </DeviceFrame>
);

const TeamPreview = () => (
    <DeviceFrame type="browser">
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Team Members (4)</h4>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-blue-600 text-white"
                >
                    + Invite Member
                </motion.button>
            </div>
            <div className="space-y-2">
                {[{ name: 'Alice Johnson', role: 'Admin', avatar: 'A' },
                { name: 'Bob Williams', role: 'Developer', avatar: 'B' },
                { name: 'Charlie Brown', role: 'Designer', avatar: 'C' }].map((member, i) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-3 rounded-lg bg-slate-800/50 border border-slate-800 flex items-center gap-3"
                    >
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                            {member.avatar}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-white">{member.name}</p>
                            <p className="text-xs text-slate-400">{member.role}</p>
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs">
                            {member.role}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </DeviceFrame>
);

const EmailPreview = () => (
    <DeviceFrame type="browser">
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-blue-400" />
                <div className="flex-1 h-8 bg-slate-800 rounded px-3 flex items-center">
                    <span className="text-sm font-medium text-white">Compose New Email</span>
                </div>
            </div>
            <div className="rounded-lg border border-slate-800 p-4 space-y-3 bg-slate-900/30">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400 w-16">To:</span>
                    <div className="flex-1 h-7 bg-slate-800 rounded px-2 flex items-center">
                        <span className="text-xs text-slate-400">new.customer@example.com</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400 w-16">Subject:</span>
                    <div className="flex-1 h-7 bg-slate-800 rounded px-2 flex items-center">
                        <span className="text-xs text-slate-400">Welcome to Our Platform!</span>
                    </div>
                </div>
                <div className="min-h-[80px] bg-slate-800 rounded p-2 text-xs text-slate-400 space-y-1">
                    <p>Hi [Customer Name],</p>
                    <p>Welcome aboard! We're excited to have you...</p>
                    <div className="h-3 w-3/4 bg-slate-700 rounded mt-1" />
                    <div className="h-3 w-1/2 bg-slate-700 rounded" />
                </div>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-24 rounded-lg bg-blue-600 text-white text-sm font-medium"
                >
                    Send Email
                </motion.button>
            </div>
        </div>
    </DeviceFrame>
);

const BlogPreview = () => (
    <DeviceFrame type="browser">
        <div className="space-y-3 sm:space-y-4 scale-90 sm:scale-95 md:scale-100 origin-top">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <BookOpenIcon className="w-5 h-5 text-blue-400" />
                    <h4 className="text-base font-medium text-white">Latest Posts</h4>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-blue-600/20 text-blue-400 border border-blue-500/20"
                >
                    New Post
                </motion.button>
            </div>

            <div className="space-y-4">
                {[
                    {
                        title: "Getting Started with Next.js",
                        excerpt: "Learn how to build modern web applications with Next.js and React",
                        image: "gradient-1",
                        likes: 234,
                        comments: 45
                    },
                    {
                        title: "Mastering TypeScript",
                        excerpt: "Essential TypeScript features every developer should know",
                        image: "gradient-2",
                        likes: 189,
                        comments: 32
                    }
                ].map((post, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-4 hover:border-slate-600/50 transition-all duration-300"
                    >
                        <div className="flex gap-4">
                            <motion.div
                                className={`w-24 h-24 rounded-lg bg-gradient-to-br ${post.image === 'gradient-1'
                                    ? 'from-blue-500/20 to-purple-500/20 border-blue-500/30'
                                    : 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
                                    } border flex-shrink-0 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}
                            >
                                <BookOpenIcon className={`w-8 h-8 ${post.image === 'gradient-1' ? 'text-blue-400' : 'text-purple-400'
                                    } opacity-50`} />
                            </motion.div>
                            <div className="flex-1 space-y-2">
                                <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-slate-400 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-4 pt-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                        <HeartIcon className="w-3.5 h-3.5" />
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                        <MessageCircleIcon className="w-3.5 h-3.5" />
                                        <span>{post.comments}</span>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 15 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="ml-auto text-slate-500 hover:text-blue-400 transition-colors"
                                    >
                                        <ShareIcon className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                            whileHover={{ scale: 1.02 }}
                        />
                    </motion.div>
                ))}
            </div>

            <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-slate-500">Showing 2 of 12 posts</div>
                <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                    View All Posts
                    <ArrowRightIcon className="w-3 h-3" />
                </motion.button>
            </div>
        </div>
    </DeviceFrame>
);

const MobileOptimizationPreview = () => (
    <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.1 }}
        className="transform scale-[0.7] sm:scale-[0.8] md:scale-90 lg:scale-100 origin-center flex items-center justify-center w-full h-full"
    >
        <DeviceFrame type="phone">
            <div className="h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] p-1 sm:p-1.5 md:p-2 lg:p-2.5 bg-gradient-to-b from-slate-900/80 to-slate-950/90 overflow-hidden flex flex-col text-[0.65rem] sm:text-xs">
                <div className="flex items-center justify-between p-2 mb-2 flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                    <div className="flex gap-2">
                        <SlidersHorizontalIcon className="w-4 h-4 text-slate-500" />
                        <MenuIcon className="w-4 h-4 text-slate-500" />
                    </div>
                </div>
                <div className="flex-grow space-y-3 overflow-y-auto pr-1.5 
                    [&::-webkit-scrollbar]:w-1.5
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-slate-700/20
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:border-2
                    [&::-webkit-scrollbar-thumb]:border-solid
                    [&::-webkit-scrollbar-thumb]:border-slate-800/50
                    [&::-webkit-scrollbar-thumb]:hover:bg-slate-600/30
                    hover:[&::-webkit-scrollbar-thumb]:bg-slate-600/20">
                    <div className="h-36 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 rounded-xl mb-2 shadow-inner flex items-center justify-center flex-shrink-0 border border-slate-700/20">
                        <SmartphoneIcon className="w-12 h-12 text-slate-600 opacity-60" />
                    </div>
                    <div className="px-1">
                        <div className="h-4 w-4/5 bg-gradient-to-r from-slate-700 to-slate-700/80 rounded-md mb-1 flex-shrink-0" />
                        <div className="h-3 w-full bg-gradient-to-r from-slate-700/60 to-slate-700/40 rounded-md flex-shrink-0" />
                        <div className="h-3 w-full bg-gradient-to-r from-slate-700/60 to-slate-700/40 rounded-md mt-1 flex-shrink-0" />
                        <div className="h-3 w-5/6 bg-gradient-to-r from-slate-700/60 to-slate-700/40 rounded-md mt-1 mb-2 flex-shrink-0" />
                    </div>
                    <div className="h-11 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl w-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0 shadow-lg border border-blue-500/20">
                        Tap Here
                    </div>
                    <div className="space-y-2.5">
                        {[1, 2].map((_, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-slate-800/70 to-slate-800/50 rounded-xl p-3 flex items-center gap-3 flex-shrink-0 border border-slate-700/30 hover:border-slate-600/40 transition-colors"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-700/80 rounded-lg flex-shrink-0 border border-slate-600/20" />
                                <div className="flex-1 space-y-1.5">
                                    <div className="h-3 w-3/4 bg-gradient-to-r from-slate-600/80 to-slate-600/60 rounded-md" />
                                    <div className="h-2 w-1/2 bg-gradient-to-r from-slate-600/50 to-slate-600/30 rounded-md" />
                                </div>
                                <ArrowRightIcon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-auto h-12 border-t border-slate-800/50 flex justify-around items-center pt-1.5 flex-shrink-0 bg-slate-950/80 backdrop-blur-sm">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-500/60 to-blue-400/40 rounded-md shadow-lg border border-blue-400/20" />
                    <div className="w-5 h-5 bg-gradient-to-br from-slate-700/60 to-slate-600/40 rounded-md border border-slate-600/20" />
                    <div className="w-5 h-5 bg-gradient-to-br from-slate-700/60 to-slate-600/40 rounded-md border border-slate-600/20" />
                    <div className="w-5 h-5 bg-gradient-to-br from-slate-700/60 to-slate-600/40 rounded-md border border-slate-600/20" />
                </div>
            </div>
        </DeviceFrame>
    </motion.div>
);

const ThemePreview = () => (
    <div className="grid grid-cols-2 gap-4 w-full">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
            <div className="rounded-lg border border-slate-800 p-4 space-y-3 bg-slate-900">
                <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Dark Mode</span>
                    <Moon className="w-4 h-4 text-purple-400" />
                </div>
                <div className="h-16 bg-slate-800 rounded-lg flex items-center justify-center">
                    <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded">Button</button>
                </div>
                <div className="space-y-1">
                    <div className="h-4 bg-slate-700 rounded w-2/3" />
                    <div className="h-3 bg-slate-700/50 rounded w-full" />
                </div>
            </div>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="rounded-lg border border-slate-300 p-4 space-y-3 bg-white">
                <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-600">Light Mode</span>
                    <SunMoonIcon className="w-4 h-4 text-orange-400" />
                </div>
                <div className="h-16 bg-slate-200 rounded-lg flex items-center justify-center">
                    <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">Button</button>
                </div>
                <div className="space-y-1">
                    <div className="h-4 bg-slate-300 rounded w-2/3" />
                    <div className="h-3 bg-slate-300/50 rounded w-full" />
                </div>
            </div>
        </motion.div>
    </div>
);

const I18nPreview = () => (
    <DeviceFrame type="browser">
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-blue-400" />
                    <h4 className="text-base font-medium text-white">Language Settings</h4>
                </div>
                <div className="flex gap-1">
                    {[{ code: 'EN', flag: '🇺🇸' }, { code: 'ES', flag: '🇪🇸' }, { code: 'JP', flag: '🇯🇵' }].map((lang) => (
                        <button key={lang.code} className={`px-2.5 py-1 rounded-md ${lang.code === 'EN' ? 'bg-blue-600 text-white' : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700'} text-xs font-medium`}>
                            {lang.flag} {lang.code}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-800 space-y-2">
                    <span className="text-xs text-slate-400">English</span>
                    <p className="text-sm font-medium text-white">Welcome to your dashboard!</p>
                    <p className="text-xs text-slate-500">Manage your account settings and preferences.</p>
                    <button className="text-xs text-blue-400 hover:underline">Learn More</button>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-800 space-y-2">
                    <span className="text-xs text-slate-400">Español</span>
                    <p className="text-sm font-medium text-white">¡Bienvenido a tu panel!</p>
                    <p className="text-xs text-slate-500">Gestiona la configuración y preferencias de tu cuenta.</p>
                    <button className="text-xs text-blue-400 hover:underline">Aprende más</button>
                </div>
            </div>
        </div>
    </DeviceFrame>
);

const FeatureHighlight = ({
    isActive,
    icon: Icon,
    title,
    description,
    tech,
    stat
}: {
    isActive: boolean;
    icon: React.ComponentType<React.ComponentProps<LucideIcon>>;
    title: string;
    description: string;
    tech: string[];
    stat?: string;
}) => {
    const getFeaturePreview = () => {
        switch (title) {
            case 'SEO':
                return <SEOPreview />;
            case 'Authentication':
                return <AuthPreview />;
            case 'Payment System':
                return <PaymentPreview />;
            case 'Database & ORM':
                return <DatabasePreview />;
            case 'Analytics Dashboard':
                return <AnalyticsPreview />;
            case 'Team Management':
                return <TeamPreview />;
            case 'Email System':
                return <EmailPreview />;
            case 'Blog System':
                return <BlogPreview />;
            case 'Mobile Optimization':
                return <MobileOptimizationPreview />;
            case 'Theme System':
                return <ThemePreview />;
            case 'Internationalization':
                return <I18nPreview />;
            default:
                return <div className="text-slate-500 flex items-center justify-center h-full">Preview coming soon...</div>;
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-start justify-start pt-12 sm:pt-4 sm:justify-center p-3 sm:p-4 md:p-6 lg:p-10 xl:p-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-2 sm:gap-3 md:gap-6 lg:gap-12 items-center">
                        <div className="lg:col-span-2 flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                className="inline-flex items-center justify-center p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 w-fit shadow-lg"
                            >
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-300" />
                            </motion.div>

                            <div className="space-y-4">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white"
                                >
                                    {title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="text-slate-400 text-xs sm:text-sm md:text-base"
                                >
                                    {description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                    className="flex flex-wrap gap-2 pt-2"
                                >
                                    {tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-0.5 md:py-1 text-[0.65rem] sm:text-xs font-medium rounded-md bg-blue-900/40 text-blue-300 border border-blue-500/30 shadow-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </motion.div>

                                {stat && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="inline-flex items-baseline gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-blue-950/50 to-purple-900/50 border border-blue-500/30 backdrop-blur-sm shadow-md"
                                    >
                                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            {stat}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            Built for scale
                                        </span>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 100 }}
                            className="lg:col-span-3 flex items-start sm:items-center justify-center pt-0 pb-4 sm:py-2 md:py-3 lg:py-0 relative -mt-16 sm:-mt-12 md:mt-6 lg:mt-0"
                        >
                            <div className="relative w-full flex justify-center max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-none overflow-visible scale-75 sm:scale-80 md:scale-90 lg:scale-100">
                                {getFeaturePreview()}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const FeatureTab = ({
    isActive,
    onSelect,
    icon: Icon,
    title,
    index
}: {
    isActive: boolean;
    onSelect: () => void;
    icon: React.ComponentType<React.ComponentProps<LucideIcon>>;
    title: string;
    index: number;
}) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            onClick={onSelect}
            className={`relative flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${isActive
                ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30'
                : 'hover:bg-white/5 border border-transparent'
                }`}
        >
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${isActive
                ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                : 'bg-slate-800 text-slate-400'
                } transition-all duration-300`}>
                <Icon className="w-5 h-5" />
            </div>
            <span className={`text-base font-medium ${isActive ? 'text-white' : 'text-slate-400'
                } transition-colors duration-300`}>
                {title}
            </span>
            {isActive && (
                <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-4 text-blue-400"
                    transition={{ type: "spring", duration: 0.5 }}
                >
                    <div className="w-5 h-5 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>
            )}
        </motion.button>
    );
};

export function Features() {
    const [activeFeature, setActiveFeature] = React.useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const features = [
        {
            icon: ServerIcon,
            title: "SEO",
            description: "Built-in search engine optimization features that help your SaaS rank higher in search results. Includes automatic metadata generation, structured data, and performance optimizations that search engines love.",
            tech: [],
            stat: ""
        },
        {
            icon: ShieldCheckIcon,
            title: "Authentication",
            description: "Complete authentication system with email/password, social providers, and MFA support. Features email verification, password reset flows, and secure session management.",
            tech: [],
            stat: ""
        },
        {
            icon: CreditCardIcon,
            title: "Payment System",
            description: "Full Stripe integration with subscription management, payment processing, and customer portal. Supports one-time payments, recurring billing, and usage-based pricing models.",
            tech: [],
            stat: ""
        },
        {
            icon: DatabaseIcon,
            title: "Database & ORM",
            description: "Type-safe database queries with Prisma ORM and PostgreSQL. Includes migrations, data seeding, and optimized query patterns for high-performance data access.",
            tech: [],
            stat: ""
        },
        {
            icon: BarChart3Icon,
            title: "Analytics Dashboard",
            description: "Real-time analytics dashboard for monitoring user behavior, subscription metrics, and business KPIs. Built with Recharts for performant data visualization.",
            tech: [],
            stat: ""
        },
        {
            icon: UsersIcon,
            title: "Team Management",
            description: "Complete multi-user organization system with invitations, role management, and permissions. Support for multiple organizations and role-based access control.",
            tech: [],
            stat: ""
        },
        {
            icon: MailIcon,
            title: "Email System",
            description: "Beautiful, responsive email templates for all transactional communications. Supports HTML and text versions with React-based design system.",
            tech: [],
            stat: ""
        },
        {
            icon: BookOpenIcon,
            title: "Blog System",
            description: "Full-featured blog platform with MDX support, code syntax highlighting, and dynamic content management. Includes commenting, reactions, and social sharing capabilities.",
            tech: [],
            stat: ""
        },
        {
            icon: SmartphoneIcon,
            title: "Mobile Optimization",
            description: "Seamless performance and intuitive UX on any device. Optimized for touch interactions, fast loading on mobile networks, and pixel-perfect rendering on smaller screens.",
            tech: [],
            stat: ""
        },
        {
            icon: SunMoonIcon,
            title: "Theme System",
            description: "Built-in theme system with support for light and dark modes. Includes user preference persistence and system preference detection.",
            tech: [],
            stat: ""
        },
        {
            icon: GlobeIcon,
            title: "Internationalization",
            description: "Full internationalization support with locale detection and translation management. Ready for global deployment with multi-language capabilities.",
            tech: [],
            stat: ""
        }
    ];

    const handleSelectFeature = (index: number) => {
        setActiveFeature(index);
    };

    // Floating elements animation
    const floatingElements = [
        { delay: 0, duration: 15, x: [-20, 20], y: [-15, 15] },
        { delay: 5, duration: 18, x: [10, -10], y: [10, -10] },
        { delay: 2, duration: 13, x: [-5, 15], y: [15, -5] },
        { delay: 8, duration: 16, x: [15, -5], y: [-10, 20] }
    ];

    return (
        <section ref={ref} className="w-full py-24 overflow-hidden relative">
            {/* Animated gradient background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {floatingElements.map((element, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
                        style={{
                            top: `${30 + i * 15}%`,
                            left: `${10 + i * 20}%`,
                        }}
                        animate={{
                            x: element.x,
                            y: element.y,
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: element.duration,
                            delay: element.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-300 rounded-full bg-blue-900/20 border border-blue-500/20"
                    >
                        Enterprise-Grade Technologies
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
                    >
                        Features That <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Scale Your SaaS</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="max-w-2xl text-slate-400 md:text-xl"
                    >
                        A complete technology stack built to handle massive growth—from 0 to 20,000+ concurrent users without breaking a sweat.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-2
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-slate-950/50
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gradient-to-b
                            [&::-webkit-scrollbar-thumb]:from-blue-600/50
                            [&::-webkit-scrollbar-thumb]:to-purple-600/50
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:border-4
                            [&::-webkit-scrollbar-thumb]:border-solid
                            [&::-webkit-scrollbar-thumb]:border-transparent
                            [&::-webkit-scrollbar-thumb]:bg-clip-padding
                            [&::-webkit-scrollbar-thumb]:backdrop-blur-xl
                            hover:[&::-webkit-scrollbar-thumb]:from-blue-500/50
                            hover:[&::-webkit-scrollbar-thumb]:to-purple-500/50
                            [&::-webkit-scrollbar-thumb]:shadow-2xl
                            [&::-webkit-scrollbar]:hover:w-3
                            transition-all
                            duration-300"
                    >
                        {features.map((feature, index) => (
                            <FeatureTab
                                key={index}
                                isActive={activeFeature === index}
                                onSelect={() => handleSelectFeature(index)}
                                icon={feature.icon}
                                title={feature.title}
                                index={index}
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="relative h-[450px] sm:h-[450px] md:h-[500px] lg:h-auto lg:col-span-2 rounded-2xl border border-blue-500/20 bg-black/30 backdrop-blur-sm overflow-hidden"
                    >
                        {features.map((feature, index) => (
                            <FeatureHighlight
                                key={index}
                                isActive={activeFeature === index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                tech={feature.tech}
                                stat={feature.stat}
                            />
                        ))}

                        {/* Success tracker animation similar to hero section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute bottom-4 right-4 flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-900/30 border border-blue-500/30 text-xs text-blue-400"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span>Enterprise ready</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
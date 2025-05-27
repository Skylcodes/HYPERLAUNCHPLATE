'use client';

import * as React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface PricingFeature {
    text: string;
    included: boolean;
}

interface PricingPlan {
    name: string;
    description: string;
    price: {
        monthly: number;
        annually: number;
    };
    features: PricingFeature[];
    buttonText: string;
    isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
    {
        name: 'Basic',
        description: 'Everything you need to get started with your SaaS',
        price: {
            monthly: 29,
            annually: 24,
        },
        features: [
            { text: 'Up to 10,000 users', included: true },
            { text: 'Core analytics dashboard', included: true },
            { text: 'Email support', included: true },
            { text: 'API access', included: false },
            { text: 'White-label option', included: false },
        ],
        buttonText: 'Get Started',
    },
    {
        name: 'Pro',
        description: 'Perfect for growing businesses with advanced needs',
        price: {
            monthly: 79,
            annually: 69,
        },
        isPopular: true,
        features: [
            { text: 'Unlimited users', included: true },
            { text: 'Advanced analytics dashboard', included: true },
            { text: 'Priority email & chat support', included: true },
            { text: 'API access with higher rate limits', included: true },
            { text: 'White-label option', included: true },
        ],
        buttonText: 'Upgrade to Pro',
    },
    {
        name: 'Enterprise',
        description: 'Custom solutions for organizations with unique requirements',
        price: {
            monthly: 199,
            annually: 169,
        },
        features: [
            { text: 'Unlimited users', included: true },
            { text: 'Custom analytics dashboard', included: true },
            { text: '24/7 dedicated support', included: true },
            { text: 'Advanced API access', included: true },
            { text: 'Custom integrations', included: true },
        ],
        buttonText: 'Contact Sales',
    },
];

export function PricingUI(): React.JSX.Element {
    const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annually'>('monthly');

    // Calculate annual savings percentage
    const annualSavings = Math.round(((pricingPlans[1].price.monthly * 12) - (pricingPlans[1].price.annually * 12)) / (pricingPlans[1].price.monthly * 12) * 100);

    return (
        <section id="pricing" className="w-full py-24 relative bg-gradient-to-b from-gray-950/10 to-gray-950/80 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute -top-1/4 left-0 w-1/2 h-full bg-blue-600/5 blur-[150px] rounded-full opacity-50" />
            <div className="absolute -bottom-1/4 right-0 w-1/2 h-full bg-purple-600/5 blur-[150px] rounded-full opacity-50" />

            <div className="container relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <Badge
                        variant="outline"
                        className="mb-6 bg-black/30 border-blue-500/30 text-blue-400 backdrop-blur-md text-sm px-4 py-1.5 rounded-full shadow-lg"
                    >
                        Flexible Pricing
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        <span className="text-white">Choose the Perfect </span>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Plan
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                        Customize your pricing to match your business needs. All plans include our core features to help you launch faster and scale revenue.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <span className={cn("text-sm font-medium", billingCycle === 'monthly' ? 'text-white' : 'text-gray-400')}>
                            Monthly
                        </span>
                        <Switch
                            checked={billingCycle === 'annually'}
                            onCheckedChange={(checked) => setBillingCycle(checked ? 'annually' : 'monthly')}
                            className="data-[state=checked]:bg-blue-600"
                        />
                        <span className={cn("text-sm font-medium flex items-center gap-2", billingCycle === 'annually' ? 'text-white' : 'text-gray-400')}>
                            Annually
                            {billingCycle === 'annually' && (
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                    Save {annualSavings}%
                                </Badge>
                            )}
                        </span>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="relative"
                        >
                            {/* Card */}
                            <div className={cn(
                                "h-full rounded-2xl p-6 backdrop-blur-md border transition-all duration-300",
                                plan.isPopular
                                    ? "bg-gradient-to-b from-blue-900/30 to-blue-900/10 border-blue-500/30 shadow-xl shadow-blue-900/20"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                            )}>
                                {/* Popular Badge - Moved inside the card */}
                                {plan.isPopular && (
                                    <div className="flex justify-center mb-4">
                                        <Badge className="bg-blue-500 text-white border-0 px-3 py-1 text-xs">
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}

                                <div className="mb-5">
                                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                    <p className="text-gray-400 mt-2 h-12">{plan.description}</p>
                                </div>

                                {/* Pricing */}
                                <div className="mt-8 mb-8">
                                    <div className="flex items-baseline">
                                        <span className="text-5xl font-bold text-white">
                                            ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually}
                                        </span>
                                        <span className="text-gray-400 ml-2">/ month</span>
                                    </div>
                                    {billingCycle === 'annually' && (
                                        <p className="text-sm text-blue-400 mt-1">
                                            Billed annually (${plan.price.annually * 12}/year)
                                        </p>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className={cn(
                                                "rounded-full p-1 mr-3 mt-0.5",
                                                feature.included ? "bg-green-500/20 text-green-500" : "bg-gray-700/20 text-gray-500"
                                            )}>
                                                <Check className="h-3 w-3" />
                                            </div>
                                            <span className={cn(
                                                "text-sm",
                                                feature.included ? "text-gray-300" : "text-gray-500 line-through"
                                            )}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <Button
                                    className={cn(
                                        "w-full rounded-xl",
                                        plan.isPopular
                                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                                            : "bg-white/10 hover:bg-white/20 text-white"
                                    )}
                                >
                                    {plan.buttonText}
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
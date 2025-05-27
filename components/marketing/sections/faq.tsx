'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How will this boilerplate help me generate more revenue?",
    answer: (
      <>
        <p>Every element of this boilerplate is <strong className="text-blue-400"> optimized to drive conversions</strong>. From the smooth aniamtions to the psychology-based UI layout, we've built a proven user conversion funnel.</p>
        <p className="mt-2">Our customers consistently report <strong className="text-blue-400">significantly higher conversion rates</strong> compared to standard templates because we've incorporated many features from successful SaaS businesses + user conversion optimized UI into our boilerplate.</p>
      </>
    )
  },
  {
    question: "Do I need technical knowledge to customize this boilerplate?",
    answer: (
      <>
        <p>Our boilerplate is specifically designed to be <strong className="text-blue-400">accessible to non-technical founders</strong>. We've included built-in Cursor rules that guide you through best practices and provide intelligent code assistance as you customize.</p>
        <p className="mt-2">For deeper customizations, basic React/Next.js knowledge is helpful.</p>
      </>
    )
  },
  {
    question: "How does this compare with other boilerplates?",
    answer: (
      <>
        <p>While other premium boilerplates charge significantly more, we offer the same robust feature set at a more accessible price point. What truly sets us apart is our <strong className="text-blue-400">conversion-optimized interface</strong>.</p>
        <p className="mt-2">Unlike standard boilerplates that focus solely on functionality, our solution is specifically engineered to help your SaaS <strong>convert visitors into paying customers</strong>.</p>
      </>
    )
  },
  {
    question: "Is this a one-time purchase or subscription?",
    answer: (
      <>
        <p>This is a <strong className="text-blue-400">one-time purchase</strong> with lifetime access to the codebase. You can build unlimited projects without recurring fees.</p>
      </>
    )
  },
  {
    question: "Can I get a refund?",
    answer: (
      <>
        <p>Since you receive immediate access to the complete codebase upon purchase, we are unable to offer refunds.</p>
      </>
    )
  }
];

export function FAQ(): React.JSX.Element {
  return (
    <section className="w-full py-24 relative bg-gradient-to-b from-gray-950/80 to-black overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-1/4 left-0 w-1/2 h-full bg-purple-600/5 blur-[150px] rounded-full opacity-50" />
      <div className="absolute -bottom-1/4 right-0 w-1/2 h-full bg-blue-600/5 blur-[150px] rounded-full opacity-50" />

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
            className="mb-6 bg-black/30 border-purple-500/30 text-purple-400 backdrop-blur-md text-sm px-4 py-1.5 rounded-full shadow-lg"
          >
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-white">Common </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Everything you need to know about our premium SaaS boilerplate. Can't find what you're looking for? Contact our team directly.
          </p>
        </motion.div>

        {/* FAQ Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-2xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className={cn(
                    "border-b border-white/10",
                    index === 0 && "border-t"
                  )}
                >
                  <AccordionTrigger className="text-left text-lg font-medium py-6 text-white hover:text-blue-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

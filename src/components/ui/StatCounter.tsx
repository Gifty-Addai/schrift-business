import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';

interface StatCounterProps {
    value: number;
    label: string;
    suffix?: string;
    duration?: number;
}

export const StatCounter = ({ value, label, suffix = '', duration = 2 }: StatCounterProps) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    const spring = useSpring(0, { duration: duration * 1000 });
    const display = useTransform(spring, (current) => Math.floor(current));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        display.on('change', (latest) => setDisplayValue(latest));
    }, [display]);

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center justify-center text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <span className="font-heading text-4xl sm:text-5xl font-bold text-violet-600 mb-2">
                {displayValue}{suffix}
            </span>
            <span className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">{label}</span>
        </motion.div>
    );
};

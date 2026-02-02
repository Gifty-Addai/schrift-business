import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';
import styles from './StatCounter.module.scss';

interface StatCounterProps {
    value: number;
    label: string;
    suffix?: string;
    duration?: number;
}

export const StatCounter = ({ value, label, suffix = '', duration = 2 }: StatCounterProps) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const [hasAnimated, setHasAnimated] = useState(false);

    const spring = useSpring(0, { duration: duration * 1000 });
    const display = useTransform(spring, (current) => Math.floor(current));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        display.on('change', (latest) => setDisplayValue(latest));
    }, [display]);

    useEffect(() => {
        if (inView && !hasAnimated) {
            spring.set(value);
            setHasAnimated(true);
        }
    }, [inView, value, spring, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            className={styles.statCounter}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <span className={styles.number}>
                {displayValue}{suffix}
            </span>
            <span className={styles.label}>{label}</span>
        </motion.div>
    );
};

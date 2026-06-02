import type { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.scss';

interface CardProps {
    icon?: ReactNode;
    title?: string;
    description?: string;
    children?: ReactNode;
    delay?: number;
    className?: string;
    style?: CSSProperties;
}

export const Card = ({ icon, title, description, children, delay = 0, className, style }: CardProps) => {
    return (
        <motion.div
            className={`${styles.card} ${className || ''}`}
            style={style}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.02 }}
        >
            {icon && <div className={styles.icon}>{icon}</div>}
            {title && <h3 className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}
            {children}
        </motion.div>
    );
};

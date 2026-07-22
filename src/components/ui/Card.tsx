import type { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    icon?: ReactNode;
    title?: string;
    description?: string;
    children?: ReactNode;
    delay?: number;
    className?: string;
    style?: CSSProperties;
}

export const Card = ({ icon, title, description, children, delay = 0, className = '', style }: CardProps) => {
    return (
        <motion.div
            className={`glass-card-light rounded-2xl p-6 relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 group ${className}`}
            style={style}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Top accent line that animates on hover */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            
            {icon && <div className="text-violet-600 mb-4 inline-block">{icon}</div>}
            {title && <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">{title}</h3>}
            {description && <p className="text-slate-600 text-sm leading-relaxed mb-0">{description}</p>}
            {children}
        </motion.div>
    );
};

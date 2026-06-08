import { motion } from 'framer-motion';
import { FaPalette, FaMobileAlt, FaDraftingCompass, FaGlobe } from 'react-icons/fa';
import styles from './Experts.module.scss';

const capabilities = [
    {
        icon: <FaPalette size={24} color="#8B5CF6" />,
        title: 'Brand Design',
        description: 'Creating unique brand identities, logos, and visual assets that resonate with your target audience.',
        bg: 'rgba(139, 92, 246, 0.05)',
        borderColor: 'rgba(139, 92, 246, 0.1)'
    },
    {
        icon: <FaMobileAlt size={24} color="#EC4899" />,
        title: 'App Design',
        description: 'Designing intuitive, engaging mobile app interfaces for iOS and Android devices.',
        bg: 'rgba(236, 72, 153, 0.05)',
        borderColor: 'rgba(236, 72, 153, 0.1)'
    },
    {
        icon: <FaDraftingCompass size={24} color="#3B82F6" />,
        title: 'UX/UI Design',
        description: 'User-centered user experience layouts and interfaces that ensure absolute ease-of-use.',
        bg: 'rgba(59, 130, 246, 0.05)',
        borderColor: 'rgba(59, 130, 246, 0.1)'
    },
    {
        icon: <FaGlobe size={24} color="#10B981" />,
        title: 'Web Design',
        description: 'Polished, responsive website systems built using state-of-the-art layout architectures.',
        bg: 'rgba(16, 185, 129, 0.05)',
        borderColor: 'rgba(16, 185, 129, 0.1)'
    }
];

const pills = [
    { value: '99%+', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Dedicated Support' },
    { value: '5+', label: 'Years Experience' },
    { value: '95%+', label: 'Repeat Business' }
];

export const Experts = () => {
    return (
        <section id="experts" className="section section-light">
            <div className="container">
                <div className={styles.expertsGrid}>
                    {/* Left Column: Heading and intro */}
                    <motion.div
                        className={styles.intro}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sub}>Who We Are</span>
                        <h2 className={styles.title}>
                            We Are Experts<br />In Our Field<span className={styles.dot}>.</span>
                        </h2>
                        <p className={styles.desc}>
                            We combine design thinking with technical expertise to build digital experiences
                            that drive growth and capture market share. Our dedicated team is committed to
                            excellence in every pixel and every line of code.
                        </p>
                    </motion.div>

                    {/* Right Column: 2x2 Capabilities Grid */}
                    <div className={styles.capabilitiesGrid}>
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                style={{ backgroundColor: cap.bg, borderColor: cap.borderColor }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                            >
                                <div className={styles.iconBox}>
                                    {cap.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{cap.title}</h3>
                                <p className={styles.cardDesc}>{cap.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Pills Row */}
                <motion.div
                    className={styles.pillsRow}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {pills.map((pill, index) => (
                        <div key={index} className={styles.pill}>
                            <span className={styles.pillValue}>{pill.value}</span>
                            <span className={styles.pillLabel}>{pill.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

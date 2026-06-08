import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Services.module.scss';

const servicesData = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Building responsive, high-performance web applications using React, Vite, and cutting-edge frontend architectures.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className={styles.mockupSvg}>
                {/* Browser frame */}
                <rect x="10" y="10" width="220" height="120" rx="6" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <circle cx="25" cy="22" r="3" fill="#EF4444" />
                <circle cx="35" cy="22" r="3" fill="#F59E0B" />
                <circle cx="45" cy="22" r="3" fill="#10B981" />
                {/* Content mockup */}
                <rect x="25" y="38" width="50" height="80" rx="3" fill="#FF7A00" fillOpacity="0.1" stroke="#FF7A00" strokeWidth="1" />
                <rect x="85" y="38" width="130" height="15" rx="3" fill="rgba(255,255,255,0.05)" />
                <rect x="85" y="60" width="130" height="8" rx="2" fill="rgba(255,255,255,0.03)" />
                <rect x="85" y="74" width="90" height="8" rx="2" fill="rgba(255,255,255,0.03)" />
                <circle cx="100" cy="105" r="12" fill="#8B5CF6" fillOpacity="0.2" />
                <circle cx="135" cy="105" r="12" fill="#3B82F6" fillOpacity="0.2" />
                <circle cx="170" cy="105" r="12" fill="#10B981" fillOpacity="0.2" />
            </svg>
        )
    },
    {
        id: '2',
        title: 'Mobile Applications',
        description: 'Native and cross-platform app development using Flutter. Fluid animations and seamless native user experiences.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className={styles.mockupSvg}>
                {/* Phone Frame */}
                <rect x="85" y="5" width="70" height="130" rx="12" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <rect x="110" y="9" width="20" height="4" rx="2" fill="#09090b" />
                {/* App Screen Content */}
                <rect x="92" y="22" width="56" height="35" rx="4" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1" />
                <circle cx="120" cy="40" r="8" fill="rgba(255,255,255,0.1)" />
                <rect x="92" y="66" width="56" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
                <rect x="92" y="78" width="40" height="6" rx="2" fill="rgba(255,255,255,0.03)" />
                {/* Floating pill */}
                <rect x="92" y="94" width="56" height="24" rx="12" fill="#FF7A00" fillOpacity="0.15" stroke="#FF7A00" strokeWidth="0.8" />
                <circle cx="104" cy="106" r="6" fill="#FF7A00" />
            </svg>
        )
    },
    {
        id: '3',
        title: 'Backend Systems',
        description: 'Robust server-side architectures, RESTful APIs, high-performance database design, and cloud integrations.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className={styles.mockupSvg}>
                {/* Server rack */}
                <rect x="40" y="15" width="160" height="30" rx="4" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="55" cy="30" r="3" fill="#10B981" />
                <rect x="70" y="27" width="80" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
                
                <rect x="40" y="55" width="160" height="30" rx="4" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="55" cy="70" r="3" fill="#FF7A00" />
                <rect x="70" y="67" width="100" height="6" rx="2" fill="rgba(255,255,255,0.08)" />

                <rect x="40" y="95" width="160" height="30" rx="4" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="55" cy="110" r="3" fill="#8B5CF6" />
                <rect x="70" y="107" width="60" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
            </svg>
        )
    },
    {
        id: '4',
        title: 'Consulting & Support',
        description: 'Code review, system audit, database optimization, CI/CD setup, and developer mentorship to power up your team.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className={styles.mockupSvg}>
                {/* Dashboard statistics chart */}
                <rect x="20" y="20" width="200" height="100" rx="6" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                {/* Grid lines */}
                <line x1="30" y1="90" x2="210" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="30" y1="60" x2="210" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                {/* Bar chart lines */}
                <path d="M40 100 V65" stroke="#8B5CF6" strokeWidth="8" strokeLinecap="round" />
                <path d="M70 100 V45" stroke="#FF7A00" strokeWidth="8" strokeLinecap="round" />
                <path d="M100 100 V75" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
                <path d="M130 100 V35" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
                <path d="M160 100 V55" stroke="#EC4899" strokeWidth="8" strokeLinecap="round" />
                {/* Spline curve */}
                <path d="M40 70 Q 85 30, 130 80 T 200 40" stroke="#FF7A00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <circle cx="200" cy="40" r="4" fill="#FF7A00" />
            </svg>
        )
    }
];

export const Services = () => {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="section section-dark">
            <div className="container">
                <span className={styles.tagline}>What We Offer</span>
                <h2 className="section-title">
                    My <span>Services</span>
                </h2>
                <p className="section-subtitle">
                    Comprehensive software development solutions tailored to your business needs
                </p>

                <div className="grid grid-2">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`glass-card-dark ${styles.serviceCard}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={scrollToContact}
                        >
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                            </div>
                            
                            {/* Graphic mockup space */}
                            <div className={styles.mockupContainer}>
                                {service.mockup}
                            </div>
                            
                            {/* Arrow Button bottom right */}
                            <div className={styles.arrowWrapper}>
                                <button className={styles.arrowBtn} aria-label={`Learn more about ${service.title}`}>
                                    <FaArrowRight size={14} className={styles.arrowIcon} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

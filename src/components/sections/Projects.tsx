import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Projects.module.scss';

import systemsData from '../../../systems.json';

// Project interface matching systems.json
interface Project {
    id: string;
    title: string;
    description: string;
    icon: string;
    gradient: string;
    link: string;
    tags: string[];
}

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'app'>('all');

    const filters = [
        { label: 'All Projects', value: 'all' as const },
        { label: 'Web Design', value: 'web' as const },
        { label: 'App Design', value: 'app' as const },
    ];

    const filteredProjects = (systemsData as Project[]).filter((project) => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'web') return project.tags.includes('ecommerce') || project.title.toLowerCase().includes('tallow');
        if (activeFilter === 'app') return project.tags.includes('flutter') || project.tags.includes('ui-library') || project.title.toLowerCase().includes('sdesign');
        return true;
    });

    // Custom graphic renders for each project to serve as premium visual assets
    const renderProjectGraphic = (title: string) => {
        if (title.toLowerCase().includes('tallow')) {
            return (
                <svg viewBox="0 0 320 200" fill="none" className={styles.mockupSvg} xmlns="http://www.w3.org/2000/svg">
                    {/* Browser background */}
                    <rect width="320" height="200" rx="8" fill="#18181C" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <rect width="320" height="25" rx="8" fill="#121214" />
                    {/* Browser dots */}
                    <circle cx="15" cy="12" r="3" fill="#EF4444" />
                    <circle cx="25" cy="12" r="3" fill="#F59E0B" />
                    <circle cx="35" cy="12" r="3" fill="#10B981" />
                    {/* Website layout */}
                    <text x="60" y="16" fill="#FAFAFA" fontSize="8" fontWeight="bold">ANCESTRAL TALLOW</text>
                    
                    {/* Skincare Bottle representation */}
                    <rect x="35" y="50" width="70" height="110" rx="4" fill="#D97706" fillOpacity="0.05" stroke="#D97706" strokeWidth="1.5" />
                    <rect x="45" y="70" width="50" height="70" rx="2" fill="#121214" stroke="#D97706" strokeWidth="0.8" />
                    <line x1="53" y1="85" x2="87" y2="85" stroke="#E4E4E7" strokeWidth="1.5" />
                    <line x1="53" y1="95" x2="87" y2="95" stroke="#A1A1AA" strokeWidth="1" />
                    
                    {/* Product copy */}
                    <rect x="125" y="60" width="160" height="16" rx="4" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1" />
                    <rect x="125" y="86" width="160" height="8" rx="2" fill="rgba(255,255,255,0.06)" />
                    <rect x="125" y="100" width="130" height="8" rx="2" fill="rgba(255,255,255,0.04)" />
                    <rect x="125" y="114" width="90" height="8" rx="2" fill="rgba(255,255,255,0.04)" />
                    
                    {/* Purchase CTA */}
                    <rect x="125" y="136" width="70" height="24" rx="12" fill="#D97706" />
                    <text x="142" y="150" fill="white" fontSize="8" fontWeight="bold">BUY NOW</text>
                </svg>
            );
        } else {
            return (
                <svg viewBox="0 0 320 200" fill="none" className={styles.mockupSvg} xmlns="http://www.w3.org/2000/svg">
                    {/* Mobile App Screen Frame */}
                    <rect width="320" height="200" rx="8" fill="#09090b" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    
                    {/* Dotted lines background representing grid alignment */}
                    <line x1="0" y1="40" x2="320" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="100" x2="320" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="160" x2="320" y2="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="80" y1="0" x2="80" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="240" y1="0" x2="240" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />

                    {/* App mockup layout */}
                    <rect x="40" y="30" width="100" height="140" rx="12" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                    {/* Inner app element card */}
                    <rect x="50" y="45" width="80" height="40" rx="6" fill="#8B5CF6" fillOpacity="0.15" stroke="#8B5CF6" strokeWidth="1" />
                    <circle cx="90" cy="65" r="8" fill="#8B5CF6" />
                    <rect x="50" y="95" width="80" height="6" rx="2" fill="rgba(255,255,255,0.06)" />
                    <rect x="50" y="107" width="50" height="6" rx="2" fill="rgba(255,255,255,0.03)" />
                    {/* Floating notification pill */}
                    <rect x="50" y="125" width="80" height="24" rx="12" fill="#FF7A00" fillOpacity="0.2" stroke="#FF7A00" strokeWidth="0.8" />
                    <text x="65" y="139" fill="#FF7A00" fontSize="7" fontWeight="bold">FLUTTER UI</text>

                    {/* App code preview blocks */}
                    <rect x="170" y="45" width="110" height="8" rx="2" fill="#8B5CF6" />
                    <rect x="170" y="60" width="80" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
                    <rect x="185" y="72" width="95" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
                    <rect x="185" y="84" width="70" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
                    
                    {/* Visualizer bars */}
                    <rect x="170" y="110" width="10" height="40" rx="2" fill="rgba(255,255,255,0.05)" />
                    <rect x="185" y="125" width="10" height="25" rx="2" fill="rgba(255,255,255,0.05)" />
                    <rect x="200" y="100" width="10" height="50" rx="2" fill="#8B5CF6" fillOpacity="0.3" />
                    <rect x="215" y="115" width="10" height="35" rx="2" fill="#FF7A00" fillOpacity="0.3" />
                </svg>
            );
        }
    };

    return (
        <section id="projects" className="section section-light">
            <div className="container">
                <span className={styles.tagline}>Showcase</span>
                <h2 className="section-title">
                    Lets have a look at my <span>Portfolio</span>
                </h2>
                <p className="section-subtitle">
                    Recent work showcasing innovative digital systems and technical solutions
                </p>

                {/* Filter Tabs */}
                <div className={styles.filterContainer}>
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            className={`${styles.filterBtn} ${activeFilter === filter.value ? styles.active : ''}`}
                            onClick={() => setActiveFilter(filter.value)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Grid layout */}
                <div className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={styles.projectCard}
                                onClick={() => project.link && window.open(project.link, '_blank')}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className={styles.graphicWrapper}>
                                    {renderProjectGraphic(project.title)}
                                    
                                    {/* Arrow Overlay Button */}
                                    <div className={styles.arrowOverlay}>
                                        <div className={styles.arrowCircle}>
                                            <FaArrowRight size={14} className={styles.arrowIcon} />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.info}>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <p className={styles.cardDesc}>{project.description}</p>
                                    
                                    <div className={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

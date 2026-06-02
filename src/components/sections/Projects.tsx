import { Card } from '../ui/Card';
import type { Project } from '../../types';
import styles from './Projects.module.scss';
import type { JSX } from 'react';
import ancestralLogo from '../../assets/ancestral-logo.png';
import { FaGlobe, FaBox, FaCogs, FaCode, FaServer, FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

import systemsData from '../../../systems.json';

const iconMap: Record<string, JSX.Element> = {
    tallow: <img src={ancestralLogo} alt="Ancestral Tallow" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />,
    globe: <FaGlobe size={28} />,
    box: <FaBox size={28} />,
    cogs: <FaCogs size={28} />,
    code: <FaCode size={28} />,
    server: <FaServer size={28} />,
    package: <FaBox size={28} />,
    app: <FaLaptopCode size={28} />,
    mobile: <FaMobileAlt size={28} />,
    database: <FaDatabase size={28} />,
};

const renderIcon = (icon: string) => {
    if (iconMap[icon]) {
        return iconMap[icon];
    }
    // If it looks like an image path or URL
    if (icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('/') || icon.startsWith('data:')) {
        return <img src={icon} alt="Icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />;
    }
    // Default fallback icon
    return <FaCode size={28} />;
};

const getFeaturedProjects = (): Project[] => {
    const envSystems = import.meta.env.VITE_FEATURED_SYSTEMS;
    if (envSystems) {
        try {
            const parsed = JSON.parse(envSystems);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        } catch (e) {
            console.error('Error parsing VITE_FEATURED_SYSTEMS from env:', e);
        }
    }

    const envIds = import.meta.env.VITE_FEATURED_PROJECT_IDS;
    if (envIds) {
        const featuredIds = envIds.split(',').map((id: string) => id.trim()).filter(Boolean);
        if (featuredIds.length > 0) {
            return (systemsData as Project[]).filter((project) => featuredIds.includes(project.id));
        }
    }

    return systemsData as Project[];
};

export const Projects = () => {
    const projectsData = getFeaturedProjects();

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <h2 className="section-title">Featured Systems</h2>
                <p className="section-subtitle">
                    Recent work showcasing innovative solutions and technical excellence
                </p>

                <div className={styles.grid}>
                    {projectsData.map((project, index) => (
                        <div key={project.id} className={styles.cardWrapper} onClick={() => project.link && window.open(project.link, '_blank')} style={{ cursor: project.link ? 'pointer' : 'default' }}>
                            <Card className={styles.projectCard} delay={index * 0.1}>
                                <div style={{ background: project.gradient, padding: '1rem', borderRadius: '0.75rem', marginBottom: '1rem' }}>
                                    <div style={{ color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px', width: '40px' }}>
                                        {renderIcon(project.icon)}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{project.description}</p>
                                {project.tags && project.tags.length > 0 && (
                                    <div className={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

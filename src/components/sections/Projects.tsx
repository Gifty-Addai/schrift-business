import { Card } from '../ui/Card';
import type { Project } from '../../types';
import styles from './Projects.module.scss';
import type { JSX } from 'react';
import ancestralLogo from '../../assets/ancestral-logo.png';

const projectsData: Project[] = [
    {
        id: '1',
        icon: 'tallow',
        title: 'Ancestral Tallow',
        description: 'A premium e-commerce platform dedicated to ancestral skincare products. Features seamless checkout, subscription models, and an educational blog about natural skincare.',
        tags: [],
        gradient: 'linear-gradient(135deg, #e5c794ff 0%, #D97706 100%)',
        link: 'https://ancestral-tallpw.vercel.app/',
    },
];

const iconMap: Record<string, JSX.Element> = {
    tallow: <img src={ancestralLogo} alt="Ancestral Tallow" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />,
};

export const Projects = () => {
    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <h2 className="section-title">Featured Systems</h2>
                <p className="section-subtitle">
                    Recent work showcasing innovative solutions and technical excellence
                </p>

                <div className={styles.grid}>
                    {projectsData.map((project, index) => (
                        <div key={project.id} onClick={() => project.link && window.open(project.link, '_blank')} style={{ cursor: project.link ? 'pointer' : 'default' }}>
                            <Card delay={index * 0.1}>
                                <div style={{ background: project.gradient, padding: '1rem', borderRadius: '0.75rem', marginBottom: '1rem' }}>
                                    <div style={{ color: 'black' }}>{iconMap[project.icon]}</div>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{project.description}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import { motion } from 'framer-motion';
import {
    FaReact, FaNode, FaDocker
} from 'react-icons/fa';
import {
    SiPostgresql, SiMongodb, SiKubernetes,
    SiDart, SiFlutter, SiSharp, SiDotnet
} from 'react-icons/si';
import type { Technology } from '../../types';
import styles from './TechStack.module.scss';
import type { JSX } from 'react';

const technologiesData: Technology[] = [
    { id: '1', name: 'React', icon: 'react', color: '#61DAFB' },
    { id: '2', name: 'Dart', icon: 'dart', color: '#0175C2' },
    { id: '3', name: 'Flutter', icon: 'flutter', color: '#02569B' },
    { id: '4', name: 'C#', icon: 'csharp', color: '#239120' },
    { id: '5', name: '.NET', icon: 'dotnet', color: '#512BD4' },
    { id: '6', name: 'Node.js', icon: 'node', color: '#339933' },
    { id: '7', name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
    { id: '8', name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
    { id: '9', name: 'Docker', icon: 'docker', color: '#2496ED' },
    { id: '10', name: 'Kubernetes', icon: 'kubernetes', color: '#326CE5' },
];

const iconMap: Record<string, JSX.Element> = {
    react: <FaReact size={32} />,
    dart: <SiDart size={32} />,
    flutter: <SiFlutter size={32} />,
    csharp: <SiSharp size={32} />,
    dotnet: <SiDotnet size={32} />,
    node: <FaNode size={32} />,
    postgresql: <SiPostgresql size={32} />,
    mongodb: <SiMongodb size={32} />,
    docker: <FaDocker size={32} />,
    kubernetes: <SiKubernetes size={32} />,
};

export const TechStack = () => {
    return (
        <section id="tech" className={`section ${styles.techStack}`}>
            <div className="container">
                <h2 className="section-title">Technology Stack</h2>
                <p className="section-subtitle">
                    Leveraging cutting-edge technologies to build modern solutions
                </p>

                <div className={styles.grid}>
                    {technologiesData.map((tech, index) => (
                        <motion.div
                            key={tech.id}
                            className={styles.techItem}
                            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{
                                y: -10,
                                rotateX: 10,
                                scale: 1.1,
                                boxShadow: `0 20px 30px -10px ${tech.color}66`
                            }}
                            style={{
                                '--tech-color': tech.color
                            } as React.CSSProperties}
                        >
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon} style={{ color: tech.color }}>
                                    {iconMap[tech.icon]}
                                </div>
                                <div className={styles.reflection} style={{ background: tech.color }}></div>
                            </div>
                            <span className={styles.name}>{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import { motion } from 'framer-motion';
import {
    FaReact, FaNode, FaDocker
} from 'react-icons/fa';
import {
    SiPostgresql, SiMongodb, SiKubernetes,
    SiDart, SiFlutter, SiSharp, SiDotnet
} from 'react-icons/si';
import type { Technology } from '../../types';
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
    react: <FaReact className="text-[32px]" />,
    dart: <SiDart className="text-[32px]" />,
    flutter: <SiFlutter className="text-[32px]" />,
    csharp: <SiSharp className="text-[32px]" />,
    dotnet: <SiDotnet className="text-[32px]" />,
    node: <FaNode className="text-[32px]" />,
    postgresql: <SiPostgresql className="text-[32px]" />,
    mongodb: <SiMongodb className="text-[32px]" />,
    docker: <FaDocker className="text-[32px]" />,
    kubernetes: <SiKubernetes className="text-[32px]" />,
};

export const TechStack = () => {
    return (
        <section id="tech" className="bg-slate-950 text-slate-50 py-16 md:py-24 relative border-b border-white/5 [perspective:1000px]">
            <div className="container">
                <h2 className="text-center font-heading text-3xl sm:text-5xl font-bold text-white mb-4">Technology Stack</h2>
                <p className="text-center text-slate-400 text-sm max-w-xl mx-auto mb-16 leading-relaxed">
                    Leveraging cutting-edge technologies to build modern solutions
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto px-6">
                    {technologiesData.map((tech, index) => (
                        <motion.div
                            key={tech.id}
                            className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-slate-800/40 border border-white/5 transition-all duration-500 [transform-style:preserve-3d] cursor-pointer relative backdrop-blur-md shadow-lg hover:bg-slate-800/60 hover:border-[var(--tech-color)] hover:shadow-[0_20px_30px_-10px_var(--shadow-color)] hover:-translate-y-2.5 hover:[transform:rotateX(10deg)_scale(1.1)]"
                            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            style={{
                                '--tech-color': tech.color,
                                '--shadow-color': `${tech.color}66`
                            } as React.CSSProperties}
                        >
                            <div className="relative transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:translateZ(40px)_scale(1.1)]">
                                <div className="filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" style={{ color: tech.color }}>
                                    {iconMap[tech.icon]}
                                </div>
                                <div className="absolute top-full left-0 right-0 h-5 rounded-full opacity-0 filter blur-md transition-all duration-500 z-[-1] group-hover:opacity-40 group-hover:translate-y-2.5 group-hover:scale-75" style={{ background: tech.color }}></div>
                            </div>
                            <span className="font-semibold text-slate-300 text-sm md:text-base transition-all duration-500 group-hover:text-[var(--tech-color)] group-hover:[transform:translateZ(20px)]">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

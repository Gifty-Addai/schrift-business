import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

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
                <svg viewBox="0 0 320 200" fill="none" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103" xmlns="http://www.w3.org/2000/svg">
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
                <svg viewBox="0 0 320 200" fill="none" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103" xmlns="http://www.w3.org/2000/svg">
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
        <section id="projects" className="bg-slate-900 text-slate-100 py-16 md:py-24 relative border-b border-white/5">
            <div className="container">
                <span className="font-heading text-sm font-semibold text-violet-400 uppercase tracking-widest text-center mb-3 block">
                    Showcase
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white text-center leading-tight mb-4">
                    Let's have a look at my <span className="text-gradient">Portfolio</span>
                </h2>
                <p className="text-slate-400 text-base text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                    Recent work showcasing innovative digital systems and technical solutions
                </p>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-2 mb-12 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:border-violet-500/30 hover:text-violet-400 hover:-translate-y-0.5 ${
                                activeFilter === filter.value
                                    ? 'bg-violet-600 border-violet-600 text-white shadow-[0_6px_15px_rgba(139,92,246,0.3)]'
                                    : 'border-white/8 bg-white/3 text-slate-300'
                            }`}
                            onClick={() => setActiveFilter(filter.value)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group flex flex-col h-full bg-slate-800/40 backdrop-blur-md border border-white/8 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-violet-500/20"
                                onClick={() => project.link && window.open(project.link, '_blank')}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className="relative h-[220px] bg-black/20 flex items-center justify-center p-6 overflow-hidden border-b border-white/5">
                                    {renderProjectGraphic(project.title)}
                                    
                                    {/* Arrow Overlay Button */}
                                    <div className="absolute bottom-4 right-4 z-10">
                                        <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-violet-600 group-hover:border-violet-600">
                                            <FaArrowRight size={14} className="text-white transition-all duration-300 group-hover:rotate-[-45deg]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-heading text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-slate-350 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                                    
                                    <div className="flex gap-2 flex-wrap mt-auto">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="bg-violet-500/10 border border-violet-500/15 text-violet-400 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
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

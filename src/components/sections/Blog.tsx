import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const posts = [
    {
        id: 1,
        tag: 'Frontend',
        date: 'June 5, 2026',
        title: 'Performance Optimization in Modern React Applications',
        gradientClass: 'bg-gradient-to-br from-indigo-500 to-violet-600',
        illustration: (
            <svg viewBox="0 0 200 120" fill="none" className="w-full max-w-[140px] h-auto transition-transform duration-500 group-hover:scale-105">
                {/* React Atom Symbol representation */}
                <ellipse cx="100" cy="60" rx="15" ry="40" stroke="white" strokeWidth="1.5" transform="rotate(30 100 60)" opacity="0.6" />
                <ellipse cx="100" cy="60" rx="15" ry="40" stroke="white" strokeWidth="1.5" transform="rotate(90 100 60)" opacity="0.6" />
                <ellipse cx="100" cy="60" rx="15" ry="40" stroke="white" strokeWidth="1.5" transform="rotate(150 100 60)" opacity="0.6" />
                <circle cx="100" cy="60" r="4" fill="white" />
                {/* Speed indicator lines */}
                <path d="M40 90 L 160 90" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />
                <path d="M40 90 L 110 90" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
                <circle cx="110" cy="90" r="4" fill="white" />
            </svg>
        )
    },
    {
        id: 2,
        tag: 'Flutter',
        date: 'May 28, 2026',
        title: 'State Management and Custom Themes using sDesign',
        gradientClass: 'bg-gradient-to-br from-emerald-500 to-cyan-500',
        illustration: (
            <svg viewBox="0 0 200 120" fill="none" className="w-full max-w-[140px] h-auto transition-transform duration-500 group-hover:scale-105">
                {/* Flutter style icon */}
                <path d="M100 20 L130 50 L110 70 L80 40 Z" fill="white" fillOpacity="0.8" />
                <path d="M110 70 L130 90 L100 100 L80 80 Z" fill="white" fillOpacity="0.4" />
                {/* Visual interface elements */}
                <rect x="35" y="45" width="30" height="30" rx="4" fill="white" fillOpacity="0.2" />
                <rect x="135" y="45" width="30" height="30" rx="4" fill="white" fillOpacity="0.2" />
                <circle cx="50" cy="60" r="5" fill="white" />
                <circle cx="150" cy="60" r="5" fill="white" />
            </svg>
        )
    },
    {
        id: 3,
        tag: 'Backend',
        date: 'May 15, 2026',
        title: 'Scaling NodeJS backend systems to handle 10k RPS',
        gradientClass: 'bg-gradient-to-br from-amber-500 to-violet-600',
        illustration: (
            <svg viewBox="0 0 200 120" fill="none" className="w-full max-w-[140px] h-auto transition-transform duration-500 group-hover:scale-105">
                {/* Database cylinders */}
                <rect x="75" y="25" width="50" height="20" rx="10" fill="white" fillOpacity="0.8" />
                <rect x="75" y="50" width="50" height="20" rx="10" fill="white" fillOpacity="0.5" />
                <rect x="75" y="75" width="50" height="20" rx="10" fill="white" fillOpacity="0.3" />
                {/* Flow lines */}
                <path d="M45 45 Q 70 35, 75 35" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M155 45 Q 130 35, 125 35" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="45" cy="45" r="3" fill="white" />
                <circle cx="155" cy="45" r="3" fill="white" />
            </svg>
        )
    }
];

export const Blog = () => {
    return (
        <section id="blog" className="bg-slate-900 text-slate-100 py-16 md:py-24 relative border-b border-white/5">
            <div className="container">
                <span className="font-heading text-sm font-semibold text-violet-400 uppercase tracking-widest text-center mb-3 block">
                    Latest Insights
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white text-center leading-tight mb-4">
                    From my <span className="text-gradient">blog post</span>
                </h2>
                <p className="text-slate-400 text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                    Sharing knowledge, experiences, and technical guides about modern software engineering
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="glass-card-dark group relative p-4 pb-16 rounded-2xl flex flex-col h-full cursor-pointer hover:shadow-2xl hover:border-violet-500/20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Colorful Image Box with SVG */}
                            <div className={`h-[160px] rounded-xl flex items-center justify-center overflow-hidden mb-6 ${post.gradientClass}`}>
                                {post.illustration}
                            </div>

                            {/* Info */}
                            <div className="flex flex-col px-1">
                                <div className="flex items-center gap-2 text-[10px] font-semibold mb-2">
                                    <span className="text-violet-400 uppercase tracking-widest">{post.tag}</span>
                                    <span className="text-white/20">•</span>
                                    <span className="text-slate-400">{post.date}</span>
                                </div>
                                <h3 className="font-heading text-base font-bold text-white leading-snug mb-0">{post.title}</h3>
                            </div>

                            {/* Arrow Button bottom right */}
                            <div className="absolute bottom-5 right-5">
                                <button className="w-9 h-9 rounded-full border border-white/15 bg-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-violet-600 group-hover:border-violet-600" aria-label={`Read ${post.title}`}>
                                    <FaArrowRight size={12} className="text-white transition-all duration-300 group-hover:rotate-[-45deg]" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

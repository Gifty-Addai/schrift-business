import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Frank Addai',
        role: 'Founder & Software Architect',
        initials: 'FA',
        color: '#8B5CF6'
    },
    {
        name: 'Festus Addai',
        role: 'Co-Founder & Business Strategist',
        initials: 'FA',
        color: '#A78BFA'
    },
    {
        name: 'Grace Mensah',
        role: 'Lead UI/UX Designer',
        initials: 'GM',
        color: '#EC4899'
    },
    {
        name: 'Kofi Owusu',
        role: 'Senior Full Stack Developer',
        initials: 'KO',
        color: '#10B981'
    }
];

export const Team = () => {
    return (
        <section id="team" className="bg-slate-900 text-slate-100 py-16 md:py-24 relative border-b border-white/5">
            <div className="container">
                <span className="font-heading text-sm font-semibold text-violet-400 uppercase tracking-widest text-center mb-3 block">
                    The Brains
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white text-center leading-tight mb-4">
                    Meet the <span className="text-gradient">Team</span>
                </h2>
                <p className="text-slate-400 text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                    The creative experts and technical minds driving our digital innovations
                </p>

                <div className="relative mt-12 py-4">
                    {/* Dashed connecting vector path (desktop only) */}
                    <svg className="hidden md:block absolute top-[10px] left-0 w-full h-[120px] z-10 pointer-events-none" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 50 Q 275 120, 500 50 T 950 50" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
                    </svg>

                    <div className="grid grid-cols-2 md:flex md:justify-between gap-8 md:gap-4 relative z-20">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="group flex flex-col items-center text-center flex-1 cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="relative w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full bg-slate-850 p-[6px] transition-transform duration-300 z-30 group-hover:-translate-y-[5px]" style={{ boxShadow: `0 0 20px rgba(0, 0, 0, 0.02), inset 0 0 0 3px ${member.color}22` }}>
                                    <div className="w-full h-full rounded-full flex items-center justify-center font-bold select-none" style={{ backgroundColor: `${member.color}10`, color: member.color }}>
                                        {/* Fallback initials representation */}
                                        <span className="font-heading text-xl sm:text-2xl tracking-tighter">{member.initials}</span>
                                    </div>
                                    {/* Hover Ring */}
                                    <div className="absolute inset-0 rounded-full border-2 opacity-0 scale-90 transition-all duration-300 pointer-events-none group-hover:opacity-1 group-hover:scale-105" style={{ borderColor: member.color }}></div>
                                </div>
                                
                                <div className="mt-4">
                                    <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-1 transition-colors duration-200 group-hover:text-violet-400">{member.name}</h3>
                                    <p className="text-slate-400 text-xs sm:text-sm font-medium">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

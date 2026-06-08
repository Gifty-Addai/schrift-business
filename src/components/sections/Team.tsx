import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Frank Addai',
        role: 'Founder & Software Engineer',
        initials: 'FA',
        accent: '#8B5CF6',
        grad: 'from-violet-600 to-indigo-500',
        badgeBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
        tag: 'Engineering',
    },
    {
        name: 'Ransford Owusu',
        role: 'Co-Founder & Business Strategist',
        initials: 'RO',
        accent: '#A78BFA',
        grad: 'from-violet-400 to-purple-600',
        badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        tag: 'Strategy',
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

export const Team = () => {
    return (
        <section id="team" className="bg-[#0a0f1e] text-slate-100 py-20 md:py-28 relative border-b border-white/5 overflow-hidden">
            {/* Ambient background blobs */}
            <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.span
                        className="inline-flex items-center gap-2 font-heading text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="w-6 h-px bg-violet-400" />
                        The Brains
                        <span className="w-6 h-px bg-violet-400" />
                    </motion.span>
                    <motion.h2
                        className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                    >
                        Meet the <span className="text-gradient">Team</span>
                    </motion.h2>
                    <motion.p
                        className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                    >
                        Creative experts and technical minds driving SchriftFlow's digital innovations
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={member.name}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.14] transition-all duration-500 hover:-translate-y-1 overflow-hidden cursor-default"
                            style={{
                                boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
                            }}
                        >
                            {/* Card glow on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                style={{
                                    background: `radial-gradient(ellipse at 50% 0%, ${member.accent}18 0%, transparent 70%)`,
                                }}
                            />

                            {/* Avatar */}
                            <div className="relative mb-6">
                                {/* Outer glow ring */}
                                <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md scale-110"
                                    style={{ background: `radial-gradient(circle, ${member.accent}55 0%, transparent 70%)` }}
                                />
                                {/* Gradient border ring */}
                                <div
                                    className={`relative w-24 h-24 rounded-full p-[2.5px] bg-gradient-to-br ${member.grad}`}
                                    style={{ boxShadow: `0 0 0 1px ${member.accent}33` }}
                                >
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                        <span
                                            className={`font-heading text-2xl font-bold bg-gradient-to-br ${member.grad} bg-clip-text text-transparent select-none`}
                                        >
                                            {member.initials}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Badge */}
                            <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${member.badgeBg}`}>
                                {member.tag}
                            </span>

                            {/* Name & Role */}
                            <h3 className="font-heading text-lg font-bold text-white mb-1.5 group-hover:text-violet-200 transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className="text-slate-400 text-sm leading-snug">
                                {member.role}
                            </p>

                            {/* Subtle bottom accent line */}
                            <div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 transition-all duration-500 rounded-full"
                                style={{ background: `linear-gradient(to right, transparent, ${member.accent}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

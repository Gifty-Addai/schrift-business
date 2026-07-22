import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Strategy & Research',
        desc: 'We start by understanding your goals, research the market landscape, and plan user journeys and tech requirements.'
    },
    {
        num: '02',
        title: 'UI/UX Design',
        desc: 'We draft high-fidelity wireframes and prototype premium interactive layouts matching modern visual aesthetics.'
    },
    {
        num: '03',
        title: 'Development',
        desc: 'Our engineers implement the project with clean code, modular components, and responsive, scalable backend hooks.'
    },
    {
        num: '04',
        title: 'Testing & QA',
        desc: 'We execute thorough integration testing, security checks, and cross-browser validations for flawless launches.'
    },
    {
        num: '05',
        title: 'Deploy & Support',
        desc: 'We launch your system on secure cloud channels and offer continuous updates to grow the platform.'
    }
];

export const Process = () => {
    return (
        <section id="process" className="bg-slate-50 text-slate-800 py-16 md:py-24 relative border-b border-slate-200/50">
            <div className="container">
                <span className="font-heading text-sm font-semibold text-violet-600 uppercase tracking-widest text-center mb-3 block">
                    How We Work
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 text-center leading-tight mb-4">
                    Our Redesigned <span className="text-gradient">Workflow</span>
                </h2>
                <p className="text-slate-500 text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                    A structured, agile development process tailored for transparency and high-speed execution
                </p>

                <div className="relative mt-12 py-4">
                    {/* Horizontal connector line (desktop only) */}
                    <div className="hidden md:block absolute top-[34px] left-[10%] right-[10%] h-[2px] bg-[repeating-linear-gradient(to_right,#8B5CF6_0,#8B5CF6_8px,transparent_8px,transparent_16px)] z-10 opacity-30"></div>

                    {/* Vertical connector line (mobile only) */}
                    <div className="md:hidden absolute top-0 bottom-0 left-[30px] w-[2px] bg-[repeating-linear-gradient(to_bottom,#8B5CF6_0,#8B5CF6_8px,transparent_8px,transparent_16px)] z-10 opacity-30"></div>

                    <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-6 relative z-20">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                className="group flex flex-row md:flex-col items-start md:items-center gap-6 md:text-center flex-1 cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="relative z-30">
                                    <div className="w-[60px] h-[60px] rounded-full bg-white border-[3px] border-violet-600 flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-violet-600 group-hover:border-violet-600 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] group-hover:scale-110">
                                        <span className="font-heading text-lg font-bold text-violet-600 transition-colors duration-300 group-hover:text-white">
                                            {step.num}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col pt-2 md:pt-0">
                                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-violet-600">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


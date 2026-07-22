import { motion } from 'framer-motion';
import { FaCogs, FaServer, FaGlobe, FaMobileAlt } from 'react-icons/fa';

const capabilities = [
    {
        icon: <FaCogs size={24} className="text-violet-600" />,
        title: 'System Architecture',
        description: 'Planning and structuring secure, reliable software systems, databases, and integrations built to scale with your business.',
        bg: 'rgba(139, 92, 246, 0.05)',
        borderColor: 'rgba(139, 92, 246, 0.1)'
    },
    {
        icon: <FaServer size={24} className="text-pink-600" />,
        title: 'Backend & APIs',
        description: 'Building robust server logic, secure database schemas, and high-performance API endpoints to power all your platforms.',
        bg: 'rgba(236, 72, 153, 0.05)',
        borderColor: 'rgba(236, 72, 153, 0.1)'
    },
    {
        icon: <FaGlobe size={24} className="text-blue-600" />,
        title: 'Web Applications',
        description: 'Creating responsive, premium web portals, content platforms, and custom admin dashboards with fluid layouts.',
        bg: 'rgba(59, 130, 246, 0.05)',
        borderColor: 'rgba(59, 130, 246, 0.1)'
    },
    {
        icon: <FaMobileAlt size={24} className="text-emerald-600" />,
        title: 'Mobile Systems',
        description: 'Developing high-performance, cross-platform mobile apps for iOS and Android with modern user experiences using Flutter.',
        bg: 'rgba(16, 185, 129, 0.05)',
        borderColor: 'rgba(16, 185, 129, 0.1)'
    }
];

const pills = [
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Dedicated Support' },
    { value: '5+', label: 'Years Experience' },
    { value: '95%+', label: 'Repeat Business' }
];

export const Experts = () => {
    return (
        <section id="experts" className="bg-white text-slate-800 py-16 md:py-24 relative border-b border-slate-200/50">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-center mb-16">
                    {/* Left Column: Heading and intro */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-heading text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">Who We Are</span>
                        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
                            We Are Experts<br />In Our Field<span className="text-violet-500">.</span>
                        </h2>
                        <p className="text-slate-600 text-base leading-relaxed">
                            We combine design thinking with technical expertise to build digital experiences
                            that drive growth and capture market share. Our dedicated team is committed to
                            excellence in every pixel and every line of code.
                        </p>
                    </motion.div>

                    {/* Right Column: 2x2 Capabilities Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 transition-all duration-300 flex flex-col items-start hover:-translate-y-1 hover:shadow-md hover:border-violet-500/20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                                    {cap.icon}
                                </div>
                                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-0">{cap.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Pills Row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {pills.map((pill, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-full py-3 px-6 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/20 hover:shadow-md">
                            <span className="font-heading text-xl sm:text-2xl font-bold text-violet-600 leading-none mb-1">{pill.value}</span>
                            <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">{pill.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

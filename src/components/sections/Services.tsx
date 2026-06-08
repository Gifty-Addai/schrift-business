import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaMobileAlt, FaServer, FaChartLine, FaMicrochip } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Service {
    id: string;
    title: string;
    description: string;
    icon: IconType;
    accent: string;
    grad: string;
    bgGrad: string;
    tag: string;
    features: string[];
    featured?: boolean;
}

const servicesData: Service[] = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Responsive, high-performance web apps using React, Next.js, and Vite — built for speed, scale, and great user experiences.',
        icon: FaCode,
        accent: '#8B5CF6',
        grad: 'from-violet-500 to-indigo-600',
        bgGrad: 'from-violet-600/10 to-indigo-600/5',
        tag: 'Frontend',
        features: [
            'React / Next.js / Vite SPAs',
            'Tailwind CSS design systems',
            'Core Web Vitals & SEO optimized',
        ],
    },
    {
        id: '2',
        title: 'Mobile Applications',
        description: 'Cross-platform mobile apps using Flutter with fluid animations, native performance, and seamless platform integration.',
        icon: FaMobileAlt,
        accent: '#06B6D4',
        grad: 'from-cyan-500 to-blue-600',
        bgGrad: 'from-cyan-500/10 to-blue-600/5',
        tag: 'Mobile',
        features: [
            'Flutter & Dart development',
            'iOS & Android deployment',
            'Custom animation & gestures',
        ],
    },
    {
        id: '3',
        title: 'Backend Systems',
        description: 'Robust server-side architectures, RESTful & GraphQL APIs, high-performance databases, and cloud-native integrations.',
        icon: FaServer,
        accent: '#10B981',
        grad: 'from-emerald-500 to-teal-600',
        bgGrad: 'from-emerald-500/10 to-teal-600/5',
        tag: 'Infrastructure',
        features: [
            'Node.js / Python / Go APIs',
            'PostgreSQL, MongoDB & Redis',
            'Cloud deployment (AWS, GCP, CF)',
        ],
    },
    {
        id: '4',
        title: 'Consulting & Support',
        description: 'Technical audits, code reviews, CI/CD setup, database optimization, and developer mentorship to level up your team.',
        icon: FaChartLine,
        accent: '#EC4899',
        grad: 'from-pink-500 to-rose-600',
        bgGrad: 'from-pink-500/10 to-rose-600/5',
        tag: 'Advisory',
        features: [
            'Architecture & code reviews',
            'DevOps & CI/CD pipelines',
            'Performance & security audits',
        ],
    },
    {
        id: '5',
        title: 'IoT Solutions',
        description: 'End-to-end IoT system design — embedded firmware, sensor network integration, real-time data pipelines, and cloud dashboards that connect the physical and digital worlds.',
        icon: FaMicrochip,
        accent: '#F59E0B',
        grad: 'from-amber-500 to-orange-500',
        bgGrad: 'from-amber-500/10 to-orange-500/5',
        tag: 'Hardware + Software',
        features: [
            'Embedded firmware & RTOS',
            'MQTT / LoRa / BLE protocols',
            'Real-time sensor dashboards',
            'Remote device management',
        ],
        featured: true,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

export const Services = () => {
    const scrollToContact = () => {
        const el = document.querySelector('#contact');
        if (el) {
            window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
        }
    };

    const regular = servicesData.filter((s) => !s.featured);
    const featured = servicesData.find((s) => s.featured);

    return (
        <section id="services" className="bg-slate-950 text-slate-50 py-16 md:py-24 relative border-b border-white/5 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <span className="block text-center font-heading text-sm font-semibold text-violet-400 uppercase tracking-widest mb-2">
                    What We Offer
                </span>
                <h2 className="text-center font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
                    Our <span className="text-gradient-purple">Services</span>
                </h2>
                <p className="text-center text-slate-400 text-sm max-w-xl mx-auto mb-16 leading-relaxed">
                    Comprehensive software and hardware solutions tailored to your business needs
                </p>

                {/* Regular services 2×2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {regular.map((service, i) => (
                        <ServiceCard key={service.id} service={service} index={i} onClick={scrollToContact} />
                    ))}
                </div>

                {/* Featured IoT card — full width */}
                {featured && (
                    <motion.div
                        custom={4}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onClick={scrollToContact}
                        className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-amber-500/20 transition-all duration-500"
                        style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(12px)' }}
                    >
                        {/* Top accent bar */}
                        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${featured.grad} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                        {/* Glow overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{ background: `radial-gradient(ellipse at 20% 50%, ${featured.accent}12 0%, transparent 60%)` }}
                        />

                        <div className="p-5 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                            {/* Left: icon + tag + title + desc */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-4 mb-5">
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${featured.grad} flex items-center justify-center shadow-lg flex-shrink-0`}
                                        style={{ boxShadow: `0 8px 24px ${featured.accent}40` }}
                                    >
                                        <featured.icon size={24} className="text-white" />
                                    </div>
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                                        style={{ color: featured.accent, borderColor: `${featured.accent}40`, background: `${featured.accent}12` }}
                                    >
                                        {featured.tag}
                                    </span>
                                </div>
                                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-100 transition-colors duration-300">
                                    {featured.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                                    {featured.description}
                                </p>
                            </div>

                            {/* Right: feature bullets — hidden on mobile */}
                            <div className="hidden sm:flex flex-shrink-0 md:w-64 flex-col">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Capabilities</p>
                                <ul className="flex flex-col gap-3">
                                    {featured.features.map((f) => (
                                        <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ background: featured.accent }}
                                            />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={scrollToContact}
                                    className="mt-8 flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                                    style={{ color: featured.accent }}
                                >
                                    Start a project <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

function ServiceCard({ service, index, onClick }: { service: Service; index: number; onClick: () => void }) {
    return (
        <motion.div
            custom={index}
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
                }),
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={onClick}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-white/[0.14] transition-all duration-500 hover:-translate-y-1"
            style={{
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            }}
        >
            {/* Top accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.grad} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Hover glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 0%, ${service.accent}12 0%, transparent 65%)` }}
            />

            <div className="p-4 sm:p-6 md:p-7 flex flex-col h-full relative z-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                    <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.grad} flex items-center justify-center shadow-lg`}
                        style={{ boxShadow: `0 6px 20px ${service.accent}35` }}
                    >
                        <service.icon size={20} className="text-white" />
                    </div>
                    <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                        style={{ color: service.accent, borderColor: `${service.accent}35`, background: `${service.accent}10` }}
                    >
                        {service.tag}
                    </span>
                </div>

                {/* Title & description */}
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-slate-100 transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* Feature bullets — hidden on mobile */}
                <ul className="hidden sm:flex flex-col gap-2.5 mt-auto mb-4 sm:mb-6">
                    {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                            <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: service.accent }}
                            />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* Bottom row — hidden on mobile */}
                <div className="hidden sm:flex items-center justify-between pt-4 border-t border-white/[0.05]">
                    <span className="text-xs text-slate-500 font-medium">Click to discuss</span>
                    <div
                        className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                            borderColor: `${service.accent}35`,
                            background: `${service.accent}10`,
                            color: service.accent,
                        }}
                    >
                        <FaArrowRight size={12} className="group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

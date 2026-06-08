import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const servicesData = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Building responsive, high-performance web applications using React, Vite, and cutting-edge frontend architectures.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[220px]">
                {/* Browser frame */}
                <rect x="10" y="10" width="220" height="120" rx="6" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <circle cx="25" cy="22" r="3" fill="#EF4444" />
                <circle cx="35" cy="22" r="3" fill="#F59E0B" />
                <circle cx="45" cy="22" r="3" fill="#10B981" />
                {/* Content mockup */}
                <rect x="25" y="38" width="50" height="80" rx="3" fill="#8B5CF6" fillOpacity="0.1" stroke="#8B5CF6" strokeWidth="1" />
                <rect x="85" y="38" width="130" height="15" rx="3" fill="rgba(255,255,255,0.05)" />
                <rect x="85" y="60" width="130" height="8" rx="2" fill="rgba(255,255,255,0.03)" />
                <rect x="85" y="74" width="90" height="8" rx="2" fill="rgba(255,255,255,0.03)" />
                <circle cx="100" cy="105" r="12" fill="#8B5CF6" fillOpacity="0.2" />
                <circle cx="135" cy="105" r="12" fill="#3B82F6" fillOpacity="0.2" />
                <circle cx="170" cy="105" r="12" fill="#10B981" fillOpacity="0.2" />
            </svg>
        )
    },
    {
        id: '2',
        title: 'Mobile Applications',
        description: 'Native and cross-platform app development using Flutter. Fluid animations and seamless native user experiences.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[220px]">
                {/* Phone Frame */}
                <rect x="85" y="5" width="70" height="130" rx="12" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <rect x="110" y="9" width="20" height="4" rx="2" fill="#09090b" />
                {/* App Screen Content */}
                <rect x="92" y="22" width="56" height="35" rx="4" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1" />
                <circle cx="120" cy="40" r="8" fill="rgba(255,255,255,0.1)" />
                <rect x="92" y="66" width="56" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
                <rect x="92" y="78" width="40" height="6" rx="2" fill="rgba(255,255,255,0.03)" />
                {/* Floating pill */}
                <rect x="92" y="94" width="56" height="24" rx="12" fill="#8B5CF6" fillOpacity="0.15" stroke="#8B5CF6" strokeWidth="0.8" />
                <circle cx="104" cy="106" r="6" fill="#8B5CF6" />
            </svg>
        )
    },
    {
        id: '3',
        title: 'Backend Systems',
        description: 'Robust server-side architectures, RESTful APIs, high-performance database design, and cloud integrations.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[220px]">
                {/* Server rack */}
                <rect x="40" y="15" width="160" height="30" rx="4" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="55" cy="30" r="3" fill="#10B981" />
                <rect x="70" y="27" width="80" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
                
                <rect x="40" y="55" width="160" height="30" rx="4" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="55" cy="70" r="3" fill="#8B5CF6" />
                <rect x="70" y="67" width="100" height="6" rx="2" fill="rgba(255,255,255,0.08)" />

                <rect x="40" y="95" width="160" height="30" rx="4" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="55" cy="110" r="3" fill="#8B5CF6" />
                <rect x="70" y="107" width="60" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
            </svg>
        )
    },
    {
        id: '4',
        title: 'Consulting & Support',
        description: 'Code review, system audit, database optimization, CI/CD setup, and developer mentorship to power up your team.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[220px]">
                <rect x="20" y="20" width="200" height="100" rx="6" fill="#1E1E24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="30" y1="90" x2="210" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="30" y1="60" x2="210" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <path d="M40 100 V65" stroke="#8B5CF6" strokeWidth="8" strokeLinecap="round" />
                <path d="M70 100 V45" stroke="#8B5CF6" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
                <path d="M100 100 V75" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
                <path d="M130 100 V35" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
                <path d="M160 100 V55" stroke="#EC4899" strokeWidth="8" strokeLinecap="round" />
                <path d="M40 70 Q 85 30, 130 80 T 200 40" stroke="#8B5CF6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <circle cx="200" cy="40" r="4" fill="#8B5CF6" />
            </svg>
        )
    },
    {
        id: '5',
        title: 'IoT Solutions',
        description: 'End-to-end IoT system design — from embedded firmware and sensor networks to real-time cloud dashboards and device management platforms.',
        mockup: (
            <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[220px]">
                {/* Central hub */}
                <circle cx="120" cy="70" r="18" fill="#8B5CF6" fillOpacity="0.15" stroke="#8B5CF6" strokeWidth="1.5" />
                <circle cx="120" cy="70" r="8" fill="#8B5CF6" fillOpacity="0.5" />

                {/* Pulse rings */}
                <circle cx="120" cy="70" r="26" stroke="#8B5CF6" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
                <circle cx="120" cy="70" r="34" stroke="#8B5CF6" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="2 4" />

                {/* Device nodes */}
                {/* Temp sensor - top left */}
                <line x1="90" y1="48" x2="109" y2="62" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="68" y="28" width="28" height="24" rx="4" fill="#1E1E24" stroke="#10B981" strokeWidth="1" />
                <circle cx="82" cy="40" r="5" fill="#10B981" fillOpacity="0.3" />
                <line x1="78" y1="40" x2="86" y2="40" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />

                {/* Camera - top right */}
                <line x1="150" y1="48" x2="131" y2="62" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="144" y="28" width="28" height="24" rx="4" fill="#1E1E24" stroke="#3B82F6" strokeWidth="1" />
                <circle cx="158" cy="40" r="6" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                <circle cx="158" cy="40" r="3" fill="#3B82F6" fillOpacity="0.5" />

                {/* Switch - left */}
                <line x1="98" y1="70" x2="82" y2="70" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="54" y="58" width="28" height="24" rx="4" fill="#1E1E24" stroke="#EC4899" strokeWidth="1" />
                <circle cx="63" cy="70" r="3" fill="#EC4899" fillOpacity="0.6" />
                <circle cx="73" cy="70" r="3" fill="#EC4899" fillOpacity="0.3" />

                {/* Cloud - right */}
                <line x1="142" y1="70" x2="158" y2="70" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="158" y="58" width="28" height="24" rx="4" fill="#1E1E24" stroke="#8B5CF6" strokeWidth="1" />
                <path d="M164 74 Q164 66 170 66 Q172 62 176 63 Q180 60 182 65 Q186 65 186 70 Q186 74 182 74 Z" fill="#8B5CF6" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="0.8" />

                {/* Motor - bottom */}
                <line x1="120" y1="89" x2="120" y2="104" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="106" y="104" width="28" height="24" rx="4" fill="#1E1E24" stroke="#F59E0B" strokeWidth="1" />
                <circle cx="120" cy="116" r="6" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1" />
                <path d="M117 116 L123 116 M120 113 L120 119" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        )
    }
];

export const Services = () => {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="bg-slate-950 text-slate-50 py-16 md:py-24 relative border-b border-white/5">
            <div className="container">
                <span className="block text-center font-heading text-sm font-semibold text-violet-400 uppercase tracking-widest mb-2">What We Offer</span>
                <h2 className="text-center font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
                    My <span className="text-gradient-purple">Services</span>
                </h2>
                <p className="text-center text-slate-400 text-sm max-w-xl mx-auto mb-16 leading-relaxed">
                    Comprehensive software development solutions tailored to your business needs
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="glass-card-dark rounded-2xl p-8 pb-18 relative flex flex-col justify-between min-h-[360px] cursor-pointer group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={scrollToContact}
                        >
                            <div className="mb-6">
                                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-0">{service.description}</p>
                            </div>
                            
                            {/* Graphic mockup space */}
                            <div className="h-[150px] rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-center p-3 mt-auto transition-all duration-300 group-hover:border-violet-500/15 group-hover:bg-black/40">
                                {service.mockup}
                            </div>
                            
                            {/* Arrow Button bottom right */}
                            <div className="absolute bottom-5 right-5">
                                <button className="w-11 h-11 rounded-full border border-white/15 bg-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-violet-600 group-hover:border-violet-600 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]" aria-label={`Learn more about ${service.title}`}>
                                    <FaArrowRight size={14} className="text-white transition-all duration-300 group-hover:-rotate-45" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

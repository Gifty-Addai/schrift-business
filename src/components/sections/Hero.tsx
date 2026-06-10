import { motion } from 'framer-motion';
import { FaArrowRight, FaStar } from 'react-icons/fa';

export const Hero = () => {
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
        <section id="home" className="min-h-screen relative bg-slate-900 overflow-hidden pt-36 pb-16 flex flex-col justify-center">
            {/* Ambient background glow */}
            <div className="absolute -top-1/10 -right-1/10 w-3/5 h-3/5 bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(59,130,246,0.04)_50%,transparent_100%)] pointer-events-none z-10 filter blur-[80px]"></div>

            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center relative z-20 mb-12 text-center lg:text-left">
                    {/* Left Column: Text & CTA */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold leading-none text-slate-50 mb-6 tracking-tight">
                            Crafting Digital<br />
                            Brilliance<span className="text-violet-500">.</span>
                            <span className="block text-slate-400 text-lg sm:text-2xl font-normal tracking-wide mt-4">
                                Premium Software Development & IoT Solutions in Ghana
                            </span>
                        </h1>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                            We design and build premium, high-performance software solutions.
                            From web platforms to elegant mobile apps, we bring your digital vision to life.
                        </p>

                        <div className="flex gap-4">
                            <button
                                className="group font-heading font-semibold text-white text-base sm:text-lg flex items-center gap-4 pl-6 pr-1 py-1 border border-white/15 rounded-full hover:border-violet-500 hover:bg-violet-500/5 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                                onClick={scrollToContact}
                            >
                                Let's Talk
                                <span className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-violet-600 group-hover:rotate-[-45deg] shrink-0">
                                    <FaArrowRight size={14} />
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Portrait & Badge Overlay */}
                    <motion.div
                        className="relative flex justify-center items-center z-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] bg-violet-500/5 border border-dashed border-violet-500/30 rounded-full relative flex items-center justify-center p-4">
                            {/* Inner circle border and glow */}
                            <div className="absolute inset-2.5 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] shadow-[0_0_30px_rgba(139,92,246,0.1)] pointer-events-none"></div>

                            {/* Portrait Image Placeholder (SVG Fallback) */}
                            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-slate-900/80 border border-white/10">
                                <svg className="w-full h-full object-cover" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="100" cy="100" r="90" fill="url(#heroGrad)" />
                                    {/* Abstract minimalist developer representation */}
                                    <circle cx="100" cy="75" r="30" fill="#FFE1BF" />
                                    {/* Hair */}
                                    <path d="M70 75C70 45 130 45 130 75" stroke="#4A3B32" strokeWidth="12" strokeLinecap="round" />
                                    {/* Glasses */}
                                    <rect x="78" y="70" width="18" height="10" rx="3" stroke="#A78BFA" strokeWidth="2.5" />
                                    <rect x="104" y="70" width="18" height="10" rx="3" stroke="#A78BFA" strokeWidth="2.5" />
                                    <line x1="96" y1="75" x2="104" y2="75" stroke="#A78BFA" strokeWidth="2.5" />
                                    {/* Clothes (purple shirt) */}
                                    <path d="M50 160C50 120 150 120 150 160V190H50V160Z" fill="#8B5CF6" />
                                    {/* Tablet */}
                                    <rect x="80" y="130" width="40" height="50" rx="4" fill="#18181B" stroke="#A78BFA" strokeWidth="2" />
                                    <circle cx="100" cy="170" r="2" fill="white" />
                                    <defs>
                                        <linearGradient id="heroGrad" x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#8B5CF6" stopOpacity="0.4" />
                                            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Overlap Rating Card */}
                        <div className="absolute bottom-[-10px] left-[10%] lg:bottom-[10%] lg:-left-5 bg-slate-800/75 backdrop-blur-md border border-white/10 rounded-xl p-3 px-4 shadow-2xl flex flex-col gap-1 z-30">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-violet-500 text-[10px]" />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <strong className="text-white text-xs font-bold">50+ Projects</strong>
                                <span className="text-slate-400 text-[10px]">Delivered Worldwide</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Row: Stats Strip */}
                <motion.div
                    className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/8 pt-8 mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="text-center">
                        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-violet-400 leading-none mb-1">50+</h2>
                        <p className="text-slate-300 text-xs sm:text-sm font-medium uppercase tracking-wider">Project Deliveries</p>
                    </div>
                    <div className="text-center">
                        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-violet-400 leading-none mb-1">5+</h2>
                        <p className="text-slate-300 text-xs sm:text-sm font-medium uppercase tracking-wider">Years Experience</p>
                    </div>
                    <div className="text-center">
                        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-violet-400 leading-none mb-1">30+</h2>
                        <p className="text-slate-300 text-xs sm:text-sm font-medium uppercase tracking-wider">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-violet-400 leading-none mb-1">100%</h2>
                        <p className="text-slate-300 text-xs sm:text-sm font-medium uppercase tracking-wider">Client Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

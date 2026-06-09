import { useState } from 'react';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { Logo } from '../ui/Logo';

const footerLinks = {
    quickLinks: [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Timeline', href: '#process' },
        { label: 'Portfolio', href: '#projects' },
        { label: 'Team', href: '#team' },
    ],
    services: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
        { label: 'Backend Systems', href: '#services' },
        { label: 'Consulting & Support', href: '#services' },
    ],
};

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            console.log('Subscribed email:', email);
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 4000);
        }
    };

    return (
        <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-white/5">
            {/* Top Footer Banner Block */}
            <div className="border-b border-white/5 py-12">
                <div className="container flex justify-between items-center flex-wrap gap-6 sm:justify-center sm:text-center">
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Lets Connect there</h2>
                    <button
                        className="font-heading font-semibold text-white px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center gap-1.5 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        onClick={() => scrollToSection('#contact')}
                    >
                        Hire Us <span className="text-lg">↗</span>
                    </button>
                </div>
            </div>

            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-6">
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <div className="mb-2">
                        <Logo />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Crafting digital brilliance with clean code, elegant designs, and enterprise-grade architecture.
                    </p>
                    <div className="flex gap-2">
                        <a href="https://github.com/Frank732" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center transition-all duration-300 hover:bg-violet-600 hover:border-violet-600 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(139,92,246,0.3)]" aria-label="GitHub">
                            <FaGithub size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/frankaddai/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center transition-all duration-300 hover:bg-violet-600 hover:border-violet-600 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(139,92,246,0.3)]" aria-label="LinkedIn">
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="flex flex-col">
                    <h3 className="font-heading text-base font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
                    <ul className="list-none flex flex-col gap-3 p-0 m-0">
                        {footerLinks.quickLinks.map((link) => (
                            <li key={link.label}>
                                <a onClick={() => scrollToSection(link.href)} className="text-slate-400 text-sm font-medium transition-colors hover:text-violet-400 cursor-pointer">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Column */}
                <div className="flex flex-col">
                    <h3 className="font-heading text-base font-bold text-white mb-6 uppercase tracking-wider">Services</h3>
                    <ul className="list-none flex flex-col gap-3 p-0 m-0">
                        {footerLinks.services.map((link) => (
                            <li key={link.label}>
                                <a onClick={() => scrollToSection(link.href)} className="text-slate-400 text-sm font-medium transition-colors hover:text-violet-400 cursor-pointer">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-heading text-base font-bold text-white mb-6 uppercase tracking-wider">Subscribe Newsletter</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-2">
                        Stay updated with our latest blog posts and custom layouts.
                    </p>
                    <form className="relative flex w-full" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-full py-3 px-4 pr-12 bg-white/5 border border-white/10 rounded-lg text-white text-sm transition-all focus:outline-none focus:border-violet-500 focus:bg-white/10 focus:ring-4 focus:ring-violet-500/10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="absolute top-[1px] right-[1px] bottom-[1px] w-11 bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center rounded-r-lg transition-colors cursor-pointer" aria-label="Subscribe">
                            <FaPaperPlane size={14} />
                        </button>
                    </form>
                    {isSubscribed && (
                        <p className="text-emerald-400 text-xs font-semibold mt-1">✓ Subscribed successfully!</p>
                    )}
                </div>
            </div>

            {/* Bottom Copyright Strip */}
            <div className="border-t border-white/5 py-6 bg-black/20">
                <div className="container flex justify-between items-center flex-wrap gap-4 sm:justify-center sm:text-center">
                    <p className="text-slate-400 text-xs">
                        &copy; 2026 SchriftFlow. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-400 text-xs font-semibold cursor-pointer hover:text-violet-400 transition-colors">
                            Back to Top ↑
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

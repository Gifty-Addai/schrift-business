import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';
import type { NavItem } from '../../types';

const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Timeline', href: '#process' },
    { label: 'Portfolio', href: '#projects' },
    // { label: 'Team', href: '#team' },
    // { label: 'Blog', href: '#blog' }, // commented out for now
    { label: 'Feedback', href: '#testimonials' },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when tapping outside
    useEffect(() => {
        if (!isMenuOpen) return;
        const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, [isMenuOpen]);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
                ...({ behavior: 'smooth' } as ScrollOptions)
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <motion.header
            ref={menuRef}
            className={`fixed top-4 left-1/2 z-50 w-11/12 max-w-7xl backdrop-blur-md border border-white/5 rounded-full transition-all duration-300 shadow-lg ${isScrolled ? 'bg-slate-950/85 border-violet-500/20 shadow-2xl py-1' : 'bg-slate-950/45'
                }`}
            initial={{ y: -100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            transition={{ duration: 0.5 }}
        >
            <nav className="flex items-center justify-between py-2 px-6 w-full">
                <div onClick={() => scrollToSection('#home')} className="cursor-pointer flex items-center">
                    <Logo />
                </div>

                <ul className={`hidden md:flex items-center gap-8 list-none ${isMenuOpen ? '!flex absolute top-[calc(100%+10px)] left-0 right-0 flex-col bg-slate-900/95 backdrop-blur-lg border border-white/8 rounded-2xl shadow-2xl p-6 gap-4' : ''
                    }`}>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="w-full md:w-auto text-center"
                        >
                            <a
                                className="text-slate-200 text-sm font-medium hover:text-violet-400 transition-colors cursor-pointer py-1 relative group block md:inline-block
                                after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-indigo-500 hover:after:w-full after:transition-all after:duration-300"
                                onClick={() => scrollToSection(item.href)}
                            >
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button
                        className="font-heading font-semibold text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer hidden sm:block"
                        onClick={() => scrollToSection('#contact')}
                    >
                        Let's Discuss
                    </button>
                    <button
                        className="flex flex-col gap-1.5 p-2 md:hidden cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[2px] bg-slate-100 transition-all rounded ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-slate-100 transition-all rounded ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-slate-100 transition-all rounded ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>
        </motion.header>
    );
};

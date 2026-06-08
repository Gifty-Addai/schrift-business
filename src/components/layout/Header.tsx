import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';
import type { NavItem } from '../../types';
import styles from './Header.module.scss';

const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Timeline', href: '#process' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'Blog', href: '#blog' },
    { label: 'Feedback', href: '#testimonials' },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            className={`${styles.header} ${isScrolled ? styles.scrolled : ''} `}
            initial={{ y: -100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            transition={{ duration: 0.5 }}
        >
            <nav className={styles.nav}>
                <div onClick={() => scrollToSection('#home')} className={styles.logoWrapper}>
                    <Logo />
                </div>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''} `}>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <a
                                className={styles.navLink}
                                onClick={() => scrollToSection(item.href)}
                            >
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className={styles.navAction}>
                    <button className={styles.discussBtn} onClick={() => scrollToSection('#contact')}>
                        Let's Discuss
                    </button>
                    <button
                        className={`${styles.mobileToggle} ${isMenuOpen ? styles.active : ''} `}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
        </motion.header>
    );
};

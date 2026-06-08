import { useState } from 'react';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { Logo } from '../ui/Logo';
import styles from './Footer.module.scss';

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
        <footer className={styles.footer}>
            {/* Top Footer Banner Block: Lets Connect there */}
            <div className={styles.connectBanner}>
                <div className={styles.connectContainer}>
                    <h2 className={styles.connectTitle}>Lets Connect there</h2>
                    <button className={styles.connectBtn} onClick={() => scrollToSection('#contact')}>
                        Hire Us <span className={styles.arrowCircle}>↗</span>
                    </button>
                </div>
            </div>

            <div className={styles.mainContent}>
                {/* Brand Column */}
                <div className={`${styles.column} ${styles.brandCol}`}>
                    <div className={styles.logoWrapper}>
                        <Logo />
                    </div>
                    <p className={styles.brandDesc}>
                        Crafting digital brilliance with clean code, elegant designs, and enterprise-grade architecture.
                    </p>
                    <div className={styles.socials}>
                        <a href="https://github.com/Frank732" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                            <FaGithub size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/frankaddai/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className={styles.column}>
                    <h3 className={styles.colTitle}>Quick Links</h3>
                    <ul className={styles.links}>
                        {footerLinks.quickLinks.map((link) => (
                            <li key={link.label}>
                                <a onClick={() => scrollToSection(link.href)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Column */}
                <div className={styles.column}>
                    <h3 className={styles.colTitle}>Services</h3>
                    <ul className={styles.links}>
                        {footerLinks.services.map((link) => (
                            <li key={link.label}>
                                <a onClick={() => scrollToSection(link.href)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className={`${styles.column} ${styles.newsletterCol}`}>
                    <h3 className={styles.colTitle}>Subscribe Newsletter</h3>
                    <p className={styles.newsletterDesc}>
                        Stay updated with our latest blog posts and custom layouts.
                    </p>
                    <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className={styles.subscribeInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className={styles.subscribeBtn} aria-label="Subscribe">
                            <FaPaperPlane size={14} />
                        </button>
                    </form>
                    {isSubscribed && (
                        <p className={styles.subscribeSuccess}>✓ Subscribed successfully!</p>
                    )}
                </div>
            </div>

            {/* Bottom Copyright Strip */}
            <div className={styles.bottomStrip}>
                <div className={styles.bottomContainer}>
                    <p className={styles.copyright}>
                        &copy; 2026 SchriftFlow. All rights reserved. Blended Layout Theme.
                    </p>
                    <div className={styles.bottomLinks}>
                        <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={styles.backToTop}>
                            Back to Top ↑
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

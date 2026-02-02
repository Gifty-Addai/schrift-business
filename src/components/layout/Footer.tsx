import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

import { Logo } from '../ui/Logo';

const footerLinks = {
    quickLinks: [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#projects' },
        { label: 'About', href: '#about' },
    ],
    services: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
        { label: 'Backend Systems', href: '#services' },
        { label: 'Cloud Solutions', href: '#services' },
    ],
};

export const Footer = () => {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };



    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={`${styles.section} ${styles.brand}`}>
                    <div style={{ marginBottom: '1rem' }}>
                        <Logo />
                    </div>
                    <p>Crafting elegant code to build innovative digital solutions.</p>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://github.com/Frank732"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/frankaddai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>Quick Links</h3>
                    <ul className={styles.links}>
                        {footerLinks.quickLinks.map((link) => (
                            <li key={link.href}>
                                <a onClick={() => scrollToSection(link.href)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3>Services</h3>
                    <ul className={styles.links}>
                        {footerLinks.services.map((link) => (
                            <li key={link.label}>
                                <a onClick={() => scrollToSection(link.href)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3>Contact</h3>
                    <ul className={styles.links}>
                        <li>
                            <a href="mailto:hacphran122@gmail.com">hacphran122@gmail.com</a>
                        </li>
                        <li>
                            <a href="tel:+233247413964">+233 (233) 247413964</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; 2026 SchriftFlow. All rights reserved. Crafted with 💜 and code.</p>
            </div>
        </footer>
    );
};

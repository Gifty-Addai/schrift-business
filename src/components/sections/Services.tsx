import { FaCode, FaMobile, FaCog, FaPalette, FaCloud, FaTools } from 'react-icons/fa';
import { Card } from '../ui/Card';
import type { Service } from '../../types';
import styles from './Services.module.scss';
import type { JSX } from 'react';

const servicesData: Service[] = [
    {
        id: '1',
        icon: 'web',
        title: 'Web Development',
        description: 'Building responsive, high-performance web applications using modern frameworks and best practices. From landing pages to complex web platforms.',
    },
    {
        id: '2',
        icon: 'mobile',
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile app development for iOS and Android. Delivering seamless user experiences on any device.',
    },
    {
        id: '3',
        icon: 'backend',
        title: 'Backend Systems',
        description: 'Robust server-side architecture with RESTful APIs, databases, and cloud integration. Scalable solutions that grow with your business.',
    },
    // {
    //     id: '4',
    //     icon: 'design',
    //     title: 'UI/UX Design',
    //     description: 'User-centered design that combines aesthetics with functionality. Creating interfaces that users love to interact with.',
    // },
    // {
    //     id: '5',
    //     icon: 'cloud',
    //     title: 'Cloud Solutions',
    //     description: 'Cloud infrastructure setup and management on AWS, Azure, and GCP. Scalable, secure, and cost-effective deployments.',
    // },
    {
        id: '6',
        icon: 'consulting',
        title: 'Consulting & Support',
        description: 'Technical consulting, code reviews, and ongoing maintenance. Expert guidance to keep your projects running smoothly.',
    },
];

const iconMap: Record<string, JSX.Element> = {
    web: <FaCode size={28} />,
    mobile: <FaMobile size={28} />,
    backend: <FaCog size={28} />,
    design: <FaPalette size={28} />,
    cloud: <FaCloud size={28} />,
    consulting: <FaTools size={28} />,
};

export const Services = () => {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <h2 className="section-title">Services & Expertise</h2>
                <p className="section-subtitle">
                    Comprehensive software development solutions tailored to your business needs
                </p>

                <div className={styles.grid}>
                    {servicesData.map((service, index) => (
                        <Card
                            key={service.id}
                            icon={iconMap[service.icon]}
                            title={service.title}
                            description={service.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

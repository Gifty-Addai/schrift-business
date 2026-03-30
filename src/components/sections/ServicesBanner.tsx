import React from 'react';
import styles from './ServicesBanner.module.scss';

const ServicesBanner: React.FC = () => {
    const services = [
        {
            id: 1,
            title: 'Custom Software',
            color: 'red',
            icon: '⚡'
        },
        {
            id: 2,
            title: 'Web Applications',
            color: 'orange',
            icon: '🌐'
        },
        {
            id: 3,
            title: 'Mobile Development',
            color: 'green',
            icon: '📱'
        },
        {
            id: 4,
            title: 'Cloud Solutions',
            color: 'cyan',
            icon: '☁️'
        },
        {
            id: 5,
            title: 'DevOps & CI/CD',
            color: 'purple',
            icon: '🚀'
        },
    ];

    return (
        <section className={styles.servicesBanner}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}>▶</div>
                        <span className={styles.logoText}>SchriftFlow</span>
                    </div>
                    <h1 className={styles.title}>
                        We provide
                        <span className={styles.titleHighlight}> SOFTWARE DEVELOPMENT</span>
                        <span className={styles.titleSubtitle}>S E R V I C E S</span>
                    </h1>
                </div>

                <div className={styles.servicesSection}>
                    <div className={styles.hexagonCenter}>
                        <div className={styles.hexagon}>
                            <div className={styles.hexagonContent}>
                                <h2>OUR</h2>
                                <h2>SERVICES</h2>
                            </div>
                        </div>
                    </div>

                    <div className={styles.servicesList}>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`${styles.serviceItem} ${styles[`service${service.color}`]}`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                <div className={styles.serviceHexagon}>
                                    <span className={styles.serviceNumber}>{service.id}</span>
                                </div>
                                <div className={styles.serviceContent}>
                                    <span className={styles.serviceIcon}>{service.icon}</span>
                                    <span className={styles.serviceTitle}>{service.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.callToAction}>
                        <div className={styles.phoneIcon}>📞</div>
                        <div className={styles.contactInfo}>
                            <p>Call to find out more</p>
                            <p className={styles.phoneNumber}>+233-XX-XXX-XXXX</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className={styles.bgArrow}></div>
        </section>
    );
};

export default ServicesBanner;

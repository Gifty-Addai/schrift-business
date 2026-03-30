import React from 'react';
import styles from './HeroBanner.module.scss';

const HeroBanner: React.FC = () => {
    return (
        <section className={styles.heroBanner}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>▶</div>
                    <span className={styles.logoText}>SchriftFlow</span>
                </div>

                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        <span className={styles.headlineTop}>Transform Your Vision Into</span>
                        <span className={styles.headlineMain}>DIGITAL REALITY</span>
                        <span className={styles.headlineBottom}>with cutting-edge software solutions</span>
                    </h1>

                    <p className={styles.description}>
                        We craft bespoke software solutions that drive innovation,
                        enhance efficiency, and accelerate your business growth.
                    </p>

                    <div className={styles.ctaButtons}>
                        <button className={styles.btnPrimary}>Get Started</button>
                        <button className={styles.btnSecondary}>View Our Work</button>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>50+</div>
                            <div className={styles.statLabel}>Projects Delivered</div>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>30+</div>
                            <div className={styles.statLabel}>Happy Clients</div>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>5+</div>
                            <div className={styles.statLabel}>Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className={styles.bgGrid}></div>
            <div className={styles.bgGradient}></div>
        </section>
    );
};

export default HeroBanner;

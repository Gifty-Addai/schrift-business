import { motion } from 'framer-motion';
import styles from './Process.module.scss';

const steps = [
    {
        num: '01',
        title: 'Strategy & Research',
        desc: 'We start by understanding your goals, research the market landscape, and plan user journeys and tech requirements.'
    },
    {
        num: '02',
        title: 'UI/UX Design',
        desc: 'We draft high-fidelity wireframes and prototype premium interactive layouts matching modern visual aesthetics.'
    },
    {
        num: '03',
        title: 'Development',
        desc: 'Our engineers implement the project with clean code, modular components, and responsive, scalable backend hooks.'
    },
    {
        num: '04',
        title: 'Testing & QA',
        desc: 'We execute thorough integration testing, security checks, and cross-browser validations for flawless launches.'
    },
    {
        num: '05',
        title: 'Deploy & Support',
        desc: 'We launch your system on secure cloud channels and offer continuous updates to grow the platform.'
    }
];

export const Process = () => {
    return (
        <section id="process" className="section section-light">
            <div className="container">
                <span className={styles.tagline}>How We Work</span>
                <h2 className="section-title">
                    Our Redesigned <span>Workflow</span>
                </h2>
                <p className="section-subtitle">
                    A structured, agile development process tailored for transparency and high-speed execution
                </p>

                <div className={styles.timelineContainer}>
                    {/* Horizontal connector line (desktop only) */}
                    <div className={styles.progressLine}></div>

                    <div className={styles.stepsWrapper}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                className={styles.stepCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className={styles.nodeWrapper}>
                                    <div className={styles.nodeCircle}>
                                        <span className={styles.nodeNum}>{step.num}</span>
                                    </div>
                                </div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import styles from './Testimonials.module.scss';

const testimonialsData = [
    {
        id: '1',
        quote: 'Exceptional work! The Ancestral Tallow e-commerce app exceeded our expectations. Professional, timely, and always available to address our concerns.',
        author: 'Festus Addai',
        role: 'CEO',
        company: 'Ancestral Tallow',
        initials: 'FA',
        color: '#FF7A00'
    },
    {
        id: '2',
        quote: 'The mobile library they designed is incredibly fast and animations are extremely fluid. The attention to detail and theme options are outstanding.',
        author: 'Aisha Bello',
        role: 'Product Lead',
        company: 'sDesign Flutter App',
        initials: 'AB',
        color: '#8B5CF6'
    },
    {
        id: '3',
        quote: 'SchriftFlow built a robust API gateway backend that scales seamlessly. Clean code structure, comprehensive testing, and professional delivery.',
        author: 'Kweku Boateng',
        role: 'CTO',
        company: 'Fintech Solutions',
        initials: 'KB',
        color: '#10B981'
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="section section-dark">
            <div className="container">
                <span className={styles.tagline}>Feedback</span>
                <h2 className="section-title">
                    Testimonials That Speak to <span>My Results</span>
                </h2>
                <p className="section-subtitle">
                    Here is what clients and partners say about working with SchriftFlow
                </p>

                <div className={styles.grid}>
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className={`glass-card-dark ${styles.testimonialCard}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Quote icon decoration */}
                            <div className={styles.quoteIconWrapper}>
                                <FaQuoteRight size={24} className={styles.quoteIcon} />
                            </div>

                            {/* Stars */}
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={styles.starIcon} />
                                ))}
                            </div>

                            <p className={styles.quote}>"{testimonial.quote}"</p>

                            <div className={styles.author}>
                                <div className={styles.avatar} style={{ backgroundColor: `${testimonial.color}15`, color: testimonial.color, border: `1.5px solid ${testimonial.color}44` }}>
                                    {testimonial.initials}
                                </div>
                                <div className={styles.info}>
                                    <h4 className={styles.name}>{testimonial.author}</h4>
                                    <p className={styles.role}>
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel Pagination Dots Indicator */}
                <div className={styles.dotsIndicator}>
                    <span className={`${styles.dot} ${styles.active}`}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
        </section>
    );
};

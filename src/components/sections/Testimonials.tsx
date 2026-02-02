import { Card } from '../ui/Card';
import type { Testimonial } from '../../types';
import styles from './Testimonials.module.scss';

const testimonialsData: Testimonial[] = [
    {
        id: '1',
        quote: 'Exceptional work! The application exceeded our expectations. Professional, timely, and always available to address our concerns.',
        author: 'Festus Addai',
        role: 'CEO',
        company: 'Ancestral Tallow',
        initials: 'FA',
    },
    // {
    //     id: '2',
    //     quote: 'Transformed our outdated system into a modern, scalable solution. The attention to detail and technical expertise were outstanding.',
    //     author: 'James Chen',
    //     role: 'CTO',
    //     company: 'DataSync Solutions',
    //     initials: 'JC',
    // },
    // {
    //     id: '3',
    //     quote: 'Highly recommend! Delivered a complex project on time and within budget. Great communication and problem-solving skills.',
    //     author: 'Emily Rodriguez',
    //     role: 'Founder',
    //     company: 'StartupHub',
    //     initials: 'ER',
    // },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className={`section ${styles.testimonials}`}>
            <div className="container">
                <h2 className="section-title">Client Testimonials</h2>
                <p className="section-subtitle">
                    What clients say about working with SchriftFlow
                </p>

                <div className={styles.grid}>
                    {testimonialsData.map((testimonial, index) => (
                        <Card key={testimonial.id} delay={index * 0.1}>
                            <div className={styles.testimonial}>
                                <p className={styles.quote}>{testimonial.quote}</p>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>{testimonial.initials}</div>
                                    <div className={styles.info}>
                                        <h4>{testimonial.author}</h4>
                                        <p>
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

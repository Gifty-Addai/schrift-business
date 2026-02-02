import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import type { ContactFormData } from '../../types';
import styles from './Contact.module.scss';

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        console.log('Form submitted:', data);
        setIsSubmitted(true);
        reset();

        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <h2 className="section-title">Let's Build Something Amazing</h2>
                <p className="section-subtitle">
                    Ready to start your project? Get in touch and let's discuss how I can help
                </p>

                <motion.form
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className={styles.input}
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className={styles.input}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="project" className={styles.label}>
                            Project Type
                        </label>
                        <input
                            id="project"
                            type="text"
                            className={styles.input}
                            placeholder="e.g., Web Development, Mobile App"
                            {...register('project')}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>
                            Project Details
                        </label>
                        <textarea
                            id="message"
                            className={styles.textarea}
                            {...register('message', { required: 'Message is required' })}
                        />
                        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                    </div>

                    <Button type="submit" variant="primary" style={{ width: '100%' }}>
                        Send Message
                    </Button>

                    {isSubmitted && (
                        <motion.div
                            className={styles.success}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            ✓ Message sent successfully! I'll get back to you soon.
                        </motion.div>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

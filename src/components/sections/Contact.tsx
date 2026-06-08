import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
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
        <section id="contact" className="section section-light">
            <div className="container">
                <div className={styles.contactGrid}>
                    {/* Left Column: Info & Details */}
                    <motion.div
                        className={styles.infoColumn}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.tagline}>Get in Touch</span>
                        <h2 className={styles.title}>
                            Have an Awesome Project Idea? <span>Let's Discuss</span>
                        </h2>
                        <p className={styles.description}>
                            Ready to start your next software project? Or simply want to chat about potential custom layouts? Drop us a message, and we'll get back to you within 24 hours.
                        </p>

                        <div className={styles.detailsList}>
                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><FaEnvelope size={16} /></div>
                                <div className={styles.detailText}>
                                    <span>Mail Us</span>
                                    <a href="mailto:hacphran122@gmail.com">hacphran122@gmail.com</a>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><FaPhone size={16} /></div>
                                <div className={styles.detailText}>
                                    <span>Call Us</span>
                                    <a href="tel:+233247413964">+233 24 741 3964</a>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><FaMapMarkerAlt size={16} /></div>
                                <div className={styles.detailText}>
                                    <span>Location</span>
                                    <p>Accra, Ghana</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className={styles.socials}>
                            <a href="https://github.com/Frank732" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/frankaddai/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Form */}
                    <motion.div
                        className={styles.formColumn}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className={`glass-card-light ${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className={styles.input}
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Email Address or Phone
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="Enter email or phone number"
                                    className={styles.input}
                                    {...register('email', {
                                        required: 'Contact information is required',
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
                                    placeholder="e.g., Web App, Mobile App, Design"
                                    {...register('project')}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    Project Details
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Briefly describe your project idea"
                                    className={styles.textarea}
                                    {...register('message', { required: 'Details are required' })}
                                />
                                {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>

                            {isSubmitted && (
                                <motion.div
                                    className={styles.success}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✓ Message sent successfully! We will get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import type { ContactFormData } from '../../types';

// Endpoint: Cloudflare Pages Function at /api/contact
// The Web3Forms API key is stored as a secret binding in Cloudflare Pages,
// never exposed to the browser.
const API_ENDPOINT = '/api/contact';

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);
        setSubmitError(null);

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    project: data.project,
                    message: data.message,
                }),
            });

            const result = await response.json() as { success: boolean; message?: string };

            if (result.success) {
                setIsSubmitted(true);
                reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                setSubmitError(result.message || 'Submission failed. Please try emailing directly.');
            }
        } catch (err) {
            console.error('Contact form error:', err);
            setSubmitError('Network error. Please check your connection or email us directly.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-slate-50 text-slate-800 py-16 md:py-24 relative border-b border-slate-200/50">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
                    {/* Left Column: Info & Details */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-heading text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3 block">
                            Get in Touch
                        </span>
                        <h2 className="font-heading text-3xl sm:text-[2.75rem] font-bold text-slate-900 leading-tight mb-4">
                            Have an Awesome Project Idea? <span className="text-gradient">Let's Discuss</span>
                        </h2>
                        <p className="text-slate-600 text-base leading-relaxed mb-8">
                            Ready to start your next software project? Or simply want to chat about potential custom layouts? Drop us a message, and we'll get back to you within 24 hours.
                        </p>

                        <div className="flex flex-col gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Mail Us</span>
                                    <a href="mailto:hacphran122@gmail.com" className="text-base font-bold text-slate-800 transition-colors duration-200 hover:text-violet-600">
                                        hacphran122@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center flex-shrink-0">
                                    <FaPhone size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Call Us</span>
                                    <a href="tel:+233209951262" className="text-base font-bold text-slate-800 transition-colors duration-200 hover:text-violet-600">
                                        +233 20 995 1262
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Location</span>
                                    <p className="text-base font-bold text-slate-800 m-0">Accra, Ghana</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a href="https://github.com/Frank732" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm transition-all duration-300 hover:text-white hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(139,92,246,0.2)]">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/frankaddai/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm transition-all duration-300 hover:text-white hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(139,92,246,0.2)]">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Form */}
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="glass-card-light p-6 md:p-8 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1.5 text-sm font-semibold text-slate-700">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-900 font-body text-sm placeholder-slate-450 transition-all duration-300 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1.5 text-sm font-semibold text-slate-700">
                                    Email Address or Phone
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="Enter email or phone number"
                                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-900 font-body text-sm placeholder-slate-450 transition-all duration-300 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                                    {...register('email', {
                                        required: 'Contact information is required',
                                    })}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="project" className="block mb-1.5 text-sm font-semibold text-slate-700">
                                    Project Type
                                </label>
                                <input
                                    id="project"
                                    type="text"
                                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-900 font-body text-sm placeholder-slate-450 transition-all duration-300 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                                    placeholder="e.g., Web App, Mobile App, Design"
                                    {...register('project')}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1.5 text-sm font-semibold text-slate-700">
                                    Project Details
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Briefly describe your project idea"
                                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-900 font-body text-sm placeholder-slate-450 min-h-[110px] resize-vertical transition-all duration-300 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                                    {...register('message', { required: 'Details are required' })}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-heading text-base font-semibold rounded-full shadow-[0_4px_15px_rgba(139,92,246,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(139,92,246,0.3)] active:translate-y-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>

                            {isSubmitted && (
                                <motion.div
                                    className="bg-emerald-600 text-white p-3 rounded-lg mt-4 text-center text-sm font-medium"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✓ Message sent successfully! We will get back to you soon.
                                </motion.div>
                            )}

                            {submitError && (
                                <motion.div
                                    className="bg-red-600 text-white p-3 rounded-lg mt-4 text-center text-sm font-medium"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ⚠ {submitError}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

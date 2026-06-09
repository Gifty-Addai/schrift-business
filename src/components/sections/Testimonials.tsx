import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
    {
        id: '1',
        quote: 'Exceptional work! The Ancestral Tallow e-commerce app exceeded our expectations. Professional, timely, and always available to address our concerns.',
        author: 'Festus Addai',
        role: 'CEO',
        company: 'Ancestral Tallow',
        initials: 'FA',
        color: '#8B5CF6'
    },
    {
        id: '2',
        quote: 'The mobile library they designed is incredibly fast and animations are extremely fluid. The attention to detail and theme options are outstanding.',
        author: 'Aisha Bello',
        role: 'Product Lead',
        company: 'sDesign Flutter App',
        initials: 'AB',
        color: '#A78BFA'
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
        <section id="testimonials" className="bg-slate-900 text-slate-100 py-16 md:py-24 relative border-b border-white/5">
            <div className="container">
                <span className="font-heading text-sm font-semibold text-violet-400 uppercase tracking-widest text-center mb-3 block">
                    Feedback
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white text-center leading-tight mb-4">
                    Testimonials That Speak to <span className="text-gradient">Our Results</span>
                </h2>
                <p className="text-slate-400 text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                    Here is what clients and partners say about working with SchriftFlow
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="group relative p-6 rounded-2xl glass-card-dark flex flex-col h-full hover:border-violet-500/20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Quote icon decoration */}
                            <div className="absolute top-6 right-6">
                                <FaQuoteRight size={24} className="text-white opacity-5 transition-all duration-300 group-hover:text-violet-400 group-hover:opacity-20" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-violet-400 text-sm" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed italic mb-6 flex-grow">"{testimonial.quote}"</p>

                            <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
                                <div className="w-11 h-11 rounded-full flex items-center justify-center font-heading text-base font-bold select-none" style={{ backgroundColor: `${testimonial.color}15`, color: testimonial.color, border: `1.5px solid ${testimonial.color}44` }}>
                                    {testimonial.initials}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-heading text-base font-bold text-white mb-0.5">{testimonial.author}</h4>
                                    <p className="text-slate-400 text-xs">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel Pagination Dots Indicator */}
                <div className="flex justify-center gap-2 mt-12">
                    <span className="w-6 h-2 rounded-full bg-violet-600 transition-all duration-300"></span>
                    <span className="w-2 h-2 rounded-full bg-white/15 cursor-pointer transition-all duration-300 hover:bg-white/40"></span>
                    <span className="w-2 h-2 rounded-full bg-white/15 cursor-pointer transition-all duration-300 hover:bg-white/40"></span>
                </div>
            </div>
        </section>
    );
};

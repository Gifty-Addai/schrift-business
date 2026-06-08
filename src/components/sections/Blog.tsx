import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Blog.module.scss';

const posts = [
    {
        id: 1,
        tag: 'Frontend',
        date: 'June 5, 2026',
        title: 'Performance Optimization in Modern React Applications',
        gradientClass: styles.gradBluePurple,
        illustration: (
            <svg viewBox="0 0 200 120" fill="none" className={styles.illustrationSvg}>
                {/* React Atom Symbol representation */}
                <ellipse cx="100" cy="60" rx="15" ry="40" stroke="white" strokeWidth="1.5" transform="rotate(30 100 60)" opacity="0.6" />
                <ellipse cx="100" cy="60" rx="15" ry="40" stroke="white" strokeWidth="1.5" transform="rotate(90 100 60)" opacity="0.6" />
                <ellipse cx="100" cy="60" rx="15" ry="40" stroke="white" strokeWidth="1.5" transform="rotate(150 100 60)" opacity="0.6" />
                <circle cx="100" cy="60" r="4" fill="white" />
                {/* Speed indicator lines */}
                <path d="M40 90 L 160 90" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />
                <path d="M40 90 L 110 90" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
                <circle cx="110" cy="90" r="4" fill="white" />
            </svg>
        )
    },
    {
        id: 2,
        tag: 'Flutter',
        date: 'May 28, 2026',
        title: 'State Management and Custom Themes using sDesign',
        gradientClass: styles.gradGreenCyan,
        illustration: (
            <svg viewBox="0 0 200 120" fill="none" className={styles.illustrationSvg}>
                {/* Flutter style icon */}
                <path d="M100 20 L130 50 L110 70 L80 40 Z" fill="white" fillOpacity="0.8" />
                <path d="M110 70 L130 90 L100 100 L80 80 Z" fill="white" fillOpacity="0.4" />
                {/* Visual interface elements */}
                <rect x="35" y="45" width="30" height="30" rx="4" fill="white" fillOpacity="0.2" />
                <rect x="135" y="45" width="30" height="30" rx="4" fill="white" fillOpacity="0.2" />
                <circle cx="50" cy="60" r="5" fill="white" />
                <circle cx="150" cy="60" r="5" fill="white" />
            </svg>
        )
    },
    {
        id: 3,
        tag: 'Backend',
        date: 'May 15, 2026',
        title: 'Scaling NodeJS backend systems to handle 10k RPS',
        gradientClass: styles.gradYellowOrange,
        illustration: (
            <svg viewBox="0 0 200 120" fill="none" className={styles.illustrationSvg}>
                {/* Database cylinders */}
                <rect x="75" y="25" width="50" height="20" rx="10" fill="white" fillOpacity="0.8" />
                <rect x="75" y="50" width="50" height="20" rx="10" fill="white" fillOpacity="0.5" />
                <rect x="75" y="75" width="50" height="20" rx="10" fill="white" fillOpacity="0.3" />
                {/* Flow lines */}
                <path d="M45 45 Q 70 35, 75 35" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M155 45 Q 130 35, 125 35" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="45" cy="45" r="3" fill="white" />
                <circle cx="155" cy="45" r="3" fill="white" />
            </svg>
        )
    }
];

export const Blog = () => {
    return (
        <section id="blog" className="section section-dark">
            <div className="container">
                <span className={styles.tagline}>Latest Insights</span>
                <h2 className="section-title">
                    From my <span>blog post</span>
                </h2>
                <p className="section-subtitle">
                    Sharing knowledge, experiences, and technical guides about modern software engineering
                </p>

                <div className="grid grid-3">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className={`glass-card-dark ${styles.blogCard}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Colorful Image Box with SVG */}
                            <div className={`${styles.imageBox} ${post.gradientClass}`}>
                                {post.illustration}
                            </div>

                            {/* Info */}
                            <div className={styles.info}>
                                <div className={styles.meta}>
                                    <span className={styles.tag}>{post.tag}</span>
                                    <span className={styles.dot}>•</span>
                                    <span className={styles.date}>{post.date}</span>
                                </div>
                                <h3 className={styles.titleText}>{post.title}</h3>
                            </div>

                            {/* Arrow Button bottom right */}
                            <div className={styles.arrowWrapper}>
                                <button className={styles.arrowBtn} aria-label={`Read ${post.title}`}>
                                    <FaArrowRight size={12} className={styles.arrowIcon} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

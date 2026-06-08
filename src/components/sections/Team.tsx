import { motion } from 'framer-motion';
import styles from './Team.module.scss';

const teamMembers = [
    {
        name: 'Frank Addai',
        role: 'Founder & Software Architect',
        initials: 'FA',
        color: '#8B5CF6'
    },
    {
        name: 'Festus Addai',
        role: 'Co-Founder & Business Strategist',
        initials: 'FA',
        color: '#FF7A00'
    },
    {
        name: 'Grace Mensah',
        role: 'Lead UI/UX Designer',
        initials: 'GM',
        color: '#EC4899'
    },
    {
        name: 'Kofi Owusu',
        role: 'Senior Full Stack Developer',
        initials: 'KO',
        color: '#10B981'
    }
];

export const Team = () => {
    return (
        <section id="team" className="section section-light">
            <div className="container">
                <span className={styles.tagline}>The Brains</span>
                <h2 className="section-title">
                    Meet the <span>Team</span>
                </h2>
                <p className="section-subtitle">
                    The creative experts and technical minds driving our digital innovations
                </p>

                <div className={styles.teamContainer}>
                    {/* Dashed connecting vector path (desktop only) */}
                    <svg className={styles.connectingLine} viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 50 Q 275 120, 500 50 T 950 50" stroke="#FF7A00" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
                    </svg>

                    <div className={styles.membersWrapper}>
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className={styles.memberCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className={styles.avatarWrapper} style={{ boxShadow: `0 0 20px rgba(0, 0, 0, 0.02), inset 0 0 0 3px ${member.color}22` }}>
                                    <div className={styles.avatarInner} style={{ backgroundColor: `${member.color}10`, color: member.color }}>
                                        {/* Fallback initials representation */}
                                        <span className={styles.initials}>{member.initials}</span>
                                    </div>
                                    {/* Hover Ring */}
                                    <div className={styles.hoverRing} style={{ borderColor: member.color }}></div>
                                </div>
                                
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{member.name}</h3>
                                    <p className={styles.role}>{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

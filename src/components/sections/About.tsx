import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
// import type { Stat } from '../../types';
import styles from './About.module.scss';

// const statsData: Stat[] = [
//   { id: '1', value: 50, label: 'Projects Completed', suffix: '+' },
//   { id: '2', value: 35, label: 'Happy Clients', suffix: '+' },
//   { id: '3', value: 5, label: 'Years Experience' },
//   { id: '4', value: 98, label: 'Client Satisfaction', suffix: '%' },
// ];

export const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">
          Why Choose <span className="text-gradient">SchriftFlow</span>
        </h2>
        {/* <p className="section-subtitle">
          Delivering exceptional results through expertise, dedication, and innovation
        </p> */}

        {/* <div className={styles.stats}>
          {statsData.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div> */}

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              <span className="text-gradient">Agile Development Process</span>
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              We follow a streamlined development methodology that ensures quality,
              transparency, and timely delivery. From initial consultation to deployment
              and beyond, you'll have complete visibility into your project's progress.
            </p>
            <ul className={styles.process} style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <strong>01.</strong> Discovery & Planning
              </li>
              <li>
                <strong>02.</strong> Design & Architecture
              </li>
              <li>
                <strong>03.</strong> Development & Testing
              </li>
              <li>
                <strong>04.</strong> Deployment & Support
              </li>
            </ul>
          </motion.div>

          <Card delay={0.2}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Core Values</h4>
            <div className={styles.values}>
              <div>
                <h5>💡 Innovation First</h5>
                <p>Leveraging cutting-edge technologies and best practices</p>
              </div>
              <div>
                <h5>🎯 Quality Driven</h5>
                <p>Clean code, comprehensive testing, and attention to detail</p>
              </div>
              <div>
                <h5>🤝 Client Partnership</h5>
                <p>Collaborative approach with transparent communication</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

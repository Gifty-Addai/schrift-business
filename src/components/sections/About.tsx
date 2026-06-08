import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-slate-100 py-16 md:py-24 relative border-b border-white/5">
      <div className="container">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white text-center leading-tight mb-12">
          Why Choose <span className="text-gradient">SchriftFlow</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              <span className="text-gradient">Agile Development Process</span>
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              We follow a streamlined development methodology that ensures quality,
              transparency, and timely delivery. From initial consultation to deployment
              and beyond, you'll have complete visibility into your project's progress.
            </p>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm leading-relaxed list-none p-0">
              <li>
                <strong className="text-violet-400 font-heading font-bold mr-2">01.</strong> Discovery & Planning
              </li>
              <li>
                <strong className="text-violet-400 font-heading font-bold mr-2">02.</strong> Design & Architecture
              </li>
              <li>
                <strong className="text-violet-400 font-heading font-bold mr-2">03.</strong> Development & Testing
              </li>
              <li>
                <strong className="text-violet-400 font-heading font-bold mr-2">04.</strong> Deployment & Support
              </li>
            </ul>
          </motion.div>

          <Card delay={0.2}>
            <h4 className="font-heading text-xl font-bold text-white mb-6">Core Values</h4>
            <div className="flex flex-col gap-6">
              <div>
                <h5 className="font-heading text-base font-bold text-white mb-1">💡 Innovation First</h5>
                <p className="text-slate-400 text-sm leading-relaxed">Leveraging cutting-edge technologies and best practices</p>
              </div>
              <div>
                <h5 className="font-heading text-base font-bold text-white mb-1">🎯 Quality Driven</h5>
                <p className="text-slate-400 text-sm leading-relaxed">Clean code, comprehensive testing, and attention to detail</p>
              </div>
              <div>
                <h5 className="font-heading text-base font-bold text-white mb-1">🤝 Client Partnership</h5>
                <p className="text-slate-400 text-sm leading-relaxed">Collaborative approach with transparent communication</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import styles from './Hero.module.scss';
import { FaArrowRight } from 'react-icons/fa';

export const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 600;
        canvas.height = 600;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas!.width) this.x = 0;
                if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                if (this.y < 0) this.y = canvas!.height;
            }

            draw() {
                ctx!.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        const particles: Particle[] = [];
        for (let i = 0; i < 80; i++) {
            particles.push(new Particle());
        }

        let rotation = 0;
        const drawRotatingShape = () => {
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(rotation);

            const segments = 60;
            const radius = 150;
            const tubeRadius = 30;

            for (let i = 0; i < segments; i++) {
                const angle1 = (i / segments) * Math.PI * 2;
                const angle2 = ((i + 1) / segments) * Math.PI * 2;

                const x1 = Math.cos(angle1) * radius;
                const y1 = Math.sin(angle1) * radius;
                const x2 = Math.cos(angle2) * radius;
                const y2 = Math.sin(angle2) * radius;

                const opacity = (Math.sin(angle1 + rotation * 2) + 1) / 4 + 0.1;

                const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(99, 102, 241, ${opacity + 0.1})`);
                gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = tubeRadius * (Math.sin(angle1) * 0.5 + 1);
                ctx.lineCap = 'round';

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }

            ctx.restore();
        };

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            drawRotatingShape();
            rotation += 0.005;

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <canvas ref={canvasRef} className={styles.canvas} />

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Crafting <span className={styles.gradient}>Future Software</span> Today
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Transform your ideas into elegant, scalable solutions. Bring your digital ideas to life.
                </motion.p>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >

                    <Button variant="primary" onClick={scrollToContact}>
                        Let's talk <span className={styles.iconWrapper}><FaArrowRight size={14} /></span>
                    </Button>

                </motion.div>
            </div>
        </section>
    );
};

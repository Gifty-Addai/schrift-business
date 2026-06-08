import styles from './Marquee.module.scss';

const marqueeItems = [
    'UX Design',
    'App Design',
    'Branding',
    'UX Research',
    'Web Development',
    'Cloud Systems',
    'Software Architecture'
];

export const Marquee = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {/* Loop twice for perfect wrap around scrolling */}
                {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className={styles.group}>
                        {marqueeItems.map((item, itemIndex) => (
                            <div key={itemIndex} className={styles.item}>
                                <span>{item}</span>
                                <span className={styles.dot}>✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

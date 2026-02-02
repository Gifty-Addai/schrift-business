import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: ReactNode;
}

export const Button = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`${styles.btn} ${styles[`btn-${variant}`]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

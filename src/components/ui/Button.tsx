import type { ReactNode, ButtonHTMLAttributes } from 'react';

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
    const baseStyle = "font-heading font-semibold text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center justify-center gap-2";
    
    const variants = {
        primary: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
        secondary: "border border-slate-200 text-slate-850 hover:text-violet-600 hover:border-violet-500 hover:bg-violet-50"
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

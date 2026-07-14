import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', href, className = '', children, ...props }) => {
  const cls = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={cls} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;

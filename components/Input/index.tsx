import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

const Input: React.FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(({ error, className, ...props }, ref) => {
    return (
        <input className={cn(styles.input, className, {
            [styles.error]: error,
        })}
               {...props}
               ref={ref}
        />
    );
});

export default Input;

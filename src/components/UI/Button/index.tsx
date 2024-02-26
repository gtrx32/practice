import { PropsWithChildren } from 'react';
import s from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends PropsWithChildren {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <button className={clsx(s.button, className)} {...props}>
    {children}
  </button >
);

export default Button;
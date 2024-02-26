import { PropsWithChildren } from 'react';
import s from './Container.module.scss';
import clsx from 'clsx';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <div className={clsx(s.container, className)}>
    {children}
  </div>
);

export default Container;
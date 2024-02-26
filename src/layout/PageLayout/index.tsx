import s from './PageLayout.module.scss';
import Header from '../Header';
import Container from '../../components/UI/Container';
import SideNav from '../SideNav';
import { PropsWithChildren } from 'react';

interface PageLayoutProps extends PropsWithChildren {
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className={s.wrapper}>
    <Header />
    <main className={s.main}>
      <SideNav />
      {children}
    </main>
  </div>
);

export default PageLayout;
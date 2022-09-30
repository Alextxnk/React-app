import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';

export const Layout = ({ children }: SidebarProps): JSX.Element => {
   return (
      <>
         <Header />
         <div>
            <Sidebar />
            <div>
               {children}
            </div>
         </div>
         <Footer />
      </>
   );
};
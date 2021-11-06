import FooterComponent from './footer/footer-component';
import HeaderComponent from './header/header-component';
import SidebarComponent from './sidebar/sidebar.component';

export default function DefaultComponent({ children }) {
  return (
    <>
      <HeaderComponent />
      <SidebarComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}

import FooterComponent from './footer/footer-component';
import HeaderComponent from './header/header-component';
import SidebarComponent from './sidebar/sidebar-component';
import MenuComponent from './menu/menu-component';
import './privado-layout.scss';

export default function PrivadoLayout({ children }) {
  return (
    <div className="private-layout">
      <MenuComponent />
      <main>
        <SidebarComponent />
        <section className="private-layout-content">{children}</section>
      </main>
    </div>
  );
}

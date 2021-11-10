import FooterComponent from './footer/footer-component';
import HeaderComponent from './header/header-component';
import SidebarComponent from './sidebar/sidebar-component';
import MenuComponent from './menu/menu-component';
import './privado-layout.scss';
import HeaderRutaComponent from './header-ruta/header-ruta-component';

export default function PrivadoLayout({ children }) {
  return (
    <div className="private-layout">
      <MenuComponent />
      <main className="private-layout-content">
        <SidebarComponent />
        <HeaderRutaComponent />
        <section className="content rounded-md">{children}</section>
      </main>
    </div>
  );
}

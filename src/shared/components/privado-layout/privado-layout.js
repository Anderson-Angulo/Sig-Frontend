/* import FooterComponent from './footer/footer-component';
import HeaderComponent from './header/header-component'; */
import SidebarComponent from './sidebar/sidebar-component';
import MenuComponent from './menu/menu-component';
import HeaderRutaComponent from './header-ruta/header-ruta-component';
import './privado-layout.scss';
import PrivateLayoutSekeleton from './skeletons/private-layout-skeleton';

export default function PrivadoLayout({ children }) {
  /* <PrivateLayoutSekeleton />; */

  return (
    <div className="private-layout">
      <MenuComponent />
      <main className="private-layout-content">
        <SidebarComponent />
        <HeaderRutaComponent />
        <div>
          <section className="content rounded-md">{children}</section>
        </div>
      </main>
    </div>
  );
}

import { Fragment, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import SidebarComponent from './sidebar/sidebar-component';
import MenuComponent from './menu/menu-component';
import HeaderComponent from './header/header.component';
import './privado-layout.scss';
import 'shared/styles/components/botones.scss';

export default function PrivadoLayout({ children }) {
  const toast = useRef(null);
  const mensaje = useSelector((state) => state.toastReducer.toast);
  const isOpen = useSelector((state) => state.toggleSidebarReducer.isOpen);

  useEffect(() => {
    if (mensaje != null) toast.current.show(mensaje);
  }, [mensaje]);

  return (
    <Fragment>
      <div className="private-layout">
        <MenuComponent />
        <main
          className={`private-layout-content ${isOpen ? 'closed-sidebar' : ''}`}
        >
          <SidebarComponent />
          <HeaderComponent />
          <div>
            <section className="content scroll" id="content-main">
              {children}
            </section>
          </div>
        </main>
        <Toast ref={toast}></Toast>
      </div>
    </Fragment>
  );
}

import { Fragment, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import SidebarComponent from './sidebar/sidebar-component';
import MenuComponent from './menu/menu-component';
import './privado-layout.scss';
import HeaderComponent from './header/header.component';

export default function PrivadoLayout({ children }) {
  const toast = useRef(null);
  const mensaje = useSelector((state) => state.toastReducer.toast);

  useEffect(() => {
    if (mensaje != null) toast.current.show(mensaje);
  }, [mensaje]);

  return (
    <Fragment>
      <div className="private-layout">
        <MenuComponent />
        <main className="private-layout-content">
          <SidebarComponent />
          <HeaderComponent />
          <div>
            <section className="content rounded-md scroll" id="content-main">
              {children}
            </section>
          </div>
        </main>
        <Toast ref={toast}></Toast>
      </div>
    </Fragment>
  );
}

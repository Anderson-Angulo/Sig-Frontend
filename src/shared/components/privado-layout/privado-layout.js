import { Fragment, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import SidebarComponent from './sidebar/sidebar-component';
import MenuComponent from './menu/menu-component';
import HeaderRutaComponent from './header-ruta/header-ruta-component';
import './privado-layout.scss';

export default function PrivadoLayout({ children }) {

  const toast = useRef(null);
  const mensaje = useSelector(state => state.toastReducer.toast);

  useEffect((c) => { if (mensaje != null) toast.current.show(mensaje); }, [mensaje]);

  return (
    <Fragment>
      <div className="private-layout">
        <MenuComponent />
        <main className="private-layout-content">
          <SidebarComponent />
          <HeaderRutaComponent />
          <div>
            <section className="content rounded-md">{children}</section>
          </div>
        </main>
        <Toast ref={toast}></Toast>
      </div>
    </Fragment>


  );
}

import { Fragment, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import SidebarComponent from './sidebar/SidebarComponent';
import MenuComponent from './menu/MenuComponent';
import HeaderComponent from './header/HeaderComponent';
import { isSmallScreen } from '../../utils/isSmallScreen';
import 'shared/styles/components/buttons.scss';
import './PrivateLayout.scss';

export default function PrivateLayout({ children }) {
  const toast = useRef(null);
  const message = useSelector((state) => state.toastReducer.toast);
  const isOpen = useSelector((state) => state.toggleSidebarReducer.isOpen);

  useEffect(() => {
    if (message != null) toast.current.show(message);
  }, [message]);

  return (
    <Fragment>
      <div className="private-layout">
        <MenuComponent />

        {!isSmallScreen() ? (
          <main
            className={`private-layout-content ${
              isOpen ? 'closed-sidebar' : ''
            }`}
          >
            <SidebarComponent />
            <HeaderComponent />
            <div>
              <section className="content scroll" id="content-main">
                {children}
              </section>
            </div>
          </main>
        ) : (
          <>
            <HeaderComponent />
            <div>
              <section className="content scroll" id="content-main">
                {children}
              </section>
            </div>
          </>
        )}

        <Toast ref={toast}></Toast>
      </div>
    </Fragment>
  );
}

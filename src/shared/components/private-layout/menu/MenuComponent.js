import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import LogoComponent from 'shared/components/logo/LogoComponent';
import { authAction } from 'core/store/actions/AuthAction';
import { toggleSidebar } from 'features/configuration/store/actions/ToggleSidebarAction';
import { isSmallScreen } from '../../../utils/isSmallScreen';
import './MenuComponent.scss';
import limitCharacters from 'shared/utils/limitCharacters';

const MenuComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const usuarioInformation = useSelector((state) => state.authReducer.user);
  const [menu, setMenu] = useState([]);
  const isOpen = useSelector((state) => state.toggleSidebarReducer.isOpen);

  const op = useRef(null);

  useEffect(() => {
    if (usuarioInformation?.menuAdministrador)
      setMenu(usuarioInformation?.menuAdministrador[0].subMenus);
  }, [usuarioInformation]);

  const onLogout = (e) => {
    op.current.hide();
    dispatch(authAction.logout());
  };

  const toggle = () => dispatch(toggleSidebar.toggle(!isOpen));

  return (
    <div
      className="menu-component"
      style={{ backgroundColor: '#004680', color: '#fff' }}
    >
      <div className="icon-w-logo flex justify-between items-center">
        <LogoComponent />
        {!isSmallScreen() && (
          <div className="menu-option flex items-center" onClick={toggle}>
            <i className="pi pi-bars"></i>
          </div>
        )}
      </div>
      <div className="user-options flex justify-between items-center">
        <div
          className="menu-option user-avatar relative"
          onClick={(e) => op.current.toggle(e)}
          aria-haspopup
          aria-controls="overlay_panel"
        >
          <img
            src={usuarioInformation?.avatar}
            alt={usuarioInformation?.nombreCompleto}
          />

          <OverlayPanel
            ref={op}
            dismissable
            id="overlay_panel"
            className="user-sub-options rounded-md"
          >
            <header
              className="user-sub-options-header"
              style={{ backgroundColor: '#004680' }}
            >
              <div className="user-photo">
                <img
                  src={usuarioInformation?.avatar}
                  alt={usuarioInformation?.nombreCompleto}
                ></img>
              </div>
              <div className="user-info">
                <h2 title={usuarioInformation?.nombres}>
                  {limitCharacters(usuarioInformation?.nombres)}
                </h2>
                <h2 title={usuarioInformation?.apellidos}>
                  {limitCharacters(usuarioInformation?.apellidos)}
                </h2>
              </div>
              <div className="user-email">
                <p title={usuarioInformation?.correo}>
                  {limitCharacters(usuarioInformation?.correo, 32)}
                </p>
              </div>
            </header>
            <div className="user-sub-options rounded-md">
              <div
                className="user-sub-options-items shadow-xl"
                style={{ color: '#004680' }}
              >
                {menu?.map(({ codigo, icono, descripcion, url }, i) => (
                  <div
                    key={codigo}
                    className="item"
                    onClick={() => history.push(url)}
                  >
                    <i className={icono}></i>
                    <p>{descripcion}</p>
                  </div>
                ))}

                <div className="item item-logout mt-2">
                  <Button
                    type="button"
                    onClick={(e) => onLogout(e)}
                    label="Cerrar Sesi??n"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </div>
          </OverlayPanel>
        </div>
        {/*         <div className="menu-option countries">
          <img src="/images/decorations/peru.png" alt="Bandera de Per??" />
        </div> */}
      </div>
    </div>
  );
};

export default MenuComponent;

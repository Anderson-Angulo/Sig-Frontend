import { Button } from 'primereact/button';
import { useState } from 'react';
import { useHistory } from 'react-router';
import LogoComponent from 'shared/components/logo/logo-component';
import './menu-component.scss';

const MenuComponent = () => {
  const history = useHistory();
  const [showItems, setShowItems] = useState(false);

  const usuarioId = 1;
  const items = [
    {
      item: 'Perfil',
      icono: 'pi pi-user',
      route: `/configuracion/usuario/${usuarioId}`,
    },
    {
      item: 'Gestión de Usuarios',
      icono: 'pi pi-user-edit',
      route: '/configuracion/usuarios',
    },
    {
      item: 'Roles y Privilegios',
      icono: 'pi pi-users',
      route: '/configuracion/rol-privilegios',
    },
    {
      item: 'Configuración de Sistema',
      icono: 'pi pi-cog',
      route: '/configuracion/sistema',
    },
  ];

  const cambiarPagina = (route) => {
    setShowItems(false);
    history.push(route);
  };

  const limiteCaracteres = (texto, limite = 20) => {
    if (texto.length < limite) return texto;
    else return texto.slice(0, limite) + '...';
  };

  const cerrarSesion = () => {
    console.log('cerrando sesión');
  };

  return (
    <div
      className="menu-component"
      style={{ backgroundColor: '#004680', color: '#fff' }}
    >
      <div className="icon-w-logo flex justify-between items-center">
        <LogoComponent />
        <div className="menu-option">
          <i className="pi pi-bars"></i>
        </div>
      </div>
      <div className="user-options flex justify-between items-center">
        <div
          className={`menu-option user-avatar relative ${
            showItems ? 'activated' : ''
          }`}
          id="user-avatar"
          onClick={() => setShowItems(!showItems)}
        >
          <img src="/images/decorations/avatar.jpg" alt="Juan Carlos Tenorio" />
          {showItems && (
            <div
              className="user-sub-options rounded-md"
              style={{ border: '1px solid #004680' }}
            >
              <header
                className="user-sub-options-header"
                style={{ backgroundColor: '#004680' }}
              >
                <div className="user-picture">
                  <img
                    src="/images/decorations/avatar.jpg"
                    alt="Juan Carlos Tenorio"
                  ></img>
                </div>
                <div className="user-info">
                  <h1 title="Juan Carlos Tenorio">
                    {limiteCaracteres('Juan Carlos Tenorio')}
                  </h1>
                  <p>{limiteCaracteres('juancarlosdev@gmail.com', 18)}</p>
                </div>
              </header>

              <div
                className="user-sub-options-items shadow-xl"
                style={{ color: '#004680' }}
              >
                {items.map(({ item, icono, route }, i) => (
                  <div
                    className="item"
                    key={i}
                    onClick={() => cambiarPagina(route)}
                  >
                    <i className={icono}></i>
                    <p>{item}</p>
                  </div>
                ))}

                <div className="item item-logout mt-2" onClick={cerrarSesion}>
                  <Button
                    type="button"
                    label="Cerrar Sesión"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="menu-option countries">
          <img src="/images/decorations/peru.png" alt="Bandera de Perú" />
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;

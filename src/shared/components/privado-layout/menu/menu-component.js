import LogoComponent from 'shared/components/logo/logo-component';
import './menu-component.scss';

const MenuComponent = () => {
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
        <div className="menu-option user-avatar">
          <img src="/images/decorations/avatar.jpg" alt="Juan Carlos Tenorio" />
        </div>
        <div className="menu-option countries">
          <img src="/images/decorations/peru.png" alt="Bandera de Perú" />
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;

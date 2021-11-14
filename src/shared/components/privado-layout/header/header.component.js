
import './header.component.scss';

const HeaderComponent = ({ paginaActual }) => {




  return (
    <header
      className="header-route rounded-md"
      style={{
        backgroundColor: '#fff',
        color: '#004680',
      }}
    >
      <h2>Gestión de Usuario</h2>
      <div className="header-route-content mt-1">
        <div className="current-page-big">
          <p className="text-sm">Home</p>
        </div>
        <i className="pi pi-angle-right"></i>
        <div className="current-page-small">
          <p className="text-sm">Gestión de Usuario</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;

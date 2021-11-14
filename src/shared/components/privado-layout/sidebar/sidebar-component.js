
import { Menu } from 'primereact/menu';
import './sidebar-component.scss';

const SidebarComponent = () => {
  //const usuarioInformation = useSelector(state => state.authReducer.user);

  let items = [
    { label: 'Gestión de Usuarios', icon: 'pi pi-user-edit' },
    { label: 'Roles y Privilegios', icon: 'pi pi-users' },
    { label: 'Configuración de Sistema', icon: 'pi pi-cog' },
  ];

  return (
    <div className="sidebar">
      <Menu model={items} className="shadow-md rounded-md" />
    </div>
  );
};

export default SidebarComponent;

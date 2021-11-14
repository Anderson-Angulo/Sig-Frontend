import { useState } from 'react';
import { useHistory } from 'react-router';
import { Tree } from 'primereact/tree';
import './sidebar-component.scss';

const SidebarComponent = () => {
  const history = useHistory();
  //const usuarioInformation = useSelector(state => state.authReducer.user);
  const [items, _] = useState([
    {
      key: '0',
      label: 'Gestión de Usuarios',
      url: '/configuracion/usuarios',
      icon: 'pi pi-user-edit',
      children: [
        {
          key: '0-0',
          label: 'Sub-Item',
          url: '/configuracion/usuarios',
        },
      ],
    },
    {
      key: '1',
      label: 'Roles y Privilegios',
      url: '/configuracion/rol-privilegios',
      icon: 'pi pi-users',
      children: [
        {
          key: '1-0',
          label: 'Sub-Item',
          url: '/configuracion/rol-privilegios',
        },
      ],
    },
    {
      key: '2',
      label: 'Configuración de Sistema',
      url: '/configuracion/sistema',
      icon: 'pi pi-cog',
      children: [
        {
          key: '2-0',
          label: 'Sub-Item',
          url: '/configuracion/sistema',
        },
      ],
    },
  ]);
  const [selectedKey, setSelectedKey] = useState(null);

  return (
    <div className="sidebar">
      <Tree
        value={items}
        className="shadow-md rounded-md"
        selectionMode="single"
        selectionKeys={selectedKey}
        onSelectionChange={(e) => setSelectedKey(e.value)}
        onSelect={({ node: { url } }) => history.push(url)}
      />
    </div>
  );
};

export default SidebarComponent;

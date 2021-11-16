import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Tree } from 'primereact/tree';
import './sidebar-component.scss';
import { useSelector } from 'react-redux';

const SidebarComponent = () => {
  const history = useHistory();
  const usuarioInformation = useSelector((state) => state.authReducer.user);

  const [menus, setMenus] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    let options = [];
    usuarioInformation?.menuPrincipal?.forEach((menu) => {
      let children = [];
      menu?.subMenus?.forEach((subMenu) => {
        children.push({
          key: subMenu.codigo,
          label: subMenu.descripcion,
          url: subMenu.url,
        });
      });

      options.push({
        key: menu.codigo,
        label: menu.descripcion,
        url: menu.url,
        icon: menu.icono,
        children: children,
      });
    });

    options = options.filter((option) => {
      if (!option.url) delete option.url;
      return option;
    });

    setMenus(options);
  }, [usuarioInformation]);

  return (
    <div className="sidebar">
      <Tree
        value={menus}
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

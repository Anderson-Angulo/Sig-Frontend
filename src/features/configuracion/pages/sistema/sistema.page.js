import { breadcrumpAction } from 'core/store/actions/breadcrump.action';
import ColorCorporativoComponent from 'features/configuracion/components/sistema/color-corporativo/color-corporativo-component';
import LogoEmpresaComponent from 'features/configuracion/components/sistema/logo-empresa/logo-empresa-component';
import { TabView, TabPanel } from 'primereact/tabview';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sistema.page.scss';

const SistemaPage = () => {
  const dispatch = useDispatch();
  const usuarioInformation = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(
      breadcrumpAction.setTitlePage(
        'CONSIS',
        usuarioInformation.menuAdministrador
      )
    );
  }, []);

  return (
    <div className="card tabs-roles">
      <TabView className="tabview-custom" orientation="bottom">
        <TabPanel header="Logo de Empresa" leftIcon="pi pi-calendar">
          <LogoEmpresaComponent />
        </TabPanel>
        <TabPanel header="Color Corporativo" leftIcon="pi pi-palette">
          <ColorCorporativoComponent />
        </TabPanel>
        <TabPanel header="Tipo de Moneda" leftIcon="pi pi-money-bill">
          <p>Tipo de Moneda</p>
        </TabPanel>
        <TabPanel header="Unidad de medida" leftIcon="pi pi-search">
          <p>Unidad de medida</p>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default SistemaPage;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabView, TabPanel } from 'primereact/tabview';
import { BreadcrumpAction } from 'core/store/actions/BreadcrumpAction';
import SistemColorCorporateComponent from 'features/configuration/components/sistem/SistemColorCorporateComponent';
import LogoEmpresaComponent from 'features/configuration/components/sistem/logo-empresa/logo-empresa-component';
import './SistemPage.scss';

const SistemPage = () => {
  const dispatch = useDispatch();
  const userInformation = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(
      BreadcrumpAction.setTitlePage('CONSIS', userInformation.menuAdministrador)
    );
  }, []);

  return (
    <div className="card tabs-roles">
      <TabView className="tabview-custom" orientation="bottom">
        <TabPanel header="Logo de Empresa" leftIcon="pi pi-calendar">
          <LogoEmpresaComponent />
        </TabPanel>
        <TabPanel header="Color Corporativo" leftIcon="pi pi-palette">
          <SistemColorCorporateComponent />
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

export default SistemPage;

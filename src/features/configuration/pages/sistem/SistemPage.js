import { useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import SistemColorCorporateComponent from 'features/configuration/components/sistem/SystemColorCorporateComponent';
import LogoEmpresaComponent from 'features/configuration/components/sistem/logo-empresa/logo-empresa-component';
import './SistemPage.scss';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const SistemPage = () => {
  const { updateTitle } = useSetTitlePage();

  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Sistema',
    });
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

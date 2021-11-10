import LogoEmpresaComponent from 'features/configuracion/components/sistema/logo-empresa/logo-empresa-component';
import { TabView, TabPanel } from 'primereact/tabview';
import './sistema.page.scss';

const SistemaPage = () => {
  return (
    <div className="card tabs-roles">
      <TabView className="tabview-custom">
        <TabPanel header="Logo de Empresa" leftIcon="pi pi-calendar">
          <LogoEmpresaComponent />
        </TabPanel>
        <TabPanel header="Color Corporativo" rightIcon="pi pi-palette">
          <p>Color Corporativo</p>
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

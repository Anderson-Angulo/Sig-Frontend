import { useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import SistemColorCorporateComponent from 'features/configuration/components/sistem/SystemColorCorporateComponent';
import LogoEmpresaComponent from 'features/configuration/components/sistem/logo-empresa/logo-empresa-component';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';
import TypeMoneyComponent from 'features/configuration/components/sistem/TypeMoneyComponent';
import UnitMeasureComponent from 'features/configuration/components/sistem/UnitMeasureComponent';
import './SistemPage.scss';

const SistemPage = () => {
  return (
    <div className="card tabs-sistem">
      <TabView className="tabview-custom" orientation="bottom">
        <TabPanel header="Logo de Empresa" leftIcon="pi pi-calendar">
          <LogoEmpresaComponent />
        </TabPanel>
        <TabPanel header="Color Corporativo" leftIcon="pi pi-palette">
          <SistemColorCorporateComponent />
        </TabPanel>
        <TabPanel header="Tipo de Moneda" leftIcon="pi pi-money-bill">
          <TypeMoneyComponent />
        </TabPanel>
        <TabPanel header="Unidad de medida" leftIcon="pi pi-search">
          <UnitMeasureComponent />
        </TabPanel>
      </TabView>
    </div>
  );
};

export default SistemPage;

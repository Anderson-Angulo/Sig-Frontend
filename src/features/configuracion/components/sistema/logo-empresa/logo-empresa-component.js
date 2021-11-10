import { Button } from 'primereact/button';
import './logo-empresa-component.scss';

const LogoEmpresaComponent = () => {
  return (
    <div>
      <div className="logo-company">
        <div className="logo logo-dark mt-4">
          <img
            src="/images/logos/main-dark-logo.png"
            className="w-full logo mb-3"
            alt="Calidar"
            title="Calidar"
          />
        </div>
        <div className="btn-upload">
          <Button
            type="button"
            icon="pi pi-upload"
            label="Adjuntar logo para fondo oscuro"
            className="btn btn-secondary"
          />
        </div>

        <div className="logo logo-light mt-6">
          <img
            src="/images/logos/main-logo.png"
            className="w-full logo mb-3"
            alt="Calidar"
            title="Calidar"
          />
        </div>
        <div className="btn-upload">
          <input type="file" className="hidden" />
          <Button
            type="button"
            icon="pi pi-upload"
            label="Adjuntar logo para fondo claro"
            className="btn btn-secondary"
          />
        </div>
      </div>
      <div className="flex gap-3 items-center justify-start mt-6">
        <Button type="button" label="Cancelar" className="btn btn-secondary" />
        <Button type="button" label="Guardar" className="btn btn-primary" />
      </div>
    </div>
  );
};

export default LogoEmpresaComponent;

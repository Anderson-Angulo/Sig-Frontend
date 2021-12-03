import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import React from 'react';

const RolesModalFiltroComponent = ({ isOpen = false, closeModal }) => {
  const styleLabel = {
    color: '#004680',
    fontWeight: 600,
    marginBottom: '5px',
  };
  if (isOpen) {
    return (
      <div className="users-modal-filtro shadow-md">
        <form className="form-modal p-8">
          <header className="header mb-4">
            <div className="title text-left">
              <h3 className="mb-2 font-bold">Filtrar</h3>
            </div>
          </header>
          <div className="body">
            <div className="flex gap-4">
              <div className="w-full">
                <h3 style={styleLabel}>Desde</h3>
                <Calendar placeholder="-- /-- /--" className="w-full" />
              </div>
              <div className="w-full">
                <h3 style={styleLabel}>Hasta</h3>
                <Calendar placeholder="-- /-- /--" className="w-full" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <Button
              type="button"
              label="Limpiar Filtro"
              className="btn btn-secondary mt-4"
              onClick={closeModal}
            />
            <Button
              type="button"
              label="Buscar"
              className="btn btn-primary mt-4"
            />
          </div>
        </form>
      </div>
    );
  }

  return null;
};

export default RolesModalFiltroComponent;

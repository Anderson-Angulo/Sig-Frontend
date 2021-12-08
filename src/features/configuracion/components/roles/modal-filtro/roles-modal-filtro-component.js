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
      <div className="modal-filtro shadow-xl">
        <form className="form-modal px-8 py-4">
          <header className="header mb-4">
            <div className="icon-closed cursor-pointer" onClick={closeModal}>
              <i className="pi pi-times"></i>
            </div>
            <div className="title text-left">
              <h3 className="mb-2 font-bold modal-filtro-title">Filtrar</h3>
            </div>
          </header>
          <div className="body">
            <div className="flex gap-4 pt-3">
              <div className="w-full">
                <span className="p-float-label">
                  <Calendar id="desde" />
                  <label htmlFor="desde">Desde</label>
                </span>
              </div>
              <div className="w-full">
                <span className="p-float-label">
                  <Calendar id="hasta" />
                  <label htmlFor="hasta">Hasta</label>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-3">
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

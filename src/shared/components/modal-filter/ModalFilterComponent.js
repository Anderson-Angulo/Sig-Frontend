import { Button } from 'primereact/button';

const ModalFilterComponent = ({
  children,
  closeModal,
  clearFields,
  handleSubmit,
  disabledBtn,
  searchLoading = false,
}) => {
  return (
    <div className="modal-filtro shadow-xl">
      <form className="form-modal px-8 py-4" onSubmit={handleSubmit}>
        <header className="header mb-4">
          <div className="icon-closed cursor-pointer" onClick={closeModal}>
            <i className="pi pi-times"></i>
          </div>
          <div className="title text-left">
            <h3 className="mb-2 font-bold modal-filtro-title">Filtrar</h3>
          </div>
        </header>
        <div className="body">{children}</div>
        <div className="flex justify-center gap-4 mt-3">
          <Button
            type="button"
            label="Limpiar Filtro"
            className="btn btn-secondary mt-4"
            disabled={disabledBtn}
            onClick={clearFields}
          />
          <Button
            type="submit"
            label="Buscar"
            loading={searchLoading}
            disabled={disabledBtn}
            className="btn btn-primary mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default ModalFilterComponent;

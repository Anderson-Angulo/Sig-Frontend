import { Calendar } from 'primereact/calendar';
import useRoleModal from 'features/configuration/hooks/roles/useRoleModal';
import ModalFilterComponent from 'shared/components/modal-filter/ModalFilterComponent';

const RolesModalFilterComponent = () => {
  const {
    showModal,
    disabledBtn,
    closeModal,
    clearFields,
    handleSubmit,
    loading,
    handleInputChange,
    formValues,
  } = useRoleModal();

  if (showModal) {
    return (
      <ModalFilterComponent
        disabledBtn={disabledBtn}
        closeModal={closeModal}
        clearFields={clearFields}
        handleSubmit={handleSubmit}
        searchLoading={loading}
      >
        <div className="flex gap-4 pt-3">
          <div className="w-full">
            <span className="p-float-label">
              <Calendar
                onChange={handleInputChange}
                dateFormat="dd/mm/yy"
                value={formValues.from}
                name="from"
                id="desde"
              />
              <label htmlFor="desde">Desde</label>
            </span>
          </div>
          <div className="w-full">
            <span className="p-float-label">
              <Calendar
                onChange={handleInputChange}
                dateFormat="dd/mm/yy"
                value={formValues.to}
                name="to"
                id="hasta"
              />
              <label htmlFor="hasta">Hasta</label>
            </span>
          </div>
        </div>
      </ModalFilterComponent>
    );
  }

  return null;
};

export default RolesModalFilterComponent;

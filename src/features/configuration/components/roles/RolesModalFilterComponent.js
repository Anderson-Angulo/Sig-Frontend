import { useSelector } from 'react-redux';
import { Calendar } from 'primereact/calendar';
import ModalFilterComponent from 'shared/components/modal-filter/ModalFilterComponent';

const RolesModalFilterComponent = () => {
  const { showModal, disabledBtn } = useSelector(
    (state) => state.roleReducer.filterRole
  );

  if (showModal) {
    return (
      <ModalFilterComponent disabledBtn={disabledBtn}>
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
      </ModalFilterComponent>
    );
  }

  return null;
};

export default RolesModalFilterComponent;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Calendar } from 'primereact/calendar';
import ModalFilterComponent from 'shared/components/modal-filter/ModalFilterComponent';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';
import { useForm } from 'shared/hooks/useForm';

const RolesModalFilterComponent = () => {
  const dispatch = useDispatch();
  const { showModal, disabledBtn } = useSelector(
    (state) => state.roleReducer.filterRole
  );
  const { values } = useSelector((state) => state.roleReducer.filterRole);
  const { loading } = useSelector((state) => state.roleReducer.roles);

  const [formValues, handleInputChange, reset] = useForm({
    from: null,
    to: null,
  });

  const closeModal = () => {
    dispatch(RolesAction.toggleModalFilters({ showModal: false }));
  };

  useEffect(() => {
    let hasValues =
      Object.values(formValues).filter((val) => val !== null).length > 0;
    dispatch(
      RolesAction.toggleModalFilters({
        disabledBtn: hasValues ? false : true,
      })
    );
  }, [formValues]);

  useEffect(() => {
    if (loading && showModal) {
      setTimeout(() => {
        closeModal();
      }, 1500);
    }
  }, [loading]);

  const clearFields = () => reset();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = formValues;

    if (values.length > 0) {
      const fieldName = values.filter((val) => val.field === 'name');
      if (fieldName.length > 0) fields.name = fieldName[0].value;
    }
    dispatch(RolesAction.getRoles({ change: true, fields: formValues }));
    const arrValues = [];

    if (formValues.from)
      arrValues.push({
        field: 'from',
        value: moment(formValues.from).format('DD/MM/YYYY hh:mm:ss'),
        date: formValues.from,
      });

    if (formValues.to)
      arrValues.push({
        field: 'to',
        value: moment(formValues.to).format('DD/MM/YYYY hh:mm:ss'),
        date: formValues.to,
      });

    if (arrValues.length > 0) dispatch(RolesAction.setFilterValues(arrValues));
  };

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

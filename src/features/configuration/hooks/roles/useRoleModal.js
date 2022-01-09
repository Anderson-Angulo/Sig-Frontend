import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';
import { useForm } from 'shared/hooks/useForm';

const useRoleModal = () => {
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
    let target = { value: '' };
    if (values.length === 0) {
      reset({
        from: null,
        to: null,
      });
      return;
    } else if (values.length <= 2) {
      const fields = values.map((val) => val.field);
      if (!fields.includes('from')) {
        target.name = 'from';
        handleInputChange({ target });
      }
      if (!fields.includes('to')) {
        target.name = 'to';
        handleInputChange({ target });
      }
    }
  }, [values]);

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
  console.log(formValues)
    if (values.length > 0) {
      const fieldName = values.filter((val) => val.field === 'name');
      if (fieldName.length > 0) fields.name = fieldName[0].value;
    }
    dispatch(RolesAction.getRoles({ change: true, fields: formValues }));

    const arrValues = [];
    if (formValues.from)
      arrValues.push({
        field: 'from',
        value: moment(formValues.from).format('DD/MM/YYYY'),
        date: formValues.from,
      });

    if (formValues.to)
      arrValues.push({
        field: 'to',
        value: moment(formValues.to).format('DD/MM/YYYY'),
        date: formValues.to,
      });
    if (arrValues.length > 0) dispatch(RolesAction.setFilterValues(arrValues));
  };
  return {
    showModal,
    disabledBtn,
    closeModal,
    clearFields,
    handleSubmit,
    loading,
    handleInputChange,
    formValues,
  };
};

export default useRoleModal;

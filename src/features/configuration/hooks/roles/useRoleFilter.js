import { RolesAction } from 'features/configuration/store/actions/RolesAction';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useRoleFilter = () => {
  const dispatch = useDispatch();
  const fieldRole = useRef(null);
  const { values } = useSelector((state) => state.roleReducer.filterRole);
  const [disabledBtnSearch, setDisabledBtnSearch] = useState(true);

  const filterRole = () => {
    const value = fieldRole.current.value;
    filterRoles();

    if (value !== null)
      dispatch(RolesAction.setFilterValues([{ field: 'name', value }]));
  };

  const openModal = () => {
    dispatch(RolesAction.toggleModalFilters({ showModal: true }));
  };

  const handleChange = () => {
    const showBtn = fieldRole.current.value.length > 2 ? false : true;
    setDisabledBtnSearch(showBtn);
    if (fieldRole.current.value === null) {
      filterRoles();
      dispatch(RolesAction.removeFilterValues('name'));
    }
  };

  const showPiners = () => {
    if (values.length > 0) return true;
    else return false;
  };

  const filterRoles = () => {
    const value = fieldRole.current.value;
    const fields = {};

    fields.name = value;

    if (values.length > 0) {
      const fieldTo = values.filter((val) => val.field === 'to');
      if (fieldTo.length > 0) fields.to = fieldTo[0].date;
      else fields.to = null;
      const fieldFrom = values.filter((val) => val.field === 'from');
      if (fieldFrom.length > 0) fields.from = fieldFrom[0].date;
      else fields.from = null;
    }

    dispatch(RolesAction.getRoles({ change: true, fields }));
  };

  useEffect(() => {
    filterRoles();
  }, [values]);

  const removePiner = (field) => {
    if (field === 'name') fieldRole.current.value = null;
    dispatch(RolesAction.removeFilterValues(field));
  };
  return {
    fieldRole,
    handleChange,
    disabledBtnSearch,
    openModal,
    removePiner,
    showPiners,
    filterRole,
    values,
  };
};

export default useRoleFilter;

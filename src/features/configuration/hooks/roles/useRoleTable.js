import { RolesAction } from 'features/configuration/store/actions/RolesAction';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useRoleTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.roleReducer.roles);
  const roleSearch = useSelector((state) => state.roleReducer);
  const currentRole = useSelector((state) => state.roleReducer.userByRoleId);
  const { values } = useSelector((state) => state.roleReducer.filterRole);

  const { roleId } = useSelector((state) => state.roleReducer.deleteRoleModal);
  const [options, setOptions] = useState({
    currentID: '',
    showOptions: false,
    showSubTable: false,
  });

  const showOption = (fields) => {
    if (fields?.action === 'getUserByRole') {
      getUserByRole(fields.currentID);
      delete fields.action;
    }
    setOptions({ ...options, ...fields });
  };

  const getUserByRole = (id) => {
    dispatch(RolesAction.getUserByRoleId(id));
  };
  const closeActions = () => {
    setOptions({ ...options, showOptions: false });
  };

  const confirmDelete = () => {
    dispatch(RolesAction.deleteRoleModal(roleId));
  };

  const cancelDelete = (action) => {
    if (action === 'cancel') {
      dispatch(
        RolesAction.showDeleteRoleModal({
          isOpen: false,
          roleId: '',
        })
      );
    }
  };

  const currentAction = (action) => {
    if (action === 'role-edit') {
      history.push(
        `/configuracion/rol-privilegios/editar/${options.currentID}`
      );
    } else if (action === 'role-eliminar') {
      dispatch(
        RolesAction.showDeleteRoleModal({
          isOpen: true,
          roleId: options.currentID,
        })
      );
    }
  };
  const rolePagination = (action, payload) => {
    let fields = {
      pageSize: roleSearch.roles.pagination.pageSize,
      columnOrder: roleSearch.roles.currentCol,
      order: roleSearch.roles.order,
      from: null,
      to: null,
      name: null,
    };
    if (action === 'next') {
      fields.page = roleSearch.roles.pagination.currentPage + 1;
    } else if (action === 'previous') {
      fields.page = roleSearch.roles.pagination.currentPage - 1;
    } else if (action === 'change-size') {
      fields.pageSize = payload;
    } else if (action === 'change-orientation') {
      fields.order = payload.order;
      fields.columnOrder = payload.name;
      if (values.length > 0) {
        values.forEach(({ field, value, date }) => {
          fields[field] = field === 'name' ? value : date;
        });
      }
    }
    dispatch(RolesAction.getRoles({ change: true, fields }));
  };
  const nextPage = () => {
    rolePagination('next');
  };

  const previousPage = () => {
    rolePagination('previous');
  };
  const changeRow = ({ target }) => {
    const currentRow = target.options[target.selectedIndex].value;
    rolePagination('change-size', Number(currentRow));
  };
  const changeOrientation = (data) => {
    rolePagination('change-orientation', data);
  };
  return {
    roles,
    showOption,
    options,
    closeActions,
    currentAction,
    currentRole,
    cancelDelete,
    confirmDelete,
    nextPage,
    previousPage,
    changeRow,
    changeOrientation,
  };
};

export default useRoleTable;

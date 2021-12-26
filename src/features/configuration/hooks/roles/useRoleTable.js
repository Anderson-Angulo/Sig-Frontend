import { RolesAction } from 'features/configuration/store/actions/RolesAction';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useRoleTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.roleReducer.roles);
  const currentRole = useSelector((state) => state.roleReducer.userByRoleId);

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

  const currentAction = (action) => {
    if (action === 'role-edit')
      history.push(
        `/configuracion/rol-privilegios/editar/${options.currentID}`
      );
  };
  return {
    roles,
    showOption,
    options,
    closeActions,
    currentAction,
    currentRole,
  };
};

export default useRoleTable;

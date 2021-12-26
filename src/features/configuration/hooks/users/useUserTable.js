import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useUserTable = () => {
  const [options, setOptions] = useState({
    currentID: '',
    showOptions: false,
    showSubTable: false,
  });
  const users = useSelector((state) => state.userReducer.users);
  const history = useHistory();
  const closeActions = () => {
    setOptions({ ...options, showOptions: false });
  };

  const currentAction = (action) => {
    if (action === 'user-edit') {
      history.push(`/configuracion/usuarios/editar/${options.currentID}`);
    }

    console.log('action ', action);
    console.log('currentID ', options.currentID);
  };

  return {
    users,
    closeActions,
    currentAction,
    setOptions,
    options,
  };
};

export default useUserTable;

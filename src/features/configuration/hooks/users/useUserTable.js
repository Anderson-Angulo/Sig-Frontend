import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UsersAction } from 'features/configuration/store/actions/UsersAction';

const useUserTable = () => {
  const [options, setOptions] = useState({
    currentID: '',
    showOptions: false,
    showSubTable: false,
  });
  const users = useSelector((state) => state.userReducer.users);
  const dispatch= useDispatch()
  const history = useHistory();
  const closeActions = () => {
    setOptions({ ...options, showOptions: false });
  };

  const currentAction = (action) => {
    if (action === 'user-edit') {
      history.push(`/configuracion/usuarios/editar/${options.currentID}`);
    }
    else if(action === 'user-reset-password'){
      console.log("RESETEAR password")
      dispatch(UsersAction.getResetPassword(options.currentID))
    }
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

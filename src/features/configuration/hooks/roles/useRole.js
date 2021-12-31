import { RolesAction } from 'features/configuration/store/actions/RolesAction';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const useRole = ({ title }) => {
  const history = useHistory();
  const params = useParams();

  const dispatch = useDispatch();
  const { loading, options } = useSelector(
    (state) => state.roleReducer.rolesOptions
  );

  const editRole = useSelector((state) => state.roleReducer.editRole);
  const { status } = useSelector((state) => state.roleReducer.saveRole);
  const [errors, setErrors] = useState({
    showInRole: false,
    showInActions: false,
    list: [],
  });

  const [roles, setRoles] = useState({
    roleId: null,
    name: '',
    actions: [],
  });
  const [visible, setVisible] = useState(false);

  const isNewRole = title === 'NUEVO ROL';
  const description = isNewRole ? 'Nuevo Rol' : 'Editar Rol';
  const { updateTitle } = useSetTitlePage();
  const pageTitle = {
    title: 'Configuración',
    subtitle: 'Roles y Privilegios',
    description,
  };

  useEffect(() => {
    updateTitle(pageTitle);
  }, []);

  const accept = () => {
    dispatch(RolesAction.saveRoleStatus({ status: '' }));
    const { description, ...rest } = pageTitle;
    updateTitle(rest);
    history.push('/configuracion/rol-privilegios');
  };

  const reject = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!loading && options.length === 0)
      dispatch(RolesAction.getRolesOptions());
  }, []);

  useEffect(() => {
    if (status === 0) {
      setTimeout(() => {
        // setLoadingSave(false);
        dispatch(RolesAction.saveRoleStatus({ status: '' }));
        history.push('/configuracion/rol-privilegios');
      }, 3000);
    }
  }, [status]);

  useEffect(() => {
    document.getElementById('content-main').scroll({
      top: 0,
      behavior: 'smooth',
    });
    if (!isNewRole) dispatch(RolesAction.getRoleById(params.id));
  }, []);

  useEffect(() => {
    if (!isNewRole) {
      const currentRole = {
        roleId: Number(params.id),
      };
      if (editRole?.data?.options?.length > 0) {
        let actions = [];
        const array = editRole.data.options;
        array.forEach((option) => {
          option.actions.forEach(({ id }) => {
            actions.push(id);
          });
        });
        currentRole.actions = actions;
      }
      if (editRole?.data?.name) currentRole.name = editRole.data.name;

      setRoles(currentRole);
    }
  }, [editRole.data]);

  const isChecked = ({ id }) => {
    if (isNewRole && roles?.actions?.length === 0) return false;
    else if (roles?.actions?.length > 0) return roles.actions.includes(id);
    return false;
  };

  const showRoles = () => {
    if (isNewRole) return !loading && options.length > 0;
    else return !loading && options.length > 0 && !editRole.loading;
  };

  const showField = () => {
    if (isNewRole) return !loading;
    else return !loading && !editRole.loading;
  };

  const showSkeleton = () => {
    if (isNewRole) return loading;
    else return loading || editRole.loading;
  };

  const handleCheckbox = ({ target }) => {
    const id = target.id;
    const ids = roles.actions;
    let actions = [];
    if (ids.length === 0) {
      actions.push(id);
    } else {
      const hasOption = ids.includes(id);
      if (hasOption) actions = ids.filter((ID) => ID !== id);
      else actions = [...ids, id];
    }
    if (actions.length > 0) {
      setErrors({
        ...errors,
        showInActions: false,
      });
    }

    setRoles({ ...roles, actions });
  };

  const hasErrorsFields = () => {
    const list = [];
    if (roles.name === '') list.push('El nombre del rol es requerido');
    if (roles.actions.length === 0) list.push('Acciones del rol es requerido');
    if (list.length >= 1) {
      setErrors({
        ...errors,
        showInRole: roles.name === '',
        showInActions: roles.actions.length === 0,
        list,
      });
      return true;
    }
    return false;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(RolesAction.saveRoleStatus({ status: '' }));
    setErrors({
      showInRole: false,
      showInActions: false,
      list: [],
    });

    if (hasErrorsFields()) return;

    dispatch(RolesAction.saveRole(roles));
  };

  const handleChange = ({ target }) => {
    if (target.value !== '') {
      setErrors({
        ...errors,
        showInRole: false,
      });
    }
    setRoles({ ...roles, name: target.value });
  };
  return {
    handleSubmit,
    showField,
    roles,
    handleChange,
    errors,
    showSkeleton,
    showRoles,
    options,
    isChecked,
    handleCheckbox,
    setVisible,
    visible,
    accept,
    reject,
  };
};

export default useRole;

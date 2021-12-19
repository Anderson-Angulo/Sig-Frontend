// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Skeleton } from 'primereact/skeleton';
import { InputText } from 'primereact/inputtext';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';

import './RolePrivilege.scss';
import { useParams } from 'react-router-dom';

const RolPrivilegioPage = ({ title = 'NUEVO ROL' }) => {
  const history = useHistory();
  const params = useParams();

  const dispatch = useDispatch();
  const { loading, options } = useSelector(
    (state) => state.roleReducer.rolesOptions
  );
  const editRole = useSelector((state) => state.roleReducer.editRole);

  const [roles, setRoles] = useState({
    roleId: null,
    name: '',
    actions: [],
  });

  const isNewRole = title === 'NUEVO ROL';

  useEffect(() => {
    if (!loading && options.length === 0)
      dispatch(RolesAction.getRolesOptions());
  }, []);

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

  const OptionSkeleton = () => {
    const subSkeletons = [1, 2, 3, 4];
    return (
      <div className="mb-6">
        <Skeleton width="80%" height="2rem" className="mb-4" />
        {subSkeletons.map((s) => (
          <Skeleton width="70%" height="1.5rem" className="mb-3" key={s} />
        ))}
      </div>
    );
  };

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
    setRoles({ ...roles, actions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RolesAction.saveRole(roles));
  };

  const handleChange = ({ target }) =>
    setRoles({ ...roles, name: target.value });

  return (
    <div className="bg-white p-10 mt-3 rounded-md shadow-md">
      <div className="mb-4">
        {title}
        {JSON.stringify(roles, null, 3)}
      </div>
      <form className="form-custom p-0" onSubmit={handleSubmit}>
        {showField() && (
          <div className="mb-6 w-2/5">
            <span className="p-float-label w-full">
              <InputText
                type="text"
                id="rol_name"
                value={roles.name}
                onChange={handleChange}
              />
              <label htmlFor="rol_name">Nombre del rol*</label>
            </span>
          </div>
        )}
        <div className="grid-roles scroll">
          {showSkeleton() &&
            [1, 2, 3, 4, 5].map((i) => <OptionSkeleton key={i} />)}
          {showRoles() &&
            options.map((option, index) => {
              return (
                <div className="rol mt-4" key={index}>
                  <div className="rol-title">
                    <h2 className="font-semibold">{option.name}</h2>
                  </div>
                  <div className="rol-list mt-2">
                    {option.actions.map((action, i) => (
                      <div className="mb-2" key={i}>
                        <Checkbox
                          inputId={action.name}
                          id={action.id}
                          value={action.name}
                          checked={isChecked(action)}
                          onChange={handleCheckbox}
                        ></Checkbox>
                        <label
                          htmlFor={action.name}
                          className="p-checkbox-label ml-3"
                        >
                          {action.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="flex gap-3 items-center justify-end mt-3">
          <Button
            icon="pi pi-times"
            type="button"
            label="Cancelar"
            className="btn btn-secondary mt-4"
            onClick={() => history.goBack()}
          />
          <Button
            icon="pi pi-save"
            type="submit"
            label="Guardar"
            className="btn btn-primary mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default RolPrivilegioPage;

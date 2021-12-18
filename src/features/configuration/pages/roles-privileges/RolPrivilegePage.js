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

  const [roles, setRoles] = useState({
    roleId: null,
    name: '',
    actions: [],
  });

  const isNewRole = title === 'NUEVO ROL';

  useEffect(() => {
    if (!loading && options.length === 0) {
      dispatch(RolesAction.getRolesOptions());
    }
  }, []);
  useEffect(() => {
    if (!isNewRole) {
      dispatch(RolesAction.getRoleById(params.id));
    }
  }, []);

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

  const isChecked = (option) => {
    console.log('option', option);
    if (isNewRole) {
      return false;
    }
  };

  const showRoles = () => {
    if (isNewRole) return !loading && options.length > 0;
  };

  const showField = () => {
    if (isNewRole) return !loading;
  };

  const showSkeleton = () => {
    if (isNewRole) return loading;
  };

  return (
    <div className="bg-white p-10 mt-3 rounded-md shadow-md">
      {title}
      <form className="form-custom p-0">
        {showField() && (
          <div className="mb-6 w-2/5">
            <span className="p-float-label w-full">
              <InputText type="text" id="rol_name" />
              <label htmlFor="rol_name">Nombre del rol</label>
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
                          value={action.name}
                          checked={isChecked(action)}
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
            type="button"
            label="Guardar"
            className="btn btn-primary mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default RolPrivilegioPage;

import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Skeleton } from 'primereact/skeleton';
import { InputText } from 'primereact/inputtext';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';

import './RolePrivilege.scss';

const RolPrivilegioPage = ({ title = 'NUEVO ROL' }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, options } = useSelector(
    (state) => state.roleReducer.rolesOptions
  );

  useEffect(() => {
    if (!loading && options.length === 0) {
      dispatch(RolesAction.getRolesOptions());
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

  return (
    <div className="bg-white p-10 mt-3 rounded-md shadow-md">
      <form className="form-custom p-0">
        {!loading && (
          <div className="mb-6 w-2/5">
            <span className="p-float-label w-full">
              <InputText type="text" id="rol_name" />
              <label htmlFor="rol_name">Nombre del rol</label>
            </span>
          </div>
        )}
        <div className="grid-roles scroll">
          {loading && [1, 2, 3, 4, 5].map((i) => <OptionSkeleton key={i} />)}
          {!loading &&
            options.length > 0 &&
            options.map((option, index) => {
              return (
                <div className="rol mt-4" key={index}>
                  <div className="rol-title">
                    <h2 className="font-semibold">{option.name}</h2>
                  </div>
                  <div className="rol-list mt-2">
                    {option.actions.map((action) => (
                      <div className="mb-2">
                        <Checkbox
                          inputId={action.name}
                          value={action.name}
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

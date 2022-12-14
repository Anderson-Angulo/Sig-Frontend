import { useSelector } from 'react-redux';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { InputText } from 'primereact/inputtext';

import Message from 'shared/components/messages/Message';
import './RolePrivilege.scss';

import useRole from 'features/configuration/hooks/roles/useRole';
import { Panel } from 'primereact/panel';
import { InputSwitch } from 'primereact/inputswitch';

const RolPrivilegioPage = ({ title = 'NUEVO ROL' }) => {
  const {
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
    visible,
    setVisible,
    accept,
    reject,
  } = useRole({
    title,
  });

  const { status } = useSelector((state) => state.roleReducer.saveRole);

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
    <div className="bg-white  ">
      <form className="form-custom p-0" onSubmit={handleSubmit}>
        <Panel header={title} toggleable>
          {showField() && (
            <div className="mb-6 w-2/5 mt-5">
              <span className="p-float-label w-full">
                <InputText
                  type="text"
                  id="rol_name"
                  value={roles.name}
                  onChange={handleChange}
                  className={errors.showInRole ? 'p-invalid' : ''}
                />
                <label htmlFor="rol_name">Nombre del rol*</label>
              </span>
            </div>
          )}
          <div className="grid-roles scroll mt-8">
            {showSkeleton() &&
              [1, 2, 3, 4, 5].map((i) => <OptionSkeleton key={i} />)}
            {showRoles() &&
              options.map((option, index) => {
                return (
                  <div className="rol " key={index}>
                    <div className="rol-title">
                      <h2 className="font-semibold">{option.name}</h2>
                    </div>
                    <div className="flex gap-3"></div>
                    <div className="rol-list mt-2">
                      {option.actions.map((action, i) => (
                        <div className="mb-4 flex gap-3" key={i}>
                          <InputSwitch
                            inputId={action.name}
                            id={action.id}
                            checked={isChecked(action)}
                            onChange={handleCheckbox}
                            className={errors.showInActions ? 'p-invalid' : ''}
                          />
                          <p>{action.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
          {(errors.showInRole ||
            errors.showInActions ||
            errors.list.length > 0) && (
            <Message messages={errors.list} status="error" />
          )}

          <div className="flex gap-3 items-center justify-end mt-3">
            <Button
              icon="pi pi-times"
              type="button"
              label="Cancelar"
              className="btn btn-secondary mt-4"
              onClick={() => setVisible(true)}
              disabled={status === ''}
            />
            <Button
              icon="pi pi-save"
              type="submit"
              label="Guardar"
              loading={status === ''}
              className="btn btn-primary mt-4"
            />
          </div>
        </Panel>
      </form>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="??Est?? seguro que desea cancelar?"
        header="Cancelar"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
    </div>
  );
};

export default RolPrivilegioPage;

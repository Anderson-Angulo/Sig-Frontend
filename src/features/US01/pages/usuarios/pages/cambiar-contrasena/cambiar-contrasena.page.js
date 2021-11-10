import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';

const CambiarContrasenaPage = () => {
  return (
    <Dialog
      visible={false}
      // onHide={onHide}
      style={{ width: '24vw' }}
      className="modal-custom"
      breakpoints={{ '1200px': '45vw', '640px': '80vw' }}
    >
      <div className="form-modal">
        <header className="header">
          <div className="title">
            <h3 className="mb-2 font-bold">CAMBIAR CONTRASEÑA</h3>
          </div>
        </header>

        <div className="fields">
          <span className="p-float-label field w-full">
            <Password
              id="password"
              name="password"
              className="w-full"
              toggleMask
            />
            <label htmlFor="password">Contraseña</label>
          </span>

          <span className="p-float-label field w-full">
            <Password
              id="password2"
              name="password"
              className="w-full"
              toggleMask
            />
            <label htmlFor="password2">Confirmar contraseña</label>
          </span>
        </div>

        <div className="flex gap-3 items-center justify-center mt-5">
          <Button
            type="button"
            label="Cancelar"
            className="btn btn-secondary"
          />
          <Button type="button" label="Continuar" className="btn btn-primary" />
        </div>
      </div>
    </Dialog>
  );
};

export default CambiarContrasenaPage;

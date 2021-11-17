import { forwardRef, useRef } from 'react';

const IconBarComponent = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  const data = { ...rest };
  const atts = { ...data };
  delete atts.filaSeleccionada;
  delete atts.setFilaSeleccionada;

  const itemSeleccionado = () => {
    resolvedRef.current.click();

    data.setFilaSeleccionada('');
    data.setFilaSeleccionada(Number(resolvedRef.current.value));
    resolvedRef.current.indeterminate = true;
  };

  return (
    <>
      <i
        className="pi pi-ellipsis-v cursor-pointer "
        onClick={itemSeleccionado}
      ></i>

      <input
        type="checkbox"
        className="hidden input-bar-component"
        ref={resolvedRef}
        {...atts}
      />
    </>
  );
});

export default IconBarComponent;

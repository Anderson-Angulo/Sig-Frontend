import { forwardRef, useEffect, useRef } from 'react';

const IconBarComponent = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();

  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return (
    <>
      <i className="pi pi-ellipsis-v" ref={resolvedRef} {...rest}></i>

      {/* <input type="checkbox" ref={resolvedRef} {...rest} /> */}
    </>
  );
});

export default IconBarComponent;

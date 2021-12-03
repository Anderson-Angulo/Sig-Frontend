import { useState } from 'react';
import { Button } from 'primereact/button';
import LogoInputFile from './components/logo-input-file/logo-input-file';
import './logo-empresa-component.scss';

const LogoEmpresaComponent = () => {

  const [files,setFiles]=useState({dark:null,light:null})


  const handlerSubmit=(e)=>{
    e.preventDefault()
    console.log("Submit")
  }

  const handlerCancel=()=>{
    console.log("Cancel")
  }

  return (
    <div>
      <div className="logo-company">
        <LogoInputFile name="dark" setFiles={setFiles} label="Adjuntar logo para fondo oscuro" dark srcImg="/images/logos/main-dark-logo.png"  />
        <LogoInputFile name="light" setFiles={setFiles} label="Adjuntar logo para fondo claro" srcImg="/images/logos/main-logo.png" />
      </div>

      <div className="flex gap-3 items-center justify-start mt-6">
        <Button onClick={handlerCancel} type="button" label="Cancelar" className="btn btn-secondary" />
        <Button onClick={handlerSubmit} type="button" label="Guardar" className="btn btn-primary" />
      </div>
    </div>
  );
};

export default LogoEmpresaComponent;

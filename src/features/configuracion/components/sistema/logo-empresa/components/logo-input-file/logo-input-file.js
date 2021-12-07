import {useRef,useState,useEffect} from 'react'
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import Modal from './modal/modal';

export const LogoInputFile = ({dark,label,setFiles,name}) => {

 
  const [urlImage,setUrlImage]=useState(null)
  const [enableModal,setEnableModal]=useState(false)


  const inputFileRef=useRef(null)
  const imageRef=useRef(null)

  
 


  const handlerFileChange=(e)=>{
    const file=e.target.files[0]
    if(file){
      setFiles(f=>({
      ...f,
      [e.target.name]: file
    })) 
      const imgCodified=URL.createObjectURL(file)
      setUrlImage(imgCodified)
      setEnableModal(true)
      // imageRef.current.onload=function(){
      //   setImgDims({
      //     width:imageRef.current.naturalWidth,
      //     height:imageRef.current.naturalHeight  
      //   })   
      // }
      // imageRef.current.src=imgCodified
    }
  }
  


  const renderFeedback=()=>{
    if(enableModal){
      return (
           <Modal setUrlImage={setUrlImage} urlImage={urlImage} 
           setEnableModal={setEnableModal} /> 
          )
    }
  }


  return (
      <>
          {
            urlImage
              ? (
                <div  className={`logo ${dark ? 'logo-dark mt-4' : 'logo-light mt-6'}  `}>
                  {/* Se crea esta etiqueta img con el propósito de analizar las dimensiones de la imagen, para luego optar si se muestra o no , o se realiza otra accion como recortar*/}
                  <img className="hidden" ref={imageRef}  src={urlImage} alt="" />
                  <div className="container-logo">
                    <div className="foreground-logo"><i className="pi pi-times-circle"onClick={()=>setUrlImage(null)}></i></div>
                    <img 
                      src={urlImage}
                      className="w-full logo mb-3"
                      alt="Calidar"
                      title="Calidar"
                    />
                  </div>
               
                </div>
              )
              : <div className="btn-upload">
                  <div className="logo-preview">
                         <Button 
                          onClick={()=>inputFileRef.current.click()}   
                          type="button"
                          icon="pi pi-upload"
                          label={label}
                          className="btn btn-secondary"
                        />
                  </div>
                  <input name={name} ref={inputFileRef} onChange={handlerFileChange} className="hidden" type="file" />
             
                </div>
          }
            {
              renderFeedback()
            }
      </>
    )
  }


export default LogoInputFile

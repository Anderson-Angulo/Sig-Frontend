import {useRef,useState,useEffect} from 'react'
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import Modal from './modal/modal';

export const LogoInputFile = ({dark,label,srcImg,setFiles,name}) => {

  const [imgDims,setImgDims]=useState({width:770,height:420})
  const [urlImage,setUrlImage]=useState(srcImg)
  const [threshold,setThreshold]=useState("ideal")
  const [file,setFile]=useState({fileName:"",type:""})
  const [blob,setBlob]=useState(null)

  const inputFileRef=useRef(null)
  const imageRef=useRef(null)



  useEffect(() => {  
      if(imgDims.width===770 && imgDims.height===420){
        setThreshold("ideal")
      }

      else if(imgDims.width>770 && imgDims.height>420){
        setThreshold("up")
      }

      else if(imgDims.width<770 || imgDims.height<420){
        setThreshold("down")
      }
  }, [imgDims]);
  



  const handlerFileChange=(e)=>{
    const file=e.target.files[0]
    if(file){
      setFiles(f=>({
      ...f,
      [e.target.name]: blob
    })) 
      setFile({fileName:file.name,type:file.type})
      const imgCodified=URL.createObjectURL(file)
      setUrlImage(imgCodified)
      imageRef.current.onload=function(){
        setImgDims({
          width:imageRef.current.naturalWidth,
          height:imageRef.current.naturalHeight  
        })   
      }
      imageRef.current.src=imgCodified
    }
  }
  


  const renderFeddback=()=>{
    switch(threshold){
      case "up":
        return (
          <>
            <Modal imgDims={imgDims} file={file} setBlob={setBlob} setUrlImage={setUrlImage} urlImage={urlImage} /> 
          </>)
      case "down":
        return <Message severity="error" text="Elige una imagen de preferencia de 770px x 420px"></Message>
      default:
        return <span className="small">Elige una imagen de preferencia de 770px x 420px de medidas que llamen la atencion de los usuarios</span>
    }
  }
    return (
      <>
        <div  className={`logo ${dark ? 'logo-dark mt-4' : 'logo-light mt-6'}  `}>
            <img className="hidden" ref={imageRef}  src={urlImage} alt="" />
            <img 
              src={threshold==="ideal" ? urlImage : srcImg}
              className="w-full logo mb-3"
              alt="Calidar"
              title="Calidar"
            />
            </div>
            <div className="btn-upload">
                <input name={name} ref={inputFileRef} onChange={handlerFileChange} className="hidden" type="file" />
                <Button 
                  onClick={()=>inputFileRef.current.click()}   
                  type="button"
                  icon="pi pi-upload"
                  label={label}
                  className="btn btn-secondary"
                />
            </div>
            {
              renderFeddback()
            }
      </>
    )
  }


export default LogoInputFile

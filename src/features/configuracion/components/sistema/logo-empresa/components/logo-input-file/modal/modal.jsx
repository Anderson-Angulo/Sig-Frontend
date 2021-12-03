import {useState} from "react"
import ReactCrop from 'react-image-crop';
import {getCroppedImg} from '../../../utils/functions-modal'
import 'react-image-crop/dist/ReactCrop.css';
import "./modal.scss"
const Modal=({urlImage,setUrlImage,file,setBlob,imgDims})=>{
  const [crop,setCrop]=useState({width:770,height:420})
  const [image,setImage]=useState(null)

  return (
    <div className="modal-container">
          <ReactCrop className="crop" onImageLoaded={setImage} src={urlImage} minWidth={770} minHeight={420} maxWidth={770} maxHeight={420} crop={crop} onChange={newCrop=>setCrop(newCrop)} />
        
        <div className="modal-buttons">
          <button type="button">Cancelar</button>
          <button type="button" onClick={()=>getCroppedImg(image,crop,file,setUrlImage,setBlob)}>Aceptar</button>
        </div>
    </div>
    
  )
}

export default Modal
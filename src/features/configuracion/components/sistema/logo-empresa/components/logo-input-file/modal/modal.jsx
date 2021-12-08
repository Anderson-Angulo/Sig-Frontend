import {useState} from "react"
// import ReactCrop from 'react-image-crop';
import {getCroppedImg} from '../../../utils/getCroppedImg'
// import 'react-image-crop/dist/ReactCrop.css';
import "./modal.scss"
const Modal=({urlImage,setUrlImage,setEnableModal})=>{
  const [crop,setCrop]=useState({aspect:16/9})
  const [image,setImage]=useState(null)

 

  return (
    <div className="modal-container">
        <div class="crop-container">
          {/* <ReactCrop className="crop" onImageLoaded={setImage} src={urlImage} crop={crop} onChange={newCrop=>setCrop(newCrop)} /> */}
        </div>
        
        <div className="modal-buttons">
          <button type="button" onClick={()=>setEnableModal(false)}>Cancelar</button>
          <button type="button" onClick={()=>getCroppedImg(image,crop,setUrlImage,setEnableModal)}>Aceptar</button>
        </div>
    </div>
    
  )
}

export default Modal
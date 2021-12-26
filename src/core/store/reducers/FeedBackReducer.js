import { CoreConstants } from "core/commons/CoreConstants";


const initialState={
  feedBack:null,
  mostrarFeedback:false
  
}
const FeedBackReducer= (state=initialState,action)=>{
  switch(action.type){
    case CoreConstants.Accion.FeedBack.MOSTRAR_MENSAJE:
      return {
        ...state,
        mostrarFeedback:true,
        feedBack:{
          titulo: action.feedBack.titulo,
          mensaje: action.feedBack.mensaje,
          // severidad: action.feedBack.severidad,
          btnText:action.feedBack.btnText
        }
      } 
    case CoreConstants.Accion.FeedBack.OCULTAR_MENSAJE:
      return {
        ...state,
        feedBack:null,
        mostrarFeedback:false
      } 
    default:
      return state
  }
}

export default FeedBackReducer;
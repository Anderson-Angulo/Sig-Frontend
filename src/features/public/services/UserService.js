
import { apiService } from 'core/services/ApiService';

function selecEmpresaSede(email, password, empresaId, sedeId) {
    return apiService.post("Auth/LoginUser", { userName: email, password: password, empresaId: empresaId, sedeId: sedeId });
}

function solicitarRecuperarContrasena(email){
    return apiService.get(`Auth/RequestForgotPassword?email=${email}`)
}

function recuperarContrasena(token,newPassword){
    return apiService.post("Auth/ForgotPassword",{token,newPassword})
}

export const userService = {
    selecEmpresaSede,
    solicitarRecuperarContrasena,
    recuperarContrasena
};

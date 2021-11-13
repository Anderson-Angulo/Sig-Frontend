
import { apiService } from 'core/services/api.service';
import { LOGIN_SUCCESS } from '../store/actions/auth.action';

function login(email, password) {
    return apiService.post("auth/login", { email: email, password: password });
}
function selecEmpresaSede(email, password, empresaId, sedeId) {
    return apiService.post("auth/selecEmpresaSede", { email: email, password: password, empresaId: empresaId, sedeId: sedeId });
}

export const authService = {
    login,
    selecEmpresaSede
};

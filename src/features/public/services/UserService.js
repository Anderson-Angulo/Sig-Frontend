
import { apiService } from 'core/services/ApiService';

function selecEmpresaSede(email, password, empresaId, sedeId) {
    return apiService.post("Auth/LoginUser", { userName: email, password: password, empresaId: empresaId, sedeId: sedeId });
}

export const userService = {
    selecEmpresaSede
};

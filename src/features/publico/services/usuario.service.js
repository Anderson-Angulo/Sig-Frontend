
import { apiService } from 'core/services/api.service';

function selecEmpresaSede(email, password, empresaId, sedeId) {
    return apiService.post("auth/SelEmpresaSede", { email: email, password: password, empresaId: empresaId, sedeId: sedeId });
}

export const usuarioService = {
    selecEmpresaSede
};

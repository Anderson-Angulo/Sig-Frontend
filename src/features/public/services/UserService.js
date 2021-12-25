import { apiService } from 'core/services/ApiService';

function selecEmpresaSede(email, password, companyId, locationId) {
  return apiService.post('Auth/LoginUser', {
    userName: email,
    password: password,
    companyId,
    locationId,
  });
}

export const userService = {
  selecEmpresaSede,
};

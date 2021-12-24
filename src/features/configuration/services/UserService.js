import { apiService } from 'core/services/ApiService';

const getDataMaster = () => {
  const payload = {
    isRole: true,
    isCompany: true,
    isLocation: true,
    isStatus: true,
  };
  return apiService.post('User/GetDataMaster', payload, 'admin');
};

const userSearch = ({ fields = {}, change }) => {
  let initialFields = {
    page: 1,
    pageSize: 10,
    columnOrder: 'firstName',
    order: 'asc',
    fromDate: null,
    toDate: null,
    companyId: 0,
    locationId: 0,
    roleId: 0,
  };
  if (change) initialFields = { ...initialFields, ...fields };
  return apiService.post('User/Search', initialFields, 'admin');
};

const generateReport = () => {
  return apiService.post('User/GenerateReport', 'admin');
};

const getUserById = (userId) => {
  return apiService.get(`User/GetUserById?userId=${userId}`, 'admin');
};

const saveUser = (payload) => {
  return apiService.post('User/SaveUser', payload, 'admin');
};

const resetPassword = (userId) => {
  return apiService.get(`User/RequestResetPassword?userId=${userId}`, 'admin');
};

const removeUser = (userId) => {
  return apiService.get(`User/RemoveUser?userId=${userId}`, 'admin');
};

export const UserService = {
  getDataMaster,
  userSearch,
  generateReport,
  getUserById,
  saveUser,
  resetPassword,
  removeUser,
};

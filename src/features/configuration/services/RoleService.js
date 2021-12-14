import { apiService } from 'core/services/ApiService';

const getRoles = ({ change = false, field, value }) => {
  const initialFields = {
    page: 1,
    pageSize: 10,
    columnOrder: 'roleName',
    order: 'asc',
    from: null,
    to: null,
  };
  if (change) initialFields[field] = value;
  return apiService.post('Role/Search', initialFields, 'admin');
};

export const RoleService = {
  getRoles,
};

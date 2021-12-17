import { apiService } from 'core/services/ApiService';

const getRoles = ({ fields = {}, change }) => {
  let initialFields = {
    page: 1,
    pageSize: 10,
    columnOrder: 'roleName',
    order: 'asc',
    from: null,
    to: null,
  };

  if (change) {
    initialFields = { ...initialFields, ...fields };
  }

  return apiService.post('Role/Search', initialFields, 'admin');
};

const getRolesOptions = () => {
  return apiService.get('Role/GetSubscriptionOptions', 'admin');
};

export const RoleService = {
  getRoles,
  getRolesOptions,
};

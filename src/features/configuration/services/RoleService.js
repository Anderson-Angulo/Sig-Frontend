import { apiService } from 'core/services/ApiService';

const getRoles = ({ page, pageSize, columnOrder, order, from, to }) => {
  return apiService.post(
    'Role/Search',
    {
      page,
      pageSize,
      columnOrder,
      order,
      from,
      to,
    },
    'admin'
  );
};

export const RoleService = {
  getRoles,
};

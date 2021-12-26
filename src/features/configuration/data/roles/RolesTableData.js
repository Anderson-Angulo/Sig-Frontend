const RoleTableHeader = [
  {
    text: '',
  },
  {
    text: 'rol',
    name: 'roleName',
  },
  {
    text: 'n° usuarios',
    name: 'quantityUsers',
  },
  {
    text: 'n° permisos',
    name: 'quantityPermissions',
  },
  {
    text: 'sistema',
    name: 'isSystem',
  },
  {
    text: 'fecha creación',
    name: 'creationDate',
  },
];

const RoleSubTableHeader = [
  {
    text: 'Usuario',
    name: 'userName',
  },
  {
    text: 'Nombres',
    name: 'firstName',
  },
  {
    text: 'Apellidos',
    name: 'lastName',
  },
  {
    text: 'fecha creación',
    name: 'creationDate',
  },
];

const RoleTableActions = [
  {
    text: 'Editar',
    name: 'role-edit',
  },
];

export const RolesTableData = {
  RoleTableHeader,
  RoleSubTableHeader,
  RoleTableActions,
};

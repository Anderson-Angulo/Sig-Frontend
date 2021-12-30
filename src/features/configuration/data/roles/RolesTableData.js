const RoleTableHeader = [
  {
    text: '',
  },
  {
    text: 'Rol',
    name: 'roleName',
  },
  {
    text: 'N° Usuarios',
    name: 'quantityUsers',
  },
  {
    text: 'N° Permisos',
    name: 'quantityPermissions',
  },
  {
    text: 'Sistema',
    name: 'isSystem',
  },
  {
    text: 'Fecha Creación',
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
    text: 'Fecha Creación',
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

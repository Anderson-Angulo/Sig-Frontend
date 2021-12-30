const UsersTableHeader = [
  {
    text: 'Usuario',
    name: 'email',
  },
  {
    text: 'Nombre',
    name: 'firstName',
  },
  {
    text: 'Apellidos',
    name: 'lastName',
  },
  {
    text: 'Estado',
    name: 'status',
  },
  {
    text: 'Fecha de Creación',
    name: 'creationDate',
  },
  {
    text: 'Ultimo Acceso',
    name: 'lastLogin',
  },
];
const UsersTableActions = [
  {
    text: 'Editar',
    name: 'user-edit',
  },
  {
    text: 'Eliminar',
    name: 'user-remove',
  },
  {
    text: 'Resetear Clave',
    name: 'user-reset-password',
  },
];

export const UsersTableData = {
  UsersTableHeader,
  UsersTableActions,
};

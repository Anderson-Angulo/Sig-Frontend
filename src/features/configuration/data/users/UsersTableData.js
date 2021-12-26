const UsersTableHeader = [
  {
    text: 'usuario',
    name: 'email',
  },
  {
    text: 'nombre',
    name: 'firstName',
  },
  {
    text: 'apellidos',
    name: 'lastName',
  },
  {
    text: 'estado',
    name: 'status',
  },
  {
    text: 'Fecha de Creación',
    name: 'creationDate',
  },
  {
    text: 'ultimo acceso',
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

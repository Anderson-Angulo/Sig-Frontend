import moment from 'moment';

export const COLUMNS = [
  {
    Header: 'Nombre',
    accessor: 'nombre',
  },
  {
    Header: 'N° USUARIOS',
    accessor: 'nroUsuario',
    disableFilters: true,
  },
  {
    Header: 'N° PERMISOS',
    accessor: 'nroPermiso',
    disableFilters: true,
  },

  {
    Header: 'Fecha de Creación',
    accessor: 'fechaCreacion',
    Cell: ({ value }) => {
      return moment(value).format('DD/MM/YYYY');
    },
    disableFilters: true,
  },
];

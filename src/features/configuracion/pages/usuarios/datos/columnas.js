import SelectFiltroComponent from 'features/configuracion/components/select-filtro/select-filtro-component';
import moment from 'moment';

export const COLUMNS = [
  {
    Header: 'Nombres',
    accessor: 'nombres',
  },
  {
    Header: 'Apellidos',
    accessor: 'apellidos',
  },
  {
    Header: 'N° USUARIOS',
    accessor: 'nroUsuario',
    disableFilters: true,
  },
  {
    Header: 'N° Documento',
    accessor: 'nroDocumento',
    disableFilters: true,
  },
  {
    Header: 'Empresa',
    accessor: 'empresa',
    disableFilters: true,
  },
  {
    Header: 'Sede',
    accessor: 'sede',
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
  {
    Header: 'Rol',
    accessor: 'rol',
    Filter: SelectFiltroComponent,
  },
];

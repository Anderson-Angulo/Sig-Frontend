import { Fragment, useEffect, useMemo, useState } from 'react';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import {
  useSortBy,
  useTable,
  useFilters,
  usePagination,
  useRowSelect,
} from 'react-table';

import DATA from './datos/data.json';
import { COLUMNS } from './datos/columnas';
import './usuarios.page.scss';
import CambiarContrasenaPage from './cambiar-contrasena/cambiar-contrasena.page';
import { useDispatch, useSelector } from 'react-redux';
import { breadcrumpAction } from 'core/store/actions/breadcrump.action';
import TablaFilaSeleccionadaComponent from 'features/configuracion/components/tabla-fila-seleccionada/tabla-fila-seleccionada-component';
import InputFiltroComponent from 'features/configuracion/components/input-filtro/input-filtro-component';

const UsuariosPage = () => {
  const dispatch = useDispatch();
  const usuarioInformation = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(
      breadcrumpAction.setTitlePage(
        'GESUSU',
        usuarioInformation.menuAdministrador
      )
    );
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);
  const defaultColumn = useMemo(
    () => ({
      Filter: InputFiltroComponent,
    }),
    []
  );
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});
  const [filaSeleccionada, setFilaSeleccionada] = useState('');
  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        ...columns,
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <TablaFilaSeleccionadaComponent
              {...getToggleAllRowsSelectedProps()}
            />
          ),
          Cell: ({ row }) => {
            return (
              <TablaFilaSeleccionadaComponent
                {...row.getToggleRowSelectedProps()}
                filaSeleccionada={filaSeleccionada}
                setFilaSeleccionada={setFilaSeleccionada}
                value={row.original.id}
              />
            );
          },
        },
      ]);
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    state,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  useEffect(() => {
    if (filaSeleccionada !== '') {
      setUsuarioSeleccionado(data[filaSeleccionada - 1]);
    }
  }, [filaSeleccionada]);
  const { pageIndex, pageSize } = state;

  const scroll = () => {
    window['content-main'].scroll({
      top: 225,
      left: 100,
      behavior: 'smooth',
    });
  };

  const editarUsuario = () => {
    console.log('Editando rol de usuario ', usuarioSeleccionado);
  };

  const cambiarContrasena = () => {
    console.log('Cambiar contraseña de usuario ', usuarioSeleccionado);
  };

  return (
    <Fragment>
      <Fieldset legend="Filtro por" toggleable>
        <div className="filter">
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map(
              (column, index) =>
                column.canFilter && (
                  <div className="fields py-4" key={index}>
                    <span className="p-float-label w-full">
                      {column.render('Filter')}
                      <label>{column.render('Header')}</label>
                    </span>
                  </div>
                )
            )
          )}
        </div>

        {/* <div className="actions flex gap-3 items-center justify-end">
          <Button type="button" label="Buscar" className="btn btn-primary" />
          <Button type="button" label="Limpiar" className="btn btn-secondary" />
        </div> */}
        <div className="mt-3 flex items-center justify-end">
          <Button type="button" label="Nuevo" className="btn btn-dark" />
        </div>
      </Fieldset>
      <div className="table-main table-users mt-5" {...getTableProps()}>
        {headerGroups.map((headerGroup, index) => (
          <header
            className="table-header"
            key={index}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column, i) => (
              <div
                className="header-title"
                key={i}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <h3 className="text">{column.render('Header')}</h3>
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <i className="pi pi-angle-up"></i>
                  ) : (
                    <i className="pi pi-angle-down"></i>
                  )
                ) : (
                  <i className="pi pi-filter"></i>
                )}
              </div>
            ))}
          </header>
        ))}
        <div className="table-body relative" {...getTableBodyProps()}>
          {page.length > 0 ? (
            page.map((row) => {
              prepareRow(row);
              return (
                <div
                  className={`table-item ${
                    filaSeleccionada === row.original.id ? 'activated' : ''
                  }`}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => (
                    <p {...cell.getCellProps()}>{cell.render('Cell')}</p>
                  ))}

                  {filaSeleccionada === row.original.id && (
                    <div class="table-actions shadow-md rounded-md">
                      <div
                        className="icon-close"
                        onClick={() => {
                          setFilaSeleccionada('');
                          setUsuarioSeleccionado({});
                        }}
                      >
                        <i className="pi pi-times"></i>
                      </div>

                      <div className="items">
                        <button onClick={editarUsuario}>Editar</button>
                        <button onClick={cambiarContrasena}>Eliminar</button>
                        <button onClick={cambiarContrasena}>
                          Resetear contraseña
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="table-empty">
              <h1>No se encontró resultados</h1>
            </div>
          )}
        </div>
      </div>

      {page.length > 0 && (
        <div className="table-pagination flex items-center justify-end gap-4 p-5">
          <div className="pagination-options">
            <span
              style={{
                color: '#607D8B',
                fontWeight: 'bold',
              }}
            >
              Pág. {pageIndex + 1} de {pageOptions.length}
            </span>
          </div>
          <div className="pagination-sizes">
            <select
              value={pageSize}
              onChange={(e) => {
                scroll();
                setPageSize(Number(e.target.value));
                /*                 setFilaSeleccionada('');
                setUsuarioSeleccionado({}); */
              }}
            >
              {[10, 25, 50].map((pageSize, index) => (
                <option key={index} value={pageSize}>
                  Mostrar {pageSize} filas
                </option>
              ))}
            </select>
          </div>
          <div className="pagination-actions flex justify-end gap-2">
            <Button
              label="<<"
              onClick={() => {
                scroll();
                gotoPage(0);
                setFilaSeleccionada('');
                setUsuarioSeleccionado({});
              }}
              disabled={!canPreviousPage}
              className="p-button-secondary p-button-outlined"
            />

            <Button
              label="Anterior"
              onClick={() => {
                scroll();
                previousPage();
                setFilaSeleccionada('');
                setUsuarioSeleccionado({});
              }}
              disabled={!canPreviousPage}
              className="p-button-secondary p-button-outlined"
            />
            <Button
              label="Siguiente"
              onClick={() => {
                scroll();
                nextPage();
                setFilaSeleccionada('');
                setUsuarioSeleccionado({});
              }}
              disabled={!canNextPage}
              className="p-button-secondary p-button-outlined"
            />

            <Button
              label=">>"
              onClick={() => {
                scroll();
                gotoPage(pageCount - 1);
                setFilaSeleccionada('');
                setUsuarioSeleccionado({});
              }}
              disabled={!canPreviousPage}
              className="p-button-secondary p-button-outlined"
            />
          </div>
        </div>
      )}

      <CambiarContrasenaPage />
    </Fragment>
  );
};

export default UsuariosPage;

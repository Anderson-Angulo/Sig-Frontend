import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { Fragment, useState } from 'react';
import TableHeader from 'shared/components/tables/TableHeader';
import { RolesTableData } from 'features/configuration/data/roles/RolesTableData';
import TableItem from 'shared/components/tables/TableItem';
const RolesTableComponent = () => {
  const roles = useSelector((state) => state.roleReducer.roles);
  const { RoleTableHeader } = RolesTableData;
  const [currentUser, setCurrentUser] = useState('');
  const [showInfoUserID, setShowInfoUserID] = useState('');

  /* const tableSecondaryHeader = [
    'Usuario',
    'Apellidos',
    'Nombres',
    'Fecha de creación',
  ]; */
  /*   const user = [
    {
      rol: 'ADMINISTRADOR',
      nro_usuarios: 50,
      nro_permisos: 5,
      sistema: 'SI',
      fecha_creacion: '04/11/21',
    },
  ];

  const tableRoles = Array.from(Array(10)).map((_, index) => {
    return { ...user[0], id: index };
  }); */

  return (
    <Fragment>
      <div className="table-main table-roles mt-5">
        <TableHeader listHeader={RoleTableHeader} />
        <TableItem
          currentCols={RoleTableHeader.length}
          isLoading={roles.loading}
          listItem={roles.data}
          tableName="table-roles"
        />

        {/* <div className="table-body relative">
          {tableRoles.length > 0 && (
            <Fragment>
              {tableRoles.map((item, index) => (
                <Fragment key={index}>
                  <div
                    className={`table-item text-center ${
                      currentUser === item.id ? 'selected' : ''
                    }`}
                  >
                    <p>
                      {showInfoUserID !== item.id ? (
                        <i
                          className="pi pi-angle-down cursor-pointer"
                          onClick={() => setShowInfoUserID(item.id)}
                        ></i>
                      ) : (
                        <i
                          className="pi pi-angle-right cursor-pointer"
                          onClick={() => setShowInfoUserID('')}
                        ></i>
                      )}
                    </p>
                    <p>{item.rol}</p>
                    <p>{item.nro_usuarios}</p>
                    <p>{item.nro_permisos}</p>
                    <p>{item.sistema}</p>
                    <p>{item.fecha_creacion}</p>
                    <i
                      className="pi pi-ellipsis-v cursor-pointer"
                      onClick={() => setCurrentUser(item.id)}
                    ></i>
                                        {currentUser === item.id && (
                      <div className="table-item-actions-selected absolute w-full z-50 shadow-md rounded-md">
                        <i
                          className="pi pi-times absolute cursor-pointer rounded-full flex items-center"
                          onClick={() => setCurrentUser('')}
                        ></i>
                        <div className="item-selected-actions flex flex-col">
                          <button>Editar</button>
                        </div>
                      </div>
                    )}
                  </div>
                  {showInfoUserID === item.id && (
                    <div className="table-secondary p-6 bg-white">
                      <div className="table-header">
                        {tableSecondaryHeader.map((header) => (
                          <div
                            className="header-title flex items-center justify-center gap-x-3"
                            key={index}
                          >
                            <h3 className="text uppercase">{header}</h3>
                          </div>
                        ))}
                      </div>
                      <div className="table-item">
                        <p>nataly@gmail.com</p>
                        <p>Rojas</p>
                        <p>Brigitte Nataly</p>
                        <p>20/02/2021</p>
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
            </Fragment>
          )}
        </div> */}
        {/* {tableRoles.length > 0 && (
          <div className="table-pagination flex items-center justify-end gap-4 p-5">
            <div className="pagination-pages">
              <span
                style={{
                  color: '#607D8B',
                  fontWeight: 'bold',
                }}
              >
                Pág. 1 de 2
              </span>
            </div>
            <div className="pagination-rows">
              <select>
                <option>Mostrar 2 filas</option>
              </select>
            </div>
            <div className="pagination-actions flex justify-end gap-2">
              <Button
                label="<<"
                className="p-button-secondary p-button-outlined"
              />

              <Button
                label="Anterior"
                className="p-button-secondary p-button-outlined"
              />
              <Button
                label="Siguiente"
                className="p-button-secondary p-button-outlined"
              />

              <Button
                label=">>"
                className="p-button-secondary p-button-outlined"
              />
            </div>
          </div>
        )} */}
      </div>
    </Fragment>
  );
};

export default RolesTableComponent;

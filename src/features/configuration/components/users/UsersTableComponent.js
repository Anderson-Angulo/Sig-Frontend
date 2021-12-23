import { Fragment, useState } from 'react';
import { UsersTableData } from 'features/configuration/data/users/UsersTableData';
import { Button } from 'primereact/button';
import TableHeader from 'shared/components/tables/TableHeader';

const UsersTableComponent = () => {
  const [currentUser, setCurrentUser] = useState('');
  const { UsersTableHeader } = UsersTableData;
  const tableHeader = [
    'usuario',
    'nombres',
    'apellidos',
    'fecha creación',
    'ultimo acceso',
  ];
  const user = [
    {
      apellidos: 'Rojas Moreno',
      fecha_creacion: '02/11/21',
      nombres: 'Brigitte Nataly',
      ultimo_acceso: '04/11/21',
      usuario: 'natalyrojasm5@gmail.com',
    },
  ];

  const tableUsers = Array.from(Array(10)).map((_, index) => {
    return { ...user[0], id: index };
  });

  return (
    <Fragment>
      <div className="table-main table-users mt-5">
        <TableHeader listHeader={UsersTableHeader} currentHeader="email" />

        <div className="table-body relative">
          {tableUsers.length > 0 && (
            <Fragment>
              {tableUsers.map((item, index) => (
                <Fragment key={index}>
                  <div
                    className={`table-item text-center ${
                      currentUser === item.id ? 'selected' : ''
                    }`}
                  >
                    <p>{item.usuario}</p>
                    <p>{item.nombres}</p>
                    <p>{item.apellidos}</p>
                    <p>{item.fecha_creacion}</p>
                    <p>{item.ultimo_acceso}</p>
                    <p>{item.ultimo_acceso}</p>
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
                          <button>Eliminar</button>
                          <button>Resetear contraseña</button>
                        </div>
                      </div>
                    )}
                  </div>
                </Fragment>
              ))}
            </Fragment>
          )}
          {tableUsers.length <= 0 && (
            <div className="table-body-empty">
              <i className="pi pi-inbox"></i>
              <h3>No hay datos</h3>
            </div>
          )}
        </div>

        {tableUsers.length > 0 && (
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
        )}
      </div>
    </Fragment>
  );
};

export default UsersTableComponent;

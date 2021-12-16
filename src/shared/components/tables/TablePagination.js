import { Button } from 'primereact/button';
import React from 'react';

const TablePagination = ({ currentPage = 0, pageSize }) => {
  return (
    <div className="table-pagination flex items-center justify-end gap-4 p-5">
      <div className="pagination-pages">
        <span
          style={{
            color: '#607D8B',
            fontWeight: 'bold',
          }}
        >
          Pág. {currentPage} de {pageSize}
        </span>
      </div>
      <div className="pagination-rows">
        <select>
          <option>Mostrar 2 filas</option>
          <option>Mostrar 4 filas</option>
          <option>Mostrar 6 filas</option>
        </select>
      </div>
      <div className="pagination-actions flex justify-end gap-2">
        {currentPage !== 0 && currentPage !== 1 && (
          <Button label="<<" className="p-button-secondary p-button-outlined" />
        )}
        {currentPage !== pageSize && (
          <Button label=">>" className="p-button-secondary p-button-outlined" />
        )}
      </div>
    </div>
  );
};

export default TablePagination;

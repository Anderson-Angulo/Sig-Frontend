const TableEmpty = ({ textAditional = '' }) => {
  return (
    <div className="table-body-empty">
      <i className="pi pi-inbox"></i>
      <h3>{textAditional !== '' ? ' ' + textAditional : 'No hay datos'}</h3>
    </div>
  );
};

export default TableEmpty;

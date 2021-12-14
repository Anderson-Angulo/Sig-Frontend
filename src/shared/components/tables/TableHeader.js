const TableHeader = ({ listHeader, currentHeader = '' }) => {
  return (
    <div className="table-header">
      {listHeader.map(({ text, name }, index) => {
        return text === '' ? (
          <div key={index}></div>
        ) : (
          <div
            className="header-title flex items-center justify-center gap-x-3"
            key={index}
          >
            <h3 className="text uppercase">{text}</h3>
            <div className="flex flex-col">
              {currentHeader === name ? (
                <i className="pi pi-chevron-down icon-small"></i>
              ) : (
                <i className="pi pi-chevron-up icon-small"></i>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TableHeader;

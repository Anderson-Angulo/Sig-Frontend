const TableHeader = ({
  listHeader,
  currentHeader = '',
  showIcon = true,
  colMain,
  order,
  changeOrientation,
}) => {
  return (
    <div className="table-header">
      {listHeader.map(({ text, name }, index) => {
        return text === '' ? (
          <div key={index}></div>
        ) : (
          <div
            className={`header-title flex items-center gap-x-3 ${
              colMain === name ? 'justify-start' : 'justify-center'
            }`}
            key={index}
          >
            <h3 className="text">{text}</h3>
            {showIcon && (
              <div className="flex flex-col">
                {currentHeader === name && order === 'asc' ? (
                  <i
                    className="pi pi-chevron-down icon-small cursor-pointer"
                    onClick={() => changeOrientation({ name, order: 'desc' })}
                  ></i>
                ) : (
                  <i
                    className="pi pi-chevron-up icon-small cursor-pointer"
                    onClick={() => changeOrientation({ name, order: 'asc' })}
                  ></i>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TableHeader;

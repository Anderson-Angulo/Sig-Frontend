import { Fragment } from 'react';
import { Skeleton } from 'primereact/skeleton';
import ChangeTableItem from 'shared/helpers/ChangeTableItem';
import TableEmpty from './TableEmpty';

const TableItem = ({
  listItem,
  isLoading = false,
  currentItem,
  setShowOptions,
  tableName = '',
  currentCols,
}) => {
  const skeletons = (col) => {
    if (tableName === 'table-roles' && col === 0) return <div></div>;
    else return <Skeleton width="100%" height="2.2rem" borderRadius="16px" />;
  };

  if (isLoading) {
    return (
      <Fragment>
        {[1, 2, 3, 4, 5, 6].map((num) => {
          const cols = Array.from(Array(currentCols)).map((_, index) => index);

          return (
            <div className="table-item text-center" key={num}>
              {cols.map((col) => (
                <Fragment key={col}>{skeletons(col)}</Fragment>
              ))}
            </div>
          );
        })}
      </Fragment>
    );
  } else if (listItem.length > 0 && !isLoading) {
    return (
      <Fragment>
        {listItem.map((item) => {
          const { values, id } = ChangeTableItem({ item, tableName });

          return (
            <div className="table-item text-center" key={id}>
              {tableName === 'table-roles' && <div></div>}
              {values.map((val, i) => (
                <p key={i}>{val}</p>
              ))}
              <i
                className="pi pi-ellipsis-v cursor-pointer"
                onClick={setShowOptions}
              ></i>
            </div>
          );
        })}
      </Fragment>
    );
  } else if (listItem.length <= 0 && !isLoading) return <TableEmpty />;
};

export default TableItem;

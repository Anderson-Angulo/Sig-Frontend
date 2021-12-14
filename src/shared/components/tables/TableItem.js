import { Fragment } from 'react';
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
  if (isLoading) {
    return (
      <Fragment>
        {[1, 2, 3, 4, 5, 6].map(() => {
          const cols = Array.from(Array(currentCols)).map((i) => i);
          return (
            <div className="table-item text-center">
              {cols.map((col) => (
                <Skeleton
                  key={col}
                  width="100%"
                  height="2rem"
                  borderRadius="16px"
                />
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
              {values.map(val, (i) => (
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

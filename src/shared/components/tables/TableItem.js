import { Fragment } from 'react';
import { Skeleton } from 'primereact/skeleton';
import ChangeTableItem from 'shared/helpers/ChangeTableItem';
import TableEmpty from './TableEmpty';

const TableItem = ({
  listItem,
  isLoading = false,
  currentOptions,
  showOption,
  tableName = '',
  currentCols,
  SubTableHeader,
  SubTableItem,
  Actions = '',
}) => {
  if (isLoading) {
    const Skeletons = ({ col }) => {
      if (tableName === 'table-roles' && col === 0) return <div></div>;
      else return <Skeleton width="100%" height="2.2rem" borderRadius="16px" />;
    };
    return (
      <Fragment>
        {[1, 2, 3].map((num) => {
          const cols = Array.from(Array(currentCols)).map((_, index) => index);

          return (
            <div className="table-item text-center" key={num}>
              {cols.map((col) => (
                <Skeletons key={col} col={col} />
              ))}
            </div>
          );
        })}
      </Fragment>
    );
  } else if (listItem.length > 0 && !isLoading) {
    const IconAgle = ({ quantityUsers, id, showSubTable }) => {
      if (quantityUsers > 0 && !showSubTable)
        return (
          <i
            className="pi pi-angle-down cursor-pointer"
            onClick={() =>
              showOption({
                currentID: id,
                showSubTable: true,
                action: 'getUserByRole',
              })
            }
          ></i>
        );
      else if (quantityUsers > 0 && showSubTable)
        return (
          <i
            className="pi pi-angle-right cursor-pointer"
            onClick={() => showOption({ currentID: '', showSubTable: false })}
          ></i>
        );
      else return <div></div>;
    };
    return (
      <Fragment>
        {listItem.map((item) => {
          const { values, id, showAction } = ChangeTableItem({
            item,
            tableName,
          });

          const showSubTable = () => {
            return (
              tableName === 'table-roles' &&
              currentOptions.showSubTable &&
              currentOptions.currentID === id
            );
          };

          const showIconEllipsis = () => {
            const tables = ['table-roles'];
            return tables.includes(tableName) && showAction;
          };

          const showActions = () => {
            return (
              currentOptions?.showOptions &&
              currentOptions.currentID === id &&
              tableName !== 'sub-table-roles'
            );
          };

          return (
            <Fragment key={id}>
              <div className="table-item text-center" key={id}>
                {tableName === 'table-roles' && (
                  <IconAgle
                    quantityUsers={item.quantityUsers}
                    showSubTable={showSubTable()}
                    id={id}
                  />
                )}
                {values.map((val, i) => (
                  <p key={i}>{val}</p>
                ))}

                {showIconEllipsis() && (
                  <i
                    className="pi pi-ellipsis-v cursor-pointer"
                    onClick={() =>
                      showOption({ currentID: id, showOptions: true })
                    }
                  ></i>
                )}
                {showActions() && <Actions />}
              </div>
              {showSubTable() && (
                <div className="table-secondary p-6 bg-white">
                  <SubTableHeader />
                  <SubTableItem />
                </div>
              )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  } else if (listItem.length <= 0 && !isLoading) return <TableEmpty />;
};

export default TableItem;

import { Fragment } from 'react';
import { UsersTableData } from 'features/configuration/data/users/UsersTableData';
import TableHeader from 'shared/components/tables/TableHeader';
import TableItem from 'shared/components/tables/TableItem';
import TableActions from 'shared/components/tables/TableActions';
import TablePagination from 'shared/components/tables/TablePagination';
import useUserTable from 'features/configuration/hooks/users/useUserTable';
import useUserFilter from 'features/configuration/hooks/users/useUserFilter';

const UsersTableComponent = () => {
  const { UsersTableHeader, UsersTableActions } = UsersTableData;
  let { users, closeActions, currentAction, setOptions, options } =
    useUserTable();

  return (
    <Fragment>
      <div className="table-main table-users mt-5">
        <TableHeader
          listHeader={UsersTableHeader}
          colMain="email"
          currentHeader={users.currentCol}
        />
        <TableItem
          currentCols={UsersTableHeader.length}
          isLoading={users.loading}
          listItem={users.data}
          showOption={setOptions}
          tableName="table-users"
          currentOptions={options}
          Actions={() => (
            <TableActions
              actions={UsersTableActions}
              closeActions={closeActions}
              setSelectedOption={currentAction}
            />
          )}
        />

        {users.data.length > 0 && users.pagination.currentPage > 1 && (
          <TablePagination
            currentPage={users.pagination.currentPage}
            pageSize={users.pagination.pageCount}
          />
        )}
      </div>
    </Fragment>
  );
};

export default UsersTableComponent;

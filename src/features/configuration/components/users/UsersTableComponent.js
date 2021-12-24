import { Fragment, useState } from 'react';
import { UsersTableData } from 'features/configuration/data/users/UsersTableData';
import { useSelector } from 'react-redux';
// import { Button } from 'primereact/button';
import TableHeader from 'shared/components/tables/TableHeader';
import TableItem from 'shared/components/tables/TableItem';
import TableActions from 'shared/components/tables/TableActions';
import TablePagination from 'shared/components/tables/TablePagination';

const UsersTableComponent = () => {
  const { UsersTableHeader, UsersTableActions } = UsersTableData;
  const [options, setOptions] = useState({
    currentID: '',
    showOptions: false,
    showSubTable: false,
  });
  const users = useSelector((state) => state.userReducer.users);
  const closeActions = () => {
    setOptions({ ...options, showOptions: false });
  };

  const currentAction = (action) => {
    console.log('action ', action);
  };

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
          showOption={true}
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

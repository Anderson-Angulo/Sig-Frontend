import { Fragment } from 'react';

import TableHeader from 'shared/components/tables/TableHeader';
import TableItem from 'shared/components/tables/TableItem';
import TablePagination from 'shared/components/tables/TablePagination';

import TableActions from 'shared/components/tables/TableActions';
import useRoleTable from 'features/configuration/hooks/roles/useRoleTable';
import { RolesTableData } from 'features/configuration/data/roles/RolesTableData';

const RolesTableComponent = () => {
  const { RoleTableHeader, RoleSubTableHeader, RoleTableActions } =
    RolesTableData;
  const {
    roles,
    showOption,
    options,
    closeActions,
    currentAction,
    currentRole,
    nextPage,
    previousPage,
    changeRow,
    changeOrientation,
  } = useRoleTable();

  return (
    <Fragment>
      <div className="table-main table-roles mt-5">
        <TableHeader
          listHeader={RoleTableHeader}
          currentHeader={roles.currentCol}
          order={roles.order}
          changeOrientation={changeOrientation}
          colMain="roleName"
        />
        <TableItem
          currentCols={RoleTableHeader.length}
          isLoading={roles.loading}
          listItem={roles.data}
          showOption={showOption}
          tableName="table-roles"
          currentOptions={options}
          Actions={() => (
            <TableActions
              actions={RoleTableActions}
              closeActions={closeActions}
              setSelectedOption={currentAction}
            />
          )}
          SubTableHeader={() => (
            <TableHeader
              listHeader={RoleSubTableHeader}
              currentHeader=""
              showIcon={false}
            />
          )}
          SubTableItem={() => (
            <TableItem
              tableName="sub-table-roles"
              currentCols={RoleSubTableHeader.length}
              isLoading={currentRole.loading}
              listItem={currentRole.data}
            />
          )}
        />
        {roles.data.length > 0 && (
          <TablePagination
            currentPage={roles.pagination.currentPage}
            pageCount={roles.pagination.pageCount}
            pageSize={roles.pagination.pageSize}
            nextPage={nextPage}
            previousPage={previousPage}
            changeRow={changeRow}
          />
        )}
      </div>
    </Fragment>
  );
};

export default RolesTableComponent;

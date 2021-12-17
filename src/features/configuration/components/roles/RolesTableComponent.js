import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import TableHeader from 'shared/components/tables/TableHeader';
import { RolesTableData } from 'features/configuration/data/roles/RolesTableData';
import TableItem from 'shared/components/tables/TableItem';
import TablePagination from 'shared/components/tables/TablePagination';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';

const RolesTableComponent = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roleReducer.roles);
  const currentRole = useSelector((state) => state.roleReducer.userByRoleId);
  const { RoleTableHeader, RoleSubTableHeader } = RolesTableData;
  const [options, setOptions] = useState({
    currentID: '',
    showOptions: false,
    showSubTable: false,
  });

  const showOption = (fields) => {
    if (fields?.action === 'getUserByRole') {
      getUserByRole(fields.currentID);
      delete fields.action;
    }
    setOptions({ ...options, ...fields });
  };

  const getUserByRole = (id) => {
    dispatch(RolesAction.getUserByRoleId(id));
  };

  return (
    <Fragment>
      <div className="table-main table-roles mt-5">
        <TableHeader
          listHeader={RoleTableHeader}
          currentHeader={roles.currentCol}
        />
        <TableItem
          currentCols={RoleTableHeader.length}
          isLoading={roles.loading}
          listItem={roles.data}
          showOption={showOption}
          tableName="table-roles"
          currentOptions={options}
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
            pageSize={roles.pagination.pageSize}
          />
        )}
      </div>
    </Fragment>
  );
};

export default RolesTableComponent;

import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TableHeader from 'shared/components/tables/TableHeader';
import { RolesTableData } from 'features/configuration/data/roles/RolesTableData';
import TableItem from 'shared/components/tables/TableItem';
import TablePagination from 'shared/components/tables/TablePagination';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';
import TableActions from 'shared/components/tables/TableActions';

const RolesTableComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.roleReducer.roles);
  const currentRole = useSelector((state) => state.roleReducer.userByRoleId);
  const { RoleTableHeader, RoleSubTableHeader, RoleTableActions } =
    RolesTableData;

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
  const closeActions = () => {
    setOptions({ ...options, showOptions: false });
  };

  const currentAction = (action) => {
    if (action === 'role-edit')
      history.push(
        `/configuracion/rol-privilegios/editar/${options.currentID}`
      );
  };

  return (
    <Fragment>
      <div className="table-main table-roles mt-5">
        <TableHeader
          listHeader={RoleTableHeader}
          currentHeader={roles.currentCol}
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
            pageSize={roles.pagination.pageCount}
          />
        )}
      </div>
    </Fragment>
  );
};

export default RolesTableComponent;

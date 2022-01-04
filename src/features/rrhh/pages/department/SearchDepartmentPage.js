import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';

// import RolesFiltroComponent from 'features/configuration/components/roles/RolesFilterComponent';
// import RolesTableComponent from 'features/configuration/components/roles/RolesTableComponent';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';

import 'shared/styles/components/tables.scss';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';
import TableComponent from 'features/rrhh/components/department/TableComponent';
import FilterComponent from 'features/rrhh/components/department/FilterComponent';
//import FilterComponent from 'features/rrhh/components/department/FilterComponent';


const SearchDepartmentPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const rolesInformation = useSelector((state) => state.roleReducer.roles);
    const { updateTitle } = useSetTitlePage();

    useEffect(() => {
        updateTitle({
            title: 'Gestión de la organización',
            subtitle: 'Departamento',
        });
    }, []);

    useEffect(() => {
        const { pagination } = rolesInformation;

        const hasInformation = Object.values(pagination)?.length > 0;
        if (!hasInformation) {
            dispatch(RolesAction.getRoles({ change: false }));
        }
    }, []);

    return (
        <Fragment>
            <FilterComponent />
            <Button
                icon="pi pi-plus"
                type="button"
                label="Nuevo"
                className="btn btn-primary mt-4"
                onClick={() => {
                    //   history.push('/configuracion/rol-privilegios/nuevo');
                }}
            />
            <TableComponent />
        </Fragment>
    );
};

export default SearchDepartmentPage;

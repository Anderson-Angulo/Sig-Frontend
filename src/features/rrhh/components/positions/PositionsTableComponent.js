import { Fragment } from 'react';
import TableHeader from 'shared/components/tables/TableHeader';
import TableItem from 'shared/components/tables/TableItem';
import TablePagination from 'shared/components/tables/TablePagination';
import TableActions from 'shared/components/tables/TableActions';
import usePositionTable from 'features/rrhh/hooks/positions/usePositionTable';
import { PositionsTableData } from 'features/rrhh/data/positions/PositionsDataTable';

const PositionsTableComponent = () => {
    const { PositionsTableHeader, PositionsTableActions } = PositionsTableData;
    const { options } = usePositionTable();

    return (
        <Fragment>
            <div className="table-main table-roles mt-5">
                <TableHeader
                    listHeader={PositionsTableHeader}
                    currentHeader={null}
                    colMain=""
                />
            </div>
        </Fragment>
    )
};

export default PositionsTableComponent;
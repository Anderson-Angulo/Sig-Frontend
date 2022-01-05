import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';

import useSetTitlePage from 'shared/hooks/useSetTitlePage';
import PositionsFilterComponent from 'features/rrhh/components/positions/PositionsFilterComponent';
import PositionsTableComponent from 'features/rrhh/components/positions/PositionsTableComponent';

const PositionsPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { updateTitle } = useSetTitlePage();

    useEffect(() => {
        updateTitle({
          title: 'Gestión de la Organización',
          subtitle: 'Cargos',
        });
      }, []);

    return (
        <Fragment>
            <PositionsFilterComponent/>
            <Button
                icon="pi pi-plus"
                type="button"
                label="Nuevo"
                className="btn btn-primary mt-4"
                onClick={() => {
                history.push('/rrhh/cargos/nuevo');
                }}
            />
            <PositionsTableComponent />
        </Fragment>
    );
  };
  
export default PositionsPage;
  
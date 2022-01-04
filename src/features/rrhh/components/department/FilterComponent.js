import { Fragment } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import PinerComponent from 'shared/components/Piner/PinerComponent';
import { Panel } from 'primereact/panel';

const FilterComponent = () => {


    return (
        <Fragment>
            <Panel header="FILTRO POR" toggleable>
                <div className="filter">
                    <div className="w-full">
                        <span className="p-float-label p-input-icon-left w-full">
                            <i className="pi pi-search" />
                            <InputText
                                id="input-search"

                            />
                            <label htmlFor="input-search">Buscar por deartamento</label>
                        </span>
                        {(
                            <div className="filter-piners mt-3">

                            </div>
                        )}
                    </div>
                    <div className="filter-users-action">
                        <div className="flex gap-3 w-full">
                            <Button
                                icon="pi pi-search"
                                type="button"
                                label="Buscar"

                                className="btn btn-primary w-full"
                            />
                            <Button
                                icon="pi pi-download"
                                type="button"
                                label="Descargar"
                                className="btn btn-primary w-full"
                            />
                        </div>
                        <div className="flex mt-3">
                            <Button
                                type="button"
                                label="Búsqueda avanzada"
                                className="btn btn-primary w-full"
                            />
                        </div>
                    </div>
                </div>
            </Panel>

        </Fragment>
    );
};

export default FilterComponent;

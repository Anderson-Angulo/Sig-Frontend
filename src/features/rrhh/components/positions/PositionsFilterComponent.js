import { Fragment } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

const PositionsFilterComponent = () => {
    return (
        <Fragment>
            <Panel header="FILTRO POR" toggleable>
                <div className="filter-positions">
                    <div className="w-full">
                        <span className="p-float-label p-input-icon-left w-full">
                            <i className="pi pi-search" />
                            <InputText
                                id="input-search"
                                ref={null}
                                onChange={null}
                            />
                            <label htmlFor="input-search">Buscar por cargo</label>
                        </span>
                    </div>
                    <div className="filter-users-action">
                        <div className="flex gap-3 w-full">
                            <Button
                                icon="pi pi-search"
                                type="button"
                                label="Buscar"
                                onClick={null}
                                disabled={null}
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
                                onClick={null}
                            />
                        </div>
                    </div>
                </div>
            </Panel>
        </Fragment>
    )
};

export default PositionsFilterComponent;
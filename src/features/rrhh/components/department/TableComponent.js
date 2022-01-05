import { Fragment } from 'react';
import { MultiSelect } from 'primereact/multiselect';

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import moment from 'moment';

const TableComponent = () => {
    const [departments, setDepartments] = useState([
        {
            department: "Operaciones",
            departmentParent: "",
            manager: "Antonio Ramirez",
            employeeQuantities: 50,
            creationDate: new Date()
        }, {
            department: "Servicios",
            departmentParent: "Operaciones",
            manager: "Frank Mamani",
            employeeQuantities: 15,
            creationDate: new Date()
        },
        {
            department: "Contratos",
            departmentParent: "Operaciones",
            manager: "Moises Quispe",
            employeeQuantities: 21,
            creationDate: new Date()
        },
        {
            department: "Gran Mineria",
            departmentParent: "Operaciones",
            manager: "Jose Azaña",
            employeeQuantities: 10,
            creationDate: new Date()
        }
    ]);


    const columns = [
        { field: 'departmentParent', header: 'Departamento Padre' },
        { field: 'manager', header: 'Gerente o jefe Encargado' },
        { field: 'employeeQuantities', header: 'N° Empleados' }
    ];
    const [selectedColumns, setSelectedColumns] = useState(columns);

    const getCreationDate = (rowData) => { return moment(rowData.creationDate).format('DD/MM/YYYY'); }

    const columnComponents = selectedColumns.map(col => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    }

    const getActions = (rowData) => {
        return <i
            className="pi pi-ellipsis-v cursor-pointer"
        // onClick={() =>
        //     showOption({ currentID: id, showOptions: true })
        // }
        ></i>
    }

    const header = (
        <div style={{ textAlign: 'right' }}>
            <MultiSelect value={selectedColumns}
                options={columns}
                display="chip"
                optionLabel="header"
                onChange={onColumnToggle}

                style={{ width: '20em' }} />
        </div>
    );


    const onPage = (event) => { }
    const onSort = (event) => { }

    return (
        <Fragment>
            <div className="table-main table-roles mt-5">
                <DataTable
                    value={departments}
                    header={header}
                    paginator
                    stripedRows
                    responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
                    rows={10}
                    size="small"
                    onPage={(e) => onPage(e)}
                    onSort={(e) => onSort(e)}
                >
                    <Column field="department" header="Departamento" />
                    {columnComponents}
                    {/* <Column field="department" header="Departamento" sortable></Column>
                    <Column field="departmentParent" header="Departamento Padre" sortable></Column>
                    <Column field="manager" header="Gerente o jefe Encargado" sortable></Column>
                    <Column field="employeeQuantities" header="N° Empleados" sortable></Column>
                    <Column header="Fecha Creación" body={getCreationDate} sortable></Column>
                    */}
                    <Column header="" body={getActions}></Column>
                </DataTable>
            </div>
        </Fragment>
    );
};

export default TableComponent;

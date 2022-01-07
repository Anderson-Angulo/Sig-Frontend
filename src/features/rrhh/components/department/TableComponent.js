

import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton } from 'primereact/selectbutton';
import moment from 'moment';
import { Fragment } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Checkbox } from 'primereact/checkbox';
import '../../pages/department/SearchDepartmentPage.scss';
import { CoreConstants } from 'core/commons/CoreConstants';
import { Menu } from 'primereact/menu';

const TableComponent = () => {

    const typeViews = [
        { icon: 'pi pi-list', value: CoreConstants.TypeView.LIST },
        { icon: 'pi pi-microsoft', value: CoreConstants.TypeView.CANVA }
    ];

    const [departments, setDepartments] = useState([
        {
            id: 1,
            department: "Operaciones",
            departmentParent: "",
            manager: "Antonio Ramirez",
            employeeQuantities: 50,
            creationDate: new Date()
        }, {
            id: 2,
            department: "Servicios",
            departmentParent: "Operaciones",
            manager: "Frank Mamani",
            employeeQuantities: 15,
            creationDate: new Date()
        },
        {
            id: 3,
            department: "Contratos",
            departmentParent: "Operaciones",
            manager: "Moises Quispe",
            employeeQuantities: 21,
            creationDate: new Date()
        },
        {
            id: 4,
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
    const [typeView, setTypeView] = useState(CoreConstants.TypeView.LIST);
    const actionsHeader = useRef(null);
    const actionsBody = useRef(null);
    const menu = useRef(null);

    const getCreationDate = (rowData) => { return moment(rowData.creationDate).format('DD/MM/YYYY'); }

    const columnComponents = selectedColumns.map(col => {
        return <Column key={col.field} field={col.field} header={col.header} sortable />;
    });


    const onPage = (event) => { }
    const onSort = (event) => { }

    const actionHeaderTemplate = (rowData) => {
        return <i
            key="action"
            className="pi pi-ellipsis-v cursor-pointer"
            onClick={(e) => actionsHeader.current.toggle(e)}></i>;
    }

    const actionBodyTemplate = (rowData) => {
        return <i
            key={rowData.id}
            className="pi pi-ellipsis-v cursor-pointer"
            onClick={(event) => menu.current.toggle(event)}></i>
    }

    const onColumnToggle = (e, item) => {
        let _selectedColumns = [...selectedColumns];

        if (e.checked)
            _selectedColumns.push(item);
        else
            _selectedColumns = _selectedColumns.filter(c => { return c.field !== e.value });

        setSelectedColumns(_selectedColumns);

    }

    const getColumns = () => {
        let array = [];
        columns.map((item, index) => {
            const column = <div key={item.field} className="p-field-checkbox py-1">
                <Checkbox
                    inputId={item.field}
                    name="column"
                    value={item.field}
                    onChange={(e) => onColumnToggle(e, item)}
                    checked={selectedColumns.some((x) => x.field === item.field)}
                />
                <label class="ml-1" htmlFor={item.field}>{item.header}</label>
            </div>
            array.push(column);
        });
        return array;
    };
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-pencil',
            command: () => {
                //  toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                //toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
            }
        }
    ];
    return (
        <Fragment>

            <div className="flex justify-end mb-2">
                <SelectButton
                    value={typeView}
                    options={typeViews}
                    onChange={(e) => setTypeView(e.value)}
                    itemTemplate={(option) => { return <i className={option.icon}></i>; }}
                />
            </div>

            {typeView === CoreConstants.TypeView.CANVA && <div className="grid grid-cols-4 gap-2">
                {
                    departments.map((item, index) => {
                        return (
                            <div className="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                <div className="flex justify-between">
                                    <h5 className="mb-1 text-md font-bold   text-gray-900 dark:text-white">{item.department}</h5>
                                    <i
                                        key={item.id}
                                        className="pi pi-ellipsis-v cursor-pointer"
                                        onClick={(e) => menu.current.toggle(e)}></i>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-700 dark:text-gray-400">
                                        {item.departmentParent ? item.departmentParent + ' -' : ''}  {item.manager}
                                    </p>
                                    <span className="text-xs float-right px-2 py-1 text-black bg-white rounded-full border border-gray-200">{item.employeeQuantities}</span>
                                </div>
                            </div>
                        );
                    })
                }

            </div>}


            {typeView === CoreConstants.TypeView.LIST &&
                <div className="table-main table-roles mt-3 ">
                    <DataTable
                        value={departments}
                        paginator
                        stripedRows
                        responsiveLayout="scroll"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
                        rows={10}
                        size="small"
                        onPage={(e) => onPage(e)}
                        onSort={(e) => onSort(e)}>
                        <Column field="department" header="Departamento" sortable />
                        {columnComponents}
                        <Column header={actionHeaderTemplate} body={actionBodyTemplate} ></Column>
                    </DataTable>
                </div>
            }

            <OverlayPanel ref={actionsHeader} showCloseIcon style={{ width: '300px' }}>{getColumns()}</OverlayPanel>
           
            <Menu model={items} popup ref={menu} id="popup_menu" />

        </Fragment>
    );
};

export default TableComponent;

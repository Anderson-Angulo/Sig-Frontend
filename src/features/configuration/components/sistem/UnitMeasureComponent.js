import useUnitMeasure from 'features/configuration/hooks/sistem/useUnitMeasure';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import TableEmpty from 'shared/components/tables/TableEmpty';

const UnitMeasureComponent = () => {
  const {
    showTables,
    toggleActionUnit,
    saveUnit,
    newUnitMeasure,
    listUnitMeasure,
    isNewUnit,
    setIsNewUnit,
  } = useUnitMeasure();

  const TableHeader = () => {
    return (
      <div className="table-header">
        <div className="header-title flex items-center gap-x-3">
          <h3>Unidad de medida</h3>
        </div>
        <div className="header-title flex items-center gap-x-3">
          <h3>Abreviatura</h3>
        </div>
        <div className="header-title flex items-center gap-x-3"></div>
      </div>
    );
  };

  const TableItem = ({ ...rest }) => {
    const { id = '', mode, unit, abbreviation } = rest;
    return (
      <form
        className="table-item"
        onSubmit={(e) => {
          e.preventDefault();
          saveUnit({ id, form: e.target, mode });
        }}
        id={id}
        data-mode={mode}
      >
        <InputText
          defaultValue={unit}
          name="unit"
          maxLength={200}
          required
          readOnly={mode === 'edit'}
        />
        <InputText
          defaultValue={abbreviation}
          name="abbreviation"
          maxLength={3}
          required
          readOnly={mode === 'edit'}
        />
        <div className="item-actions flex gap-2">
          <button
            style={{
              color: '#004680',
            }}
            className="underline p-0"
            type="submit"
          >
            Guardar Cambios
          </button>
          <button
            style={mode === 'new' ? { color: '#ff194e' } : { color: '#004680' }}
            className="underline p-0"
            type="button"
            onClick={() => toggleActionUnit({ mode, id })}
          >
            {mode === 'new' ? (
              <>
                <i className="pi pi-trash"></i> Eliminar
              </>
            ) : (
              <>
                <i className="pi pi-pencil"></i> Editar
              </>
            )}
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="content-tab-sistem">
      <h2>Unidad de Medida</h2>
      <p className="description mt-5 mb-3 font-semibold">
        Aquí puedes crear y editar las unidades que utilizará la aplicación.
      </p>
      <Button
        icon="pi pi-plus"
        type="button"
        label="Añadir nueva unidad de medida"
        className="btn btn-primary mb-3"
        onClick={() => setIsNewUnit(true)}
        disabled={isNewUnit}
      />
      {showTables() && (
        <div className="table-main table-units mb-3">
          <TableHeader />

          {isNewUnit && <TableItem {...newUnitMeasure} />}
        </div>
      )}
      {listUnitMeasure.length === 0 && <TableEmpty />}
    </div>
  );
};

export default UnitMeasureComponent;

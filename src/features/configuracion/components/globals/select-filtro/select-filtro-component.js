import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

const SelectFiltroComponent = ({ column }) => {
  const { filterValue, setFilter } = column;
  const [value, setValue] = useState(filterValue);
  const roles = [{ rol: 'Rol 1' }, { rol: 'Rol 2' }, { rol: 'Rol 3' }];

  return (
    <Dropdown
      options={roles}
      optionLabel="rol"
      filter
      showClear
      value={value || ''}
      filterBy="rol"
      className="w-full"
      onChange={(e) => {
        setFilter(e.value?.rol);
        setValue(e.target.value);
      }}
    />
  );
};

export default SelectFiltroComponent;

import { InputText } from 'primereact/inputtext';

const InputFilterComponent = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <InputText
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default InputFilterComponent;

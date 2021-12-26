import useTypeMoney from 'features/configuration/hooks/sistem/useTypeMoney';
import { RadioButton } from 'primereact/radiobutton';

const TypeMoneyComponent = () => {
  useTypeMoney();
  return (
    <div className="content-tab-sistem">
      <h2>Tipo de Moneda</h2>
      <p className="description mb-3">
        Aquí puedes seleccionar la moneda qué por defecto utilizará la
        aplicación.
      </p>
      <div>
        <div className="p-field-radiobutton">
          <RadioButton inputId="soles" name="type-money" value="Soles" />
          <label htmlFor="soles" className="pl-2">
            S/. - Nuevos Soles
          </label>
        </div>
        <div className="p-field-radiobutton mt-3">
          <RadioButton inputId="dollar" name="type-money" value="Dolares" />
          <label htmlFor="dollar" className="pl-2">
            $ - Dolares
          </label>
        </div>
      </div>
    </div>
  );
};

export default TypeMoneyComponent;

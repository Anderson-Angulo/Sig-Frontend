import './PinerComponent.scss';

const PinerComponent = ({ name, field, removePiner }) => {
  return (
    <div className="piner">
      <p>{name}</p>
      <i
        className="pi pi-times cursor-pointer"
        onClick={() => removePiner(field)}
      ></i>
    </div>
  );
};

export default PinerComponent;

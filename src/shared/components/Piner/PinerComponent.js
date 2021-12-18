import './PinerComponent.scss';

const PinerComponent = ({ name, field, removePiner }) => {
  return (
    <div
      className="piner"
      style={{
        backgroundColor: '#004680',
      }}
    >
      <p>{name}</p>
      <i
        className="pi pi-times cursor-pointer"
        onClick={() => removePiner(field)}
      ></i>
    </div>
  );
};

export default PinerComponent;

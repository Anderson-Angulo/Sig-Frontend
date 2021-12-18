import './PinerComponent.scss';

const PinerComponent = () => {
  return (
    <div
      className="piner"
      style={{
        backgroundColor: '#004680',
      }}
    >
      <p>Pinner</p>
      <i className="pi pi-times cursor-pointer"></i>
    </div>
  );
};

export default PinerComponent;

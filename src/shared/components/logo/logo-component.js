import './logo-component.scss';
const LogoComponent = () => {
  return (
    <div className="logo-main flex items-center gap-2">
      <img
        src="/images/logos/logo-icon.png"
        className=" logo-icon"
        alt="Calidar"
        title="Calidar"
      />
      <h1 className="name-company">Calidar</h1>
    </div>
  );
};

export default LogoComponent;

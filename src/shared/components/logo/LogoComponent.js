import './LogoComponent.scss';
const LogoComponent = () => {
  return (
    <div className="logo-main flex items-center gap-2">
      <img
        src="/images/logos/main-logo.png"
        className=" logo-icon"
        alt="Calidar"
        title="Calidar"
      />
    </div>
  );
};

export default LogoComponent;

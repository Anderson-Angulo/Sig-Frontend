import { useHistory } from 'react-router-dom';
import './LogoComponent.scss';
const LogoComponent = () => {
  const history = useHistory();

  return (
    <div className="logo-main flex items-center gap-2">
      <img
        src="/images/logos/main-logo.png"
        className=" logo-icon cursor-pointer"
        alt="Calidar"
        title="Calidar"
        onClick={() => history.push('/inicio')}
      />
    </div>
  );
};

export default LogoComponent;

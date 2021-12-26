import { useEffect } from 'react';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const MyAccountPage = () => {
  const { updateTitle } = useSetTitlePage();

  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Mi Cuenta',
    });
  }, []);

  return <div>MI CUENTA</div>;
};

export default MyAccountPage;

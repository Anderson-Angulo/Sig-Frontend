import { useEffect } from 'react';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const PageHomePage = () => {
  const { updateTitle } = useSetTitlePage();

  useEffect(() => {
    updateTitle({
      title: 'Inicio',
      subtitle: 'Inicio',
    });
  }, []);

  return <div>INICIO</div>;
};

export default PageHomePage;

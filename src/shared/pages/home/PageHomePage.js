import { useEffect } from 'react';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const PageHomePage = () => {
  const { updateTitle } = useSetTitlePage();

  useEffect(() => {
    updateTitle({
      title: 'Inicio',
    });
  }, []);

  return <div></div>;
};

export default PageHomePage;

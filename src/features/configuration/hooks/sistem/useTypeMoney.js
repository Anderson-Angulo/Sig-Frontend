import { useEffect } from 'react';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const useTypeMoney = () => {
  const { updateTitle } = useSetTitlePage();

  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Sistema',
      description: 'Tipo de moneda',
    });
  }, []);
  return {};
};

export default useTypeMoney;

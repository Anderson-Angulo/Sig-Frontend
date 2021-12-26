import { useEffect, useState } from 'react';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const useColorCorporate = () => {
  const [colors, setColors] = useState({
    fondo: '#E24D4D',
    defecto: '#E6E4E4',
    mouseEncima: '#000000',
    seleccionado: '#4DB4E2',
    btnPrimario: '#004680',
    btnSecundario: '#808080',
    btnExito: '#4DB4E2',
    btnAdvertencia: '#DFA98A',
    btnError: '#FF0909',
    btnOscuro: '#030303',
  });

  const { updateTitle } = useSetTitlePage();

  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Sistema',
      description: 'Color corporativo',
    });
  }, []);

  const handlerChangeColor = (e) => {
    setColors({
      ...colors,
      [e.target.name]: e.target.value,
    });
  };
  return {
    handlerChangeColor,
    colors,
  };
};

export default useColorCorporate;

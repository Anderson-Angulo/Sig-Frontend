import { useEffect, useState } from 'react';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const useUnitMeasure = () => {
  const { updateTitle } = useSetTitlePage();

  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Sistema',
      description: 'Unidad de Medida',
    });
  }, []);

  const [newUnitMeasure, setNewUnitMeasure] = useState({
    unit: '',
    abbreviation: '',
    mode: 'new',
  });
  const [listUnitMeasure, setListUnitMeasure] = useState([]);
  const [isNewUnit, setIsNewUnit] = useState(false);

  const saveUnit = ({ form }) => {
    const formData = new FormData(form);
    const unit = formData.get('unit');
    const abbreviation = formData.get('abbreviation');
    if (!form.id) {
      /* es nuevo */
    } else if (form.id && form.dataset.mode == 'edit') {
      /* esta editando */
    }
  };

  const toggleActionUnit = ({ mode, id }) => {
    if (!id) {
      setIsNewUnit(false);
      setNewUnitMeasure({
        unit: '',
        abbreviation: '',
        mode: 'new',
      });
    }
  };
  const showTables = () => {
    return isNewUnit || listUnitMeasure.length > 0;
  };
  return {
    showTables,
    toggleActionUnit,
    saveUnit,
    newUnitMeasure,
    listUnitMeasure,
    isNewUnit,
    setIsNewUnit,
  };
};

export default useUnitMeasure;

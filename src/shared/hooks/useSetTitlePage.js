import { useDispatch } from 'react-redux';
import { BreadcrumpAction } from 'core/store/actions/BreadcrumpAction';

const useSetTitlePage = () => {
  const dispatch = useDispatch();

  const updateTitle = (title, description = '') => {
    const page = { title };

    if (description !== '') page.description = description;
    dispatch(BreadcrumpAction.setTitlePage(page));
  };

  return {
    updateTitle,
  };
};

export default useSetTitlePage;

import { useDispatch } from 'react-redux';
import { BreadcrumpAction } from 'core/store/actions/BreadcrumpAction';

const useSetTitlePage = () => {
  const dispatch = useDispatch();

  const updateTitle = ({ title, subtitle = '', description = '' }) => {
    const page = { title };

    if (description !== '') page.description = description;
    if (subtitle !== '') page.subtitle = subtitle;
    dispatch(BreadcrumpAction.setTitlePage(page));
  };

  return {
    updateTitle,
  };
};

export default useSetTitlePage;

import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './HeaderComponent.scss';

const HeaderComponent = () => {
  const { currentPages } = useSelector((state) => state.breadcrumpReducer);
  const history = useHistory();
  const [currentTitle, setcurrentTitle] = useState({
    title: '-',
    subtitle: '',
    description: '',
    previousUrl: '',
  });

  useEffect(() => {
    if (Object.values(currentPages)?.length > 0)
      setcurrentTitle({
        ...currentPages,
      });
  }, [currentPages]);

  const previousPage = () => {
    if (!currentPages.previousUrl) return;

    history.push(currentPages.previousUrl);
  };
  return (
    <header
      className="header-route"
      style={{ backgroundColor: '#fff', color: '#004680' }}
    >
      <h2>{currentTitle.title}</h2>
      <div className="header-route-content mt-1">
        <Fragment>
          {currentTitle?.subtitle && (
            <div
              className={`current-page-big ${
                currentTitle.previousUrl ? 'cursor-pointer' : ''
              }`}
              onClick={previousPage}
            >
              <p className="text-sm">{currentTitle.subtitle}</p>
            </div>
          )}
          {currentTitle?.description && (
            <Fragment>
              <i className="pi pi-angle-right"></i> {currentTitle.description}
            </Fragment>
          )}
        </Fragment>
      </div>
    </header>
  );
};

export default HeaderComponent;

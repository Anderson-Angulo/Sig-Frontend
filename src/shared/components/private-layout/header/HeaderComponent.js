import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './HeaderComponent.scss';

const HeaderComponent = () => {
  const { currentPages } = useSelector((state) => state.breadcrumpReducer);
  const [currentTitle, setcurrentTitle] = useState({
    title: '-',
    description: '',
  });

  useEffect(() => {
    if (Object.values(currentPages)?.length > 0)
      setcurrentTitle({
        ...currentPages,
      });
  }, [currentPages]);

  return (
    <header
      className="header-route"
      style={{ backgroundColor: '#fff', color: '#004680' }}
    >
      <h2>{currentTitle.title}</h2>
      <div className="header-route-content mt-1">
        <Fragment>
          <div className="current-page-big">
            <p className="text-sm">{currentTitle.title}</p>
          </div>
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

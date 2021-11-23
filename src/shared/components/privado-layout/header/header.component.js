import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './header.component.scss';

const HeaderComponent = () => {
  const currentPages = useSelector(
    (state) => state.breadcrumpReducer.currentPages
  );
  const [currentTitle, setcurrentTitle] = useState([]);

  useEffect(() => {
    if (currentPages?.length > 0)
      setcurrentTitle(currentPages[currentPages.length - 1].descripcion);
  }, [currentPages]);

  return (
    <header
      className="header-route"
      style={{ backgroundColor: '#fff', color: '#004680' }}
    >
      <h2>{currentTitle}</h2>
      <div className="header-route-content mt-1">
        {currentPages.map((page, index) => {
          return index < currentPages.length - 1 ? (
            <>
              <div className="current-page-big">
                <p className="text-sm">{page.descripcion}</p>
              </div>
              <i className="pi pi-angle-right"></i>
            </>
          ) : (
            <>
              <div className="current-page-small">
                <p className="text-sm">{page.descripcion}</p>
              </div>
            </>
          );
        })}
      </div>
    </header>
  );
};

export default HeaderComponent;

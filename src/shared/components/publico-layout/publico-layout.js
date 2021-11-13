import { Fragment, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import PropTypes from 'prop-types';
import './publico-layout.scss';
import 'shared/styles/components/formularios.scss';
import 'shared/styles/components/campos.scss';
import 'shared/styles/components/botones.scss';

const PublicoLayout = ({ page, children }) => {

  const toast = useRef(null);
  const mensaje = useSelector(state => state.toastReducer.toast);

  useEffect((c) => { if (mensaje != null) toast.current.show(mensaje); }, [mensaje]);

  return (
    <main className={`view-${page} public-layout`}>
      <div className="container mx-auto">
        <div className={`${page}-form`}>{children}</div>
      </div>
      <Toast ref={toast}></Toast>
    </main>
  );
};

PublicoLayout.defaultProps = {
  page: '',
};

PublicoLayout.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PublicoLayout;

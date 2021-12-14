import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import PropTypes from 'prop-types';
import './PublicLayout.scss';
import 'shared/styles/components/forms.scss';
import 'shared/styles/components/fields.scss';
import 'shared/styles/components/buttons.scss';
import 'shared/styles/components/filter.scss';

const PublicoLayout = ({ page, children }) => {
  const toast = useRef(null);
  const mensaje = useSelector((state) => state.toastReducer.toast);

  useEffect(
    (c) => {
      if (mensaje != null) toast.current.show(mensaje);
    },
    [mensaje]
  );

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

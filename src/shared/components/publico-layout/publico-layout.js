import PropTypes from 'prop-types';
import './publico-layout.scss';
import 'shared/styles/components/formularios.scss';
import 'shared/styles/components/campos.scss';
import 'shared/styles/components/botones.scss';

const PublicoLayout = ({ page, children }) => {
  return (
    <main className={`view-${page} public-layout`}>
      <div className="container mx-auto">
        <div className={`${page}-form`}>{children}</div>
      </div>
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

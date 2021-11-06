import PropTypes from 'prop-types';
import './public-layout.scss';
import 'shared/styles/components/forms.scss';
import 'shared/styles/components/fields.scss';
import 'shared/styles/components/buttons.scss';

const PublicLayout = ({ page, children }) => {
  return (
    <main className={`view-${page} public-layout`}>
      <div className="container mx-auto">
        <div className={`${page}-form`}>{children}</div>
      </div>
    </main>
  );
};

PublicLayout.defaultProps = {
  page: '',
};

PublicLayout.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PublicLayout;

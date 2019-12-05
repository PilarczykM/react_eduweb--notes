import React from 'react';
import PropTypes from 'prop-types';

import withContext from '../hoc/withContext';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageContext }) => (
  <>
    <Sidebar pageType={pageContext} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(UserPageTemplate);

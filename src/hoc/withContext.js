import React from 'react';
import { PageContext } from '../context/pageContext';

const withContext = (Component) =>
  function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
    );
  };

export default withContext;

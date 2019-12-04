import React, { useState, useEffect } from 'react';

import DetailsTemplate from './DetailsTemplate';
import UserTemplatePage from './UserPageTemplate';
import routes from '../routes/index';

const DetailsPage = ({ match }) => {
  const [pageType, setPageType] = useState('notes');

  useEffect(() => {
    setPageType(match.path.match('(\\w+)')[0]);
  }, [match]);

  return (
    <UserTemplatePage pageType={pageType}>
      <DetailsTemplate>
        <p>{`Is notes ? ${match.path === routes.note}`}</p>
        <p>{`Is twitters ? ${match.path === routes.twitter}`}</p>
        <p>{`Is articles ? ${match.path === routes.article}`}</p>
      </DetailsTemplate>
    </UserTemplatePage>
  );
};

export default DetailsPage;

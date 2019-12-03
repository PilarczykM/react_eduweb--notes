import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';
import MainTemplate from '../../template/MainTemplate';

const Root = () => (
  // Theme provider pass props.theme to all childs.
  <MainTemplate>
    <Heading>Test</Heading>
  </MainTemplate>
);

export default Root;

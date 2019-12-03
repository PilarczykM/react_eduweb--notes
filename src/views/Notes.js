import React from 'react';
import UserTemplatePage from '../template/UserPageTemplate';

import Card from '../components/molecules/Card/Card';

const Notes = () => (
  <UserTemplatePage pageType="note">
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
  </UserTemplatePage>
);

export default Notes;

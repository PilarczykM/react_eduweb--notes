import React from 'react';
import UserTemplatePage from '../template/UserPageTemplate';

import Card from '../components/molecules/Card/Card';

const Notes = () => (
  <UserTemplatePage pageType="note">
    <Card
      cardType="note"
      title="My first title"
      content="Hi, this is my content"
      createdAt="3 days ago"
    />
    <Card
      cardType="note"
      title="My first title"
      content="Hi, this is my content"
      createdAt="3 days ago"
    />
    <Card
      cardType="note"
      title="My first title"
      content="Hi, this is my content"
      createdAt="3 days ago"
    />
  </UserTemplatePage>
);

export default Notes;

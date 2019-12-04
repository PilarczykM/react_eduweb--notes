import React from 'react';
import UserTemplatePage from '../template/UserPageTemplate';
import GridViewTemplate from '../template/GridViewTemplate';

import Card from '../components/molecules/Card/Card';

const Notes = () => (
  <UserTemplatePage pageType="notes">
    <GridViewTemplate pageType="notes">
      <Card
        id="1"
        cardType="notes"
        title="My first title"
        content="Hi, this is my content"
        createdAt="3 days ago"
      />
      <Card
        id="1"
        cardType="notes"
        title="My first title"
        content="Hi, this is my content"
        createdAt="3 days ago"
      />
      <Card
        id="1"
        cardType="notes"
        title="My first title"
        content="Hi, this is my content"
        createdAt="3 days ago"
      />
    </GridViewTemplate>
  </UserTemplatePage>
);

export default Notes;

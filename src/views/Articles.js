import React from 'react';
import UserTemplatePage from '../template/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import GridViewTemplate from '../template/GridViewTemplate';

const Articles = () => (
  <UserTemplatePage pageType="articles">
    <GridViewTemplate pageType="articles">
      <Card
        id="1"
        cardType="articles"
        title="My first article"
        content="Lorem ipsum"
        createdAt="2 days ago"
      />
      <Card
        id="1"
        cardType="articles"
        title="My first article"
        content="Lorem ipsum"
        createdAt="2 days ago"
        articleUrl="https://www.youtube.com"
      />
      <Card
        id="1"
        cardType="articles"
        title="My first article"
        content="Lorem ipsum"
        createdAt="2 days ago"
      />
    </GridViewTemplate>
  </UserTemplatePage>
);

export default Articles;

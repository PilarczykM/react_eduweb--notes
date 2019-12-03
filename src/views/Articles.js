import React from 'react';
import UserTemplatePage from '../template/UserPageTemplate';
import Card from '../components/molecules/Card/Card';

const Articles = () => (
  <UserTemplatePage pageType="article">
    <Card
      cardType="article"
      title="My first article"
      content="Lorem ipsum"
      createdAt="2 days ago"
    />
    <Card
      cardType="article"
      title="My first article"
      content="Lorem ipsum"
      createdAt="2 days ago"
      articleUrl="https://www.youtube.com"
    />
    <Card
      cardType="article"
      title="My first article"
      content="Lorem ipsum"
      createdAt="2 days ago"
    />
  </UserTemplatePage>
);

export default Articles;

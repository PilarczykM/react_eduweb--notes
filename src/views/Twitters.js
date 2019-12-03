import React from 'react';
import UserTemplatePage from '../template/UserPageTemplate';
import Card from '../components/molecules/Card/Card';

const Twitters = () => (
  <UserTemplatePage pageType="twitter">
    <Card
      cardType="twitter"
      title="My first title"
      content="Hi, this is my content"
      createdAt="3 days ago"
    />
    <Card
      cardType="twitter"
      title="My first title"
      content="Hi, this is my content"
      createdAt="3 days ago"
      twitterName="hello_roman"
    />
    <Card
      cardType="twitter"
      title="My first title"
      content="Hi, this is my content"
      createdAt="3 days ago"
    />
  </UserTemplatePage>
);

export default Twitters;

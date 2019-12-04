import React from 'react';
import UserTemplatePage from '../template/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import GridViewTemplate from '../template/GridViewTemplate';

const Twitters = () => (
  <UserTemplatePage pageType="twitters">
    <GridViewTemplate pageType="twitters">
      <Card
        id="1"
        cardType="twitters"
        title="My first title"
        content="Hi, this is my content"
        createdAt="3 days ago"
      />
      <Card
        id="1"
        cardType="twitters"
        title="My first title"
        content="Hi, this is my content"
        createdAt="3 days ago"
        twitterName="hello_roman"
      />
      <Card
        id="1"
        cardType="twitters"
        title="My first title"
        content="Hi, this is my content"
        createdAt="3 days ago"
      />
    </GridViewTemplate>
  </UserTemplatePage>
);

export default Twitters;

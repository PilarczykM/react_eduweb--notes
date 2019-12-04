import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GridTemplate from '../template/GridViewTemplate';
import Card from '../components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        id={id}
        cardType="articles"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string,
      created: PropTypes.string.isRequired,
      key: PropTypes.string,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);

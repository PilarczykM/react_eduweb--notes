import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GridTemplate from '../template/GridViewTemplate';
import Card from '../components/molecules/Card/Card';

import { fetchItems } from '../actions';

class Articles extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <GridTemplate pageType="articles">
        {articles.map(
          ({ title, content, articleUrl, createdAt: created, id }) => (
            <Card
              id={id}
              title={title}
              content={content}
              articleUrl={articleUrl}
              created={created}
              key={id}
            />
          ),
        )}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string,
      created: PropTypes.string,
      key: PropTypes.string,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

const mamDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mamDispatchToProps)(Articles);

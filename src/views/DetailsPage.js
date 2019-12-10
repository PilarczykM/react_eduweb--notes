import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import DetailsTemplate from '../template/DetailsTemplate';
import withContext from '../hoc/withContext';

class DetailsPage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        pageType: '',
        title: '',
        created: '',
        content: '',
        articleUrl: '',
        twitterName: '',
      },
    };
  }

  componentDidMount() {
    const { activeItem, match } = this.props;
    if (
      Object.entries(activeItem).length === 0 &&
      activeItem.constructor === Object &&
      activeItem.id !== match.params.id
    ) {
      axios
        .get(
          `http://localhost:5000/mynotes-d9696/europe-west2/api/items/${match.params.id}`,
        )
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({ activeItem: this.props.activeItem });
    }
  }

  render() {
    const { pageContext } = this.props;
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        pageType={pageContext}
        title={activeItem.title}
        created={activeItem.created}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  pageContext: PropTypes.string.isRequired,
  activeItem: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].find(
        (item) => item.id === ownProps.match.params.id,
      ),
    };
  }
  return { activeItem: {} };
};

export default withContext(connect(mapStateToProps)(DetailsPage));

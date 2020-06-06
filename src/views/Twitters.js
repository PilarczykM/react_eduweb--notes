import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../template/GridView';

class Twitters extends Component {
  componentDidMount() {
    this.props.fetchTwitters();
  }

  render() {
    const { twitters } = this.props;
    return (
      <GridTemplate itemCount={twitters.length} pageType="twitters">
        {twitters.map(
          ({ title, content, twitterName, createdAt: created, id }) => (
            <Card
              id={id}
              title={title}
              content={content}
              twitterName={twitterName}
              created={created}
              key={id}
            />
          ),
        )}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
      twitterName: PropTypes.string.isRequired,
      key: PropTypes.string,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);

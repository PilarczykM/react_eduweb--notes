import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../template/GridView/GridView';

class Notes extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <GridTemplate itemCount={notes.length} pageType="notes">
        {notes.map(({ title, content, createdAt, id }) => (
          <Card
            id={id}
            title={title}
            content={content}
            created={createdAt}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
      key: PropTypes.string,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps, mapDispatchToProps)(Notes);

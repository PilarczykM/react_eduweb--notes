import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/molecules/Card/Card';
import { State } from '../../store/types';
import GridTemplate from '../../template/GridView';

export const Notes: React.FC = () => {
  const notes = useSelector((state: State) => state.notes)
  return (
    <GridTemplate itemCount={notes.length} >
      {notes.length > 0 ? notes.map(({ title, content, createdAt, id }) => (
        <Card
          id={id}
          title={title}
          content={content}
          created={createdAt}
          key={id}
        />
      )) : null}
    </GridTemplate>
  );
}
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/molecules/Card';
import { deleteNoteActionCreator } from '../../store/notes/slices';
import { State } from '../../store/types';
import GridTemplate from '../../template/GridView';

export const Notes: React.FC = () => {
  const notes = useSelector((state: State) => state.notes);

  const dispatch = useDispatch();

  const removeItem = (id: string) => {
    dispatch(deleteNoteActionCreator({ id }));
  };

  return (
    <GridTemplate itemCount={notes.length}>
      {notes.length > 0
        ? notes.map(({ title, content, createdAt, id }) => (
            <Card
              id={id}
              title={title}
              content={content}
              created={createdAt}
              key={id}
              removeItem={removeItem}
            />
          ))
        : null}
    </GridTemplate>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/molecules/Card';
import { deleteTwitterActionCreator } from '../../store/twitters/slices';
import { State } from '../../store/types';
import GridTemplate from '../../template/GridView';

export const Twitters: React.FC = () => {
  const twitters = useSelector((state: State) => state.twitters);

  const dispatch = useDispatch();

  const removeItem = (id: string) => {
    dispatch(deleteTwitterActionCreator({ id }));
  };

  return (
    <GridTemplate itemCount={twitters.length}>
      {twitters.length > 0
        ? twitters.map(
            ({ title, content, twitterName, createdAt: created, id }) => (
              <Card
                id={id}
                title={title}
                content={content}
                twitterName={twitterName}
                created={created}
                key={id}
                removeItem={removeItem}
              />
            ),
          )
        : null}
    </GridTemplate>
  );
};

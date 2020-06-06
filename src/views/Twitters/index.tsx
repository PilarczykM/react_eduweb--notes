import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/molecules/Card/Card';
import { State } from '../../store/types';
import GridTemplate from '../../template/GridView';

export const Twitters: React.FC = () => {
  const twitters = useSelector((state: State) => state.twitters);

  return (
    <GridTemplate itemCount={twitters.length} >
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
            />
          ),
        )
        : null}
    </GridTemplate>
  );
};

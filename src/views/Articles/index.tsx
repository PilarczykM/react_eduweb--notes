import React from 'react';
import Card from '../../components/molecules/Card/Card';
import GridTemplate from '../../template/GridView';
import {useSelector} from 'react-redux';
import { State } from '../../store/types';

export const Articles:React.FC = () => {
    const articles = useSelector((state: State) => state.articles)

    return (
      <GridTemplate itemCount={articles.length} >
        {articles.length > 0 ? articles.map(
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
        ): null}
      </GridTemplate>
    );
  }

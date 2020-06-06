import React from 'react';
import { Card } from '../../components/molecules/Card';
import GridTemplate from '../../template/GridView';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store/types';
import { deleteArticleActionCreator } from '../../store/articles/slice';

export const Articles: React.FC = () => {
  const articles = useSelector((state: State) => state.articles);
  const dispatch = useDispatch();

const removeItem =(id: string) => {
  dispatch(deleteArticleActionCreator({id}))
}

  return (
    <GridTemplate itemCount={articles.length}>
      {articles.length > 0
        ? articles.map(
            ({ title, content, articleUrl, createdAt: created, id }) => (
              <Card
                id={id}
                title={title}
                content={content}
                articleUrl={articleUrl}
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

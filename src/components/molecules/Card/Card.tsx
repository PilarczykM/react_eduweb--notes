import React from 'react';
import { Redirect } from 'react-router-dom';
import withContext from '../../../hoc/withContext';
import { theme } from '../../../theme/mainTheme';
import { Button } from '../../atoms/Button/Button';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import * as S from './Card.styled';
import { Props } from './types';

const Card: React.FC<Props> = ({
  content,
  created,
  id,
  twitterName,
  pageContext,
  articleUrl,
  title,
  removeItem,
}) => {
  const [redirect, setRedirect] = React.useState<boolean>(false);

  if (redirect) {
    return <Redirect to={`${pageContext}/details/${id}`} />;
  }
  return (
    <S.Wrapper>
      <S.InnerWrapper
        onClick={() => setRedirect(true)}
        activeColor={pageContext}
      >
        <S.Header>{title}</S.Header>
        <S.DateInfo>{created}</S.DateInfo>
        {pageContext === 'twitters' && (
          <S.Avatar src={`https://avatars.io/twitter/${twitterName}`} />
        )}
        {pageContext === 'articles' && <S.LinkButton href={articleUrl} />}
      </S.InnerWrapper>
      <S.InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button
          secondary
          color={pageContext}
          theme={theme}
          onClick={() => {
            removeItem(pageContext, id);
          }}
        >
          REMOVE
        </Button>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   removeItem: (pageContext, id) => dispatch(removeItemAction(pageContext, id)),
// });

export default withContext(Card);

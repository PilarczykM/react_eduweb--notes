import React from 'react';
import { Redirect } from 'react-router-dom';
import { usePageContext } from '../../../context/pageContext';
import { Button } from '../../atoms/Button';
import { Paragraph } from '../../atoms/Paragraph';
import * as S from './Card.styled';
import { CardProps } from './types';

const linkIcon = require('../../../assets/icons/link.svg');

export const Card: React.FC<CardProps> = ({
  content,
  twitterName,
  articleUrl,
  created,
  id,
  removeItem,
  title,
}) => {
  const [redirect, setRidirect] = React.useState(false);
  const pageContext = usePageContext();

  const handleCardClick = () => setRidirect(true);

  return redirect ? (
    <Redirect to={`${pageContext}/details/${id}`} />
  ) : (
    <S.Wrapper>
      <S.InnerWrapper onClick={handleCardClick} activeColor={pageContext}>
        <S.StyledHeading>{title}</S.StyledHeading>
        <S.DateInfo>{created}</S.DateInfo>
        {pageContext === 'twitters' && (
          <S.Avatar src={`https://pbs.twimg.com/profile_images/1104491562854158336/A-NTwQhW_200x200.png`} />
        )}
        {pageContext === 'articles' && (
          <S.LinkButton linkicon={linkIcon} href={articleUrl} />
        )}
      </S.InnerWrapper>
      <S.InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button
          color={pageContext}
          secondary
          onClick={() => {
            removeItem(id);
          }}
        >
          REMOVE
        </Button>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

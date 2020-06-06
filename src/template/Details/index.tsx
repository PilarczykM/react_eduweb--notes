import React from 'react';
import { Link } from 'react-router-dom';
import { Paragraph } from '../../components/atoms/Paragraph';
import { usePageContext } from '../../context/pageContext';
import { UserPageTemplate } from '../UserPage';
import * as S from './Details.styled';
import { Props } from './types';

export const DetailsTemplate: React.FC<Props> = ({ content, created, title, articleUrl, twitterName }) => {
  const pageContext = usePageContext();
  return (
    <UserPageTemplate>
      <S.Wrapper>
        <S.PageHeader>
          <S.StyledHeading big>
            {title}
          </S.StyledHeading>
          <S.StyledParagraph>{created}</S.StyledParagraph>
        </S.PageHeader>
        <Paragraph>{content}</Paragraph>
        {pageContext === 'articles' && (
          <S.Link href={articleUrl}>Open article</S.Link>
        )}
        {pageContext === 'twitters' && (
          <S.Image
            alt={title}
            src={`https://avatars.io/twitter/${twitterName}`}
          />
        )}
        <S.StyledButton as={Link} to={`/${pageContext}`} color={pageContext}>
          save / close
      </S.StyledButton>
      </S.Wrapper>
    </UserPageTemplate>
  )
};

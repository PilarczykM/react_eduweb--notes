import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';

import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

import LinkIcon from '../../../assets/icons/link.svg';

const StyledWrapper = styled.div`
  position: relative;
  min-height: 38rem;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  padding: 20px 15px;

  ${({ flex }) => flex
    && css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px 0;
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50px;
  transform: translateY(-50%);
`;

const Card = ({
  id,
  cardType,
  title,
  createdAt,
  content,
  twitterName,
  articleUrl,
}) => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to={`/${cardType}/${id}`} />;

  return (
    <StyledWrapper onClick={() => setRedirect(true)}>
      <InnerWrapper activeColor={cardType}>
        <Heading>{title}</Heading>
        <DateInfo>{createdAt}</DateInfo>
        {cardType === 'twitters'
          && (twitterName ? (
            <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
          ) : null)}
        {cardType === 'articles'
          && (articleUrl ? <StyledLinkButton href={articleUrl} /> : null)}
      </InnerWrapper>
      <InnerWrapper flex>
        <StyledParagraph>{content}</StyledParagraph>
        <Button secondary>Remove</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,
};

export default Card;

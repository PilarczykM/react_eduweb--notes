import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
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

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <Heading>My title</Heading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <StyledParagraph>
        lksjfgajfdgagf asgagjhasjf asgdagadf gafdg afh h ag adfh adfh adhh ag
        shds jad fg ah adh ad
      </StyledParagraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.prototype = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;

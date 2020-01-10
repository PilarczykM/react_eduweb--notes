import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withContext from '../hoc/withContext';
import UserPageTemplate from './UserPageTemplate';

import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

import plusIcon from '../assets/icons/plus.svg';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  padding: 0 150px 50px 200px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledPlusButton = styled(ButtonIcon)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-size: 35%;
  background-color: ${({ theme, bgColor }) => theme[bgColor]};
  border-radius: 50px;
  z-index: 10;
  transform: rotate(${({ isVisible }) => (isVisible ? '45deg' : '0deg')});
`;

class GridTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewItemBarVisible: false,
    };
  }

  toggleNewItemBar = () =>
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));

  render() {
    const { itemCount, pageContext, children } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>{`${itemCount} ${pageContext}`}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
        </StyledWrapper>
        <StyledPlusButton
          isVisible={isNewItemBarVisible}
          bgColor={pageContext}
          icon={plusIcon}
          onClick={this.toggleNewItemBar}
        />
        <NewItemBar
          handleClode={this.toggleNewItemBar}
          isVisible={isNewItemBarVisible}
        />
      </UserPageTemplate>
    );
  }
}
GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);

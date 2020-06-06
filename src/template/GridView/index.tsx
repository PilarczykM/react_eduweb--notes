import React, { useState } from 'react';
import { Input } from '../../components/atoms/Input';
import { NewItemBar } from '../../components/organisms/NewItemBar';
import { usePageContext } from '../../context/pageContext';
import { UserPageTemplate } from '../UserPage';
import * as S from './GridView.styled';
import { Props } from './types';

const plusIcon = require('../../assets/icons/plus.svg');

const GridTemplate: React.FC<Props> = ({ itemCount, children }) => {
  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);
  const pageContext = usePageContext();
  const toggleNewItemBar = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsNewItemBarVisible(!isNewItemBarVisible);
  };

  return (
    <UserPageTemplate>
      <S.Wrapper>
        <S.PageHeader>
          <Input search placeholder="Search" />
          <S.StyledHeading big>{pageContext}</S.StyledHeading>
          <S.StyledParagraph>{`${itemCount} ${pageContext}`}</S.StyledParagraph>
        </S.PageHeader>
        <S.Grid>{children}</S.Grid>
      </S.Wrapper>
      <S.StyledPlusButton
        isVisible={isNewItemBarVisible}
        bgColor={pageContext}
        icon={plusIcon}
        onClick={(e) => toggleNewItemBar(e)}
      />
      <NewItemBar
        handleClose={toggleNewItemBar}
        isVisible={isNewItemBarVisible}
      />
    </UserPageTemplate>
  );
};

export default GridTemplate;

import React from 'react';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoIcon from '../../../assets/icons/logo.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import { usePageContext } from '../../../context/pageContext';
import * as S from './Sidebar.styled';

export const Sidebar: React.FC = () => {
  const pageContext = usePageContext();

  return (
    <S.Wrapper activeColor={pageContext}>
      <S.LogoLink logoIcon={logoIcon} to="/" />
      <S.LinksList>
        <li>
          <S.NavButton to="/notes" logoIcon={penIcon} activeclass="active" />
        </li>
        <li>
          <S.NavButton
            to="/twitters"
            logoIcon={twitterIcon}
            activeclass="active"
          />
        </li>
        <li>
          <S.NavButton
            to="/articles"
            logoIcon={bulbIcon}
            activeclass="active"
          />
        </li>
      </S.LinksList>
      <S.NavButton to="/login" logoIcon={logoutIcon} />
    </S.Wrapper>
  );
};

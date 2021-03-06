import React from 'react';
import { usePageContext } from '../../../context/pageContext';
import * as S from './Sidebar.styled';

const penIcon = require('../../../assets/icons/pen.svg');
const twitterIcon = require('../../../assets/icons/twitter.svg');
const logoutIcon = require('../../../assets/icons/logout.svg');
const logoIcon = require('../../../assets/icons/logo.svg');
const bulbIcon = require('../../../assets/icons/bulb.svg');

export const Sidebar: React.FC = () => {
  const pageContext = usePageContext();

  return (
    <S.Wrapper activeColor={pageContext}>
      <S.LogoLink logoicon={logoIcon} to="/" />
      <S.LinksList>
        <li>
          <S.NavButton to="/notes" logoicon={penIcon} activeclass="active" />
        </li>
        <li>
          <S.NavButton
            to="/twitters"
            logoicon={twitterIcon}
            activeclass="active"
          />
        </li>
        <li>
          <S.NavButton
            to="/articles"
            logoicon={bulbIcon}
            activeclass="active"
          />
        </li>
      </S.LinksList>
      <S.NavButton to="/login" logoicon={logoutIcon} />
    </S.Wrapper>
  );
};

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

import logoIcon from '../../../assets/icons/logo.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import logoutIcon from '../../../assets/icons/logout.svg';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 120px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogout = styled(ButtonIcon)`
  margin-top: auto;
  margin-bottom: 1rem;
`;

const StyledLogo = styled(NavLink)`
  height: 80px;
  width: 80px;
  display: block;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  margin: 3rem auto 8rem;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogo to="/" />
    <StyledIconsWrapper>
      <ButtonIcon
        exact
        as={NavLink}
        to="/notes"
        icon={bulbIcon}
        activeclass="active"
      />
      <ButtonIcon
        as={NavLink}
        to="/twitters"
        icon={twitterIcon}
        activeclass="active"
      />
      <ButtonIcon
        as={NavLink}
        to="/articles"
        icon={penIcon}
        activeclass="active"
      />
    </StyledIconsWrapper>
    <StyledLogout as={NavLink} exact to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;

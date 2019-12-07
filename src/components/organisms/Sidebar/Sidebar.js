import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import withContext from '../../../hoc/withContext';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

import logoIcon from '../../../assets/icons/logo.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import logoutIcon from '../../../assets/icons/logout.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogoLink to="/" />
    <StyledLinksList>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/notes"
          icon={penIcon}
          activeclass="active"
        />
      </li>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/twitters"
          icon={twitterIcon}
          activeclass="active"
        />
      </li>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/articles"
          icon={bulbIcon}
          activeclass="active"
        />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);

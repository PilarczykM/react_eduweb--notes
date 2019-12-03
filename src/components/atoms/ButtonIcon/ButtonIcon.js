import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonIcon = styled.button`
  width: 67px;
  height: 6.7rem;
  border: none;
  border-radius: 2rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  background-size: 40%;
  background-color: transparent;

  &.active {
    background-color: #fff;
  }
`;

ButtonIcon.prototype = {
  icon: PropTypes.element.isRequired,
};

export default ButtonIcon;

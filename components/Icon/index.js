import React from 'react';
import propTypes from 'prop-types';
import { IconWrapper } from './styled';

const Icon = ({ children, fontSize }) => {
  return (
    <IconWrapper className="material-icons" fontSize={fontSize}>
      {children}
    </IconWrapper>
  );
};

Icon.propTypes = {
  children: propTypes.string,
  fontSize: propTypes.string,
};

export default Icon;

import React from 'react';
import propTypes from 'prop-types';
import { BackgroundStyle } from './styled';

const Background = ({ children }) => <BackgroundStyle>{children}</BackgroundStyle>;

Background.propTypes = {
  children: propTypes.array,
};

export default Background;

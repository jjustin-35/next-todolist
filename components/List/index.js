import React from 'react';
import { ListWrapper } from './styled';
import propTypes from 'prop-types';

const ListStyle = ({ children }) => <ListWrapper>{children}</ListWrapper>;

ListStyle.propTypes = {
  children: propTypes.any,
};

export default ListStyle;

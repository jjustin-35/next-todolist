import React from 'react';
import { IconWrapper } from './styled';

const Icon = ({ children, fontSize }: {
  children: React.ReactNode;
  fontSize?: string;
}) => {
  return (
    <IconWrapper className="material-icons" fontSize={fontSize}>
      {children}
    </IconWrapper>
  );
};

export default Icon;

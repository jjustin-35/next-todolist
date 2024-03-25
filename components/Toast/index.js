import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { ToastItem, ToastWrapper } from './styled';
import Icon from '../Icon';

const ToastStyle = ({ isSuccess, children, onExpire }) => {
  const toastRef = useRef();
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        setIsShow(!isShow);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isShow]);

  useEffect(() => {
    if (!isShow) {
      const toast = toastRef.current;
      const handler = () => onExpire();
      toast.addEventListener('animationend', handler);

      return () => toast.removeEventListener('animationend', handler);
    }
  });

  return (
    <ToastWrapper>
      <ToastItem isSuccess={isSuccess} isShow={isShow} ref={toastRef}>
        <Icon>{isSuccess ? 'check_circle_outline' : 'highlight_off'}</Icon>
        {children}
      </ToastItem>
    </ToastWrapper>
  );
};

ToastStyle.propTypes = {
  isSuccess: propTypes.bool,
  children: propTypes.any,
  ref: propTypes.any,
  onExpire: propTypes.func,
};

export default ToastStyle;

import React, { useEffect, useRef, useState } from 'react';
import { ToastItem, ToastWrapper } from './styled';
import Icon from '../Icon';

const ToastStyle = ({ isSuccess, children, onExpire }: {
  isSuccess: boolean;
  children: React.ReactNode;
  onExpire: () => void;
}) => {
  const toastRef = useRef<HTMLDivElement>(null);
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

export default ToastStyle;

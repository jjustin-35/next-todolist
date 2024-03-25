import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearToast } from '../../redux/actions';
import ToastStyle from '../../components/Toast';
import PortalWrapper from '../PortalWrapper';

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);
  const isInit = !!toast;

  const onExpire = () => dispatch(clearToast(toast.id));

  return (
    <PortalWrapper id={'portalElemnet'}>
      {isInit && (
        <ToastStyle isSuccess={toast.isSuccess} key={toast.id} onExpire={onExpire}>
          {toast.message}
        </ToastStyle>
      )}
    </PortalWrapper>
  );
};

export default Toast;

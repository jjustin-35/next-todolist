'use client';

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToast } from "../../redux/slice/toast";
import ToastStyle from "../../components/Toast";
import PortalWrapper from "../PortalWrapper";
import { RootState } from "@/redux/store";

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state: RootState) => state.toast);
  const isInit = !!toast;

  const onExpire = () => dispatch(clearToast());

  return (
    <PortalWrapper id="portalElemnet">
      {isInit && (
        <ToastStyle
          isSuccess={toast.isSuccess}
          key={toast.id}
          onExpire={onExpire}
        >
          {toast.message}
        </ToastStyle>
      )}
    </PortalWrapper>
  );
};

export default Toast;

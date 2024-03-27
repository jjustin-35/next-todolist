import React from "react";
import { MessageText } from "./styled";

const Message = ({ children }: { children: React.ReactNode }) => (
  <MessageText>{children}</MessageText>
);

export default Message;

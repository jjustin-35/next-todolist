import React from "react";
import propTypes from "prop-types";
import { MessageText } from "./styled";

const Message = ({ children }: { children: React.ReactNode }) => (
  <MessageText>{children}</MessageText>
);

Message.propTypes = {
  children: propTypes.string,
};

export default Message;

import React from "react";
import { BackgroundStyle } from "./styled";

const Background = ({ children }: { children: React.ReactNode }) => (
  <BackgroundStyle>{children}</BackgroundStyle>
);

export default Background;

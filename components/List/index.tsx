import React from "react";
import { ListWrapper } from "./styled";

const ListStyle = ({ children }: { children: React.ReactNode }) => (
  <ListWrapper>{children}</ListWrapper>
);

export default ListStyle;

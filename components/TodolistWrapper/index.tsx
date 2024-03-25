'use client';

import React from "react";
import { TodolistWrapperStyle } from "./styled";
import { Container, Row, Col } from "../../global/gridSystem";

const TodolistWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={5}>
          <TodolistWrapperStyle>{children}</TodolistWrapperStyle>
        </Col>
      </Row>
    </Container>
  );
};

export default TodolistWrapper;

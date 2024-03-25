import React from 'react';
import propTypes from 'prop-types';
import { TodolistWrapperStyle } from './styled';
import { Container, Row, Col } from '../../global/gridSystem';

const TodolistWrapper = ({ children }) => {
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

TodolistWrapper.propTypes = {
  children: propTypes.any,
};

export default TodolistWrapper;

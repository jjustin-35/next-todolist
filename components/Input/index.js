import React from 'react';
import propTypes from 'prop-types';
import { InputWrapper, Input, AddButton } from './styled';
import Icon from '../Icon';

const InputStyle = ({ onAdd, inputRef }) => {
  return (
    <InputWrapper>
      <Input ref={inputRef} />
      <AddButton onClick={onAdd}>
        <Icon fontSize="1.5rem">add</Icon>
      </AddButton>
    </InputWrapper>
  );
};

InputStyle.propTypes = {
  onAdd: propTypes.func,
  inputRef: propTypes.any,
};

export default InputStyle;

import React, { MutableRefObject } from 'react';
import { InputWrapper, Input, AddButton } from './styled';
import Icon from '../Icon';

const InputStyle = ({ onAdd, inputRef }: {
  onAdd: () => void;
  inputRef: MutableRefObject<HTMLInputElement>;
}) => {
  return (
    <InputWrapper>
      <Input ref={inputRef} />
      <AddButton onClick={onAdd}>
        <Icon fontSize="1.5rem">add</Icon>
      </AddButton>
    </InputWrapper>
  );
};


export default InputStyle;

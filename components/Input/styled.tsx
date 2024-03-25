import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem auto;
`;

export const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Please enter todo here...',
})`
  width: 60%;
  background-color: #e8ebed;
  padding: 0.5rem 0.25rem;
  outline: 0;
  border: 1px solid #e8ebed;
  border-radius: 5px 0 0 5px;
`;

export const AddButton = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  border: none;
  white-space: nowrap;
  border-radius: 0 5px 5px 0;
`;

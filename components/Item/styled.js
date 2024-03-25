import styled, { css, keyframes } from 'styled-components';

const show = keyframes`
  from{
    opacity: 0;
    transform: scale(0);
  }to{
    opacity: 1;
    transform: scale(1);
  }
`;
const hide = keyframes`
  from{
    opacity: 1;
    transform: scale(1);
  }to{
    opacity: 0;
    transform: scale(0);
  }
`;

export const ItemWrapper = styled.div`
  animation: ${(props) =>
      props.isShow
        ? css`
            ${show}
          `
        : css`
            ${hide}
          `}
    ease-out 0.3s forwards;
`;

export const Text = styled.p`
  margin: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  color: black;
  ${(props) => props.isFinished && `text-decoration: line-through; color: gray`};
  width: 100%;
`;

export const ContentWrapper = styled.div`
  ${(props) => (props.isEdit ? `display: flex` : `display: none`)};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const EditInput = styled.input.attrs((props) => ({
  type: 'text',
  defaultValue: props.preValue,
}))`
  width: 100%;
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 1rem;
`;

export const Option = styled.a`
  font-size: 0.5rem;
  padding: 0 0.25rem;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.color || 'black'};
  white-space: nowrap;
  vertical-align: middle;
`;

import styled from 'styled-components';

export const IconWrapper = styled.span<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize || '1rem'};
  vertical-align: middle;
`;

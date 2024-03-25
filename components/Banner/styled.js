import styled from 'styled-components';

export const Brand = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
  font-family: 'Acme', sans-serif;
  text-align: center;
  font-size: 3rem;
  padding-top: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.appearance || 'black'};
`;

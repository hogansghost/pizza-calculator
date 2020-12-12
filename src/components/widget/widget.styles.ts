import styled from 'styled-components';

export const Widget = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 4px -2px rgba(0,0,0,0.1), 0 2px 16px -8px rgba(0,0,0,0.15);
  padding: 32px;
  margin: auto;
`;

export const Header = styled.div`
  display: block;
  font-size: 1.35em;
`;

export const Body = styled.div`
  &:nth-child(n+2) {
    margin-top: 16px;
  }
`;

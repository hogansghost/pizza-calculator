import styled from 'styled-components';

export const Basket = styled.div`
  display: block;
`;

export const Header = styled.h1`
  display: block;
  font-size: 1.35em;
`;

export const BasketRow = styled.p`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-top: 8px;
`;

export const BasketCol = styled.span`
  padding-right: 8px;
  padding-left: 8px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    text-align: right;
  }
`;

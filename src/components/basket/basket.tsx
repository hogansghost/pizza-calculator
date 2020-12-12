import React from 'react';

import { Price } from '../index';

import * as Styled from './basket.styles';

export interface BasketProps {
  pizzaCount: number;
  totalCost: number;
}

export const Basket: React.FunctionComponent<BasketProps> = ({
  pizzaCount = 0,
  totalCost = 0,
}) => {
  return (
    <Styled.Basket>
      <Styled.Header>Previous order:</Styled.Header>

      <Styled.BasketRow>
        <Styled.BasketCol>Pizza count:</Styled.BasketCol>
        <Styled.BasketCol>{pizzaCount}</Styled.BasketCol>
      </Styled.BasketRow>

      <Styled.BasketRow>
        <Styled.BasketCol>Total cost:</Styled.BasketCol>
        <Styled.BasketCol><Price amount={totalCost} /></Styled.BasketCol>
      </Styled.BasketRow>

    </Styled.Basket>
  );
}

import React from 'react';

import { Price } from '../index';

export interface BasketProps {
  pizzaCount: number;
  totalCost: number;
}

export const Basket: React.FunctionComponent<BasketProps> = ({
  pizzaCount = 0,
  totalCost = 0,
}) => {
  return (
    <div>
      <h4>Previous order:</h4>
      <p>Pizza count: {pizzaCount}</p>
      <p>Total cost: <Price amount={totalCost} /></p>
    </div>
  );
}

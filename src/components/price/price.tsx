import React from 'react';

import * as Styled from './price.styles';

export interface PriceProps {
  amount: number;
}

export const Price: React.FunctionComponent<PriceProps> = ({
  amount = 0,
}) => {
  const totalPrice = React.useMemo(() => {
    return amount.toFixed(2);
  }, [amount]);

  return (
    <Styled.Price>{totalPrice}<Styled.Currency>chf</Styled.Currency></Styled.Price>
  )
};

export default Price;

import React, { useEffect, useState } from "react";

import { AppState } from "./redux/reducers";
import { useDispatch, useSelector } from "react-redux";


import {
  SetNoOfGuests,
  SetSlicesPerGuest,
  SetSlicesInPizza,
  SetTotalCost,
  SetBasket,
} from "./redux/actions";

import {
  Basket,
  Button,
  ContentWidth,
  Input,
  Price,
  Widget,
} from './components';

function App() {
  const dispatch = useDispatch();

  const { basket } = useSelector((state: AppState) => state);
  const {
    cost,
    noOfGuests,
    slicesInPizza,
    slicesPerGuest,
  } = useSelector((state: AppState) => state.calculator);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [totalPizzaCount, setTotalPizzaCount] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);


  useEffect(() => {
    if (noOfGuests && slicesPerGuest && slicesInPizza && cost) {
      const adjustedTotalPizzaCount = Math.ceil(
        (noOfGuests * slicesPerGuest) / slicesInPizza
      );

      const totalCost = adjustedTotalPizzaCount * cost;

      setIsSubmitDisabled(false);
      setTotalPizzaCount(adjustedTotalPizzaCount);
      setTotalCost(totalCost);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [noOfGuests, slicesPerGuest, slicesInPizza, cost, dispatch]);


  const handleNumberOfGuestsChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SetNoOfGuests,
      value: parseInt(evt.currentTarget.value),
    });
  };

  const handleSlicesPerGuestChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SetSlicesPerGuest,
      value: parseInt(evt.currentTarget.value),
    });
  };

  const handleSlicesInPizzaChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SetSlicesInPizza,
      value: parseInt(evt.currentTarget.value),
    });
  };

  const handleTotalCostChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SetTotalCost,
      value: parseInt(evt.currentTarget.value),
    });
  };

  const handleSubmitOrder = (evt: React.FormEvent) => {
    evt.preventDefault();

    dispatch({
      type: SetBasket,
      pizzaCount: totalPizzaCount,
      totalCost,
    });
  }

  return (
    <ContentWidth>
      <Widget>
        <form onSubmit={handleSubmitOrder}>
          <div>
            <Input
              label="Number of guests"
              type="number"
              name="noOfGuests"
              handleChange={handleNumberOfGuestsChange}
            />
          </div>
          <div>
            <Input
              label="Slices per guest"
              type="number"
              name="slicesPerGuest"
              handleChange={handleSlicesPerGuestChange}
            />
          </div>
          <div>
            <Input
              label="Number of slices in a pizza"
              type="number"
              name="slicesInPizza"
              handleChange={handleSlicesInPizzaChange}
            />
          </div>
          <div>
            <Input
              label="Pizza cost"
              type="number"
              name="cost"
              handleChange={handleTotalCostChange}
            />
          </div>

          <div>
            <p>Total pizza count: {totalPizzaCount}</p>
            <p>Total cost: <Price amount={totalCost} /></p>
          </div>

          <Button
            disabled={isSubmitDisabled}
            type="submit"
            onClick={handleSubmitOrder}
          >
            Order
          </Button>
        </form>

        {!!basket.pizzaCount && !!basket.totalCost && (
          <Basket
            pizzaCount={basket.pizzaCount}
            totalCost={basket.totalCost}
          />
        )}
      </Widget>
    </ContentWidth>
  )
}

export default App;

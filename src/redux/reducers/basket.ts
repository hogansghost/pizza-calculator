import {
  AppTypes,
  SetBasket,
} from '../actions';

export interface BasketState {
  pizzaCount?: number;
  totalCost?: number;
}

const initialState: BasketState = {
  pizzaCount: 0,
  totalCost: 0,
};

export default (
  state: BasketState = initialState,
  action: AppTypes
): BasketState => {
  switch (action.type) {
    case SetBasket:
      return {
        ...state,
        pizzaCount: action.pizzaCount,
        totalCost: action.totalCost,
      };
    default:
      return state;
  }
};

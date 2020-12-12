import {
  AppTypes,
  SetNoOfGuests,
  SetSlicesPerGuest,
  SetSlicesInPizza,
  SetTotalCost,
} from '../actions';

export interface CalculatorState {
  noOfGuests: number;
  slicesPerGuest: number;
  slicesInPizza: number;
  cost: number;
}

const initialState: CalculatorState = {
  noOfGuests: 0,
  slicesPerGuest: 0,
  slicesInPizza: 0,
  cost: 0,
};

export default (
  state: CalculatorState = initialState,
  action: AppTypes
): CalculatorState => {
  switch (action.type) {
    case SetNoOfGuests:
      return {
        ...state,
        noOfGuests: action.value,
      };
    case SetSlicesPerGuest:
      return {
        ...state,
        slicesPerGuest: action.value,
      };
    case SetSlicesInPizza:
      return {
        ...state,
        slicesInPizza: action.value,
      };
    case SetTotalCost:
      return {
        ...state,
        cost: action.value,
      };
    default:
      return state;
  }
};

// Update the number of guests.
export const SetNoOfGuests = 'SetNoOfGuests';

export interface SetNoOfGuestsAction {
  type: typeof SetNoOfGuests;
  value: number;
}


// Update how many slices each guest will eat.
export const SetSlicesPerGuest = 'SetSlicesPerGuest';

export interface SetSlicesPerGuestAction {
  type: typeof SetSlicesPerGuest;
  value: number;
}


// Update amount of slices in a pizza.
export const SetSlicesInPizza = 'SetSlicesInPizza';

export interface SetSlicesInPizzaAction {
  type: typeof SetSlicesInPizza;
  value: number;
}


// Update pizza total.
export const SetTotalCost = 'SetTotalCost';

export interface SetTotalCostAction {
  type: typeof SetTotalCost;
  value: number;
}


// Update basket.
export const SetBasket = 'SetBasket';

export interface SetBasketAction {
  type: typeof SetBasket;
  pizzaCount: number;
  totalCost: number;
}


export type AppTypes = (
  | SetNoOfGuestsAction
  | SetSlicesPerGuestAction
  | SetSlicesInPizzaAction
  | SetTotalCostAction
  | SetBasketAction
);

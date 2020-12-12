import { combineReducers } from "redux";

import basket from "./basket";
import calculator from "./calculator";

export interface AppState {
  calculator: ReturnType<typeof calculator>;
  basket: ReturnType<typeof basket>;
}

export default combineReducers({
  basket,
  calculator,
});

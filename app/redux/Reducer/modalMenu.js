import { OPEN_MENU, CLOSE_MENU, LOGOUT } from "../Actions/types";

const initialState = {
  isMenuOpen: false
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true
      };
    case CLOSE_MENU:
    case LOGOUT:
      return {
        ...state,
        isMenuOpen: false
      };
    default:
      return state;
  }
}

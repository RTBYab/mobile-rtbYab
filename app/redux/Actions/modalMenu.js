import { OPEN_MENU, CLOSE_MENU } from "./types";

// modalMenu
export const openMenu = () => dispatch => {
  dispatch({ type: OPEN_MENU });
};

export const closeMenu = () => dispatch => {
  dispatch({ type: CLOSE_MENU });
};

// // Logout
// export const logout = () => dispatch => {
//   dispatch({ type: CLEAR_PROFILE });
//   dispatch({ type: LOGOUT });
// };

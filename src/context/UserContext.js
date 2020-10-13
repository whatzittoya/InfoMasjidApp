import createDataContext from "./createDataContext";
import infomasjid from "../api/infomasjid";

const userReducer = (state, action) => {
  switch (action.type) {
    case "set_user":
      return {
        ...state,
        user: action.payload.user,
        device_id: action.payload.device_id,
      };

    default:
      return state;
  }
};

const setUser = (dispatch) => {
  return (user, device_id, callback) => {
    dispatch({ type: "set_user", payload: { user, device_id } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  userReducer,
  {
    setUser,
  },
  { user: [], device_id: null }
);

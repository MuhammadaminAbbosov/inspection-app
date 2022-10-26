export const SET_DATA = "SET_DATA";
export const SET_ACTIVE = "SET_ACTIVE";

export const setData = (pack) => (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: pack,
  });
};

export const setActive = (pack) => (dispatch) => {
  dispatch({
    type: SET_ACTIVE,
    payload: pack,
  });
};

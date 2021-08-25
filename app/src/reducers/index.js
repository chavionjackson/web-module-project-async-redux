import {
  FETCH_TEAMS_FAIL,
  FETCH_TEAMS_START,
  FETCH_TEAMS_SUCCESS,
} from "../actions";

const initialState = {
  teams: [],
  error: "",
  isFetching: false,
};

const teamsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_TEAMS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        teams: action.payload,
        error: "",
      };
    case FETCH_TEAMS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;

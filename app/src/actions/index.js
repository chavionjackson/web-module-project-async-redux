import axios from "axios";

export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
export const FETCH_TEAMS_START = "FETCH_TEAMS_START";
export const FETCH_TEAMS_FAIL = "FETCH_TEAMS_FAIL";

export const fetchTeams = () => (dispatch) => {
  dispatch({ type: FETCH_TEAMS_START });
  axios
    .get("https://www.balldontlie.io/api/v1/teams")
    .then((res) =>
      dispatch({ type: FETCH_TEAMS_SUCCESS, payload: res.data.data })
    )
    .catch((err) => dispatch({ type: FETCH_TEAMS_FAIL, payload: err }));
};

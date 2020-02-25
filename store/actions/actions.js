import { FETCH_POIS } from "../actions/types";
import { PERMISSIONS_ANSWER_ISALLOW } from "../actions/types";
import { PERMISSIONS_ANSWER_ISDENY } from "../actions/types";

export const fetchPOIs = () => {
  return async dispatch => {
    await fetch(`https://warply.s3.amazonaws.com/data/test_pois.json`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(res =>
        dispatch({
          type: FETCH_POIS,
          payload: res
        })
      )
      .catch(error => {
        alert("Error", error);
      });
  };
};

export const permissionAnswerIsAllow = dispatch => {
  let answer;
  dispatch({
    type: PERMISSIONS_ANSWER_ISALLOW,
    payload: answer
  });
};

export const permissionAnswerIsDeny = dispatch => {
  let answer;
  dispatch({
    type: PERMISSIONS_ANSWER_ISDENY,
    payload: answer
  });
};

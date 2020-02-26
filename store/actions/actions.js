import { FETCH_POIS } from "../actions/types";
import { PERMISSIONS_ANSWER_ISALLOW } from "../actions/types";
import { PERMISSIONS_ANSWER_ISDENY } from "../actions/types";
import { CURRENT_LOCATION } from "../actions/types";
import * as Location from "expo-location";

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

export const permissionAnswerIsAllow = () => {
  return async dispatch => {
    dispatch({
      type: PERMISSIONS_ANSWER_ISALLOW
    });

    const location = await Location.getCurrentPositionAsync({});
    const { coords } = location;

    dispatch({
      type: CURRENT_LOCATION,
      payload: coords
    });
  };
};

export const permissionAnswerIsDeny = dispatch => {
  dispatch({
    type: PERMISSIONS_ANSWER_ISDENY
  });
};

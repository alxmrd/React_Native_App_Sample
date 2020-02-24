import { FETCH_POIS } from "../actions/types";

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
        console.log(error);
      });
    //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //   if (status !== "granted") {
    //     alert = "H Τοποθεσία ειναι απενεργοποιημένη, μεταβείτε στις ρυθμίσεις!";
  };
};

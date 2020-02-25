export const PERMISSIONS_ANSWER_ISALLOW = "PERMISSIONS_ANSWER_ISALLOW";
export const PERMISSIONS_ANSWER_ISDENY = "PERMISSIONS_ANSWER_ISDENY";

const permissionAnswerReducer = (state = null, action) => {
  switch (action.type) {
    case PERMISSIONS_ANSWER_ISALLOW:
      return true;
    case PERMISSIONS_ANSWER_ISDENY:
      return false;

    default:
      return state;
  }
};

export default permissionAnswerReducer;

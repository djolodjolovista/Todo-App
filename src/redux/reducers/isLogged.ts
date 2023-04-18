enum LoggedActionType {
  SIGN_IN = 'SIGN_IN'
}

const loggedReducer = (state = false, action: any) => {
  switch (action.type) {
    case LoggedActionType.SIGN_IN:
      return !state;

    default:
      return state;
  }
};

export default loggedReducer;

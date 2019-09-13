const initalState = {
  count: 0
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log(action);
      return {
        count: state.count + action.payload.amount
      };
    default:
      return state;
  }
}

export default reducer;

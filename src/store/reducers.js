const initalState = {
  count: 0,
  data: []
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload.amount
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default reducer;

const actions = {};

actions.increment = payload => ({
  type: "INCREMENT",
  payload
});

actions.setPlanets = planets => ({
  type: "SET_PLANETS",
  planets
})

export default actions;

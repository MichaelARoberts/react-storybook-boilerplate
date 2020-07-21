const actions = {}

actions.increment = payload => ({
  type: 'INCREMENT',
  payload
})

actions.setData = planets => ({
  type: 'SET_DATA',
  planets
})

export default actions

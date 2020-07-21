import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import reducer from './reducers'

const store = createStore(reducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      logger,
    )
  )
)

export default store
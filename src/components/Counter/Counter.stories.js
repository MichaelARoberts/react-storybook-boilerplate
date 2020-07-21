import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import store from '../../store/storeConfig'

storiesOf('Counter', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => (
    <Counter amount={1} ></Counter >
  ))
import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from 'react-redux';
import DataCall from "./DataCall";
import store from '../../store/storeConfig'

storiesOf("DataCall", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("default", () => (
    <DataCall></DataCall>
  ));
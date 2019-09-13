import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import actions from "../../store/actions";

const Counter = props => {
  const state = useSelector(
    state => ({
      count: state.count
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  return (
    <div>
      <p>The counter is at {state.count}</p>
      <button onClick={() => dispatch(actions.increment({ amount: 30 }))}>
        +
      </button>
    </div>
  );
};

export default Counter;

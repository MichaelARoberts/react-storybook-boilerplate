import React from "react";
import { useDispatch, useSelector} from "react-redux";
import actions from "../../store/actions";


export default function Counter({amount}) {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <p>The counter is at {count}</p>
      <button onClick={() => dispatch(actions.increment({ amount: amount }))}>
        +
      </button>
    </div>
  )
}

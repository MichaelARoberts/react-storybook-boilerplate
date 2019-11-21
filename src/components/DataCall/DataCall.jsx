import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import axios from 'axios'

const DataCall = props => {
  const state = useSelector(
    state => ({
      data: state.data
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData () {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      dispatch({ type: "SET_DATA", data: res.data })
    }

    fetchData()

  }, [])

  return (
    <>
      <ul>{state.data.length > 0 && state.data.map(p => (<li>{p.id}</li>))}</ul>
    </>
  );
};

export default DataCall

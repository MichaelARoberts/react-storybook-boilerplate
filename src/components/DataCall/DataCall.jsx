import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import './DataCall.scss'

export default function DataCall() {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      dispatch({ type: 'SET_DATA', data: res.data })
    }
    fetchData()
  }, [dispatch])

  const toggleTodo = (e, todo) => {
    todo.completed = !todo.completed
    dispatch({ type: 'SET_DATA', data: [...data]})
  }

  return (
    <>
      {data.length > 0 &&
        data.map((d) =>
        {return (
          <div className="todo" key={d.id}>
            <input type="checkbox" checked={d.completed} onChange={(e) => toggleTodo(e, d)}></input>
            <div>{d.title}</div>
          </div>
        )}
        )
      }
    </>
  )
}

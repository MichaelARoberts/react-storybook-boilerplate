import React from 'react'
import './HelloWorld.scss'

export default function HelloWorld({msg}) {
  return (
    <div className="hello-world">
      <p>{msg}</p>
    </div>
  )
}

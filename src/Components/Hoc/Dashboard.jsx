import React from 'react'
import IsAuth from './IsAuth'

function Dashboard({name}) {
  return (
    <div>Dashboard {name}</div>
  )
}

export default IsAuth(Dashboard)
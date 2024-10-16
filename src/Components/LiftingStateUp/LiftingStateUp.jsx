import React, { useState } from 'react'
import Card from './Card'

function LiftingStateUp() {

  let [name, setName] = useState("Lifting State Up")

  return (
    <>
      <Card title="Card One" name={name} setName={setName}/>
      <Card title="Card Two" name={name} setName={setName}/>
    </>
  )
}

export default LiftingStateUp
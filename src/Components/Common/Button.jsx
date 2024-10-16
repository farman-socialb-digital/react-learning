import React from 'react'

function Button(props) {
  return (
    <button className={`bg-${props.bgColor}-700 p-2 px-4 w-[100px] rounded-full`}>
      {props.name}
    </button>
  )
}

export default Button
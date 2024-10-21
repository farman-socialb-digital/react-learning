import React from 'react'
import Dashboard from './Dashboard'

function Hoc() {
  return (
    <div className="max-w-[550px] m-auto text-center border border-gray-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-gray-300 bg-gray-800">
            HOC
        </p>
        <div className="m-4 text-center text-gray-400">
            <Dashboard name="Page" />
        </div>
    </div>
  )
}

export default Hoc
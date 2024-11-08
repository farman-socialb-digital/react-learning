import React from 'react'
import Dashboard from './Dashboard'

function Hoc() {
  return (
    <div className="max-w-[550px] m-auto text-center border border-slate-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-slate-400 bg-slate-800">
            HOC Component
        </p>
        <div className="m-4 text-center text-slate-400">
            <Dashboard name="Page" />
        </div>
    </div>
  )
}

export default Hoc
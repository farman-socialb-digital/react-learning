import React from 'react'
import Login from './Login'

function IsAuth(WrappedComponent) {
  return (
    function (props) {
        const isLogin = true
        return isLogin ? <WrappedComponent {...props} /> : <Login name="Page"/>
    }
  )
}

export default IsAuth
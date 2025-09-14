import React from 'react'
import { Outlet } from 'react-router'

const userLayout = () => {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default userLayout

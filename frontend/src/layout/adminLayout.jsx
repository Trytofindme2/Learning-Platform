import React from 'react'
import { Outlet } from 'react-router'

const adminLayout = () => {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default adminLayout

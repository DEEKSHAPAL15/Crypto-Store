import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus'
import Loading from './Loading'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

  const {checkStatus, loggedIn} = useAuthStatus();

  if(checkStatus){
    return <Loading/>
  }

  return loggedIn ? <Outlet/> : <Navigate to={"/login"}/>;

};

export default PrivateRoute;

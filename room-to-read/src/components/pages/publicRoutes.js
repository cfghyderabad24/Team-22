import React from 'react'
import { Navigate } from 'react-router-dom'
import cookies from '../cookies'
const PublicRoutes = ({children}) => {
    const getTokenFromCookies = cookies.get('teacherData')
    console.log(getTokenFromCookies);
    return getTokenFromCookies === undefined ? children : (<><Navigate to={'/home'} replace={true}/></>)
}

export default PublicRoutes
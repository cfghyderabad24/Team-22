import React from 'react'
import { Navigate } from 'react-router-dom'
import cookies from '../cookies'
import { toast } from 'react-toastify'
const PrivateRoutes = ({children}) => {
    const getTokenFromCookies = cookies.get('teacherData')
    return getTokenFromCookies === undefined ? (<>{toast.error('Login Required')}<Navigate to={'/'} replace={true}/></>): children
}

export default PrivateRoutes
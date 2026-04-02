import React from 'react'
import Cookies from 'js-cookie'

function ProtectedRoute({children}) {
  const token = Cookies.get('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children
}

export default ProtectedRoute

import React from 'react';
import WithAuthentication from './authentication';

const AuthenticatedUserProfile = () => {
  return <div>Welcome to the authenticated component!</div>;
};

const AuthenticatedComponent = WithAuthentication(AuthenticatedUserProfile);

export default AuthenticatedComponent;


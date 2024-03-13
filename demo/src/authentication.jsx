
import React, { useEffect, useState } from 'react';

const WithAuthentication = (WrappedComponent) => {
  return function AuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthentication = () => {
      setTimeout(() => {

        setIsAuthenticated(true);
      }, 1000);
    };

    useEffect(() => {
      checkAuthentication();
    }, []);

    if (isAuthenticated) {
      
      return <WrappedComponent {...props} />;
    } else {
      return (
        <div>
          <h1>You are not logged in...</h1>
        </div>
      );
    }
  };
};

export default WithAuthentication;

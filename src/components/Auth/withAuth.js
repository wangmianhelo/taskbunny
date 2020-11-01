import AuthContext from './AuthContext';
import React from 'react'
const withAuth = Component => {
  return props => {
    return (
      <AuthContext.Consumer>
        {(value) => {
          return <Component {...props} value={value} />;
        }}
      </AuthContext.Consumer>
    );
  };
};

export default withAuth
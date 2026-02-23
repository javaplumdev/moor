import React from 'react';
import AuthProvider from './auth-provider';

const IndexProviders = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default IndexProviders;

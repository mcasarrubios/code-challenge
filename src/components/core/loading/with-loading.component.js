import React from 'react';
import Loading from './loading.component.js';

const WithLoading = Component => ({ isLoading, ...props }) => {
  
  return (
    isLoading
    ? <Loading title="loading..."></Loading>
    : <Component { ...props } />
  )

};

export default WithLoading;

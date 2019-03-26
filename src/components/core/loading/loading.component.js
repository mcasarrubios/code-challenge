import React from 'react';
import './loading.component.css';

const Loading = ({title}) => (
  <div className="loading-overlay">
    <div className="loading-loader">
      loading...
    </div>
  </div>
);

export default Loading;

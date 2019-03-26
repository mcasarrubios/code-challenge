import React, { useState, useEffect } from 'react';
import './loading.component.css';

const Loading = ({title}) => {

  const [state, setState] = useState({ isDelayed: false });

  useEffect(() => {
    // Delay isLoading to avoid flickering
    const timer = setTimeout(() => setState({...state, isDelayed: true}), 300);
    return () => clearTimeout(timer);
  },[]);

  return !state.isDelayed 
    ? <div></div>
    : <div className="loading-overlay">
        <div className="loading-loader">
          {title}
        </div>
      </div>

};

export default Loading;

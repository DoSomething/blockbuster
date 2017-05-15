import React from 'react';
import '../styles/Panel.scss';

const Panel = ({ children }) => (
  <div className="panel">
    <div>
      { children }
    </div>
  </div>
);

export default Panel;

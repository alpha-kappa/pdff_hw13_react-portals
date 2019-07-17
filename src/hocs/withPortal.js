import React from 'react';
import ReactDOM from 'react-dom';

export default (domNode) => (Component) => props => ReactDOM.createPortal(<Component {...props} />, domNode); 
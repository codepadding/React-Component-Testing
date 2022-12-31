import React from 'react';
import 'styles.css';
const MyComponent = (props) => {
return(
  <div className="styled-component">
    {props.children}
  </div>);
};
export default MyComponent;
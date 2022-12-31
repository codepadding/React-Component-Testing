import React from 'react';
import 'styles.css';
const MyComponent = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "styled-component"
  }, props.children);
};
export default MyComponent;
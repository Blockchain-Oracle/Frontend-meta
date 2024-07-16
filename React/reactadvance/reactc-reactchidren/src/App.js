import React from "react";
const element = <button className="original">Click me</button>;
const clonedElement = React.cloneElement(element, { className: 'cloned' }, 'New Text');

// Resulting element: <button className="cloned">New Text</button>

function MyComponent(props) {
  return (
    <div>
      {React.Children.map(props.children, child => (
        <div className="wrapped-child">{child}</div>
      ))}
    </div>
  );
}

// Usage
<MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>

// Resulting output:
// <div>
//   <div className="wrapped-child"><span>Child 1</span></div>
//   <div className="wrapped-child"><span>Child 2</span></div>
// </div>

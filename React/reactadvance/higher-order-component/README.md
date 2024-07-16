Certainly! Here's the complete content including explanations in `README.md` format:

```markdown
# Higher-Order Components (HOCs) and Composability in React

## Higher-Order Components (HOCs)

Higher-order components (HOCs) are a pattern in React that allows you to reuse component logic. An HOC is a function that takes a component and returns a new component with additional functionality.

### Example of a Basic HOC

```javascript
const withMousePosition = (WrappedComponent) => {
  const injectedProp = { mousePosition: { x: 10, y: 10 } };

  return (originalProps) => {
    return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
  };
};
```

### Explanation:

- **Higher-Order Components (HOCs)**: These are functions that accept a component and return a new component with additional props or functionality. In the example above, `withMousePosition` takes a `WrappedComponent` and adds a prop `injectedProp` containing the mouse position.

## Avoid Mutating the Original Component

HOCs should not directly alter the component they receive. Instead, they should return a new component, adhering to React's immutability principles.

### Example

```javascript
// Incorrect: Mutates the original component
const HOC = (WrappedComponent) => {
  WrappedComponent = () => {
    // New implementation
  };
  return WrappedComponent;
};

// Correct: Returns a new component without mutating the original
const HOC = (WrappedComponent) => {
  return (props) => <WrappedComponent {...props} />;
};
```

### Explanation:

- **Avoid Mutating the Original Component**: Modifying the `WrappedComponent` directly violates React's immutability principles and can lead to unexpected behavior. Instead, always return a new component that wraps `WrappedComponent`.

## Pass Unrelated Props Through to the Wrapped Component

HOCs should pass all received props to the wrapped component to maintain flexibility and reusability.

### Example

```javascript
const withMousePosition = (WrappedComponent) => {
  const injectedProp = { mousePosition: { x: 10, y: 10 } };

  return (originalProps) => {
    return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
  };
};
```

### Explanation:

- **Pass Unrelated Props Through to the Wrapped Component**: By spreading `originalProps` onto the `<WrappedComponent />`, all props not handled by the HOC are passed down to maintain the original component's interface and flexibility.

## Maximize Composability

The primary signature of an HOC is a function that takes a component and returns a new component. Composability in HOCs allows combining multiple HOCs to enhance components with various functionalities.

### Example

```javascript
import { connect } from 'react-redux';
import { compose } from 'redux';
import withMousePosition from './withMousePosition';
import withURLLocation from './withURLLocation';

// Map state and dispatch to props
const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

// Compose multiple HOCs
const enhance = compose(
  withMousePosition,
  withURLLocation,
  connect(mapStateToProps, mapDispatchToProps)
);

// Apply the composed HOCs to the component
const EnhancedComponent = enhance(MyComponent);
```

### Explanation:

- **Maximize Composability**: `compose` from `redux` allows combining multiple HOCs (`withMousePosition`, `withURLLocation`, and `connect`) into a single enhancer function. This enhances `MyComponent` with mouse position, URL location, and Redux state management.

By using these patterns, you can effectively enhance and extend your React components in a modular, reusable, and composable manner using Higher-Order Components (HOCs).
```

This `README.md` format now includes both the code examples and detailed explanations for each concept related to Higher-Order Components (HOCs) and their composability in React.
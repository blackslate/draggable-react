# Demo of dragging an element using React

[Demo](https://blackslate.github.io/draggable-react/)

This allows for dragging with a mouse or on a touch screen, and ensures that the page itself is not dragged with the element, when used in a web app which displays an address bar which may or may not be hidden.

Different actions can be triggered by a simple click or by an extended press without dragging.

React opinionatedly adds passive listeners for "touchstart". On a web page, this can cause the entire page to move as you drag the draggable element. To avoid this, you should add the "touchstart" event listener manually to the DOM element that you want to drag.

Specifically, you should NOT use:

```jsx
  <div
    className="my-draggable-element"
    onTouchStart={myTouchStartListener}
  />
```

See the useEffect() function in App.js for the solution.

## See Also
See the [companion repository](https://github.com/blackslate/draggable) and its [demo](https://blackslate.github.io/draggable/), for a similar solution using plain (non-React) JavaScript

[Drag Module Gist](https://gist.github.com/blackslate/6f77d3acd2edc2a286cff6d607cf3ce8)

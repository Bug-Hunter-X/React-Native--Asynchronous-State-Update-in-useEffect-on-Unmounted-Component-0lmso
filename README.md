# React Native Asynchronous State Update Bug
This repository demonstrates a common error in React Native applications: updating the state of an unmounted component after an asynchronous operation within the `useEffect` hook.  The example showcases the bug and a solution that prevents this issue.

## Bug
The `unmountedUpdateBug.js` file contains a component that fetches data asynchronously.  If the component unmounts before the data is fetched, updating the state will lead to an error (or unexpected behavior). 

## Solution
The `unmountedUpdateSolution.js` file demonstrates a solution that uses the `useRef` hook and a cleanup function within `useEffect` to prevent the state update on an unmounted component.  This ensures that the asynchronous operation is canceled if the component is unmounted.
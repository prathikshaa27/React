import React from 'react';
import withErrrorBoundary from './higherordercomponent';

const TestComponent =()=>{
const throwError =()=>{
    throw new Error("Something went wrong in this component")
};
return(
    <>
    <h1>TestComponent</h1>
    <button onClick={throwError}>Click here</button>
    </>
);
};

const TestComponentwithErrorBoundary = withErrrorBoundary(TestComponent);
export default TestComponentwithErrorBoundary;
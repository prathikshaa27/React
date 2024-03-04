const ErrorProneComponent = () => {
    
    const throwError = () => {
      throw new Error('There are some errors in this component.');
    };
  
    return (
      <div>
        <h2>Error Boundary Example</h2>
        <button onClick={throwError}>Click me</button>
        <p>Clicking the button will throw an error</p>
      </div>
    );
  };

export default ErrorProneComponent;
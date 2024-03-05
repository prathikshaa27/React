// import React from 'react';

// class Greetings extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   }

//   render() {
//     const { render } = this.props;
//     const { count } = this.state;

//     // Calling the render prop function with the current count and the increment function
//     return (
//       <div>
//         {render(count, this.incrementCount)}
//       </div>
//     );
//   }
// }
// export default Greetings;

// 
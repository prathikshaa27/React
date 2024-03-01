// /*const App3 = () => {
//     const [count, setCount] = useState(0);
//     const countRef = useRef(count);
  
//     useEffect(() => {
//       // Update the ref value when count changes
//       countRef.current = count;
  
//       // Side effect: Log the current count
//       console.log('Count:', countRef.current);
  
//       // Cleanup function for the effect (componentWillUnmount)
//       return () => {
//         console.log('Component will unmount');
//       };
//     }, [count]);
  
//     return (
//       <MyContextProvider>
//         <div>
//           <h1>React Hooks Example</h1>
//           <p>Count: {count}</p>
//           <button onClick={() => setCount(count + 1)}>Increment</button>
  
//           {/* Child component using useContext and useRef */}
//           <ChildComponent />
//         </div>
//       </MyContextProvider>
//     );
//   };
  
//   export default App3;/*
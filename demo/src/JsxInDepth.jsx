//XML like syntax 
const element =<h1>Hello this is prathi</h1>

//Embedding expressions
 const Name ="prathi";
 const result = <h1> hello this is, {Name}</h1> 

 //specifying attributes

const image = <img src="https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-381739.jpg&fm=jpg"/>

//Children in JSX

const Parent =(
    <div>
        <h1>THIS IS HEADING</h1>
        <p>This is a paragraph</p>
        <p>This is also a paragraph</p>
    </div>
);

//JSX represents objects

// function Greeting(){
//     const user ={age:22};
//     if(user){
//         return <h1>My age is : {user.age}</h1>
//     }
//     return <h1>Sorry cant find the user</h1>
// };
export {element,result,image,Parent};
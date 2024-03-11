import React ,{useState,useEffect}from 'react'
import axios from'axios';

function DataFetchingComponent(){
    const[data,setData] = useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(response.data)
            }
            catch(error){
                console.log('Error fetching data',error)

            }
        };
        fetchData();
    },[]);

    return(
        <div>
            <h1>Examples using axios for GET request</h1>
            <ul>
                {data.map(item =>(
                    <li key={item.id}>{item.name}</li>
                    ))}
            </ul>
        </div>
    );


}

export default DataFetchingComponent;
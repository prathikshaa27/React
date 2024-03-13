import {useSearchParams} from 'react-router-dom';
export default function Users() {
  const[searchParams,setSearchParams]=useSearchParams();
  const showActiveUsers = searchParams.get('Filter')==='Active';
  return (
    <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <div>
          <button onClick={()=>setSearchParams({Filter:"Active"})}>Active users</button>
          <button onClick={()=>setSearchParams({})}>Reset Filter</button>
        </div>
        {
          showActiveUsers?
          <h2>Showing active users</h2>: 
          <h2>Showing all users</h2>
        }
    </div>
  );
}

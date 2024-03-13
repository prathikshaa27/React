import { useParams } from "react-router-dom";
export default function UserDetails() {
    const params= useParams();
    const UserId = params.UserId;
  return (
    <div>
       
        <h2>Details of the Users: {UserId}</h2>

    </div>
  );
}

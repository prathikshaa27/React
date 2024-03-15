import {useNavigate} from 'react-router-dom';

export default function SampleComponent() {
    const navigate = useNavigate();

    function handleClick(){
        navigate('/AnotherComponent')
    }
  return (
    <div>
        <h1>Example for useNavigate</h1>
        <button onClick={handleClick}>Another Component</button>

    </div>
  );
}

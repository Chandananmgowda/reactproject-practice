import React,{useState} from "react";

function Counter(){
    const [count,setCount]=useState(0);

    const [message, setMessage] = useState('');

    const handleClick = () => {
      setMessage('Button was clicked!');
    };

    return(
        <div>
            <p>You Clicked{count}time</p>
            <button onClick={()=> setCount(count+1)}>Click me</button>
            
        </div>
    );
}


export default Counter;
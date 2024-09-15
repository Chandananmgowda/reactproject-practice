import {useState} from "react";

function ChildComponent({message}){
    return (
        <div>
            <h1>Message:{message}</h1>
            {/* <h1>Count Value:{count}</h1> */}
        </div>
    );
   

}

function ParentComponent(){
    const[msg,setMsg]=useState("Hello from Parent");
    const[count,setCount]=useState(0);

    const handleChange=() =>
    {
        setMsg("Message Update!");
        setCount(count+1);
    }
    const handleReset=()=>{
        setMsg("Hello from Parent");
        setCount(0);
    }
            return(
        <div>
            <ChildComponent message={msg} count={count+1}/>
            {/* <button onClick={()=> setMsg("Message Update!")}>Update Message</button> */}
            <button onClick={handleChange}>Update</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );

}

export default ParentComponent;
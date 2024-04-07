import { useState } from 'react'
import  './counter.css'
export default function Counter(){
    
    const [count,setCount] = useState(0);

    function IncrementCounterFunction(){
        setCount(count + 1)
        console.log(count)
    }

    function DecrementCounterFunction(){
        setCount(count - 1)
        console.log(count)
    }

    return(
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
            <button 
            className="counterButton" 
            onClick={IncrementCounterFunction}
            >+1</button>
            
            <button 
            className="counterButton" 
            onClick={DecrementCounterFunction}
            >-1</button>
            </div>
            

        </div>
    )
}
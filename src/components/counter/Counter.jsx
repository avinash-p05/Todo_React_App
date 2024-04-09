import { useState } from 'react'
import  './counter.css'
import CounterButton from './CounterButton'


export default function Counter(){

    const [count,setCount] = useState(0)

    function IncrementCounterParentFunction(by){
        setCount(count + by)
    }

    function DecrementCounterParentFunction(by){
        setCount(count - by)
    }

    function resetCounter(){
        setCount(0)
    }

    return(
        <div>
            <span className='totalCount'>{count}</span>
            <CounterButton by={1} incrementMethod={IncrementCounterParentFunction} decrementMethod = {DecrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={IncrementCounterParentFunction} decrementMethod = {DecrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={IncrementCounterParentFunction} decrementMethod = {DecrementCounterParentFunction}/>

            <button 
                    className="resetCounterButton" 
                    onClick={resetCounter}
            >Reset</button>

        </div>
    )
}





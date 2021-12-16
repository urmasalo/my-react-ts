import { useState } from "react"

export const Counter = () => {

const [counter, setCounter] = useState(0)

const increase =(number:number = 1) => {
    setCounter(counter + number)
}

    return (
        <div className="mt-5">
            <h3>Counter: UseState</h3>
            <span>Valor : {counter}</span>
            <br />
            <button 
                onClick={()=>increase()} 
                className=" btn btn-outline-primary m-2">
                +1
            </button>
            <button 
                onClick={()=>increase(2)}
                className=" btn btn-outline-primary m-2 ">
                +2
            </button>
            <button 
                onClick={()=>setCounter(0)}
                className=" btn btn-outline-danger m-2 ">
                Reset
            </button>
        </div>
    )
}

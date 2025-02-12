import { CounterContext } from "@/context/counterContext";
import React, { useContext } from "react";

const C=(props)=>{
    const value=useContext(CounterContext)
    return(
        <div>
            C component -{value}
        </div>
    )
}
export default C;
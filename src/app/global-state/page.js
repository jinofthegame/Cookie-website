"use client"
import React ,{useContext,useState} from "react";
import A from "./Components/A";
import { CounterContext } from "@/context/counterContext";
import { ThemeContext } from "@/context/themeContext";

const GlobalState=()=>{
    const mode = useContext(ThemeContext);

    console.log(mode,"mode");
    
    const [count ,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    return(
        <div className="mode ">
            
        </div>
        <div>
            Global state page -{count}
            <button className="my-2 py-2 px-3 bg-slate-500 "onClick={increment}>Increase</button>
            <CounterContext.Provider value={count}>
                <A/>
            </CounterContext.Provider>

        </div>
    );
};
export default GlobalState;
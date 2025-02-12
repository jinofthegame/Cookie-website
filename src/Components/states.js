"use client"
import { useState } from "react";

const State = (props) => {
    const { title } = props;
    let [count, setCount] = useState(1);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 2); // Just decrement by 2, or you can use a final value
    };


    return (
        <div>
            <h1 className="text-6xl">Counter value: {count}</h1>
            <button
                className="mt-4 bg-gray-600 text-white px-3 py-2 rounded-lg"
                onClick={Increment}
            >
                Increment
            </button>
            <button
                className="mt-4 bg-gray-600 text-white px-3 py-2 rounded-lg"
                onClick={Decrement}
            >
                Decrement
            </button>
        </div>
    );
};

export default State;

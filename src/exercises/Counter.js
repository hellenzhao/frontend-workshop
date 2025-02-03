import { useState } from 'react';

/*
 * Code a Counter component
 * that has an increment and decrement button
*/


export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    return (
        <div>
            <h4>Clicks: {count}</h4>
            <button onClick={increment}>+</button>
            &nbsp;
            <button onClick={decrement}>-</button>
        </div>
    )
}
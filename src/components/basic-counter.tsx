import { useState, useEffect } from 'react';
import { setItem, getItem } from '../utils.tsx';

function Counter() {
    const [count, setCount] = useState(() => {
        return getItem('count') || 0;
    });

    useEffect(() => {
        setItem('count', count);
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        );
    }

export default Counter;

import { useState, useEffect } from 'react';
import { setItem, getItem } from '../utils.tsx';
import RabbitContent from './rabbit-content'
import rabbitImage from '../assets/rabbit.png'

function Counter() {
    const [count, setCount] = useState(() => {
        return getItem('count') || 0;
    });
    const images : string[] = [
        String(rabbitImage),
        String(rabbitImage),
        String(rabbitImage),
        String(rabbitImage),
        String(rabbitImage),
    ]
    
    const handleClick = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    useEffect(() => {
        setItem('count', count);
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => handleClick()}>Increment</button>
            <div>
                {images.slice(0, count).map((imgage, index) =>
                    <img key={index} src={imgage} width="100em"/>
                )}
                {count == 5 && <div>
                        <h3>
                            Stop looking at NASA and go home
                        </h3>
                    </div>
                }
            </div>
        </div>
    );
}

export default Counter;

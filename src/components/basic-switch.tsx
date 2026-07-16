import { useState } from 'react';
import BasicSwitchProps from '../interfaces/basic-switch-interface';

const BasicSwitch : React.FC<BasicSwitchProps> ({text}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>On/Off Button</h3>
            <div>
                <button onClick={() => setCount(1)}>{count}</button>

            </div>
        </div>
        );
    }

export default BasicSwitch;

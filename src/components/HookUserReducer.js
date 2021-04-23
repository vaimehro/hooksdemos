import React, {useReducer} from 'react';

const initialValue = 0
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialValue

    }


}
const HookUserReducer = () => {
   const [count,dispatch] = useReducer(reducer,initialValue)
    return (
        <div>
            {count}
            <button onClick={()=>dispatch("increment")}>Increment</button>
            <button onClick={()=>dispatch("decrement")}>Decrement</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>

        </div>
    );
};

export default HookUserReducer;
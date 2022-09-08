import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleLogged, incrementByAmount, counterSlice } from "../app/features/counter/counterSlice";
import { Dummy } from "./Dummy";

const Home = () => {
    const counter = useSelector(state => state.counter.value);
    const isLogged = useSelector(state => state.counter.isLogged);
    const dispatch = useDispatch();
    const [incrementValue, setIncrementValue] = useState(0);

    const element = <h2>Hello Element</h2>

    const inc = () => {
        dispatch(increment());
        dispatch(toggleLogged(true));
    }

    const dec = () => {
        dispatch(decrement());
        dispatch(toggleLogged(false));
    }

    const incValue = () => {
        dispatch(incrementByAmount(incrementValue));
        console.log(counterSlice.getInitialState());
    }

    return (
        <main className="Home Body">
            <h2>Home</h2>

            <div>
                {element}
            </div>
            <Dummy withText='This text is passed as attribute' />
            <hr />
            <p>Counter: {counter}</p>
            <div>
                <button onClick={() => inc()} style={{padding: '2px 6px'}}>+</button>
                <button onClick={() => dec()} style={{padding: '2px 6px'}}>-</button>
            </div>
            <div>
                <input type='text' value={incrementValue} onChange={(e) => setIncrementValue(e.target.value)} />
            </div>
            <div>
                <button onClick={incValue} style={{padding: '2px 6px'}}>Add Value</button>
            </div>
            {isLogged && 
            <p>Logged in success </p>}
        </main>
    );
}

export default Home;
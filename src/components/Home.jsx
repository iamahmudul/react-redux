import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleLogged } from "../app/features/counter/counterSlice";

const Home = () => {
    const counter = useSelector(state => state.counter.value);
    const isLogged = useSelector(state => state.counter.isLogged);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(increment());
        dispatch(toggleLogged(true));
    }

    const dec = () => {
        dispatch(decrement());
        dispatch(toggleLogged(false));
    }

    return (
        <main className="Home Body">
            <h2>Home</h2>
            <p>Counter: {counter}</p>
            <div>
                <button onClick={() => inc()} style={{padding: '2px 6px'}}>+</button>
                <button onClick={() => dec()} style={{padding: '2px 6px'}}>-</button>
            </div>
            {isLogged && 
            <p>Logged in success </p>}
        </main>
    );
}

export default Home;
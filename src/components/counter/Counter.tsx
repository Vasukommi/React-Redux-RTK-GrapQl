import { useStateDispatch, useStateSelector } from "../../store/storeHooks"
import { decrement, increment } from '../../store/slices/counterSlice';

const Counter = () => {
    const count = useStateSelector((state: any) => state.counter.value);
    const dispatch = useStateDispatch();

    return (
        <div>
            <p>Counter (Component A)</p>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;
import { useStateDispatch, useStateSelector } from "../../../store/storeHooks";
import { decrement, increment, incrementByAmount } from '../../../store/slices/counterSlice';
import { useState } from 'react';

const CountTestOneChild = () => {
    const count = useStateSelector((state: any) => state.counter.value);
    const dispatch = useStateDispatch();
    const [IncrementAmount, setIncrementAmount] = useState<any>('2');

    const addAmountToState = () => {
        const converToNumber: any = Number(IncrementAmount) || 0
        dispatch(incrementByAmount(converToNumber));
    }

    return (
        <div>
            <p>CountTestOneChild (Component B Child)</p>
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
                <div>
                    <input value={IncrementAmount} onChange={(e: any) => setIncrementAmount(e.target.value)} aria-label='setIncrementAmount' />
                    <button onClick={addAmountToState}>Add Amount</button>
                </div>
            </div>
        </div>
    )
}

export default CountTestOneChild;
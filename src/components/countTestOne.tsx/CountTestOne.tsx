import { useStateSelector } from "../../store/storeHooks";

const CountTestOne = () => {
    const count = useStateSelector((state: any) => state.counter.value);
    return (
        <div>
            <p>CountTestOne (Component B)</p>
            {count}
        </div>
    )
}

export default CountTestOne;
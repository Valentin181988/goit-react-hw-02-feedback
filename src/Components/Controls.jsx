export const Controls = ({onIncrementGood, onIncrementNeutral, onIncrementBad}) => {
    return(
        <div>
            <button onClick={onIncrementGood}>Good</button>
            <button onClick={onIncrementNeutral}>Neutral</button>
            <button onClick={onIncrementBad}>Bad</button>
        </div>
    );
};
export const FeedbackOptions = ({onIncrementGood, onIncrementNeutral, onIncrementBad, onCountTotalFeedback, onCountPositiveFeedbackPercentage}) => {
    return(
        <div>
            <button onClick={onIncrementGood}>Good</button>
            <button onClick={onIncrementNeutral}>Neutral</button>
            <button onClick={onIncrementBad}>Bad</button>
            <button onClick={onCountPositiveFeedbackPercentage}>Percent</button>
        </div>
    );
}
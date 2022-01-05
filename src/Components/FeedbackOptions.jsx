export const FeedbackOptions = ({onLiveFeedback}) => {
    return(
        <div>
            <button onClick={() => onLiveFeedback('good')}>Good</button>
            <button onClick={() => onLiveFeedback('neutral')}>Neutral</button>
            <button onClick={() => onLiveFeedback('bad')}>Bad</button>
        </div>
    );
}
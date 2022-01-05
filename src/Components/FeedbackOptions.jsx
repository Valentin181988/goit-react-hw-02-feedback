export const FeedbackOptions = ({onLiveFeedback}) => {
    return(
        <div>
            <button type="button" onClick={() => onLiveFeedback('good')}>Good</button>
            <button type="button" onClick={() => onLiveFeedback('neutral')}>Neutral</button>
            <button type="button" onClick={() => onLiveFeedback('bad')}>Bad</button>
        </div>
    );
}
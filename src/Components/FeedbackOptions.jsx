import PropTypes from "prop-types";
import { FeedbackButtons } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({onLiveFeedback}) => {
    return(
        <div>
            <FeedbackButtons type="button" onClick={() => onLiveFeedback('good')}>Good</FeedbackButtons>
            <FeedbackButtons type="button" onClick={() => onLiveFeedback('neutral')}>Neutral</FeedbackButtons>
            <FeedbackButtons type="button" onClick={() => onLiveFeedback('bad')}>Bad</FeedbackButtons>
        </div>
    );
};

FeedbackOptions.propTypes = {
    onLiveFeedback: PropTypes.func,
}
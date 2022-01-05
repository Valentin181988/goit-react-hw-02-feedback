export const Statistics = ({good, neutral, bad, total, positivePercent}) => {
    return(
        <div>
          <p>Statistics</p>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercent}%</li>
          </ul>
        </div>
    );
}
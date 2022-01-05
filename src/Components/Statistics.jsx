export const Statistics = ({good, neutral, bad}) => {
    return(
        <div>
          <p>Statistics</p>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
        </div>
    );
}
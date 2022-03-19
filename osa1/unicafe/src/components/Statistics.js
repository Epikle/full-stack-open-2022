import StatisticLine from './StatisticLine';

const Statistics = (props) => {
  const { good, neutral, bad } = props.stats;
  const all = good + neutral + bad;
  const average = ((good + bad * -1) / all).toFixed(1);
  const positive = ((good / all) * 100).toFixed(1) + ' %';

  if (!good && !neutral && !bad) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  );
};

export default Statistics;

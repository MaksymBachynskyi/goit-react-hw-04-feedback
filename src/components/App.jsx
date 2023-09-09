import { useEffect, useState } from 'react';
import { Statistics } from './statistics/statistics';
import { Section } from './section/section';
import { FeedbackOptions } from './feedback/feedback.jsx';
import { Notification } from 'components/notification/notification';

export const App = () => {
  const [goodEl, setGood] = useState({ good: 0 });
  const [neutralEl, setNeutral] = useState({ neutral: 0 });
  const [badEl, setBad] = useState({ bad: 0 });
  const onLeaveFeedback = targetKey => {
    switch (targetKey) {
      case 'good':
        setGood(p => ({ ...p, good: p.good + 1 }));
        break;
      case 'neutral':
        setNeutral(p => ({ ...p, neutral: p.neutral + 1 }));
        break;
      case 'bad':
        setBad(p => ({ ...p, bad: p.bad + 1 }));
        break;
      default:
        console.log('I like React');
        break;
    }
  };
  const countTotalFeedback = () => goodEl.good + neutralEl.neutral + badEl.bad;
  const countPositiveFeedbackPercentage = () => {
    const countTotalFeed = countTotalFeedback();

    return Math.round((goodEl.good / countTotalFeed) * 100);
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={{ ...goodEl, ...neutralEl, ...badEl }}
        onLeaveFeedback={onLeaveFeedback}
      />
      <h1>Statistics</h1>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={goodEl.good}
          neutral={neutralEl.neutral}
          bad={badEl.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification title={'There is no feedback'} />
      )}
    </Section>
  );
};

import { useState } from 'react';
import { Statistics } from './statistics/statistics';
import { Section } from './section/section';
import { FeedbackOptions } from './feedback/feedback.jsx';
import { Notification } from 'components/notification/notification';

export const App = () => {
  const [goodEl, setGood] = useState(0);
  const [neutralEl, setNeutral] = useState(0);
  const [badEl, setBad] = useState(0);

  const onLeaveFeedback = targetKey => {
    switch (targetKey) {
      case 'good':
        setGood(p => p + 1);
        break;
      case 'neutral':
        setNeutral(p => p + 1);
        break;
      case 'bad':
        setBad(p => p + 1);
        break;
      default:
        console.log('I like React');
        break;
    }
  };
  const countTotalFeedback = () => goodEl + neutralEl + badEl;
  const countPositiveFeedbackPercentage = () => {
    const countTotalFeed = countTotalFeedback();

    return Math.round((goodEl / countTotalFeed) * 100);
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={{ good: goodEl, neutral: neutralEl, bad: badEl }}
        onLeaveFeedback={onLeaveFeedback}
      />
      <h1>Statistics</h1>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={goodEl}
          neutral={neutralEl}
          bad={badEl}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification title={'There is no feedback'} />
      )}
    </Section>
  );
};

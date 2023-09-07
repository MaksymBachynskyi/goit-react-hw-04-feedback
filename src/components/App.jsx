import { Component } from 'react';
import { Statistics } from './statistics/statistics';
import { Section } from './section/section';
import { FeedbackOptions } from './feedback/feedback.jsx';
import { Notification } from 'components/notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = targetKey => {
    this.setState(prevState => {
      return {
        [targetKey]: prevState[targetKey] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const optionsValues = Object.values(this.state);
    return optionsValues.reduce((acc, item) => item + acc);
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return Math.round((good / total) * 100);
  };
  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h1>Statistics</h1>
        {totalFeedback ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </Section>
    );
  }
}

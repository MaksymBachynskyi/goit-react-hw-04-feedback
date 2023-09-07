import { StyledBtn, WraperBtns } from './feedback.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);

  return (
    <WraperBtns>
      {optionsKeys.map(item => {
        return (
          <StyledBtn
            key={item}
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </StyledBtn>
        );
      })}
    </WraperBtns>
  );
};

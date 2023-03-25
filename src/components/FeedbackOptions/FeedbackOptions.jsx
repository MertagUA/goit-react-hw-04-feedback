import PropTypes from 'prop-types';
import shortid from 'shortid';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import { Button, FeedbackDiv } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackDiv>
      {options.map(option => (
        <Button
          type="button"
          key={shortid.generate()}
          onClick={() => onLeaveFeedback(option)}
        >
          {capitalizeFirstLetter(option)}
        </Button>
      ))}
    </FeedbackDiv>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

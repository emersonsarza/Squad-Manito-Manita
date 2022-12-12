import { FunctionComponent, useState } from 'react';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import Input from '../Input';

import {
  Completed,
  Container,
  InputContainer,
  NextButton,
  ProgressCounter,
  Question,
  RequiredIndicator,
} from './Question.styles';
import { InputProps } from '../Input/Input';

interface QuestionProps extends InputProps {
  question: string;
  required?: boolean;
  onNext?: (nextStep: number, answer: string) => void;
  validate?: boolean;
  validateFn?: (answer: string) => Promise<boolean>;
}

const QuestionComponent: FunctionComponent<QuestionProps> = ({
  question = '',
  stepsCompleted = 1,
  maxSteps = 1,
  onNext,
  required,
  validate,
  validateFn,
}) => {
  const displayedStepCompleted =
    stepsCompleted >= maxSteps ? maxSteps : stepsCompleted + 1;
  const done = stepsCompleted === maxSteps;

  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);

  const handleNext = async () => {
    if (required && answer === '') {
      return setError(true);
    }
    if (validate && (await validateFn?.(answer)) === false) {
      return setError(true);
    }
    if (stepsCompleted < maxSteps) {
      onNext?.(displayedStepCompleted, answer);
      setAnswer('');
    }
  };

  const handleOnChange = (value: string) => {
    setAnswer(value);
    if (error) {
      setError(false);
    }
  };

  return (
    <Container>
      <Question>
        {done ? 'All Done' : question}
        {required ? <RequiredIndicator>*</RequiredIndicator> : null}
      </Question>
      <InputContainer>
        <Input
          disabled={done}
          error={error}
          withProgressBar
          stepsCompleted={stepsCompleted}
          maxSteps={maxSteps}
          onChange={handleOnChange}
        />
        <Completed done={done} />
      </InputContainer>
      <ProgressCounter>{`${displayedStepCompleted} of ${maxSteps}`}</ProgressCounter>
      <NextButton onClick={handleNext}>
        <NavigateNextRoundedIcon fontSize='large' />
      </NextButton>
    </Container>
  );
};

export default QuestionComponent;

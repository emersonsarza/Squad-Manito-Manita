import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import ProgressBar from '../ProgressBar';
import { ProgressBarProps } from '../ProgressBar/ProgressBar';

import { InputContainer, StyledInput } from './Input.styles';

export interface InputProps extends Partial<ProgressBarProps> {
  onChange?: (value: string) => void;
  withProgressBar?: boolean;
  error?: boolean;
  disabled?: boolean;
}

const Input: FunctionComponent<InputProps> = ({
  onChange,
  withProgressBar,
  stepsCompleted,
  maxSteps,
  error,
  disabled,
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onChange?.(value.trim());
    },
    [onChange]
  );

  const autoFocus = useCallback(
    (e: HTMLInputElement) => {
      if (error && e) {
        e.focus();
      }
    },
    [error]
  );

  return (
    <InputContainer>
      <StyledInput
        key={stepsCompleted}
        onChange={handleChange}
        error={error}
        disabled={disabled}
        autoFocus
        ref={autoFocus}
      />
      {withProgressBar ? (
        <ProgressBar
          stepsCompleted={stepsCompleted ?? 1}
          maxSteps={maxSteps ?? 1}
        />
      ) : null}
    </InputContainer>
  );
};

export default Input;

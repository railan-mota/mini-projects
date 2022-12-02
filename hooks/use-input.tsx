import { useState, useEffect } from 'react';

const useInput = (validateValue: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isCheking, setIsChecking] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouched && !isCheking;

  useEffect(() => {
    if (!isTouched) {
      return;
    }

    if (enteredValue === '') {
      setIsTouched(false);
    }

    const validation = setTimeout(() => {
      setIsChecking(false);
    }, 500);

    return () => {
      clearInterval(validation);
      setIsChecking(true);
    };
  }, [enteredValue, isTouched]);

  const valueInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!isTouched) {
      setIsTouched(true);
    }
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    valueInputChangeHandler,
    reset,
  };
};

export default useInput;

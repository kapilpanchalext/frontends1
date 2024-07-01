import { useState } from "react";

type Props = {
    defaultValue: string
    validationFunction: (value: string) => boolean;
}

const useInput = ({defaultValue, validationFunction}: Props) => {
    const [enteredValue, setEnteredValue] = useState<string>(defaultValue);
    const [didEdit, setDidEdit] = useState<boolean>(false);

    const valueIsValid = validationFunction(enteredValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
        setDidEdit(false);
      }
  
      const handleInputBlur = () => {
          setDidEdit(true);
      }

      return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
      };
}

export default useInput;
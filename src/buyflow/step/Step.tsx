import React, { useEffect, useState } from 'react'
import { Steps } from '../Buyflow.types';
import { Container, Error, Label, Input, InputWrapper, Button } from './Step.styled';
import { validateInput } from './Step.utils';

interface StepProps {
  label: Steps;
  defaultValue: string | number;
  type: string;
  handleChange: (field: Steps, value: any) => void
}

const Step: React.FC<StepProps> = ({
    label,
    defaultValue,
    type,
    handleChange
}) => {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState("");
    const [disableNextButton, setDisableNextButton] = useState(true);

    useEffect(() => {
        setValue(defaultValue);
        setDisableNextButton(label !== Steps.age);
    }, [label]);

    const validateData = (input: string | number) => {
      const isValidData = validateInput(label, input);
      const errorMessage = !isValidData ? `Please enter a valid ${label}` : "";
      setDisableNextButton(!isValidData);
      setError(errorMessage);
    }

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventValue = e.target.value
        const input = type === "number" ? Number(eventValue) : eventValue;
        setValue(input);
        validateData(input);
    }

    const handleNextClick = () => {
      if(!error){
        handleChange(label, value)
      }
    }

  return (
    <Container>
        <InputWrapper>
      <Label>{label}:</Label>
        <Input
          type={type}
          onChange={onValueChange}
          value={value}
        />
        </InputWrapper>
        <Error>{error}</Error>
      <Button onClick={handleNextClick} disabled={disableNextButton}>Next</Button>
    </Container>
  )
}

export default Step;

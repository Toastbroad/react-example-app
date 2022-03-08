import React, { useEffect, useState } from 'react'
import { Steps } from '../Buyflow.types';

interface StepProps {
  label: Steps;
  defaultValue: string | number;
  type: string;
  handleChange: (field: string, value: any) => void
}

const Step: React.FC<StepProps> = ({
    label,
    defaultValue,
    type,
    handleChange
}) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [label]);

    const onValueChange = (e:any) => {
        const input = type === "number" ? Number(e.target.value) : e.target.value;
        setValue(input);
    }

  return (
    <>
      <div>
      {label}:{' '}
        <input
          type={type}
          onChange={onValueChange}
          value={value}
        ></input>
      </div>
      <button onClick={() => handleChange(label, value)}>Next</button>
    </>
  )
}

export default Step;

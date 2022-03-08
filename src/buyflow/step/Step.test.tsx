import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Steps } from '../Buyflow.types'
import Step from './Step'

describe('Step component', () => {
  it('should render correctly', () => {
      const props = {
        label: Steps.name,
        defaultValue: "",
        type: "string",
        handleChange: jest.fn(),
      }
    const { getByTestId } = render(<Step {...props} />);

    const inputElement = getByTestId(props.label);
    const nextButtonElement = getByTestId("next");

    expect(inputElement).toBeInTheDocument();
    expect(nextButtonElement).toBeInTheDocument();
  });

  it('should call handleChange when click on next button', () => {
    const props = {
      label: Steps.name,
      defaultValue: "",
      type: "string",
      handleChange: jest.fn(),
    }
  const { getByTestId } = render(<Step {...props} />);

  const inputElement = getByTestId(props.label);
  const nextButtonElement = getByTestId("next");

  expect(inputElement).toBeInTheDocument();
  expect(nextButtonElement).toBeInTheDocument();
  fireEvent.change(inputElement, {target: {value: 'aaaa'}});
    fireEvent.click(nextButtonElement);
    expect(props.handleChange).toBeCalled();
});
})


import React, { useState } from 'react'
import { DEFAULT_FIRST_STEP, DEFAULT_FORM_DATA } from './Buyflow.data'
import { BuyflowProps, FormDataType, PRODUCT_IDS_TO_NAMES, Steps } from './Buyflow.types'
import Step from './step/Step'
import SummaryStep from './SummaryStep'


const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState<Steps>(DEFAULT_FIRST_STEP);
  const [collectedData, updateCollectedData] = useState<FormDataType>(DEFAULT_FORM_DATA);

  const getStepCallback = (nextStep: Steps) => (field: string, value: any) => {
    updateCollectedData({ ...collectedData, [field]: value });
    setStep(nextStep);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {
        (currentStep === Steps.name && (
          <Step label={currentStep} defaultValue={collectedData[currentStep]} type="string" handleChange={getStepCallback(Steps.email)} />
        )) || (currentStep === Steps.email && (
          <Step label={currentStep} defaultValue={collectedData[currentStep]} type="string" handleChange={getStepCallback(Steps.age)} />)) ||
        (currentStep === Steps.age && (
          <Step label={currentStep} defaultValue={collectedData[currentStep]} type="number" handleChange={getStepCallback(Steps.summary)} />
        )) ||
        (currentStep === Steps.summary && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow;
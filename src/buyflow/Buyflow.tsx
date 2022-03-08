import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DEFAULT_FORM_DATA, fieldType, getPageTitle, PRODUCT_IDS_TO_FIRST_STEP, stepStateMap } from './Buyflow.data'
import { BuyFlowRouteParams, FormDataType, Steps } from './Buyflow.types'
import Step from './step/Step'
import SummaryStep from './summarystep/SummaryStep'


const Buyflow: React.FC = () => {
  const {productId} = useParams<BuyFlowRouteParams>();
  const [currentStep, setStep] = useState<Steps>(PRODUCT_IDS_TO_FIRST_STEP[productId]);
  const [collectedData, updateCollectedData] = useState<FormDataType>(DEFAULT_FORM_DATA);

  const buyoutTitle = getPageTitle(productId);

  const getStepCallback  = (field: Steps, value: any) => {
    updateCollectedData({ ...collectedData, [field]: value });
    setStep(stepStateMap[field].next);
  };

  return (
    <>
      <h4>{buyoutTitle}</h4>
      {
        (currentStep === Steps.summary ? (
          <SummaryStep collectedData={collectedData} />
        ) : (
          <Step label={currentStep} defaultValue={collectedData[currentStep]} type={fieldType[currentStep]} handleChange={getStepCallback} />
        ))}
    </>
  )
}

export default Buyflow;
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BuyFlowRouteParams, FormDataType } from '../Buyflow.types';

interface SummaryStepProps {
  collectedData: FormDataType;
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const {productId} = useParams<BuyFlowRouteParams>();
  const displayItems = Object.keys(props.collectedData);
  
  return (
    <>
    {displayItems.map(item => (
      props.collectedData[item] && <div>{item}: {props.collectedData[item]}</div>
    ))}
      <div>
        <Link to={`/purchased=${productId}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep

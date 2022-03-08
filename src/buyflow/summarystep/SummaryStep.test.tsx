import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { FormDataType } from '../Buyflow.types'
import SummaryStep from './SummaryStep'

describe('SummaryStep component', () => {
  it('should render correctly', () => {
      const collectedData: FormDataType = {
          name: "test",
          email: "test@test.com",
          age: 20
      }
    const { getByText } = render(<MemoryRouter initialEntries={['buy/developer_insurance']}>
    <Route path='buy/:productId'>
    <SummaryStep collectedData={collectedData} />
    </Route>
  </MemoryRouter>);

    const PurchaseButtonElement = getByText(/Purchase/i);

    expect(PurchaseButtonElement).toBeInTheDocument();
  });
})


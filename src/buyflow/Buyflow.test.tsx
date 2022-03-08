import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import Buyflow from './Buyflow'
import { ProductIds } from './Buyflow.types'
import { PRODUCT_IDS_TO_NAMES } from './Buyflow.data'

describe('Buyflow component', () => {
  it('renders developer insurace title correctly', () => {
    const { getByText } = render(<MemoryRouter initialEntries={['buy/developer_insurance']}>
    <Route path='buy/:productId'>
    <Buyflow />
    </Route>
  </MemoryRouter>);

    const pageTitleElement = getByText(`Buying ${PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}`);

    expect(pageTitleElement).toBeInTheDocument();
  });

  it('renders first developer insurace step correctly', () => {
    const { getByText, queryByText } = render(<MemoryRouter initialEntries={['buy/developer_insurance']}>
    <Route path='buy/:productId'>
    <Buyflow />
    </Route>
  </MemoryRouter>);

    const nameElement = queryByText(/name/i);
    const emailElement = getByText(/email/i);
    const nextButtonElement = getByText(/next/i);

    expect(nameElement).toBeNull();
    expect(emailElement).toBeInTheDocument();
    expect(nextButtonElement).toBeInTheDocument();
  });

  it('renders designer insurace title correctly', () => {
    const { getByText } = render(<MemoryRouter initialEntries={['buy/designer_insurance']}>
    <Route path='buy/:productId'>
    <Buyflow />
    </Route>
  </MemoryRouter>);

    const pageTitleElement = getByText(`Buying ${PRODUCT_IDS_TO_NAMES[ProductIds.designerIns]}`);

    expect(pageTitleElement).toBeInTheDocument();
  });

  it('renders first designer insurace step correctly', () => {
    const { getByText } = render(<MemoryRouter initialEntries={['buy/designer_insurance']}>
    <Route path='buy/:productId'>
    <Buyflow />
    </Route>
  </MemoryRouter>);

    const nameElement = getByText(/name/i);
    const nextButtonElement = getByText(/next/i);

    expect(nameElement).toBeInTheDocument();
    expect(nextButtonElement).toBeInTheDocument();
  });
})


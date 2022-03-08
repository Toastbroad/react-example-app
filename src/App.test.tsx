import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<App />)

    const pageTitleElement = getByText(/Welcome to Getsafe's Insurance/i)
    const developerLinkElement = getByText(/Get started with developer insurance!/i)
    const designerLinkElement = getByText(/Get started with designer insurance!/i)

    expect(pageTitleElement).toBeInTheDocument()
    expect(developerLinkElement).toBeInTheDocument()
    expect(designerLinkElement).toBeInTheDocument()
  })
})


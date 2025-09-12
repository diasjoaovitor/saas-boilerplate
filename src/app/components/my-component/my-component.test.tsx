import { render, screen } from '@testing-library/react'

import { MyComponent } from '.'

describe('<MyComponent />', () => {
  it('should render component', () => {
    render(<MyComponent />)
    expect(screen.getByText('MyComponent')).toBeInTheDocument()
  })
})

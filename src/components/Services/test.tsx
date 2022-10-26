import { render, screen } from '@testing-library/react'

import Services from '.'

describe('<Services />', () => {
  it('should render the heading', () => {
    const { container } = render(<Services />)

    expect(
      screen.getByRole('heading', { name: /Services/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

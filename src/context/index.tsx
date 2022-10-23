import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export type AllProvidersProps = {
  children: React.ReactNode
}

const AllProviders = ({ children }: AllProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
export default AllProviders

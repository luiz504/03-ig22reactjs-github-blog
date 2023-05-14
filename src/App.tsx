import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'

import { queryclient } from './libs/queryclient'

import { Router } from './routes'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { UserContextProvider } from './contexts/user'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <QueryClientProvider client={queryclient}>
          <UserContextProvider>
            <Router />
          </UserContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

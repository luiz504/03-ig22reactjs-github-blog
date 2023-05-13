import { QueryClient } from 'react-query'

const queryclient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 50 * 5 } },
})

export { queryclient }

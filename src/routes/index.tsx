import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '~/layouts/DefaultLayout'
import { Home } from '~/pages/Home'
import { Issue } from '~/pages/Issue'

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:issueNumber" element={<Issue />} />
      </Route>
    </Routes>
  )
}

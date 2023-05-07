import { Outlet } from 'react-router-dom'

import { Header } from '~/components/Header'
import { ContainerDefaultLayout, Content } from './styles'

export const DefaultLayout = () => (
  <ContainerDefaultLayout>
    <Header />
    <Content>
      <Outlet />
    </Content>
  </ContainerDefaultLayout>
)

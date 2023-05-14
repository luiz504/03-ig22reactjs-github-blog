import { CardProfile } from './components/CardProfile'
import { IssuesList } from './components/IssuesList'
import { SearchSection } from './components/SearchSection'

import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <CardProfile />

      <SearchSection />

      <IssuesList />
    </HomeContainer>
  )
}

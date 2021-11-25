import { StyledLayout } from '../components/Layout/Layout.styled'
import Header from '../components/Header/Header'
import List from '../components/List/List'

const Home = () => {
  /**
   * il componente pagina Home importa uno styled-component StyledLayout
   * che diventa il wrapper dei componenti della pagina Header e List
   */
  return (
    <StyledLayout>
      <Header />
      <List />
    </StyledLayout>
  )
}

export default Home

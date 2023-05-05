import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyles, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Container>
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </>
  )
}

export default App

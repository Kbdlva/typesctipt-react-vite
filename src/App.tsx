import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/shoppingCartContext'
import routesConfig from './routes/routesConfig'
import './App.css';

function App() {

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App

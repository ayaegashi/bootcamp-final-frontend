import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import Recipe from './containers/Recipe'
import NavBar from './components/NavBar/NavBar'

import History from './containers/History'
import Favorites from './containers/Favorites'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <div className="App">
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Switch>
              <Route path="/register">
                <Register setIsLoggedIn={setIsLoggedIn} />
              </Route>
              <Route path="/login">
                <Login setIsLoggedIn={setIsLoggedIn} />
              </Route>
              <Route path="/recipe/:id" component={Recipe} />

              <Route path="/history" component = {History} />
              <Route path="/favorites" component = {Favorites} />

              <Route path="/" component={Home} />
            </Switch>
          </div>
        </ApolloProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App

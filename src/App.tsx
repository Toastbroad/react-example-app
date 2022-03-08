import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buyflow from './buyflow/Buyflow';
import { AppWrapper, AppHeader, AppLogo, Title, LinkWrapper, StartButton } from "./App.styled";

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
        </AppHeader>
        <Switch>
          <Route path="/buy/:productId">
            <Buyflow />
          </Route>
          <Route path="/">
            <Title>Welcome to Getsafe's Insurance</Title>
            <LinkWrapper>
              <StartButton to="/buy/developer_insurance">Get started with developer insurance!</StartButton>
              <StartButton to="/buy/designer_insurance">Get started with designer insurance!</StartButton>
            </LinkWrapper>
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  )
}

export default App

import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow from './buyflow/Buyflow';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/:productId">
            <Buyflow />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Insurance</p>
            <Link to="/buy/developer_insurance">Get started with developer insurance!</Link>
            <Link to="/buy/designer_insurance">Get started with designer insurance!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

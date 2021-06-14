import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import Header from './components/Header'
import CustomerScreen from './screens/CustomerScreen'
import CustomerEditScreen from './screens/CustomerEditScreen'
import AddcustomerScreen from './screens/AddcustomerScreen'
import DetailCustomerScreen from './screens/DetailCustomerScreen'
import PDFScreen from './screens/PDFScreen'

const App = () => {
  return (
    <Router basename="/">
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" exact component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/customer" exact component={CustomerScreen} />
            <Route path="/customer/add" component={AddcustomerScreen} />
            <Route path="/customer/:id/edit" component={CustomerEditScreen} />
            <Route path="/customer/:id/pdf" component={PDFScreen} />
            <Route path="/customer/:id" component={DetailCustomerScreen} />
          </Switch>
        </Container>
      </main>
    </Router>
  )
}

export default App

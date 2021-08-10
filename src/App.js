import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomer from './components/ListCustomer';
import CustomerCreate from './components/CustomerCreate'


function App() {
  return (
    <div>
    <Router>
          <HeaderComponent />
          <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListCustomer}></Route>
                          <Route path = "/add-customer/:id" component = {CustomerCreate}></Route>
                    </Switch>
                </div>
          <FooterComponent />
    </Router>
</div>
  );
}

export default App;

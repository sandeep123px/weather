import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import HomePage from './components/Homepage'
import {Provider} from 'react-redux'
import store from './components/Redux/store'
import Sunday from './components/sunday'
import Monday from './components/Monday'
import Tuesday from './components/tuesday'
import Wednesday from './components/wednesday'
import Thursday from './components/thursday'
import Friday from './components/friday'
import Saturday from './components/saturday'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
    <Router>
      <Switch>
   <Route exact path="/" component={HomePage} />
   
  <Route  path="/sunday" component={props=>(
    <Sunday {...props}/>
  )} />

  <Route  path="/monday" component={props=>(
    <Monday {...props}/>
  )} />

  <Route  path="/tuesday" component={props=>(
    <Tuesday {...props}/>
  )} />

  <Route  path="/wednesday" component={props=>(
    <Wednesday {...props}/>
  )} />

  <Route  path="/thursday" component={props=>(
    <Thursday {...props}/>
  )} />


<Route  path="/friday" component={props=>(
    <Friday {...props}/>
  )} />

  <Route  path="/saturday" component={props=>(
    <Saturday {...props}/>
  )} />

  
  </Switch>
    </Router>
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

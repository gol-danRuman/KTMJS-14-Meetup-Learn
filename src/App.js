import React, {Component} from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom'

import './App.css';

import WithOutHook from './components/react-hooks/withoutHook'
import WithHook from './components/react-hooks/withHook'


const FourOhFour = () => <h1>404 error</h1>;


const Application = () =>(
  
  <BrowserRouter>
    <div className="app">
      <Switch>
        
        <Route exact path="/nohooks" component={()=> <WithOutHook name={'Rumancha using no Hook'}/>}/>
        <Route exact path="/hooks" component={()=> <WithHook name={'Rumancha using Hook'}/>}/>
        {/* <Route exact path="/sidebar" component={SideBar}/> */}
        {/* <Route exact path="/redux" component={Todo}/> */}
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </BrowserRouter>
);

 class App extends Component {

  render(){
    return(
      <Application />
    )
  };
}

export default App;

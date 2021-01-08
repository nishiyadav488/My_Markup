import React from 'react'
import Admin from './Components/Admin_Pages/Components/Homepage/Welcome.js'
import User from './Components/User_Pages/Components/Main_page/Main.js'
import {BrowserRouter,Route} from 'react-router-dom'

function App(){
  return (
    <div className="App">
	   <BrowserRouter>
	  
	      <Route exact path='/' component={User}/>
	      <Route exact path='/Admin' component={Admin}/>
	      
	   </BrowserRouter>
    </div>
  );
}

export default App;

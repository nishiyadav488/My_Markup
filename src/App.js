import React from 'react'
import Admin from './Components/Admin_Pages/Components/Homepage/Welcome.js'
import User from './Components/User_Pages/Components/Main_page/Main.js'
import {BrowserRouter,Route} from 'react-router-dom'
import Luxury from './Components/User_Pages/Components/Luxury_deals/Luxury.js'
import Bhopal from './Components/User_Pages/Components/City_pages/Bhopal.js'
import './App.css'
function App(){
  return (
    <div className="App">
	   <BrowserRouter>
	  
	      <Route exact path='/' component={User}/>
	      <Route exact path='/Admin' component={Admin}/>
	      <Route exact path ='/luxury_deals' component={Luxury}/>
	      <Route exact path = '/Bhopal' component={Bhopal}/>
	   </BrowserRouter>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import Login1 from './Login1.js';
import Register1 from './Register1.js';
import './Welcome.css'

class Welcome extends Component{

	constructor(props){
		super(props);
		this.state = {
			call_login : false,
			call_register : false
		};		
	}

	login_click = (props) => {
		this.setState({
			call_login : true
		})
		console.log(this.state.call_login)

	}

	register_click = (props) => {
		this.setState({
			call_register : true
		})
		console.log(this.state.call_register)
	} 

	render(){

		

		let setter = (this.state.call_login || this.state.call_register) ?   "none" : "block" 
		let reg = this.state.call_register && <Register1 counter={setter} style ={{overflow : "hidden"}}/> 
		let log = this.state.call_login && <Login1 counter={setter} style ={{overflow : "hidden"}}/> 
		
		return(
			<div className="Welcome">
			<div style ={{display : setter, overflow:"hidden"}} id="main">

				<h1>Welcome!!</h1>
				<div id="parent" >
					<div id="login_div" className="welcome">					
						<h3>Login</h3>	<br/>
						Username<input type="text" name="uname"/><br/>
						Password<input type="password" name="password"/><br/>
						<input type="submit" name="submit" value="Login"  onClick={this.login_click}/>
						
					</div><br/>

					<div id="register_div" className="welcome">
						<h3>Register</h3><br/>
						Username<input type="text" name="fullname"/><br/>
						Email<input type="email" name="email"/><br/>
						<input type="submit" name="submit" value="Register" id="register" onClick={this.register_click}/>
										
					</div>
				</div>
				
			</div>
			{log}
			{reg}
			</div>
		);
	}
}

export default Welcome;
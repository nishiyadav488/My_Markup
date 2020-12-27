import React, {Component} from 'react';
import Login1 from './Login1.js';
import Register1 from './Register1.js';
import './Welcome.css'
import Mydata from './Mydata.js';

class Welcome extends Component{

	constructor(props){
		super(props);
		this.state = {
			call_login 	: false,
			call_register : false,
			username 	: null,
			password 	: null,
			error 		: null,
			data 		: null
		};		
		this.child = React.createRef();
	}

	login_click = (props) => {		
		let result = null;
		result = this.click_Handler();
		if(result != null){		
			this.setState({
				call_login : true,
				data : result
			})
		}
		else{
			this.setState({
				error : "WRONG username or password"
			})
			alert("WRONG username or password")
		}
	}

	register_click = (props) => {
		this.setState({
			call_register : true
		})
	} 

	click_Handler = (props) => {
		console.log("child calling");
		let result = this.child.current.login(this.state.username,this.state.pass)
		return result;
	}

	nameHandler = (e) => {
		e.preventDefault();
		let new_name = e.target.value;
		this.setState({
			username: new_name
		})
		console.log(new_name)
		
	}

	passHandler = (e) => {
		e.preventDefault();
		let new_pass = e.target.value
		this.setState({
			pass:new_pass
		})
		console.log(new_pass)
	}

	render(){

		let setter = (this.state.call_login || this.state.call_register) ?   "none" : "block" 
		let reg = this.state.call_register && <Register1 counter={setter} style ={{overflow : "hidden"}}/> 
		let log = this.state.call_login && <Login1 counter={setter} style ={{overflow : "hidden"}} data = {this.state.data}/> 
		

		return(
			<div className="Welcome">

			<div style ={{display : setter, overflow:"hidden"}} id="main">
				<Mydata ref ={this.child}/>
				<h1>Welcome!!</h1>
				<div id="parent" >
					<div id="login_div" className="welcome">					
						<h3>Login</h3>	<br/>
						{this.state.error}<br/>
						Username<input type="text" name="username" value={this.state.username} onChange={this.nameHandler.bind(this)}/><br/>
						Password<input type="text" name="pass" value={this.state.pass} onChange={this.passHandler.bind(this)}/><br/>
						<input type="submit" name="submit" value="Login"  onClick={this.login_click.bind(this)}/>
						
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
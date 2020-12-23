import React,{Component} from 'react';
import './Welcome.css'
import Register3 from './Register3.js';

class Register2 extends Component{

	constructor(props){
		super(props);
		this.state = {
			call_save : false,
		};		
	}

	saveHandler = (props) => {
		this.setState({
			call_save : true
		})		
	}

	
	render(){
		let setter = this.state.call_save  ?   "none" : "block"
		let show5 = this.props.counter
		let reg3 = this.state.call_save && <Register3 counter={setter} style ={{overflow : "hidden"}}/> 
		return(
			<div>
				<div id="Login1_div" style ={{display : setter  }} >
					<h1>set password</h1><br/>
					Password : <input type="password" name="new_password"/><br/>
					Confirm Password : <input type="password" name="new_password2"/><br/>
					<button onClick ={this.saveHandler.bind(this)}>Register</button>
				</div>
				{reg3}
				</div>
		);
	}
}

export default Register2;
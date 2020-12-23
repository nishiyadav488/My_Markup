import React,{Component} from 'react';
import './Welcome.css'
import Register2 from './Register2.js';

class Register1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			next : false
		};		
	}

	nextHandler = (props) => {
		this.setState({
			next : true
		})
	}
	render(){
		let show1 = this.props.counter
		let reg2 = this.state.next && <Register2 counter={this.state.next} style ={{overflow : "hidden"}}/> 
		let setter = this.state.next  ?   "none" : "block"
		return(
			<div>
			
			<div id="Login1_div" style ={{display : setter }}> 
				Hello new user<br/>
				Age<input type="date" name="birth"/><br/>
				State<input type="text" name="state"/><br/>
				Mobile<input type="text" name="mob"/><br/>
				<input type="submit" name="submit_r1" value="Next" onClick={this.nextHandler}/>

			</div>
			{reg2}
			</div>
		);
	}
}

export default Register1;
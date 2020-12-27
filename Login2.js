import React,{Component} from 'react';
import './Welcome.css'

class Login2 extends Component{
	constructor(props){
		super(props);
		this.state = {
			data : null
		}
	}

	componentWillMount(props) {
		this.setState({
			data : this.props.data
		})
	}

	render(){
		console.log(this.state.data)
		
		return(
				<div id="Login1_div" style ={{display : "block" }} >
				<h1>Your details</h1><br/>
				
				Name : {this.state.data.user}<br/>
				State : {this.state.data.state}
			
			</div>

		);
	}
}

export default Login2;


import React,{Component} from 'react';

class Mydata extends Component{

	constructor(props){
		super(props);
		this.state = {
			user : 'nishi',
			password : 1234
		}
	}

	login = (username,pass) => {
		if(username == this.state.user){
			console.log("matched");
		}
		if(pass == this.state.password){
			console.log("matched");
		}

	}

	render(){
		return();
	}
}

export default Mydata;
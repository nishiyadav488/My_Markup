import React,{Component} from 'react';

class Mydata extends Component{

	constructor(props){
		super(props);
		const my_list = [
			{	
				id : 1,
				user : 'nishi',
				password : '1234',
				state : 'odisha',
				country : 'india'
			},
			{
				id : 2,	
				user : 'neha',
				password : '4321',
				state : 'M.P',
				country : 'india'
			}
		]

		this.state = {
			list  : my_list,
		}
		this.login = this.login.bind(this)
	}

	login = (username,pass) => {
		let match = null;

		this.state.list.map((value,index) => {
			console.log(value);
			if(username === value.user && pass === value.password){
				match = value;
			}
		} )
		
		return match;
	}

	render(){
		return(<div/>);
	}
}

export default Mydata;
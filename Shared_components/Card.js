import React from 'react'

const Card = (props) => { 

	return(
		<div className="mycard">
			<div className="myimage"> <img src={props.img} /> </div>
			<div className="content">
				<div className="head">{props.head}</div>
				<div className="locai">{props.location}</div>
				<br/>
				<div className="text">{props.text}</div>
				
			</div>
			<div className="rating">
				<div>Ratings</div><br/>
				<div>Rs. {props.price}/-</div><br/>
				<button>Check_it</button>
			</div>
		</div>
	)
}

export default Card;
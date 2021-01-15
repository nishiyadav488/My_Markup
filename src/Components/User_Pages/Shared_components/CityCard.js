import React from 'react'

const Card = (props) => { 

	return(
		<div className="mycitycard">
			<div className="content">
				<div className="head">{props.head}</div>
				<div className="locai">{props.location}</div>
				
			</div>
			<div className="myimage"> <img src={props.img} /> </div>
			<div className="mytext">{props.text}</div>
			<div className="rating">
				<div>Ratings</div>
				<div>Rs. {props.price}/-</div>
				<button>Check_it</button>
			</div>
		</div>
	)
}

export default Card;
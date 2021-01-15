import React from 'react'

const SliderCard = (props) => {

	return (
		<div id="ratecard">
			<div id="card_title">{props.heading}</div>
			<div id="card_locai">{props.locai}</div>
			<img src={props.image} />
			<div>RATINGS : {props.rating}</div>
			<div>PRICE : {props.price}</div>
			<button>Check_it</button>
		</div>
	)
}

export default SliderCard;
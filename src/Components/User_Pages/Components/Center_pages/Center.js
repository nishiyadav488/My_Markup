import React from 'react'
import Camp from './../../assets/camp.jpeg'
import Stays from './../../assets/stays.jpeg'
import Food from './../../assets/food.jpeg'
import './Center.css'

const Center = () => {
	return(
		<div>
			<div className="perfect">
				<div id="textid1">Find your perfect destinations</div>
			
				<div className="imgid1">
					<img src ={Camp}/>
					<div className="textclass">Adventure</div>
				</div>
				<div className="imgid1">
					<img src ={Stays}/>
					<div className="textclass">Hotel Deals</div>
				</div>
				<div className="imgid1">
					<img src ={Food}/>
					<div className="textclass">Cusine</div>
				</div>
			</div>
		</div>
	)
}

export default Center;
import React from 'react'
import Pilgrimage from './../../assets/pilgrimage.jpeg'
import Tour from './../../assets/tour.jpeg'
import Culture from './../../assets/culture.jpeg'
import Cusine from './../../assets/cusine.jpeg'
import Fauna from './../../assets/fauna.jpeg'
import Hotels from './../../assets/hotels.jpeg'
import './Top2.css' 
import data from './../../data.json'


const Top2 = () => {

	const head = data.top2.heading
	const title = data.top2.title

	return(
		<div id="divv">
			<div className ="headd"><br/>
					{head}
			</div>
			<div id="about">
				<ul>
					<li><img src = {Pilgrimage}/></li>
					<li><img src = {Tour}/></li>
					<li><img src = {Culture}/></li>
					<li><img src = {Cusine}/></li>
					<li><img src = {Fauna}/></li>
					<li><img src = {Hotels}/></li>
				</ul>
				<div id="img1">{title.img1}</div>
				<div id="img2">{title.img2}</div>
				<div id="img3">{title.img3}</div>
				<div id="img4">{title.img4}</div>
				<div id="img5">{title.img5}</div>
				<div id="img6">{title.img6}</div>
			</div>
		</div>
	)
}

export default Top2;
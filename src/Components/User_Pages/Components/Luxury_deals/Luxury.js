import React from 'react'
import './Luxury.css'
import Card from './../../Shared_components/Card.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/wallpaper4.jpg'
import Tajkiran from './../../assets/Tajkiran.jpeg'
import Mariot from './../../assets/mariot.jpeg'
import Vijan from './../../assets/vijan.jpeg'
import Sayaji from './../../assets/sayaji.jpeg'
import Radisson from './../../assets/radisson.jpeg'
import Jehan from './../../assets/jehan.jpeg'
import data from './../../data.json'

const Luxury = () => {

	const title = data.luxury.title
	const hotel1 = data.luxury.image1
	const hotel2 = data.luxury.image2
	const hotel3 = data.luxury.image3
	const hotel4 = data.luxury.image4
	const hotel5 = data.luxury.image5
	const hotel6 = data.luxury.image6

	return(
		<div id="luxury">
			<div id="image">
				<img src={wallpaper}/>
				<div id="title_text">
					{title}
				</div>
			</div>
			<div id ="whole">
			<div id="content">
				<Card img={Tajkiran} head={hotel1.head} location={hotel1.location} text={hotel1.about}price={hotel1.price}/><br/>
				<Card img={Mariot} head={hotel2.head} location={hotel2.location} text={hotel2.about}price={hotel2.price}/><br/>
				<Card img={Vijan} head={hotel3.head} location={hotel3.location} text={hotel3.about}price={hotel3.price}/><br/>
				<Card img={Sayaji} head={hotel4.head} location={hotel4.location} text={hotel4.about}price={hotel4.price}/><br/>
				<Card img={Radisson} head={hotel5.head} location={hotel5.location} text={hotel5.about}price={hotel5.price}/><br/>
				<Card img={Jehan} head={hotel6.head} location={hotel6.location} text={hotel6.about}price={hotel6.price}/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Luxury;
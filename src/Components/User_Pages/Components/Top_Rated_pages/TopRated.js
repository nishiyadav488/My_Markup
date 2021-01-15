import React, {useState} from 'react'
import SliderCard from './../../Shared_components/SliderCard.js'
import lake from './../../assets/Bhopalake.jpg'
import sanchi from './../../assets/sanchi.jpg'
import gijari from './../../assets/gijari.jpg'
import kujrao from './../../assets/khujrao.jpg'
import dhoodhdhara from './../../assets/dhoodhdhara.JPG'
import mahakaal from './../../assets/mahakaal.jpg'
import kandariya from './../../assets/kandariya.jpeg'
import jahaz from './../../assets/jahaz.jpeg'
import './TopRated.css'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TopRated = () => {

	return (
		<div id="rate">
			<div id="top_destination">
			Top Attractions
			</div>
			<Carousel interval={null}>
				
				<Carousel.Item >
				<div id="rate_collection">
					<SliderCard image={lake} heading="Bhopal Lake" locai="abcd"rating="xx" price="XXXXX"/>
					<SliderCard image={kujrao} heading="Khajurao Temple" locai="abcd"rating="xx" price="XXXXX"/>
					<SliderCard image={sanchi} heading="Sanchi Stupa" locai="abcd"rating="xx" price="XXXXX"/>
					<SliderCard image={gijari} heading="Gujari Mahal" locai="abcd"rating="xx" price="XXXXX"/>
				</div>
				</Carousel.Item>
				
				
				<Carousel.Item >
				<div id="rate_collection">
					<SliderCard image={dhoodhdhara} heading="Narmada Bank" locai="abcd"rating="xx" price="XXXXX"/>
					<SliderCard image={mahakaal} heading="Mahakaal Temple" locai="abcd"rating="xx" price="XXXXX"/>
					<SliderCard image={kandariya} heading="Kandariya Temple" locai="abcd"rating="xx" price="XXXXX"/>
					<SliderCard image={jahaz} heading="Jahaz Mahal" locai="abcd"rating="xx" price="XXXXX"/>
				</div>
				</Carousel.Item>
				
			</Carousel>
		</div>
	)
}

export default TopRated;
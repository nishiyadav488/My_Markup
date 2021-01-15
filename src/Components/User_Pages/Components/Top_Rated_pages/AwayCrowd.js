import React, {useState} from 'react'
import SliderCard from './../../Shared_components/SliderCard.js'
import patalpani from './../../assets/patalpani.jpeg'
import trek from './../../assets/trek.jpeg'
import bhopalcamp from './../../assets/bhopalcamp.jpeg'
import panna from './../../assets/panna.jpeg'
import panna2 from './../../assets/panna2.jpeg'
import deo from './../../assets/deo.jpeg'
import rosa from './../../assets/rosa.jpeg'
import khaj_camp from './../../assets/khaj_camp.jpeg'
import './TopRated.css'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AwayCrowd = () => {

	return (
		<div id="rate">
			<div id="top_destination">
			Destinaions Away from Crowd
			</div>
			<Carousel interval={null}>
				
				<Carousel.Item >
				<div id="rate_collection">
					<SliderCard image={patalpani} heading="Camping near patalpani" locai="Indore"rating="xx" price="XXXXX"/>
					<SliderCard image={trek} heading="Chidiya Bhadak Waterfall trek" locai="abcd"rating="xx" price="XXXXX"/>
					<SliderCard image={bhopalcamp} heading="Adventure Camping" locai="Bhopal"rating="xx" price="XXXXX"/>
					<SliderCard image={panna} heading="Camping at ken River" locai="Panna"rating="xx" price="XXXXX"/>
				</div>
				</Carousel.Item>
				
				
				<Carousel.Item >
				<div id="rate_collection">
					<SliderCard image={panna2} heading="Dense Forest Camping" locai="Panna, Jabalpur"rating="xx" price="XXXXX"/>
					<SliderCard image={rosa} heading="Rosa Bhandavgarh Meadows" locai="Jabalpur"rating="xx" price="XXXXX"/>
					<SliderCard image={khaj_camp} heading="Camping" locai="Khajurao"rating="xx" price="XXXXX"/>
					<SliderCard image={deo} heading="Deo Bagh" locai="Gwalior"rating="xx" price="XXXXX"/>
				</div>
				</Carousel.Item>
				
			</Carousel>
		</div>
	)
}

export default AwayCrowd;
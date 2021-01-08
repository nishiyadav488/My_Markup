import React, {useState, useEffect} from 'react'
import './Top.css'
import khujrao from './khujrao.jpg'
import lake from './Bhopalake.jpg'
import gujari from './gijari.jpg'
import sanchi from './sanchi.jpg'
import mahakaal from './mahakaal.jpg'
import dhara from './dhoodhdhara.JPG'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './../../data.json'

const Top = ()=>{	
	
		const mytext = data.top.imagetext
		const header = data.top.headerdata

		return(
			<div id="top">
				<header className="header">						
					<div className = "menu" >
						<ul className="navbar">
							<li id="li1">{header[0].title}</li>
							<li id="li2"><a href="#" onclick="#">{header[1].home}</a></li>
							<li id="li3"><a href="#" onclick="#">{header[2].about}</a></li>
							<li id="li4"><a href="#" onclick="#">{header[3].explore}</a></li>
							<li id="li5"><a href="#" onclick="#">{header[4].contact}</a></li>
						</ul>
					</div>
				</header>

				<div className="contain">
					<Carousel>
						<Carousel.Item interval={1000}>
							<img src={khujrao} alt="first slide"/>
							<Carousel.Caption>
								<div className='heading'>{mytext.text1}</div>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img src={lake} alt="2nd slide"/>
							<Carousel.Caption>
								<div className='heading'>{mytext.text2}</div>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img src={gujari} alt="3rd slide"/>
							<Carousel.Caption>
								<div className='heading'>{mytext.text3}</div>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img src={sanchi} alt="4th slide"/>
							<Carousel.Caption>
								<div className='heading'>{mytext.text4}</div>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img src={mahakaal} alt="4th slide"/>
							<Carousel.Caption>
								<div className='heading'>{mytext.text5}</div>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img src={dhara} alt="4th slide"/>
							<Carousel.Caption>
								<div className='heading'>{mytext.text6}</div>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
					
				</div>
				<br/>
				<br/><br/>
			</div>
		)
	
}

export default Top;
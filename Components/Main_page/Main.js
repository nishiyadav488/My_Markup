import React from 'react'
import Top from './../Top_page/Top.js'
import Center from './../Center_pages/Center.js'
import Deals from './../dealoff_page/Deals.js'
import TopRated from './../Top_Rated_pages/TopRated.js'
import AwayCrowd from './../Top_Rated_pages/AwayCrowd.js'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import Footer from './../Footer/Footer.js'

const Main = () => {
	return(
			<div>
				<Top/>
				<Center/>
				<Deals/>
				<TopRated/>
				<br/>
				<AwayCrowd/><br/>
				<Footer/>
			</div>
		)
}

export default Main;


// "top2" : {
	// 	"heading" : "The Heart of India",
	// 	"title" : {
	// 		"img1" : "Pilgrimage",
	// 		"img2" : "Tour",
	// 		"img3" : "Culture",
	// 		"img4" : "Cusine",
	// 		"img5" : "Wildlife",
	// 		"img6" : "Hotels"
	// 	}
	// },

	// "centre2" : {
	// 	"img1" : {
	// 		"title" : "Khajurao Temple",
	// 		"about" : "bchdcb djbchdb bcbd bdcbj bcbjn bdbc"
	// 	},
	// 	"img2" : {
	// 		"title" : "Sanchi Stupa",
	// 		"about" : "bchdcb djbchdb bcbd bdcbj bcbjn bdbc"
	// 	},
	// 	"img3" : {
	// 		"title" : "Lakes",
	// 		"about" : "bchdcb djbchdb bcbd bdcbj bcbjn bdbc"
	// 	},
	// 	"img4" : {
	// 		"title" : "Kanha National Park",
	// 		"about" : "bchdcb djbchdb bcbd bdcbj bcbjn bdbc"
	// 	},
	// 	"img5" : {
	// 		"title" : "Gujari Mahal",
	// 		"about" : "bchdcb djbchdb bcbd bdcbj bcbjn bdbc"
	// 	},
	// 	"img6" : {
	// 		"title" : "Narmada River",
	// 		"about" : "bchdcb djbchdb bcbd bdcbj bcbjn bdbc"
	// 	}

	// },
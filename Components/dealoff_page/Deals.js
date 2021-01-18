import React from 'react'
import Off from './../../assets/off.jpeg'
import Deal from './../../assets/deal.jpg'
import './Deals.css'
import City1 from './../../assets/city1.jpeg'
import City2 from './../../assets/city2.jpeg'
import City3 from './../../assets/city3.jpeg'
import City4 from './../../assets/city4.jpeg'
import City5 from './../../assets/city5.jpeg'
import City6 from './../../assets/city6.jpeg'
import City7 from './../../assets/city7.jpeg'
import City8 from './../../assets/city8.jpeg'
import City9 from './../../assets/city9.jpeg'
import {Link} from 'react-router-dom'

const Deals = () => {
	return(
		<div>
			<div className="imageflex">
				<div id="imageflex1">
					<img src ={Deal}/>
					<div id="flextext">It's time for new Adventure</div>
				</div>
				<div id="imageflex2">
					<Link to ='/Bhopal' id="city1" className="city">
						<img src ={City1}/>
						<div id="citytext1" className="citytext">Bhopal</div>
					</Link>
					<Link to ='/Indore' id="city2" className="city">
						<img src ={City2}/>
						<div id="citytext2" className="citytext">Indore</div>
					</Link>
					<Link to ='/Gwalior' id="city3" className="city">
						<img src ={City3}/>
						<div id="citytext3" className="citytext">Gwalior</div>
					</Link>
					<Link to ='/Amarkantak' id="city4" className="city">
						<img src ={City4}/>
						<div id="citytext4" className="citytext">Amarkantak</div>
					</Link>
					<Link to ='/Jabalpur' id="city5" className="city">
						<img src ={City5}/>
						<div id="citytext5" className="citytext">Jabalpur</div>
					</Link>
					<Link to ='/Pachmarhi' id="city6" className="city">
						<img src ={City6}/>
						<div id="citytext6" className="citytext">Pachmarhi</div>
					</Link>
					<Link to ='/Balaghat' id="city7" className="city">
						<img src ={City7}/>
						<div id="citytext7" className="citytext">Balaghat</div>
					</Link>
					<Link to ='/Satna' id="city8" className="city">
						<img src ={City8}/>
						<div id="citytext8" className="citytext">Satna</div>
					</Link>
					<Link to ='/Chhatarpur' id="city9" className="city">
						<img src ={City9}/>
						<div id="citytext9" className="citytext">Chhatarpur</div>
					</Link>

				</div>
			</div>
		</div>
	)
}

export default Deals
import React from 'react'
import Goals from './components/MissionVision/Goals.jsx';
import Header from './components/Header/Header.jsx';
import CarouselOne from './components/Carousel/CarouselOne.jsx';
import Hero from './components/Hero/Hero.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Footer from './components/Footer/Footer.jsx';
import GoTop from './components/GoTopButton/GoTop.jsx'
import AllCards from './components/ServiceCards/AllCards.jsx';
// import Routers from './components/Routers/Routers.jsx';

let s = document.getElementById('root');
let a;
const url = 'https://booking-com.p.rapidapi.com/v2/hotels/details?currency=AED&locale=en-gb&checkout_date=2024-09-15&hotel_id=1676161&checkin_date=2024-09-14';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e9da1ea7b8msh988c1486462785fp1dcd90jsn99a333bd72f6',
		'x-rapidapi-host': 'booking-com.p.rapidapi.com'
	}
};
fetch(url,options)
.then((response) =>{response.json()
  .then((response) =>{
     a = console.log(response.room_recommendation[0].adults);
    return a;
   })
}
)
console.log(`adults : ${a}`);
function App() {
  return (
   <>
   
   <GoTop />
   <Header />
   <CarouselOne  />
   <Goals />
   <Hero />
   <AllCards />
   <Feedback />
   <Footer />
   </>
  );
}

export default App;

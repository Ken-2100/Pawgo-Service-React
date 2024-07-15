import AllCards from '../components/ServiceCards/AllCards.jsx';
import CarouselOne from '../components/Carousel/CarouselOne.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Feedback from '../components/Feedback/Feedback.jsx';
import Goals from '../components/MissionVision/Goals.jsx';


export default function Home(){
    return(
        <>
        
  

    <CarouselOne  />
   <Goals />
   <Hero />
   <AllCards />
   <Feedback />
       
        </>
    )
}
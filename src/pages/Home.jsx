import AllCards from '../components/ServiceCards/AllCards.jsx';
import CarouselOne from '../components/Carousel/CarouselOne.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Feedback from '../components/Feedback/Feedback.jsx';
import Goals from '../components/MissionVision/Goals.jsx';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import useAuth from '../components/auth.jsx';




export default function Home(){

    const isLoggedIn = useAuth();
    if (!isLoggedIn) {
        return null;
      }
    
    return(
        <>
    <Header />
   <CarouselOne  />
   <Goals />
   <Hero />
   <AllCards />
   <Feedback />
    <Footer />
        </>
    )
}
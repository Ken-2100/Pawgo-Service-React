
import Goals from './components/MissionVision/Goals.jsx';
import Header from './components/Header/Header.jsx';
import CarouselOne from './components/Carousel/CarouselOne.jsx';
import Hero from './components/Hero/Hero.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Footer from './components/Footer/Footer.jsx';
import GoTop from './components/GoTopButton/GoTop.jsx'
import AllCards from './components/ServiceCards/AllCards.jsx';
// import Routers from './components/Routers/Routers.jsx';

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

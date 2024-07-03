import {useState} from 'react';
import Card from './components/Card';
import image1 from '../src/components/Assets/service1.png';
import image2 from '../src/components/Assets/service2.png';
import image3 from '../src/components/Assets/service3.png';
import TabButton from '../src/components/MissionVision/TabButton.jsx';
import { GOALS } from '../src/Data';
import Header from './components/Header/Header.jsx';
import CarouselOne from './components/Carousel/CarouselOne.jsx';
import Hero from './components/Hero/Hero.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import GoTop from './components/GoTopButton/GoTop.jsx'
import Booking from './components/Booking/Booking.jsx';
// import {BrowseRouter, Routes, Route} from 'react-router-dom';

function App() {
 const [selectedTopic, setUpdatedTopic] = useState('mission');
const [modal,setModal] = useState(false);

  function handleClick(selectedTopic)
  {
     setUpdatedTopic(selectedTopic);
  }

  // const displayModal = ;

  function handleBooking( modal){
    // setModal(modalValue);
  setModal(modal);
  
   
  }


  return (
   <>
   
   <GoTop />

    <section id='Header'>
      {/* <BrowseRouter> */}
      <Header />
      {/* <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/' element={<Shop category="Service"/>}/> 
        <Route path='/' element={<About category="About"/>}/> 
      </Routes >
      </BrowseRouter> */}
    </section>

    <section className='container mb-5' id='CarouselOne'> 
      <CarouselOne  />
    </section>

        <section className='h1 text-center my-5' id='AboutUs'>
          <p> ABOUT US</p>
          </section>
          
        <div className='container d-flex my-5 '>
        <About />
        <div className=' custom-about-bg p-5 rounded-5'>
          <div className='row' >
        <TabButton className='col' onSelect={()=> { handleClick('mission')}}> Mission</TabButton>
        <TabButton className='col' onSelect={()=> { handleClick('vision')}}> Vision</TabButton>
        </div>  

    {selectedTopic && <div className=" my-3 " style={{maxWidth: "35rem"}}>
    <div className="card-header h2 text-dark">{GOALS[selectedTopic].header}</div>
    <div className="card-body">
      <p className="card-title text-light">{GOALS[selectedTopic].topic}</p>
    </div>
    </div>} 
  </div>
      </div>

<div>
      <Hero />
      </div>

      <section className='h1 text-center my-5 position-relative ' id='Services'>
          <p>SERVICES</p>
        </section>
  
      {/* LATER USE THE SHORTER VERSION using spread operator and separate Data.jsx  */}
      <div className='container my-5'>
      <div className=' d-flex d-row justify-content-around ' >
        
    <Card className="col col-md-12" 
    title="PawGo Grooming"
      cardDescription=" "      
      image = {image1}
      onBook={()=>{handleBooking( modal = ()=>(alert('working')))}}
      />
    <Card className="col col-md-12" 
    title="PawGo Treatment"
      cardDescription=" "
      image = {image2}
      onBook={()=>{ }}

    
      />
    <Card className="col col-md-12" 
    title="PawGo Training"
      cardDescription=" "
      image = {image3}
      onBook={()=>{ }}
      />
      </div>
      </div>

      {modal}

    {/*Booking separate page or Modal*/}
      
      <section className='h1 text-center my-5 position-relative '>
          <p> FEEDBACK</p>
        </section>

        <div className='feedback-container my-5'>
          <Feedback />
        </div>

        <div className='Footer-section'>
          <Footer />
        </div>
      
   
       
      </>
  );
}

export default App;

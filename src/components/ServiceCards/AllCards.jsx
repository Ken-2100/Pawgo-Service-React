import Card from './Card';
import image1 from '../Assets/service1.png';
import image2 from '../Assets/service2.png';
import image3 from '../Assets/service3.png';

export default function AllCards(){
    return(

        <>
      {/* LATER USE THE SHORTER VERSION using spread operator to pullout data and separate Data.jsx  */}
        <section className='h1 text-center position-relative my-5 ' id='Services'>
      <p>SERVICES</p>
      </section>

      <div className='container my-5'>
      <div className=' d-flex d-row justify-content-around ' >
      <div className='row'>

        <Card className="col col-md-12" 
    title="PawGo Grooming"
      cardDescription=" "      
      image = {image1}
      />
      <Card className="col col-md-12" 
    title="PawGo Treatment"
      cardDescription=" "
      image = {image2}
      />
      <Card className="col col-md-12" 
    title="PawGo Training"
      cardDescription=" "
      image = {image3}
      />

      </div>
      </div>
      </div>
        </>
    )
}
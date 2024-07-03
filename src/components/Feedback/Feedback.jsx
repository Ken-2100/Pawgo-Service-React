import user1 from './testimonial-1.jpg';
import user2 from './testimonial-2.jpg';
import user3 from './user.jpg';


export default function Feedback(){
    return(
        <div className="container"> 
        <div className="d-flex d-row text-center mx-5 ">
      <div className="col-lg-4">
        <img src={user1} alt="" className='rounded-circle ' />
        <h2 className="fw-normal">Angelica L.  </h2>
        <p>"The team at this pet shop is fantastic! They really know their stuff and are always ready to help with any questions I have about my pets. I always leave feeling confident in my purchases."</p>
        <p> - UserName </p>
      </div>
      <div className="col-lg-4">
        <img src={user2} alt="" className='rounded-circle '  />
        <h2 className="fw-normal">John L.</h2>
        <p>"I love shopping here because they have such a great variety of high-quality products for all kinds of pets. It’s a one-stop shop for all my pet’s needs!"

</p>
        <p>- UserName </p>
      </div>
       {/* /.col-lg-4 */}
      <div className="col-lg-4">
        <img src={user3} alt="" className='rounded-circle '  />
        <h2 className="fw-normal">Ken A.</h2>
        <p>"This pet shop is always clean and well-organized. The staff is friendly, and the atmosphere is welcoming, making it a pleasure to shop for my pets."</p>
        <p>- UserName </p>
      </div>
    </div>
        </div>
    );
}
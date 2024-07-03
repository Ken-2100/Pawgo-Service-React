import BookingInput from "../../src/components/Booking/BookingInput";

function Card({title, image, cardDescription,onBook}) {



 



    return(
      
        <div className="card me-5" style={{width: "15rem"}}>
        <img src={image} className="card-img-top" alt="..."/>
  <div className="card-img-overlay text-end text-light d-flex-inline align-self-end ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text ">{cardDescription}</p>
    {/* <button  className="btn btn-dark" onClick={onBook}>Book</button> */}
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Book
</button>

{/* mapping  */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <BookingInput/>
        <BookingInput/>
        <BookingInput/>
        <BookingInput/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>

       
    );
}

export default Card;
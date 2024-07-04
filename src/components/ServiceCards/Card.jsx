import BookingInput from "../Booking/BookingInput";

function Card({title, image, cardDescription}) {
    return(
      <>
        <div className="card me-5" style={{width: "15rem"}}>
        <img src={image} className="card-img-top" alt="..."/>
  <div className="card-img-overlay text-end text-light d-flex-inline align-self-end ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text ">{cardDescription}</p>
    {/* <button  className="btn btn-dark" onClick={onBook}>Book</button> */}
    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Book
</button>

{/* mapping  */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        <BookingInput/>
        <BookingInput/>
        <BookingInput/>
        <BookingInput/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
</>

       
    );
}

export default Card;
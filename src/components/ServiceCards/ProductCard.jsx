import cartIcon from './Untitled design.png';

export default function ProductCard({itemName, itemPrice, itemDescription, itemImage}) {
  return (
  
  <> 
  <div className="card" style={{width: '18rem'}}>
  <img src={itemImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{itemName}</h5>
    <p className="card-text">{itemDescription}</p>
    <a href="#" className="d-inline-flex btn btn-primary"> <img src={cartIcon} className='img' style={{width: '2rem'}} />{itemPrice} Item Price</a>
  </div>
</div>
  
  
  </>
  );
}

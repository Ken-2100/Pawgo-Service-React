import { useEffect, useState } from "react";

export default function Feedback(){
  const [array, setArray] = useState([]);
  
  //  <!>prevent infinite loop of data
  // GET data from external API reqres.in
// useEffect(() => {
//   fetch('https://reqres.in/api/users?page=2')
//     .then((response) => response.json()) //avoid putting '{}'  to RETURN the VALUE with '{}' will be treated as an EXPRESSION
//     .then((feedbackData) => {
//       setArray(feedbackData.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }, []);

    return(
      <>
      <section className='h1 text-center my-5 position-relative '>
      <p> FEEDBACK</p>
        </section>
        <div className="container"> 
        <div className="d-flex d-row text-center mx-5 ">

       {array.slice(0,3).map((feedbackItem) =>(
        <div className="col-lg-4 me-3" key={feedbackItem.id}>
    <img src={feedbackItem.avatar} alt="..." className='rounded-circle ' />
    <h2 className="fw-normal">{feedbackItem.first_name} </h2>
    <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum quam dolores quo tempore sapiente. "</p>
  </div>
))}
    </div>
        </div>
        </>
        
    ); 
  } 
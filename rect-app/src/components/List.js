import React from 'react';

const List = (getFood) =>{
return(
            <>
            <div className="window">
                       <img src={getFood.data.strMealThumb} alt="resipe-img"/>
                       <div className ="sec-window">
                       <h2>Dish: {getFood.data.strMeal}</h2>
                       <p>Country:{getFood.data.strArea}</p>
                       <button type='button' className='button'>Taste Now</button>

    

                       </div>
                       
           </div>  

           </>
       
         )

}

export default List;  


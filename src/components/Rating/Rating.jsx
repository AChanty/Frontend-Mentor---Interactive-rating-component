import './Rating.css'

const ratingTotal = [1, 2, 3, 4, 5]

function Rating({ activeRating, setActiveRating }) {
   const handleRatingClick = (rating) => {
      if (rating === activeRating) {
         setActiveRating(null)
      } else {
         setActiveRating(rating)
      }
   }

   return (
      <ul className="rating">
         {ratingTotal.map((rating) => {
            const isActive = activeRating === rating
            const ratingClasses = `rating_item ${
               isActive ? 'rating_item-active' : ''
            }`
            return (
               <li
                  key={rating}
                  className={ratingClasses}
                  onClick={() => handleRatingClick(rating)}
               >
                  {rating}
               </li>
            )
         })}
      </ul>
   )
}

export default Rating

import './Card.css'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import Rating from '../../components/Rating/Rating'
import star from '../../assets/icon-star.svg'
import thankYou from '../../assets/illustration-thank-you.svg'

function Card() {
   const [resultState, setResultState] = useState(false)
   const [activeRating, setActiveRating] = useState(null)

   const handleSetActiveRating = (rating) => {
      setActiveRating(rating)
   }

   const handleSetResultState = () => {
      if (activeRating) {
         setResultState(true)
      }
   }

   const thanksComponent = (
      <>
         <img src={thankYou} alt="thank you" className="card__thanks__img" />
         <p className="card__thanks__rating-text centered">
            You selected {activeRating} out of 5
         </p>
         <div className="card__thanks__text centered">
            <h1>Thank you!</h1>
            <p>
               We appreciate you taking the time to give a rating. If you ever
               need more support, don't hesitate to get in touch!
            </p>
         </div>
      </>
   )

   const ratingComponent = (
      <>
         <div className="card__star-container">
            <img src={star} alt="star" />
         </div>
         <div className="card__text-container">
            <h1>How did we do?</h1>
            <p>
               Please let us know how we did with your support request. All
               feedback is appreciated to help us improve our offering!
            </p>
         </div>
         <Rating
            setActiveRating={handleSetActiveRating}
            activeRating={activeRating}
         />
         <Button activeRating={activeRating} onClick={handleSetResultState} />
      </>
   )

   return (
      <main className="card">
         {!resultState ? ratingComponent : thanksComponent}
      </main>
   )
}

export default Card

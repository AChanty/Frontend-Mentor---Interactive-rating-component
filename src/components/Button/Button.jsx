import './Button.css'

function Button({ activeRating, onClick }) {
   const isDisabled = !activeRating

   const handleClick = () => {
      if (!isDisabled) {
         onClick()
      }
   }

   return (
      <button
         type="submit"
         aria-label="submit button"
         onClick={handleClick}
         disabled={isDisabled}
      >
         Submit
      </button>
   )
}

export default Button

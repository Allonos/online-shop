import classes from '../Profile.module.css'
import LeftSidebar from '../Sidebar/LeftSidebar'
import GifCardsContent from './GiftCardsContent'

function GiftCard() {
  return (
    <form className={classes.profile}>
      <LeftSidebar />
      <GifCardsContent />
    </form>
  )
}

export default GiftCard
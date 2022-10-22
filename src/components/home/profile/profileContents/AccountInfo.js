import LeftSidebar from '../Sidebar/LeftSidebar';

import classes from '../Profile.module.css'
import AccountInfoContent from './AccountInfoContent';

function Profile({ emailEnteredInput }) {
  return (
    <form className={classes.profile}>
      <LeftSidebar />
      <AccountInfoContent emailEnteredInput={emailEnteredInput} />
    </form>
  )
}

export default Profile
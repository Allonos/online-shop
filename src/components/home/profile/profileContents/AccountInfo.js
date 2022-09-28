import LeftSidebar from '../Sidebar/LeftSidebar';

import classes from '../Profile.module.css'
import AccountInfoContent from './AccountInfoContent';

function Profile() {
  return (
    <form className={classes.profile}>
      <LeftSidebar />
      <AccountInfoContent />
    </form>
  )
}

export default Profile
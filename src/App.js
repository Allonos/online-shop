import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Cart from './components/home/userCart/Cart';
import Accessories from './components/hotTopics/Accessories';
import AudioSystem from './components/hotTopics/AudioSystem';
import Laptops from './components/hotTopics/Laptops';
import PersonalComputers from './components/hotTopics/PersonalComputers';
import Phones from './components/hotTopics/Phones';
import TvAndMonitors from './components/hotTopics/TvAndMonitors';
import LogIn from './components/Logging/LogIn';
import MainHeader from './components/mainHeader/MainHeader';
import SignUp from './components/Logging/SignUp';
import FirstItemDetail from './components/Details/FirstItemDetail';
import AccountInfo from './components/home/profile/profileContents/AccountInfo';
import GiftCard from './components/home/profile/profileContents/GiftCard';

import History from './components/home/profile/profileContents/History';
import Password from './components/home/profile/profileContents/Password';
import Basket from './components/home/profile/profileContents/Basket';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <div>
      <header>
        {showNavbar && (
          <MainHeader setShowNavbar={setShowNavbar} setShowCartModal={setShowCartModal} />
        )}
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='home' />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/phones' exact>
            <Phones />
          </Route>
          <Route path='/laptops'>
            <Laptops />
          </Route>
          <Route path='/personal-computers'>
            <PersonalComputers />
          </Route>
          <Route path='/accessories'>
            <Accessories />
          </Route>
          <Route path='/audio-system'>
            <AudioSystem />
          </Route>
          <Route path='/tv-monitors'>
            <TvAndMonitors />
          </Route>
          <Route path='/log-in'>
            <LogIn />
          </Route>
          <Route path='/register'>
            <SignUp />
          </Route>
          <Route path='/item/:id/:type'>
            <FirstItemDetail />
          </Route>
          <Route path='/profile/account-info'>
            <AccountInfo />
          </Route>
          <Route path='/profile/gift-cards'>
            <GiftCard />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
          <Route path='/profile/password'>
            <Password />
          </Route>
          <Route path='/profile/basket'>
            <Basket />
          </Route>
        </Switch>
        {showCartModal && <Cart onClose={() => setShowCartModal(false)} />}
      </main>
    </div>
  );
}

export default App;

import { useState, useContext, useRef } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

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

import AuthContext from './store/auth-context';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showCartModal, setShowCartModal] = useState(false);
  const [isLoading, setIsLaoding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [emailEnteredInput, setEmailEnteredInput] = useState('');
  const [passwordEnteredInput, setPasswordEnteredInput] = useState('');

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    setEmailEnteredInput(enteredEmail);
    setPasswordEnteredInput(enteredPassword);

    setIsLaoding(true);

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHhcWY7mwDsKRU8Cub8ZytsTZVgrKGJkE', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setIsLaoding(false)

      if (res.ok) return res.json();
      else {
        return res.json().then(data => {

          let errorMessage = 'Authentication has failed!';
          if (data && data.error && data.error.message === 'MISSING_PASSWORD') errorMessage = 'You forgot to enter password';
          else if (data && data.error && data.error.message === 'MISSING_EMAIL') errorMessage = 'You forgot to enter email';
          else if (data && data.error && data.error.message === 'INVALID_EMAIL') errorMessage = 'Please enter valid email';
          else if (data && data.error && data.error.message === 'INVALID_PASSWORD') errorMessage = 'Password you entered is incorrect';
          else if (data && data.error && data.error.message === 'EMAIL_NOT_FOUND') errorMessage = 'Email you entered does not exist';
          else if (data && data.error && data.error.message === 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.') errorMessage = 'Too many attempts try later.';
          else errorMessage = data.error.message

          throw new Error(errorMessage);
        })
      }
    }).then(data => {
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, expirationTime.toISOString());
      history.replace('/profile/account-info')
    }).catch(err => {
      setShowModal(true);
      setError(err.message);
    })
  }

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
            <LogIn
              isLoading={isLoading}
              showModal={showModal}
              error={error}
              emailInputRef={emailInputRef}
              passwordInputRef={passwordInputRef}
              submitHandler={submitHandler}
              setShowModal={setShowModal}
            />
          </Route>
          <Route path='/register'>
            <SignUp />
          </Route>
          <Route path='/item/:id/:type'>
            <FirstItemDetail />
          </Route>
          <Route path='/profile/account-info'>
            <AccountInfo
              emailEnteredInput={emailEnteredInput}
            />
          </Route>
          <Route path='/profile/gift-cards'>
            <GiftCard />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
          <Route path='/profile/password'>
            <Password passwordEnteredInput={passwordEnteredInput} />
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

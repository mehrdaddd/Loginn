import React from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import  * as routes from './constants/routes';
import SignUpPage   from './components/SignUp';
import SignInPage from './components/SignIn';
import PaswordForgetPage from './components/PasswordForget';
import AccountPage from './components/Account';
import WithAuthentication from './components/WithAuthentication';
import PasswordChangeForm from "./components/PasswordChange";
import Header from "./components/Header";

const App = () =>
    <Router>
        <div className="App">

            <Route
                component={() => <Header/>}
            />


            <Route
                path={routes.HOME}
                component={() => <Home/>}
            />


            <Route
                exact path={routes.SIGN_IN}
                component={() => <SignInPage/>}

            />

            <Route
                exact path={routes.SIGN_UP}
                component={() => <SignUpPage/>}
            />


            <Route
                exact path={routes.ACCOUNT}
                component={() => <AccountPage/>}
            />

            <Route
                exact path={routes.PASSWORD_FORGET}
                component={() => <PaswordForgetPage/>}
            />
            <Route
                exact path={routes.PASSWORD_CHANGE}
                component={() => <PasswordChangeForm/>}
            />


        </div>
    </Router>

export default WithAuthentication(App);

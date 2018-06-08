import  React from 'react' ;
import {Link} from 'react-router-dom';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import  AuthUserContext from './AuthUserContext';


const Navigation =(  ) =>

    <AuthUserContext.Consumer>

        { authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth /> }
    </AuthUserContext.Consumer>


const NavigationNonAuth=() =>
    <ul className="navigation">
        <li><Link to={routes.HOME}> Home </Link></li>
        <li><Link to={routes.SIGN_IN}> Sign In </Link></li>
        <li><Link to={routes.SIGN_UP}> Sign Up </Link></li>
    </ul>

const NavigationAuth =() =>
    <div >

      <SignOutButton />

    <ul className="navigation">

        <li><Link to={routes.HOME}> Home </Link></li>
        <li><Link to={routes.ACCOUNT}> Account </Link></li>

    </ul>
    </div>

        export default Navigation;


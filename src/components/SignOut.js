import React from 'react';
import {auth} from '../firebase';
import './App.css';

const SignOutButton=() =>
 <div className= "out">
    <button
    type="button"
    onClick={auth.doSignOut}
    >
        Sign Out

    </button>
</div>
export default SignOutButton;
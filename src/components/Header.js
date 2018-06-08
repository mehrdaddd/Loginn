import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
class Header extends Component {
    render() {


        return(

                <header className="App-header">

                    <div >
                    <Navigation  />
                    </div >
                    <p className="whitt">GO</p>
                </header>
        );
    }
}
export default Header;
import React, { Component } from 'react';
import { Navbar } from './Navbar';
import "../Fitcss/body.css"
import { Bottomnav } from './Bottomnav';
export class Layout extends Component {
    render () {
        return(
            
                <div className="fitbody">
                    <Navbar />
                    <Bottomnav />
                </div>
            
        );
    }
}
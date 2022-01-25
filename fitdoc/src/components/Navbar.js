import React, { Component } from "react";
import "../Fitcss/nav.css"
import logonav from "../images/logo/logonav.png"
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

export class Navbar extends Component {
    render () {
        return (
            <header className="navcss">
                <div className="row">
                    <div className="col-sm-6">
                        <a href="/">
                            <img src={ logonav } width="185px;" height="55px;"></img>
                        </a>
                    </div>
                
                    <div className="col-sm-3">
                        <a href="/">
                            <Button color="primary" className="logbtn">로그인</Button>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <div className="hamMenu"><FontAwesomeIcon icon={ faBars } /></div>
                    </div>
                </div>
            </header>
        );
    }
}
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { faUserMd } from "@fortawesome/free-solid-svg-icons"

export class Bottomnav extends Component {
    render() {
        return (
            <nav className="bottomnav">
                <div className="bottomItem"><FontAwesomeIcon icon={ faHome } /></div>
                <div className="bottomItem"><FontAwesomeIcon icon={ faSearch } /></div>
                <div className="bottomItem"><FontAwesomeIcon icon={ faTags } /></div>
                <div className="bottomItem"><FontAwesomeIcon icon={ faCommentDots } /></div>
                <div className="bottomItem"><FontAwesomeIcon icon={ faUserMd } /></div>
            </nav>
        );
    }
}
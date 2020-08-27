import React, { Component } from "react";

import Sidebar from "./Sidebar"
import "./Home.css"
import ofoq from '../../img/ofoq.png';
import success from "../../img/success.jpg"

const items = [
    { name: 'OFOQ', label: 'OFOQ', href: "http://unitedofoq.com/" },
    { name: 'FABS', label: 'FABS', href: "http://unitedofoq.com/" },
    {
        name: 'Recruitment', label: 'Recruitment',
        href: "https://ofoq-recruitment-app.now.sh/positions/1/basic-info"
    },
    { name: 'Logout', label: 'Logout', href: "#" }

]

class Main extends Component {
    render() {
        return (
            <div className="main" >
                <div className="header">
                    <img src={ofoq} alt="" />
                </div>
                <div className="sidebar">
                    <Sidebar items={items} />
                </div>
                <div className="content">
                    <img src={success} alt="" />
                </div>
            </div>
        );
    }
}

export default Main;
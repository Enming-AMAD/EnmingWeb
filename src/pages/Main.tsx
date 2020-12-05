import React from "react";

import "./stylesheet/Main.css"

import logo from "../images/logobig.png"

const Page = () => {
    return (
        <div className="slogans">
            <div className="slogan topSlogan">게임을 만듭니다</div>
            <img alt="" className="sloganImage" src={logo}></img>
            <div className="slogan bottomSlogan">즐거움을 만듭니다</div>
        </div>
    );
};

export default Page;
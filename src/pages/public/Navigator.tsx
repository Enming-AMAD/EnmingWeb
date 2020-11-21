import React, { Component } from 'react'
import logo from "../../images/logo.png"

const names = [
    <img alt="" src={logo} />,
    <span className="tab">홈</span>,
    <span className="tab">소개</span>,
    <span className="tab">멤버</span>,
    <span className="tab">프로젝트</span>,
    <span className="tab">문의</span>
]
const tabs = names.map((name) =>
    <li>{name}</li>
)

export default tabs
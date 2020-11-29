import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

const names = [
    <Link to="/" className="tab">홈</Link>,
    <Link to="/intro" className="tab">소개</Link>,
    <Link to="/member" className="tab">멤버</Link>,
    <Link to="/project" className="tab">프로젝트</Link>,
    <Link to="/support" className="tab">문의</Link>
]
const tabs = names.map((name) =>
    <li>{name}</li>
)

export default tabs
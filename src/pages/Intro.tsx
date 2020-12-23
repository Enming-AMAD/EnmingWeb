import React, { Component } from "react";

import "./stylesheet/Intro.css"

class Page extends Component {
    componentDidMount() {
        let moved = true;
        let tgt = 0;
        let last = 0;

        function back() {
            if (moved === true) {
                if (window.scrollY !== 0 && window.scrollY !== 937) {
                    if (window.scrollY < (937 / 2)) {
                        tgt = 937;
                        last = 80;
                        moved = false;
                    }
                    else {
                        tgt = 0;
                        last = 80;
                        moved = false;
                    }
                }
            }

            if (last > 0) {
                window.scrollTo(0, window.scrollY + (tgt - window.scrollY) * 0.12);
                last -= 1;
                if (last === 0) {
                    window.scrollTo(0, tgt);
                    moved = true;
                }
            }
        }
        setInterval(back, 10);
    }
    render() {
        return (
            <>
                <div className="introduce">
                    저희 Enming Games는 10대들로 이루어진
                    <br></br>
                    아주 젊은 개발 팀 입니다.
                </div>
                <div className="bottom">
                    <div className="information">
                        저희 Enming Games는 상상하던 게임을
                        <br></br>
                        직접 만드는 일을 합니다.
                    </div>
                    <div className="description">
                        저희는 지금까지 저희가 게임을 하면서 느꼈던 불편한 점들,
                        <br></br>
                        그리고 ‘이런 게임이 있었으면 좋겠다.’ 라고 생각했던 것들을 모두 모아
                        <br></br>
                        실제 게임으로 탄생시킵니다.
                        <br></br>
                        그야말로 상상하던 게임을 실제로 만드는 거죠.
                    </div>
                    <div className="comment">
                        여러분이 상상하던 게임이 현실이 되는 그날까지
                        <br></br>
                        Enming Games의 노력은 계속됩니다.
                    </div>
                </div>
            </>
        );
    }
};

export default Page;
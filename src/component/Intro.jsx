import React from "react";

import about from "../assets/image/postdm.png";
const introText = {
    title: "postdm express",
    desc: ["언제나", "정성을 다하여", "포장, 배송합니다"],
};

const insideText={

}

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">{introText.title}</h1>
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                    <div className="inside_text">
                        우정사업 본부에서 지정한<br/>
                        우편번호 바코드 인증업체 포스트디엠<br/>
                        자동포장으로 신속한 우편물 발송을 약속합니다<br/>
                        저렴한 비용, 신속한 발송 DM전문 기업<br/>
                        포스트디엠
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
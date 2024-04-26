import React from "react";
const skillText = [
    {
      title: "우편 전산 봉투 인쇄 제작",
      desc: "",
    },
    {
      title: "우편주소록 전산 입력",
      desc: "",
    },
    {
      title: "우편주소 전산봉투 및 스티커 출력",
      desc: "",
    },
    {
        title: "우편 내용물 봉투 및 띠지 삽입",
        desc: "",
      },
      {
        title: "우편물봉입 및 우편번호별 벤딩작업",
        desc: "",
      },
      {
        title: "우체국 접수대행",
        desc: "",
      }
];

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    발송과정 <em>우편물은 이렇게 전달돼요</em>
                </h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key + 1}</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;

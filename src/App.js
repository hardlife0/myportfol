import React from 'react';
import '../src/styles/style.css'; // 스타일 시트 경로 확인 필요

function App() {
  return (
    <div>
      <div id="skip">
        <a href="#header">헤더 영역 바로가기</a>
        <a href="#intro">소개 영역 바로가기</a>
        <a href="#skill">스킬 영역 바로가기</a>
        <a href="#site">사이트 영역 바로가기</a>
        <a href="#port">포트폴리오 영역 바로가기</a>
        <a href="#contact">연락처 영역 바로가기</a>
        <a href="#footer">푸터 영역 바로가기</a>
      </div>
출처: https://webstoryboy.co.kr/1925 [WEBSTORYBOY:티스토리]

        <header id="header" role="banner">header</header>
        {/* //header */}

        <main id="main" role="main">
            <section id="intro">
                intro
            </section>

            <section id="skill">
                skill
            </section> 

            <section id="site">
                site
            </section>

            <section id="port">
                port
            </section>

            <section id="contact">
                contact
            </section>
        </main>

        <footer id="footer" role="contentinfo">footer</footer>
        {/* //footer */}
    </div>
  );
}

export default App;

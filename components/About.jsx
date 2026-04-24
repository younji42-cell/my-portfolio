// components/About.jsx — 자기소개 섹션 (Bento Grid)

function About() {
  const [hover, setHover] = React.useState(null);

  const PROJECTS = [
    { name: "해군 기상입력 플랫폼", date: "2025.09 — 진행중", role: "UI/UX · 디자인시스템 · 퍼블리싱", tools: "Figma · Tailwind · HTML" , contribution: 90 },
    { name: "부부관계개선 앱 (바이브코딩)", date: "2025.08", role: "기획 · UI · 개발", tools: "Figma · React · Claude", contribution: 100 },
    { name: "의류 브랜드 리뉴얼 웹사이트", date: "2024.11", role: "UI 디자인 · 퍼블리싱", tools: "Figma · HTML/CSS", contribution: 70 },
    { name: "사내 관리자 툴 리디자인", date: "2024.06", role: "UX 리서치 · UI 리뉴얼", tools: "Figma · XD", contribution: 60 },
    { name: "금융 서비스 온보딩 개선", date: "2024.02", role: "UX 설계 · 프로토타입", tools: "Figma · Protopie", contribution: 50 },
    { name: "커머스 상세페이지 템플릿", date: "2023.10", role: "UI · 퍼블리싱", tools: "Photoshop · HTML/CSS", contribution: 80 },
    { name: "모바일 예약 앱 MVP", date: "2023.05", role: "UI 디자인 · 시스템 정리", tools: "Figma · XD", contribution: 70 },
    { name: "교육 플랫폼 랜딩 리뉴얼", date: "2022.12", role: "UI · 카피 · 퍼블리싱", tools: "XD · HTML/CSS", contribution: 85 },
    { name: "사이니지 키오스크 UI", date: "2022.07", role: "UI 디자인", tools: "XD · Illustrator", contribution: 60 },
    { name: "병원 브랜딩 & 웹", date: "2022.02", role: "BI · 웹 UI · 퍼블리싱", tools: "Illustrator · Photoshop · HTML", contribution: 75 },
  ];

  const TOOLKIT = [
    { name: "Figma", cat: "Design", level: 95, desc: "컴포넌트 · 베리언트 · Auto Layout · 토큰" },
    { name: "Adobe XD", cat: "Design", level: 85, desc: "프로토타입 · 인터랙션" },
    { name: "HTML / CSS", cat: "Code", level: 85, desc: "시맨틱 마크업 · 반응형 · 애니메이션" },
    { name: "Tailwind", cat: "System", level: 80, desc: "토큰 설계 · config 커스텀 · 유틸리티" },
    { name: "Photoshop", cat: "Graphic", level: 80, desc: "비트맵 편집 · 보정 · 합성" },
    { name: "Illustrator", cat: "Graphic", level: 80, desc: "벡터 · 로고 · 아이콘" },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section__header" data-reveal>
          <span className="eyebrow">01 — About</span>
          <h2 className="section__title display">
            사소한 디테일로<br/>
            <span style={{color:'var(--primary)'}}>큰 차이</span>를 만드는 디자이너.
          </h2>
        </div>

        <div className="bento">
          {/* Big intro card */}
          <div className="bento__card bento__card--hero" data-reveal data-delay="1">
            <div className="bento__label mono">IDENTITY</div>
            <p className="bento__lead">
              저는 <strong>UI·UX</strong>에 관심이 많습니다.
              사람들이 이 서비스에 <strong>어떻게 만족할 수 있을지</strong> 끊임없이 고민하고,
              그래서 <strong>사소한 것도 놓치지 않는 눈</strong>이 디자이너에게 꼭 필요하다고 생각합니다.
              <span className="bento__lead-break"/>
              작은 디테일이 큰 차이를 만들고, 그걸 UI로 풀어내는 건 또 다른 문제입니다.
              디자이너는 <strong>익숙함과 새로움 사이</strong>에서 끊임없이 연구해야 하는 직업이라고 믿어요.
              <span className="bento__lead-break"/>
              그리고 저는 여기서 한 발 더 나아가, <strong>디자인한 것을 직접 코드로 구현하고 컨트롤할 수 있습니다.</strong>
              시스템을 짜고 — 디자인 토큰을 정의하고 — 퍼블리싱까지 일관되게 이어지는 흐름을 책임집니다.
            </p>
            <div className="bento__chain" aria-hidden>
              <span className="bento__chain-node">
                <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
                Observe
              </span>
              <span className="bento__chain-link"/>
              <span className="bento__chain-node">
                <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="2" width="10" height="10" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
                Systemize
              </span>
              <span className="bento__chain-link"/>
              <span className="bento__chain-node">
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
                Ship
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="bento__card bento__card--stat" data-reveal data-delay="2">
            <div className="bento__label mono">EXPERIENCE</div>
            <div className="stat-num display">7<span style={{fontSize:'.5em'}}>년차</span></div>
            <div className="bento__sub">디지털 제품<br/>디자인 경력</div>
          </div>

          <div className="bento__card bento__card--stat" data-reveal data-delay="3">
            <div className="bento__label mono">CERTIFICATE</div>
            <div className="stat-num display" style={{fontSize:'clamp(28px, 4vw, 42px)', lineHeight:1.15, marginTop:'4px'}}>웹디자인<br/>기능사</div>
            <div className="bento__sub">국가기술자격<br/>보유</div>
          </div>

          {/* Projects list (replaces Now Playing) */}
          <div className="bento__card bento__card--projects" data-reveal data-delay="2">
            <div className="bento__card-head">
              <div className="bento__label mono">PROJECTS · {PROJECTS.length}</div>
              <div className="bento__label mono" style={{opacity:.4}}>SCROLL ↓</div>
            </div>
            <div className="proj-list">
              <div className="proj-list__head mono">
                <span>프로젝트</span>
                <span>기간</span>
                <span>기여도</span>
                <span>TOOLS</span>
              </div>
              <ul className="proj-list__body">
                {PROJECTS.map((p, i) => (
                  <li key={i} className="proj-row">
                    <span className="proj-row__num mono">{String(i+1).padStart(2,'0')}</span>
                    <div className="proj-row__main">
                      <div className="proj-row__name">{p.name}</div>
                      <div className="proj-row__role mono">{p.role}</div>
                    </div>
                    <div className="proj-row__date mono">{p.date}</div>
                    <div className="proj-row__contrib">
                      <div className="proj-row__bar">
                        <div className="proj-row__bar-fill" style={{width: p.contribution + '%'}}/>
                      </div>
                      <span className="mono">{p.contribution}%</span>
                    </div>
                    <div className="proj-row__tools mono">{p.tools}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Principles */}
          <div className="bento__card bento__card--principles" data-reveal data-delay="3">
            <div className="bento__label mono">PRINCIPLES</div>
            <ol className="principles">
              {[
                ["관찰이 먼저", "Design starts with what's broken."],
                ["시스템으로 번역", "One decision, multiplied."],
                ["손으로 증명", "Ship it, don't just deck it."],
              ].map(([ko, en], i) => (
                <li key={i}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    className={hover === i ? "is-hover" : ""}>
                  <span className="principles__num mono">0{i+1}</span>
                  <div>
                    <div className="principles__ko">{ko}</div>
                    <div className="principles__en mono">{en}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Toolkit — tool + capability */}
          <div className="bento__card bento__card--tools" data-reveal data-delay="4">
            <div className="bento__label mono">TOOLKIT</div>
            <div className="toolkit-grid">
              {TOOLKIT.map(t => (
                <div key={t.name} className="toolkit-item">
                  <div className="toolkit-item__head">
                    <span className="toolkit-item__name">{t.name}</span>
                    <span className="toolkit-item__cat mono">{t.cat}</span>
                  </div>
                  <div className="toolkit-item__desc">{t.desc}</div>
                  <div className="toolkit-item__bar">
                    <div className="toolkit-item__fill" style={{width: t.level + '%'}}/>
                    <span className="toolkit-item__lvl mono">{t.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;

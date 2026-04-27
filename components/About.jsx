// components/About.jsx — 자기소개 섹션 (Bento Grid)

function About() {
  const [hover, setHover] = React.useState(null);
  const [modalProject, setModalProject] = React.useState(null);

  const PROJECTS = [
    { name: "해군 기상입력 플랫폼", date: "2026.02 — 진행중", role: "UI/UX · 디자인시스템 · 퍼블리싱", tools: "Figma · Tailwind · HTML" , contribution: 90  ,link: null, images: ["./assets/navymain.png"],},
    { name: "해군 통합해양정보시스템 · 제안", date: "2026.01", role: "UI/UX · 디자인시스템 ", tools: "Figma" , contribution: 90  ,link: null, images:  ["./assets/dash04.png","./assets/dash02.png","./assets/dash03.png"],},
    { name: "연인 관계 개선 앱 (개인 - 바이브코딩)", date: "2026.02 — 진행중", role: "기획 · UI · 개발", tools: "React · Claude · Supabase ", contribution: 100 ,link: null, images: ["./assets/app-all.png"]},
    { name: "기상청 품질관리 시스템", date: "2025.04", role: "UI UX  디자인 · 퍼블리싱", tools: "Figma · HTML/CSS", contribution: 100 ,link: null, images: ["./assets/dash01.png"],},
    { name: "날씨 여행 앱 기획", date: "2025.03", role: "UX 기획", tools: "Figma", contribution: 90 ,images: ["./assets/weather_01.png"],},
    { name: "HanamonEDB System", date: "2025.06", role: "UX 설계· UI 리뉴얼", tools: "Figma", contribution: 100 ,link: null, images: ["./assets/EDB01.png","./assets/EDB02.png","./assets/EDB04.png","./assets/EDB03.png","./assets/EDB05.png","./assets/EDB06.png"]},
    { name: "세종시티 앱", date: "2023.03", role: "UI UX 디자인", tools: "Figma · Protopie", contribution: 100 ,link: null, images: ["./assets/CITYAPP.png"]},
    { name: "새만금 개발공사 ", date: "2023.02", role: "UI UX 디자인", tools: "XD · Photoshop · Illustrator", contribution: 100,link:"https://www.sdco.or.kr/", images: null, },
    { name: "친환경에너지체험포털 · 인터랙티브 ", date: "2023.10", role: "UI UX 디자인 · 프로토타입", tools: "XD · Photoshop · Illustrator", contribution: 100,link:"https://xd.adobe.com/view/d3b6def9-24dc-43e0-a187-5c512e8a6fdb-86e5/?fullscreen", images: null, },
    { name: "한국노동연구원", date: "2023.03", role: " UI UX 디자인", tools: "XD", contribution: 100 ,link: "https://www.kli.re.kr/#firstPage"},
    { name: "KT&G 시스템", date: "2022.10", role: "UI UX 디자인", tools: "XD", contribution: 100 ,images: [,"./assets/kt&gsystem.png","./assets/kt&gsystemsub.png"]},
    { name: "기술정책플랫폼 · 미세먼지에서 살아남기", date: "2022.07", role: "UI UX 디자인", tools: "XD · Photoshop · Illustrator", contribution: 100 ,link: "https://www.kier.re.kr/tpp/energy/B/view/228?contentsName=dust&menuId=MENU00961#", },
    { name: "기술정책플랫폼 · 식탁위의 혁명", date: "2022.07", role: "UI UX 디자인", tools: "XD · Photoshop · Illustrator", contribution: 100 ,link: "https://www.kier.re.kr/tpp/energy/A/view/25?contentsName=sub3_9&menuId=MENU00963",},
    { name: "국방과학연구소 · 안전상황판", date: "2022.02", role: "UI UX 디자인", tools: "XD", contribution: 100 ,images: ["./assets/gosystem.png"]},
  ];

  const TOOLKIT = [
    { name: "Figma",      cat: "Design",  level: 95, desc: "컴포넌트 · 베리언트 · Auto Layout · 토큰" },
    { name: "Adobe XD",  cat: "Design",  level: 95, desc: "프로토타입 · 인터랙션" },
    { name: "HTML / CSS",cat: "Code",    level: 85, desc: "시맨틱 마크업 · 반응형 · 애니메이션" },
    { name: "Tailwind",  cat: "System",  level: 60, desc: "토큰 설계 · config 커스텀 · 유틸리티" },
    { name: "Photoshop", cat: "Graphic", level: 90, desc: "비트맵 편집 · 보정 · 합성" },
    { name: "Illustrator",cat:"Graphic", level: 90, desc: "벡터 · 로고 · 아이콘" },
  ];
 
  /* ── 모달 닫기 (ESC) ── */
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setModalProject(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
 
  /* ── 프로젝트 액션 버튼 ── */
  function ProjectActions({ project }) {
    const hasLink   = !!project.link;
    const hasImages = project.images && project.images.length > 0;
 
    if (!hasLink && !hasImages) return null;
 
    return (
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {hasLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            title="링크 바로가기"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '4px 8px',
              background: 'var(--primary-soft)', color: 'var(--primary)',
              border: '1px solid var(--primary)',
              borderRadius: 'var(--r-pill)', fontSize: 10,
              fontFamily: 'inherit', cursor: 'pointer',
              textDecoration: 'none', transition: 'all .15s',
              letterSpacing: '.04em', fontWeight: 500,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary-soft)'; e.currentTarget.style.color = 'var(--primary)'; }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            링크
          </a>
        )}
        {hasImages && (
          <button
            onClick={e => { e.stopPropagation(); setModalProject(project); }}
            title="이미지 보기"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '4px 8px',
              background: 'var(--bg-muted)', color: 'var(--fg-muted)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-pill)', fontSize: 10,
              fontFamily: 'inherit', cursor: 'pointer',
              transition: 'all .15s', letterSpacing: '.04em', fontWeight: 500,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elev)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--fg)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg-muted)'; }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="1" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="3.5" cy="3.5" r="1" fill="currentColor" opacity=".5"/>
              <path d="M1 7l2.5-2.5L5 6l2-2 2 2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            이미지
          </button>
        )}
      </div>
    );
  }
 
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
            <p className="bento__lead" style={{maxWidth:'none'}}>
              <em style={{ fontStyle: 'normal', color: 'var(--fg-muted)', fontSize: '.9em' }}>
                "사용자가 제품을 사용하는 과정에서 '존중받고 있다'는 확신을 느끼는 순간은 언제일까요?"
              </em>
              <span className="bento__lead-break"/>
              저는 디자인의 정점이 화려한 비주얼이 아닌, 친절하고 자연스러운 <strong>'학습의 과정'</strong>과<br />
              그 뒤에 찾아오는 <strong>'압도적인 편리함'</strong>에 있다고 믿습니다.<br />
              유저가 고민하지 않아도 다음 단계를 알게 되고, <br />자신의 의도가 완벽하게 배려받고 있음을 깨닫는 순간,<br />
              서비스는 단순한 도구를 넘어 매력적인 경험으로 기억됩니다.<br />
              그리고 이 경험은 자연스럽게 <strong>서비스에 머무는 시간으로 증명됩니다.</strong><br />
              <span className="bento__lead-break"/>
              저는 이 <strong style={{color:'var(--primary)'}}>'존중의 경험'</strong>을 설계하기 위해<br />
              기획자의 시선으로 UX의 흐름을 관찰하고, 디자이너의 감각으로 디자인 시스템을 정의하고,<br />
              설계한 인터페이스를 직접 직접 HTML과 CSS로 구현합니다.<br />
              기획의 본질이 한 줄의 코드까지 왜곡 없이 이어질 때,<br />
              비로소 <strong>사용자를 향한 진심 어린 배려</strong>가 완성된다고 확신합니다.
            </p>
          </div>
 
          {/* Stats */}
          <div className="bento__card bento__card--stat" data-reveal data-delay="2">
            <div className="bento__label mono">EXPERIENCE</div>
            <div className="stat-num display">7<span style={{fontSize:'.5em'}}>년차</span></div>
            <div className="bento__sub">UI/UX<br/>디자인 경력</div>
          </div>
 
          <div className="bento__card bento__card--stat" data-reveal data-delay="3">
            <div className="bento__label mono">CERTIFICATE</div>
            <div className="stat-num display" style={{fontSize:'clamp(28px, 4vw, 42px)', lineHeight:1.15, marginTop:'4px'}}>웹디자인<br/>기능사</div>
            <div className="bento__sub">국가기술자격<br/>보유</div>
          </div>
 
          {/* Projects list */}
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
                <span>바로가기</span>
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
                    <div style={{ display: 'flex'}}>
                      <ProjectActions project={p} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Toolkit */}
          <div className="bento__card bento__card--tools" data-reveal data-delay="4">
            <div className="bento__label mono">TOOLKIT</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {TOOLKIT.map(t => (
                <div key={t.name} style={{
                  padding: '12px 14px',
                  background: 'var(--bg-sunken)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-lg)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all .25s cubic-bezier(.2,.7,.2,1)',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* 레벨 배경 바 */}
                  <div style={{
                    position: 'absolute', left: 0, bottom: 0,
                    width: t.level + '%', height: 2,
                    background: 'var(--primary)', borderRadius: '0 2px 0 0',
                    opacity: .7,
                  }} />

                  {/* 상단 — 이름 + 레벨 */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', lineHeight: 1.2 }}>{t.name}</span>
                    <span style={{
                      padding: '2px 6px', flexShrink: 0,
                      background: 'var(--primary-soft)', color: 'var(--primary)',
                      borderRadius: 'var(--r-pill)', fontSize: 9,
                      fontFamily: 'inherit', letterSpacing: '.04em', fontWeight: 600,
                    }}>{t.level}</span>
                  </div>

                  {/* 카테고리 */}
                  <div className="mono" style={{ fontSize: 9, color: 'var(--fg-subtle)', letterSpacing: '.1em', marginBottom: 5 }}>
                    {t.cat}
                  </div>

                  {/* 설명 */}
                  <div style={{ fontSize: 11, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      {/* ── 이미지 모달 (Portal) ── */}
      {modalProject && ReactDOM.createPortal(
        <div
          onClick={() => setModalProject(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'oklch(5% 0.01 240 / .88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg-elev)',
              borderRadius: 'var(--r-2xl)',
              border: '1px solid var(--border)',
              width: '100%',
              maxWidth: 1600,
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* 모달 헤더 */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid var(--border)',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)' }}>
                  {modalProject.name}
                </span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--fg-subtle)', letterSpacing: '.08em' }}>
                  {modalProject.role} · {modalProject.date}
                </span>
              </div>
              <button
                onClick={() => setModalProject(null)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--bg-muted)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--fg-muted)',
                  fontSize: 18, lineHeight: 1, flexShrink: 0,
                  transition: 'all .15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elev)'; e.currentTarget.style.color = 'var(--fg)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-muted)'; e.currentTarget.style.color = 'var(--fg-muted)'; }}
              >×</button>
            </div>
 
            {/* 이미지 스크롤 영역 */}
            <div style={{
              overflowY: 'scroll',
              flex: 1,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              minHeight: 0,   
            }}>
              {modalProject.images && modalProject.images.length > 0 ? (
                modalProject.images.map((src, idx) => (
                  <div key={idx} style={{ width: '100%', border: '1px solid var(--border)' }}>
                    <img
                      src={src}
                      alt={`${modalProject.name} ${idx + 1}`}
                      style={{ width: '100%', display: 'block' }}
                    />
                  </div>
                ))
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, gap: 12, color: 'var(--fg-subtle)' }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="3" y="3" width="34" height="34" rx="5" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"/>
                    <rect x="9" y="10" width="22" height="4" rx="2" fill="currentColor" opacity=".25"/>
                    <rect x="9" y="18" width="15" height="3" rx="1.5" fill="currentColor" opacity=".18"/>
                    <rect x="9" y="24" width="18" height="3" rx="1.5" fill="currentColor" opacity=".18"/>
                  </svg>
                  <span className="mono" style={{ fontSize: 12, letterSpacing: '.1em', opacity: .5 }}>이미지 준비 중</span>
                </div>
              )}
            </div>
 
            {/* 모달 푸터 */}
            <div style={{
              padding: '12px 24px',
              borderTop: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexShrink: 0,
            }}>
              <span className="mono" style={{ fontSize: 10, color: 'var(--fg-subtle)', letterSpacing: '.08em' }}>
                {modalProject.images ? `${modalProject.images.length}개 이미지` : '—'} · ESC로 닫기
              </span>
              {modalProject.link && (
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '7px 14px',
                    background: 'var(--primary)', color: '#fff',
                    borderRadius: 'var(--r-pill)', fontSize: 12, fontWeight: 500,
                    textDecoration: 'none', transition: 'opacity .15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  링크 바로가기
                </a>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
 
window.About = About;
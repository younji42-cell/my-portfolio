// components/Hero.jsx — 메인 히어로 섹션

function Hero() {
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const onMove = (e) => {
      const r = heroRef.current?.getBoundingClientRect();
      if (!r) return;
      setMouse({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const hhmm = time.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Animated background grid */}
      <div className="hero__grid" aria-hidden>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.22"/>
            </pattern>
            <radialGradient id="fade">
              <stop offset="0%" stopColor="black"/>
              <stop offset="70%" stopColor="black" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="black" stopOpacity="0"/>
            </radialGradient>
            <mask id="gridmask">
              <rect width="100%" height="100%" fill="url(#fade)"/>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridmask)"/>
        </svg>
      </div>

      {/* Glow orbs following mouse */}
      <div className="hero__orb hero__orb--1" style={{
        left: `${mouse.x * 30 + 20}%`,
        top: `${mouse.y * 20 + 30}%`,
      }} aria-hidden/>
      <div className="hero__orb hero__orb--2" style={{
        left: `${70 - mouse.x * 20}%`,
        top: `${60 - mouse.y * 15}%`,
      }} aria-hidden/>

      <div className="container hero__inner">
        <div className="hero__meta" data-reveal>
          <div className="hero__status">
            <span className="hero__status-dot"/>
            <span className="mono">AVAILABLE · 2026 Q2</span>
          </div>
          <div className="hero__clock mono">
            <span style={{opacity:.5}}>SEOUL / KST</span>
            <span>{hhmm}</span>
          </div>
        </div>

        <h1 className="hero__title" data-reveal data-delay="1">
          <span className="hero__title-line">
            <em className="hero__italic">Designing</em>
            <span className="hero__badge mono">UIUX</span>
          </span>
          <span className="hero__title-line">
            <em className="hero__italic">&amp; Building</em>
            <span className="hero__badge hero__badge--alt mono">DEV</span>
          </span>
          <span className="hero__title-line" style={{fontFamily:'var(--font-sans)', fontSize:'0.5em', fontWeight:300, color:'var(--fg-muted)', marginTop:'0.3em'}}>
            사용자의 니즈를 제품으로.
          </span>
        </h1>

        <div className="hero__description" data-reveal data-delay="3">
          <div className="hero__description-label mono">— WHO AM I</div>
          <p>
            사람들이 <mark>무엇에 막히는지</mark>를 관찰하고,
            그 니즈를 <mark>시스템으로</mark> 번역하며,<br />
            끝내 <mark>제품으로</mark> 구현해내는 사람.
          </p>
          <p style={{color:'var(--fg-subtle)', fontSize:14}}>
            I observe where people get stuck, translate their needs into systems,
            and ship them as real products.
          </p>
        </div>

        <div className="hero__roles" data-reveal data-delay="4">
          <div className="hero__role">
            <span className="hero__role-num mono">01</span>
            <div>
              <div className="hero__role-title">Research & UX</div>
              <div className="hero__role-desc">페인포인트 발굴 · 정보구조 설계</div>
            </div>
          </div>
          <div className="hero__role">
            <span className="hero__role-num mono">02</span>
            <div>
              <div className="hero__role-title">Design System</div>
              <div className="hero__role-desc">토큰 · Tailwind · Figma</div>
            </div>
          </div>
          <div className="hero__role">
            <span className="hero__role-num mono">03</span>
            <div>
              <div className="hero__role-title">Development</div>
              <div className="hero__role-desc">React · 바이브코딩 · 퍼블리싱</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;

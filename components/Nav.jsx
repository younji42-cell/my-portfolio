// components/Nav.jsx — 상단 고정 네비게이션

function Nav({ sections, activeSection, dark, onToggleDark }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
  };

  return (
    <nav className={"nav " + (scrolled ? "nav--scrolled" : "")}>
      <div className="nav__inner">
        <button className="nav__brand" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <span className="nav__brand-mark" aria-hidden>
            <svg viewBox="0 0 24 24" width="22" height="22">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M4 14 Q8 10 12 14 T20 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="nav__brand-text">
            <span className="mono" style={{fontSize:11, opacity:.55, letterSpacing:'.14em'}}>YJ.LEE</span>
            <span style={{fontWeight:600}}>이윤지</span>
          </span>
        </button>
        <div className="nav__links">
          {sections.map(s => (
            <button
              key={s.id}
              className={"nav__link " + (activeSection === s.id ? "is-active" : "")}
              onClick={() => scrollTo(s.id)}
              data-cursor="link"
            >
              <span className="nav__link-num mono">{s.num}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>
        <div className="nav__actions">
          <button
            className="nav__theme"
            onClick={onToggleDark}
            aria-label="테마 전환"
            data-cursor="link"
            title={dark ? "라이트 모드" : "다크 모드"}
          >
            <span className={"nav__theme-icon " + (dark ? "is-dark" : "")}>
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
                </svg>
              )}
            </span>
          </button>
          <a className="nav__cta" href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact');}} data-cursor="link">
            <span>Let's talk</span>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6h7m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;

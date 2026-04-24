// components/Skills.jsx + Contact.jsx

function Skills() {
  const cats = [
    {
      title: 'Design',
      ko: '디자인',
      items: [
        {name:'Figma', level:95}, {name:'Figma Variables', level:85},
        {name:'Auto Layout', level:92}, {name:'Prototype', level:88},
        {name:'Design Tokens', level:90}, {name:'Accessibility', level:75},
      ],
    },
    {
      title: 'System',
      ko: '시스템',
      items: [
        {name:'Tailwind', level:90}, {name:'CSS Variables', level:92},
        {name:'oklch Color', level:85}, {name:'Token Pipeline', level:80},
        {name:'Component API', level:82},
      ],
    },
    {
      title: 'Dev',
      ko: '개발',
      items: [
        {name:'HTML / CSS', level:90}, {name:'JavaScript', level:80},
        {name:'React', level:75}, {name:'Framer Motion', level:70},
        {name:'Git', level:75}, {name:'Claude / Cursor', level:90},
      ],
    },
    {
      title: 'Think',
      ko: '리서치',
      items: [
        {name:'User Interview', level:85}, {name:'Affinity Mapping', level:88},
        {name:'Journey Mapping', level:82}, {name:'Heuristic Eval', level:80},
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section__header" data-reveal>
          <span className="eyebrow">06 — Skills</span>
          <h2 className="section__title display">
            <em className="italic">T-shape</em>, with a deep blue root.
          </h2>
        </div>

        <div className="skills-grid">
          {cats.map((c, ci) => (
            <div key={c.title} className="skill-cat" data-reveal data-delay={ci+1}>
              <div className="skill-cat__head">
                <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>0{ci+1}</span>
                <div>
                  <div className="skill-cat__title display">{c.title}</div>
                  <div className="skill-cat__ko mono">{c.ko}</div>
                </div>
              </div>
              <ul className="skill-list">
                {c.items.map(s => (
                  <li key={s.name} className="skill-item">
                    <div className="skill-item__head">
                      <span>{s.name}</span>
                      <span className="mono" style={{opacity:.5, fontSize:11}}>{s.level}</span>
                    </div>
                    <div className="skill-item__bar">
                      <div className="skill-item__fill" style={{width: s.level+'%'}}/>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = React.useState(false);
  const email = "yunji.lee.design@gmail.com";
  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(()=>setCopied(false), 1800);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__inner" data-reveal>
          <span className="eyebrow" style={{color:'var(--primary-fg)', opacity:.7}}>07 — Contact</span>
          <h2 className="contact__title display">
            좋은 문제, <em className="italic">함께 풀어요.</em>
          </h2>
          <p className="contact__sub">
            신중하게 만들어야 할 제품이 있다면, 기획부터 배포까지 한 사람의 손으로 이어드릴게요.
          </p>

          <div className="contact__email">
            <button className="contact__email-btn" onClick={copy} data-cursor="link">
              <span className="mono" style={{fontSize:11, opacity:.55, letterSpacing:'.14em'}}>EMAIL</span>
              <span className="contact__email-addr">{email}</span>
              <span className="contact__email-copy mono">
                {copied ? '✓ COPIED' : 'COPY'}
              </span>
            </button>
          </div>

          <div className="contact__links">
            {[
              {label:'LinkedIn', href:'#'},
              {label:'GitHub', href:'#'},
              {label:'Behance', href:'#'},
              {label:'Read.cv', href:'#'},
            ].map(l => (
              <a key={l.label} className="contact__link" href={l.href} data-cursor="link">
                <span>{l.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9L9 3m0 0H4m5 0v5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </a>
            ))}
          </div>
        </div>

        <footer className="footer">
          <div className="container footer__inner">
            <div className="mono" style={{opacity:.5, fontSize:11, letterSpacing:'.14em'}}>
              © 2026 YUNJI LEE · DESIGNED & BUILT IN SEOUL
            </div>
            <div className="mono" style={{opacity:.5, fontSize:11, letterSpacing:'.14em'}}>
              v1.0 — Living Documentation
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

window.Skills = Skills;
window.Contact = Contact;

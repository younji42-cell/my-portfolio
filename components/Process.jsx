// components/Process.jsx — 기획→디자인→코드 흐름

function Process() {
  const [active, setActive] = React.useState(0);
  const steps = [
    {
      num: "01",
      kw: "OBSERVE",
      title: "기획 & 리서치",
      subtitle: "Planning",
      desc: "현장에서 사용자가 진짜로 막히는 지점을 찾습니다. 페인포인트를 뽑고, 친화도 분석으로 묶고, 플로우 다이어그램으로 옮깁니다.",
      deliverables: ["페인포인트 리스트", "User Journey", "IA 다이어그램", "와이어프레임"],
      visual: "wire",
    },
    {
      num: "02",
      kw: "SYSTEMIZE",
      title: "디자인 시스템",
      subtitle: "Design System",
      desc: "Figma에서 프리미티브 → 시멘틱 → 컴포넌트의 흐름을 설계하고, Tailwind config로 1:1 매핑합니다. 디자이너와 개발자가 같은 언어로 말하게 만듭니다.",
      deliverables: ["Design Tokens", "Tailwind config", "Component library", "Theme variants"],
      visual: "tokens",
    },
    {
      num: "03",
      kw: "SHIP",
      title: "퍼블리싱 & 코드",
      subtitle: "Development",
      desc: "React + Tailwind로 직접 구현합니다. 디자인 의도가 코드 단계에서 절대 흐려지지 않도록, 설계부터 배포까지 한 사람의 손으로 이어집니다.",
      deliverables: ["React components", "인터랙션", "접근성", "배포"],
      visual: "code",
    },
  ];

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section__header" data-reveal>
          <span className="eyebrow">02 — Process</span>
          <h2 className="section__title display">
            <em className="italic">One flow,</em> three crafts.<br/>
            <span style={{color:'var(--fg-subtle)', fontWeight:400}}>기획부터 배포까지, 끊기지 않는 한 사람의 손.</span>
          </h2>
        </div>

        <div className="process__grid">
          <ol className="process__rail">
            {steps.map((s, i) => (
              <li key={i}
                  className={"process__step " + (active === i ? "is-active" : "")}
                  onMouseEnter={() => setActive(i)}>
                <button className="process__step-btn" onClick={() => setActive(i)}>
                  <span className="process__step-num mono">{s.num}</span>
                  <div className="process__step-meta">
                    <span className="process__step-kw mono">{s.kw}</span>
                    <span className="process__step-title">{s.title}</span>
                  </div>
                  <span className="process__step-arrow">→</span>
                </button>
              </li>
            ))}
          </ol>

          <div className="process__panel" data-reveal>
            <div className="process__panel-head">
              <span className="mono" style={{fontSize:11, opacity:.55, letterSpacing:'.12em'}}>
                STEP {steps[active].num} / {steps[active].subtitle.toUpperCase()}
              </span>
              <h3 className="process__panel-title display">{steps[active].title}</h3>
              <p className="process__panel-desc">{steps[active].desc}</p>
            </div>

            <div className="process__panel-visual">
              {steps[active].visual === "wire" && <WireVisual/>}
              {steps[active].visual === "tokens" && <TokenVisual/>}
              {steps[active].visual === "code" && <CodeVisual/>}
            </div>

            <div className="process__panel-deliverables">
              <div className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em', marginBottom:8}}>DELIVERABLES</div>
              <div className="chips">
                {steps[active].deliverables.map(d => (
                  <span key={d} className="chip">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WireVisual() {
  return (
    <svg viewBox="0 0 400 220" className="viz">
      <g stroke="currentColor" fill="none" strokeWidth="1" opacity=".9">
        <rect x="20" y="20" width="160" height="16" rx="3"/>
        <rect x="20" y="44" width="100" height="10" rx="2" opacity=".5"/>
        <rect x="20" y="70" width="360" height="60" rx="4" opacity=".7"/>
        <rect x="20" y="140" width="110" height="60" rx="4" opacity=".4" strokeDasharray="3 3"/>
        <rect x="140" y="140" width="110" height="60" rx="4" opacity=".4" strokeDasharray="3 3"/>
        <rect x="260" y="140" width="120" height="60" rx="4" opacity=".4" strokeDasharray="3 3"/>
        <circle cx="370" cy="28" r="8" opacity=".6"/>
        <text x="30" y="105" fontSize="10" fontFamily="ui-monospace" opacity=".55">hero · input form</text>
        <text x="30" y="176" fontSize="9" fontFamily="ui-monospace" opacity=".45">card</text>
        <text x="150" y="176" fontSize="9" fontFamily="ui-monospace" opacity=".45">card</text>
        <text x="270" y="176" fontSize="9" fontFamily="ui-monospace" opacity=".45">card</text>
      </g>
    </svg>
  );
}

function TokenVisual() {
  return (
    <div className="tokviz">
      <div className="tokviz__col">
        <div className="tokviz__head mono">PRIMITIVE</div>
        {[50,100,300,500,700,900].map(n => (
          <div key={n} className="tokviz__row">
            <span className="tokviz__swatch" style={{background:`oklch(${100 - n*0.085}% ${n<500?0.03:0.12} 232)`}}/>
            <span className="mono">ocean-{n}</span>
          </div>
        ))}
      </div>
      <div className="tokviz__arrow">→</div>
      <div className="tokviz__col">
        <div className="tokviz__head mono">SEMANTIC</div>
        {["--bg","--fg","--primary","--border","--muted"].map((n,i) => (
          <div key={n} className="tokviz__row">
            <span className="tokviz__swatch" style={{background:`oklch(${[99,20,36,88,94][i]}% ${[0.003,0.008,0.11,0.008,0.006][i]} 232)`}}/>
            <span className="mono">{n}</span>
          </div>
        ))}
      </div>
      <div className="tokviz__arrow">→</div>
      <div className="tokviz__col">
        <div className="tokviz__head mono">COMPONENT</div>
        <button className="tokviz__btn tokviz__btn--pri">Primary</button>
        <button className="tokviz__btn tokviz__btn--sec">Secondary</button>
        <input className="tokviz__input" defaultValue="Input"/>
        <div className="tokviz__chip">Badge</div>
      </div>
    </div>
  );
}

function CodeVisual() {
  const code = [
    {t: "comment", v: "// tailwind.config.js"},
    {t: "keyword", v: "export default "},
    {t: "plain", v: "{"},
    {t: "indent", v: "  theme: { extend: { "},
    {t: "indent", v: "    colors: {"},
    {t: "string", v: "      primary: "},
    {t: "value", v: "\"oklch(36% .11 238)\","},
    {t: "string", v: "      surface: "},
    {t: "value", v: "\"var(--bg-elev)\""},
    {t: "indent", v: "    },"},
    {t: "indent", v: "    borderRadius: { lg: \"14px\" }"},
    {t: "indent", v: "  } }"},
    {t: "plain", v: "};"},
  ];
  return (
    <div className="codeviz">
      <div className="codeviz__bar">
        <span className="codeviz__dot" style={{background:'#ff5f57'}}/>
        <span className="codeviz__dot" style={{background:'#febc2e'}}/>
        <span className="codeviz__dot" style={{background:'#28c840'}}/>
        <span className="codeviz__file mono">tailwind.config.js</span>
      </div>
      <pre className="codeviz__pre mono">
{code.map((l,i) => (
  <div key={i} className={"codeviz__line codeviz__line--"+l.t}>
    <span className="codeviz__num">{String(i+1).padStart(2,'0')}</span>
    <span>{l.v}</span>
  </div>
))}
      </pre>
    </div>
  );
}

window.Process = Process;

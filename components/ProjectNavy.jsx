// components/ProjectNavy.jsx — 해군 기상입력 플랫폼 (가로 스크롤 타임라인)

function ProjectNavy() {
  const scrollRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [activeChapter, setActiveChapter] = React.useState(0);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const p = el.scrollLeft / (el.scrollWidth - el.clientWidth);
      setProgress(p);
      const chapIdx = Math.min(4, Math.floor(p * 5));
      setActiveChapter(chapIdx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToChapter = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[0]?.children[idx];
    if (card) el.scrollTo({ left: card.offsetLeft - 40, behavior: 'smooth' });
  };

  const chapters = ["Problem", "Research", "System", "Interaction", "Result"];

  return (
    <section id="project-navy" className="section project-navy">
      <div className="container">
        <div className="section__header" data-reveal>
          <span className="eyebrow">03 — Featured Project</span>
          <div className="project-navy__meta">
            <div>
              <h2 className="section__title display" style={{marginBottom:4}}>
                해군 기상입력 플랫폼
              </h2>
              <div className="mono" style={{color:'var(--fg-subtle)', fontSize:13, letterSpacing:'.04em'}}>
                NAVAL WEATHER INPUT PLATFORM · 2025—2026 · UX Research → Design System → Dev
              </div>
            </div>
            <div className="project-navy__tags">
              <span className="chip chip--solid">B2G</span>
              <span className="chip">Decision Support</span>
              <span className="chip">Data Integrity</span>
            </div>
          </div>
        </div>

        {/* Chapter nav */}
        <div className="timeline-nav">
          <div className="timeline-nav__track">
            <div className="timeline-nav__progress" style={{width: `${progress*100}%`}}/>
          </div>
          <div className="timeline-nav__chapters">
            {chapters.map((c, i) => (
              <button
                key={c}
                className={"timeline-nav__chip " + (activeChapter === i ? "is-active" : "")}
                onClick={() => scrollToChapter(i)}
              >
                <span className="mono" style={{opacity:.5, fontSize:10}}>{String(i+1).padStart(2,'0')}</span>
                <span>{c}</span>
              </button>
            ))}
          </div>
          <div className="timeline-nav__hint mono">
            <span>← DRAG · SCROLL →</span>
          </div>
        </div>

        <div className="timeline" ref={scrollRef}>
          <div className="timeline__track">
            <ChapterProblem/>
            <ChapterResearch/>
            <ChapterSystem/>
            <ChapterInteraction/>
            <ChapterResult/>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Chapter 01: Problem ───── */
function ChapterProblem() {
  const pains = [
    {
      num: "P1",
      title: "데이터 정합성 결여",
      desc: "변수 간 논리적 모순이 그대로 입력됨. 시스템이 막지 않음.",
      examples: [
        { left: "날씨: 맑음", op: "+", right: "강수확률: 85%", wrong: true },
        { left: "풍속: 12 m/s", op: ">", right: "Gust(돌풍): 8 m/s", wrong: true },
        { left: "유의파고: 3.2 m", op: ">", right: "최대파고: 2.8 m", wrong: true },
      ],
    },
    {
      num: "P2",
      title: "고비용·저효율 수정",
      desc: "모델 값 일부만 반영하고 싶어도 전체가 덮어써지거나 기능이 죽어버림.",
    },
    {
      num: "P3",
      title: "직관성 낮은 UI/UX",
      desc: "24시간 흐름이 한눈에 안 보이고, 연관 변수(바람-파도)가 흩어져 있음.",
    },
    {
      num: "P4",
      title: "시스템 지능화 부재",
      desc: "\"아침 기온은 모델보다 항상 높다\"같은 실무 패턴을 매번 수동 보정.",
    },
  ];

  return (
    <article className="chapter chapter--problem">
      <header className="chapter__head">
        <div className="chapter__num mono">01 / 05</div>
        <div className="chapter__kw mono">PROBLEM</div>
        <h3 className="chapter__title display">
          도구가 <em className="italic">수동적</em>이다.
        </h3>
        <p className="chapter__lead">
          단순 입력 도구가 아니라, <strong>전문가의 판단을 데이터로 변환하는 의사결정 지원 도구</strong>여야 한다.
          현 시스템은 오타 한 번, 모순 한 줄을 잡지 못한다.
        </p>
      </header>

      <div className="pain-grid">
        {pains.map(p => (
          <div key={p.num} className={"pain-card " + (p.examples ? "pain-card--wide" : "")}>
            <div className="pain-card__head">
              <span className="pain-card__num mono">{p.num}</span>
              <h4 className="pain-card__title">{p.title}</h4>
            </div>
            <p className="pain-card__desc">{p.desc}</p>
            {p.examples && (
              <div className="pain-examples">
                {p.examples.map((e, i) => (
                  <div key={i} className="pain-example">
                    <span className="pain-example__left">{e.left}</span>
                    <span className="pain-example__op mono">{e.op}</span>
                    <span className="pain-example__right">{e.right}</span>
                    <span className="pain-example__flag">
                      <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1v6M6 10v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      논리 모순
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

/* ───── Chapter 02: Research ───── */
function ChapterResearch() {
  const affinity = [
    { theme: "정합성", color: "var(--accent-coral)", items: ["모순 차단 없음", "Outlier 통과", "사후 QC"] },
    { theme: "효율성", color: "var(--accent-amber)", items: ["부분 반영 불가", "수동 복붙", "작업 흐름 단절"] },
    { theme: "직관성", color: "var(--accent-teal)", items: ["24h 안 보임", "변수 흩어짐", "모바일 불가"] },
    { theme: "지능화", color: "var(--accent-violet)", items: ["패턴 학습 無", "예보관 경험 미반영", "실측 대조 수동"] },
  ];
  return (
    <article className="chapter chapter--research">
      <header className="chapter__head">
        <div className="chapter__num mono">02 / 05</div>
        <div className="chapter__kw mono">RESEARCH</div>
        <h3 className="chapter__title display">
          현장의 목소리를 <em className="italic">묶어냈다.</em>
        </h3>
        <p className="chapter__lead">
          예보관 인터뷰 8회, 섀도잉 3회. 92개 포스트잇을 4개의 축으로 친화도 분석.
        </p>
      </header>

      <div className="affinity">
        {affinity.map(a => (
          <div key={a.theme} className="affinity__col">
            <div className="affinity__head">
              <span className="affinity__dot" style={{background:a.color}}/>
              <span className="affinity__theme">{a.theme}</span>
              <span className="affinity__count mono">{a.items.length}</span>
            </div>
            <div className="affinity__notes">
              {a.items.map((it, i) => (
                <div key={i} className="affinity__note" style={{'--accent':a.color, transform:`rotate(${(i%2?-1:1)*(0.6+i*0.3)}deg)`}}>
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="insight">
        <div className="insight__label mono">UX INSIGHT</div>
        <p className="insight__text">
          이 시스템은 단순한 <s>기입 도구</s>가 아니라,
          <strong> 전문적 판단을 데이터로 변환하는 의사결정 지원 도구</strong>다.
          입력을 위한 UI가 아니라 <em>판단을 위한 환경</em>을 설계해야 한다.
        </p>
      </div>
    </article>
  );
}

/* ───── Chapter 03: System ───── */
function ChapterSystem() {
  return (
    <article className="chapter chapter--system">
      <header className="chapter__head">
        <div className="chapter__num mono">03 / 05</div>
        <div className="chapter__kw mono">DESIGN SYSTEM</div>
        <h3 className="chapter__title display">
          Figma → Tailwind <em className="italic">1:1 매핑.</em>
        </h3>
        <p className="chapter__lead">
          Primitive → Semantic → Component. 세 단계를 건너뛰지 않으면, 디자인은 코드가 되고 코드는 디자인이 된다.
        </p>
      </header>

      <div className="system-grid">
        <div className="system-card">
          <div className="system-card__head">
            <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>TOKEN FLOW</span>
            <h4>Primitive → Semantic → Component</h4>
          </div>
          <div className="flow">
            <div className="flow__layer">
              <div className="flow__layer-label mono">PRIMITIVE</div>
              <div className="flow__swatches">
                {[50,100,200,300,400,500,600,700,800,900].map(n => (
                  <div key={n} className="flow__swatch" title={`ocean-${n}`}
                       style={{background: `oklch(${100 - n*0.085}% ${n<500?0.02+n*0.0001:0.14-(n-500)*0.00015} 232)`}}/>
                ))}
              </div>
              <div className="mono" style={{fontSize:10, opacity:.5, marginTop:6}}>ocean-50 … 900</div>
            </div>
            <div className="flow__arrow">↓</div>
            <div className="flow__layer">
              <div className="flow__layer-label mono">SEMANTIC</div>
              <div className="flow__sem">
                <div className="flow__sem-row"><span className="flow__sem-sw" style={{background:'oklch(36% 0.11 238)'}}/><span className="mono">--primary</span><span className="mono" style={{opacity:.4}}>= ocean-700</span></div>
                <div className="flow__sem-row"><span className="flow__sem-sw" style={{background:'oklch(99% 0.003 230)'}}/><span className="mono">--bg</span><span className="mono" style={{opacity:.4}}>= slate-0</span></div>
                <div className="flow__sem-row"><span className="flow__sem-sw" style={{background:'oklch(72% 0.14 30)'}}/><span className="mono">--danger</span><span className="mono" style={{opacity:.4}}>= coral-500</span></div>
              </div>
            </div>
            <div className="flow__arrow">↓</div>
            <div className="flow__layer">
              <div className="flow__layer-label mono">COMPONENT</div>
              <div className="flow__comps">
                <button className="fc-btn">Save</button>
                <button className="fc-btn fc-btn--ghost">Cancel</button>
                <span className="fc-badge">논리오류</span>
                <input className="fc-input" defaultValue="12.4"/>
              </div>
            </div>
          </div>
        </div>

        <div className="system-card system-card--code">
          <div className="system-card__head">
            <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>TAILWIND CONFIG</span>
            <h4>tailwind.config.js</h4>
          </div>
          <pre className="codeblock mono">
<span className="tk-c">{"// primitive ↔ semantic ↔ component"}</span>{"\n"}
<span className="tk-k">export default </span>{"{"}{"\n"}
{"  theme: { extend: {\n"}
{"    colors: {\n"}
<span className="tk-s">{"      ocean: "}</span>{"{ "}
<span className="tk-v">50</span>: <span className="tk-str">"oklch(98% .012 230)"</span>,{"\n"}
                <span className="tk-v">700</span>: <span className="tk-str">"oklch(36% .11 238)"</span>{" },\n"}
<span className="tk-s">{"      primary: "}</span><span className="tk-str">{"\"var(--ocean-700)\""}</span>,{"\n"}
<span className="tk-s">{"      danger:  "}</span><span className="tk-str">{"\"oklch(72% .14 30)\""}</span>,{"\n"}
{"    },\n"}
<span className="tk-s">{"    borderRadius: "}</span>{"{ lg: "}<span className="tk-str">"14px"</span>{" },\n"}
<span className="tk-s">{"    spacing:      "}</span>{"{ gutter: "}<span className="tk-str">"24px"</span>{" }\n"}
{"  } }\n"}
{"};"}
          </pre>
        </div>

        <div className="system-card system-card--compact">
          <div className="system-card__head">
            <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>SPACING · RADIUS</span>
            <h4>Rhythm</h4>
          </div>
          <div className="spacing-viz">
            {[4,8,12,16,24,32,48].map(s => (
              <div key={s} className="spacing-viz__row">
                <span className="spacing-viz__bar" style={{width: s*2}}/>
                <span className="mono">{s}px</span>
              </div>
            ))}
          </div>
          <div className="radius-viz">
            {[
              {n:'xs', v:4},{n:'sm', v:6},{n:'md', v:10},{n:'lg', v:14},{n:'xl', v:20}
            ].map(r => (
              <div key={r.n} className="radius-viz__item">
                <div className="radius-viz__box" style={{borderRadius: r.v}}/>
                <span className="mono">{r.n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ───── Chapter 04: Interaction ───── */
function ChapterInteraction() {
  // Interactive form with validation
  const [wind, setWind] = React.useState(12);
  const [gust, setGust] = React.useState(8);
  const [sig, setSig] = React.useState(3.2);
  const [max, setMax] = React.useState(2.8);
  const [hour, setHour] = React.useState(14);

  const warnGust = gust < wind;
  const warnWave = max < sig;

  // Hourly demo data
  const hourly = Array.from({length:24}, (_,i) => ({
    h: i,
    temp: 14 + Math.sin(i/24 * Math.PI * 2 - 1.2) * 6 + (i===hour?0:0),
    wind: 8 + Math.sin(i/24 * Math.PI * 2 + 0.5) * 4,
    wave: 2 + Math.sin(i/24 * Math.PI * 2) * 1.2,
  }));

  return (
    <article className="chapter chapter--interaction">
      <header className="chapter__head">
        <div className="chapter__num mono">04 / 05</div>
        <div className="chapter__kw mono">INTERACTION</div>
        <h3 className="chapter__title display">
          직접 <em className="italic">만져보세요.</em>
        </h3>
        <p className="chapter__lead">
          값을 바꿔보세요. 시스템이 물리적으로 불가능한 입력을 실시간으로 잡아냅니다.
        </p>
      </header>

      <div className="demo-grid">
        {/* Form with live validation */}
        <div className="demo-card demo-card--form">
          <div className="demo-card__head">
            <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>LIVE VALIDATION</span>
            <h4>기상 변수 입력 · {String(hour).padStart(2,'0')}:00 KST</h4>
          </div>

          <div className="field-group">
            <FieldRow label="풍속 (m/s)" value={wind} onChange={setWind} min={0} max={40} step={0.5}/>
            <FieldRow label="Gust 돌풍 (m/s)" value={gust} onChange={setGust} min={0} max={60} step={0.5}
                      warn={warnGust} warnMsg={`Gust(${gust})는 풍속(${wind})보다 작을 수 없음`}/>
          </div>

          <div className="divider"/>

          <div className="field-group">
            <FieldRow label="유의파고 (m)" value={sig} onChange={setSig} min={0} max={10} step={0.1}/>
            <FieldRow label="최대파고 (m)" value={max} onChange={setMax} min={0} max={15} step={0.1}
                      warn={warnWave} warnMsg={`최대파고(${max})가 유의파고(${sig})보다 작음`}/>
          </div>

          <div className="validation-status">
            {(warnGust || warnWave) ? (
              <>
                <div className="vs vs--bad">
                  <span className="vs__icon">!</span>
                  <span>논리 검증 실패 · {[warnGust && 'Gust', warnWave && '파고'].filter(Boolean).join(', ')}</span>
                </div>
                <button className="vs__fix" onClick={() => {
                  if (warnGust) setGust(Math.max(wind + 2, gust));
                  if (warnWave) setMax(Math.max(sig + 0.3, max));
                }}>시스템이 제안하는 값으로 수정 →</button>
              </>
            ) : (
              <div className="vs vs--good">
                <span className="vs__icon">✓</span>
                <span>기상학적 논리 검증 통과</span>
              </div>
            )}
          </div>
        </div>

        {/* 24h chart */}
        <div className="demo-card demo-card--chart">
          <div className="demo-card__head">
            <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>24H OVERVIEW</span>
            <h4>하루 흐름을 한 화면에</h4>
          </div>
          <ChartViz data={hourly} activeHour={hour} onHourChange={setHour}/>
        </div>

        {/* Intelligence */}
        <div className="demo-card demo-card--intel">
          <div className="demo-card__head">
            <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>SYSTEM SUGGESTION</span>
            <h4>학습된 실무 패턴</h4>
          </div>
          <div className="intel-list">
            <div className="intel-item">
              <span className="intel-item__pattern mono">PATTERN #17</span>
              <div className="intel-item__body">
                <div>오전 06–09시, 모델 기온이 <strong>실측보다 평균 1.8°C 낮음</strong></div>
                <div className="intel-item__action">
                  <button className="intel-btn intel-btn--apply">패턴 반영</button>
                  <button className="intel-btn">무시</button>
                </div>
              </div>
            </div>
            <div className="intel-item">
              <span className="intel-item__pattern mono">PATTERN #03</span>
              <div className="intel-item__body">
                <div>동풍 6m/s 이상 시, 유의파고 <strong>모델 대비 +0.4m 보정</strong></div>
                <div className="intel-item__action">
                  <button className="intel-btn intel-btn--apply">패턴 반영</button>
                  <button className="intel-btn">무시</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function FieldRow({ label, value, onChange, min, max, step, warn, warnMsg }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={"fieldrow " + (warn ? "is-warn" : "")}>
      <label className="fieldrow__label">{label}</label>
      <div className="fieldrow__control">
        <input
          type="range" min={min} max={max} step={step}
          value={value} onChange={e => onChange(parseFloat(e.target.value))}
          className="fieldrow__range"
          style={{'--pct': pct + '%'}}
        />
        <input
          type="number" min={min} max={max} step={step}
          value={value} onChange={e => onChange(parseFloat(e.target.value)||0)}
          className="fieldrow__num mono"
        />
      </div>
      {warn && <div className="fieldrow__warn">
        <span>⚠</span> {warnMsg}
      </div>}
    </div>
  );
}

function ChartViz({ data, activeHour, onHourChange }) {
  const W = 540, H = 220, P = { l: 32, r: 12, t: 20, b: 28 };
  const innerW = W - P.l - P.r, innerH = H - P.t - P.b;
  const x = (h) => P.l + (h/23) * innerW;
  const yTemp = (v) => P.t + innerH - ((v - 0) / 30) * innerH;
  const yWind = (v) => P.t + innerH - ((v - 0) / 20) * innerH;
  const yWave = (v) => P.t + innerH - ((v - 0) / 5) * innerH;

  const pathTemp = data.map((d,i) => `${i===0?'M':'L'} ${x(d.h)} ${yTemp(d.temp)}`).join(' ');
  const pathWind = data.map((d,i) => `${i===0?'M':'L'} ${x(d.h)} ${yWind(d.wind)}`).join(' ');
  const pathWave = data.map((d,i) => `${i===0?'M':'L'} ${x(d.h)} ${yWave(d.wave)}`).join(' ');

  const active = data[activeHour];

  return (
    <div className="chart">
      <div className="chart__legend">
        <span className="chart__legend-item"><span className="chart__legend-sw" style={{background:'var(--accent-coral)'}}/>기온 °C</span>
        <span className="chart__legend-item"><span className="chart__legend-sw" style={{background:'var(--primary)'}}/>풍속 m/s</span>
        <span className="chart__legend-item"><span className="chart__legend-sw" style={{background:'var(--accent-teal)'}}/>파고 m</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="chart__svg"
           onMouseMove={(e) => {
             const rect = e.currentTarget.getBoundingClientRect();
             const xp = ((e.clientX - rect.left) / rect.width) * W;
             const h = Math.round(((xp - P.l) / innerW) * 23);
             if (h >= 0 && h <= 23) onHourChange(h);
           }}>
        {/* grid */}
        {[0,6,12,18,23].map(h => (
          <g key={h}>
            <line x1={x(h)} y1={P.t} x2={x(h)} y2={P.t+innerH} stroke="currentColor" opacity=".08"/>
            <text x={x(h)} y={H-8} fontSize="9" textAnchor="middle" fontFamily="ui-monospace" opacity=".5">{String(h).padStart(2,'0')}</text>
          </g>
        ))}
        <line x1={P.l} y1={P.t+innerH} x2={P.l+innerW} y2={P.t+innerH} stroke="currentColor" opacity=".2"/>

        <path d={pathWave} stroke="var(--accent-teal)" strokeWidth="1.6" fill="none" opacity=".85"/>
        <path d={pathWind} stroke="var(--primary)" strokeWidth="1.6" fill="none" opacity=".85"/>
        <path d={pathTemp} stroke="var(--accent-coral)" strokeWidth="1.8" fill="none"/>

        {/* active hour */}
        <line x1={x(active.h)} y1={P.t} x2={x(active.h)} y2={P.t+innerH} stroke="var(--fg)" opacity=".25" strokeDasharray="2 3"/>
        <circle cx={x(active.h)} cy={yTemp(active.temp)} r="4" fill="var(--accent-coral)"/>
        <circle cx={x(active.h)} cy={yWind(active.wind)} r="4" fill="var(--primary)"/>
        <circle cx={x(active.h)} cy={yWave(active.wave)} r="4" fill="var(--accent-teal)"/>
      </svg>
      <div className="chart__readout">
        <div><span className="mono" style={{opacity:.5}}>HH</span> <strong>{String(active.h).padStart(2,'0')}:00</strong></div>
        <div><span style={{color:'var(--accent-coral)'}}>●</span> {active.temp.toFixed(1)}°C</div>
        <div><span style={{color:'var(--primary)'}}>●</span> {active.wind.toFixed(1)} m/s</div>
        <div><span style={{color:'var(--accent-teal)'}}>●</span> {active.wave.toFixed(1)} m</div>
      </div>
    </div>
  );
}

/* ───── Chapter 05: Result ───── */
function ChapterResult() {
  return (
    <article className="chapter chapter--result">
      <header className="chapter__head">
        <div className="chapter__num mono">05 / 05</div>
        <div className="chapter__kw mono">RESULT</div>
        <h3 className="chapter__title display">
          수동 도구에서 <em className="italic">판단 환경으로.</em>
        </h3>
      </header>

      <div className="result-grid">
        <div className="result-stat">
          <div className="result-stat__num display">−68<span style={{fontSize:'.4em'}}>%</span></div>
          <div className="result-stat__label">논리 모순 입력 건수</div>
          <div className="mono" style={{fontSize:10, opacity:.5, marginTop:4}}>파일럿 2주 기준</div>
        </div>
        <div className="result-stat">
          <div className="result-stat__num display">×3.2</div>
          <div className="result-stat__label">입력 처리 속도</div>
          <div className="mono" style={{fontSize:10, opacity:.5, marginTop:4}}>단일 예보 기준</div>
        </div>
        <div className="result-stat">
          <div className="result-stat__num display">24h</div>
          <div className="result-stat__label">한 화면에 보이는 흐름</div>
          <div className="mono" style={{fontSize:10, opacity:.5, marginTop:4}}>기존 4스크롤 → 1뷰</div>
        </div>
        <div className="result-quote">
          <div className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em', marginBottom:12}}>FIELD FEEDBACK</div>
          <blockquote>
            "이제야 이 화면이 <em>생각하는 도구</em>처럼 느껴진다."
          </blockquote>
          <div className="result-quote__who mono">— 예보관 K, 파일럿 참여자</div>
        </div>
      </div>
    </article>
  );
}

window.ProjectNavy = ProjectNavy;

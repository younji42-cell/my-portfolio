// components/Playground.jsx — Design System Playground

function Playground({ radiusScale, onRadiusChange, accent, onAccentChange }) {
  const [btnState, setBtnState] = React.useState('default');
  const [inputValue, setInputValue] = React.useState('type here...');
  const [toggleOn, setToggleOn] = React.useState(true);
  const [tabIdx, setTabIdx] = React.useState(0);

  const accents = [
    { name: 'Ocean', hue: 232 },
    { name: 'Teal', hue: 190 },
    { name: 'Violet', hue: 285 },
    { name: 'Coral', hue: 30 },
  ];

  return (
    <section id="playground" className="section playground">
      <div className="container">
        <div className="section__header" data-reveal>
          <span className="eyebrow">05 — Design System Playground</span>
          <h2 className="section__title display">
            시스템을 <em className="italic">만져보는</em> 공간.
          </h2>
          <p style={{color:'var(--fg-muted)', maxWidth:560, marginTop:8}}>
            토큰을 바꾸면 컴포넌트가 실시간으로 반응합니다. 디자인과 코드가 같은 언어를 쓴다는 뜻.
          </p>
        </div>

        <div className="playground__controls" data-reveal data-delay="1">
          <div className="pctrl">
            <div className="pctrl__label mono">ACCENT HUE</div>
            <div className="pctrl__row">
              {accents.map(a => (
                <button key={a.name}
                        className={"accent-swatch " + (accent === a.hue ? "is-active" : "")}
                        style={{background: `oklch(56% 0.14 ${a.hue})`}}
                        onClick={() => onAccentChange(a.hue)}
                        title={a.name}>
                  <span className="mono">{a.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="pctrl">
            <div className="pctrl__label mono">RADIUS SCALE · {radiusScale.toFixed(1)}×</div>
            <input
              type="range" min="0" max="2" step="0.1"
              value={radiusScale}
              onChange={e => onRadiusChange(parseFloat(e.target.value))}
              className="pctrl__range"
            />
            <div className="pctrl__row mono" style={{fontSize:10, opacity:.5, justifyContent:'space-between'}}>
              <span>SHARP</span><span>CURRENT</span><span>PILL</span>
            </div>
          </div>
        </div>

        <div className="playground__grid">
          {/* Buttons */}
          <div className="pg-card">
            <div className="pg-card__head">
              <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>COMPONENT</span>
              <h4>Button</h4>
            </div>
            <div className="pg-card__body pg-buttons">
              <button className="btn btn--primary">Primary</button>
              <button className="btn btn--secondary">Secondary</button>
              <button className="btn btn--ghost">Ghost</button>
              <button className="btn btn--primary" disabled>Disabled</button>
              <button className="btn btn--danger">Danger</button>
              <button className="btn btn--primary btn--sm">Small</button>
            </div>
          </div>

          {/* Inputs */}
          <div className="pg-card">
            <div className="pg-card__head">
              <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>COMPONENT</span>
              <h4>Input</h4>
            </div>
            <div className="pg-card__body pg-inputs">
              <label className="field">
                <span className="field__label">이메일</span>
                <input className="field__input" value={inputValue}
                       onChange={e=>setInputValue(e.target.value)}/>
              </label>
              <label className="field field--error">
                <span className="field__label">비밀번호</span>
                <input className="field__input" type="password" defaultValue="abc"/>
                <span className="field__hint">8자 이상 입력하세요</span>
              </label>
              <label className="field">
                <span className="field__label">Select</span>
                <select className="field__input">
                  <option>Option A</option>
                  <option>Option B</option>
                </select>
              </label>
            </div>
          </div>

          {/* Toggle + Chips + Badges */}
          <div className="pg-card">
            <div className="pg-card__head">
              <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>CONTROLS</span>
              <h4>Toggle · Chip · Badge</h4>
            </div>
            <div className="pg-card__body pg-misc">
              <div className="pg-misc__row">
                <span>Notifications</span>
                <button className={"pg-toggle " + (toggleOn?"is-on":"")}
                        onClick={()=>setToggleOn(!toggleOn)}>
                  <span className="pg-toggle__knob"/>
                </button>
              </div>
              <div className="pg-misc__chips">
                <span className="chip">Default</span>
                <span className="chip chip--solid">Solid</span>
                <span className="chip chip--danger">Danger</span>
              </div>
              <div className="pg-misc__badges">
                <span className="badge badge--success"><span className="badge__dot"/>Active</span>
                <span className="badge badge--warn"><span className="badge__dot"/>Pending</span>
                <span className="badge badge--danger"><span className="badge__dot"/>Error</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="pg-card pg-card--wide">
            <div className="pg-card__head">
              <span className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>NAVIGATION</span>
              <h4>Tabs</h4>
            </div>
            <div className="pg-card__body">
              <div className="pg-tabs">
                {['Overview','Components','Tokens','Motion'].map((t,i) => (
                  <button key={t}
                          className={"pg-tab " + (tabIdx===i?"is-active":"")}
                          onClick={()=>setTabIdx(i)}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="pg-tab-body">
                <div className="mono" style={{fontSize:11, opacity:.5, letterSpacing:'.12em'}}>
                  {['OVERVIEW','COMPONENTS','TOKENS','MOTION'][tabIdx]}
                </div>
                <p style={{marginTop:6}}>
                  {[
                    '시스템의 전체 구조와 사용 원칙을 한 화면에 정리했습니다.',
                    '42개 컴포넌트가 프리미티브 토큰 위에 올라갑니다.',
                    '컬러 78 · 간격 8 · 라디우스 5 · 그림자 3 단계.',
                    'Cubic-bezier(.2, .8, .2, 1) 기반의 스프링 같은 전환.',
                  ][tabIdx]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Playground = Playground;

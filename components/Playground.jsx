// components/Playground.jsx — Design System Playground (토큰 파이프라인 포함)

function Playground({ radiusScale, onRadiusChange, accent, onAccentChange }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [semTheme, setSemTheme] = React.useState('light');
  const [btnState, setBtnState] = React.useState('default');
  const [inputValue, setInputValue] = React.useState('type here...');
  const [toggleOn, setToggleOn] = React.useState(true);
  const [tabIdx, setTabIdx] = React.useState(0);

  const accents = [
    { name: 'Ocean',  hue: 232 },
    { name: 'Teal',   hue: 190 },
    { name: 'Violet', hue: 285 },
    { name: 'Coral',  hue: 30  },
  ];

  /* ── 파이프라인 스텝 메타 ── */
  const STEPS = [
    { num: '01', en: 'Figma Variables',  ko: '피그마 변수 설정' },
    { num: '02', en: 'Primitive Tokens', ko: '원시 토큰'        },
    { num: '03', en: 'Semantic Tokens',  ko: '시맨틱 토큰'      },
    { num: '04', en: 'Component Tokens', ko: '컴포넌트 토큰'    },
  ];

  /* ── 01 Figma Variables 데이터 ── */
  const FIG_GROUPS = [
    {
      color: 'oklch(56% 0.14 232)',
      title: 'Color / Primitive',
      vars: [
        { name: 'ocean-50',     swatch: 'oklch(98% 0.012 230)',  val: 'oklch(98%…)'  },
        { name: 'ocean-500',    swatch: 'oklch(56% 0.14 232)',   val: 'oklch(56%…)'  },
        { name: 'ocean-700',    swatch: 'oklch(36% 0.11 238)',   val: 'oklch(36%…)'  },
        { name: 'ocean-900',    swatch: 'oklch(18% 0.055 242)',  val: 'oklch(18%…)'  },
        { name: 'accent-teal',  swatch: 'oklch(70% 0.13 190)',   val: 'oklch(70%…)'  },
        { name: 'accent-coral', swatch: 'oklch(72% 0.14 30)',    val: 'oklch(72%…)'  },
      ],
    },
    {
      color: 'oklch(70% 0.13 190)',
      title: 'Number / Spacing & Radius',
      vars: [
        { name: 'spacing-1',  spacingW: 4,   val: '4px'  },
        { name: 'spacing-2',  spacingW: 8,   val: '8px'  },
        { name: 'spacing-4',  spacingW: 16,  val: '16px' },
        { name: 'spacing-8',  spacingW: 32,  val: '32px' },
        { name: 'radius-md',  radiusPx: 10,  val: '10px' },
        { name: 'radius-xl',  radiusPx: 20,  val: '20px' },
      ],
    },
    {
      color: 'oklch(72% 0.14 30)',
      title: 'String / Typography',
      vars: [
        { name: 'font-sans',       typePreview: 'Pretendard', style: {}                    },
        { name: 'font-mono',       typePreview: 'JetBrains',  style: { fontFamily: 'monospace' } },
        { name: 'size-body',       val: '16px'  },
        { name: 'size-sm',         val: '13px'  },
        { name: 'weight-regular',  val: '400'   },
        { name: 'weight-bold',     val: '600'   },
      ],
    },
  ];

  /* ── 02 Primitive — 컬러 스케일 ── */
  const OCEAN_SCALE = [
    { stop: '50',  bg: 'oklch(98% 0.012 230)', dark: true  },
    { stop: '100', bg: 'oklch(95% 0.022 230)', dark: true  },
    { stop: '200', bg: 'oklch(89% 0.04 230)',  dark: true  },
    { stop: '300', bg: 'oklch(80% 0.07 230)',  dark: true  },
    { stop: '400', bg: 'oklch(68% 0.11 230)',  dark: false },
    { stop: '500', bg: 'oklch(56% 0.14 232)',  dark: false },
    { stop: '600', bg: 'oklch(46% 0.14 235)',  dark: false },
    { stop: '700', bg: 'oklch(36% 0.11 238)',  dark: false },
    { stop: '800', bg: 'oklch(26% 0.08 240)',  dark: false },
    { stop: '900', bg: 'oklch(18% 0.055 242)', dark: false },
    { stop: '950', bg: 'oklch(12% 0.04 244)',  dark: false },
  ];
  const ACCENTS = [
    { name: 'Teal',   bg: 'oklch(70% 0.13 190)', dark: false },
    { name: 'Coral',  bg: 'oklch(72% 0.14 30)',  dark: false },
    { name: 'Amber',  bg: 'oklch(80% 0.13 85)',  dark: true  },
    { name: 'Violet', bg: 'oklch(66% 0.16 285)', dark: false },
  ];
  const SPACINGS = [
    { name: 's-1',  val: '4px',  w: 4   },
    { name: 's-2',  val: '8px',  w: 8   },
    { name: 's-4',  val: '16px', w: 16  },
    { name: 's-6',  val: '24px', w: 24  },
    { name: 's-8',  val: '32px', w: 32  },
    { name: 's-12', val: '48px', w: 48  },
  ];

  /* ── 03 Semantic 데이터 ── */
  const SEM = {
    light: {
      bg: [
        { name: '--bg',        label: '배경 기본',    swatch: 'oklch(99.2% 0.003 230)', ref: 'slate-0'    },
        { name: '--bg-elev',   label: '카드/엘리베이션', swatch: '#ffffff',              ref: 'white'      },
        { name: '--bg-sunken', label: '함몰 영역',    swatch: 'oklch(97.5% 0.004 230)', ref: 'slate-50'   },
        { name: '--bg-muted',  label: '비활성 배경',  swatch: 'oklch(94% 0.006 230)',   ref: 'slate-100'  },
      ],
      fg: [
        { name: '--fg',          label: '본문 텍스트',    swatch: 'oklch(13% 0.008 242)',  ref: 'slate-900'   },
        { name: '--fg-muted',    label: '보조 텍스트',    swatch: 'oklch(38% 0.014 234)',  ref: 'slate-600'   },
        { name: '--primary',     label: '주요 인터랙션',  swatch: 'oklch(36% 0.11 238)',   ref: 'ocean-700'   },
        { name: '--primary-soft',label: '소프트 배경',    swatch: 'oklch(95% 0.028 232)',  ref: 'ocean-50 mix'},
      ],
    },
    dark: {
      bg: [
        { name: '--bg',        label: '배경 기본',    swatch: 'oklch(12% 0.04 244)',   ref: 'ocean-950'  },
        { name: '--bg-elev',   label: '카드/엘리베이션', swatch: 'oklch(18% 0.055 242)', ref: 'ocean-900'  },
        { name: '--bg-sunken', label: '함몰 영역',    swatch: 'oklch(10% 0.035 244)',  ref: 'custom'     },
        { name: '--bg-muted',  label: '비활성 배경',  swatch: 'oklch(26% 0.08 240)',   ref: 'ocean-800'  },
      ],
      fg: [
        { name: '--fg',          label: '본문 텍스트',    swatch: 'oklch(97.5% 0.004 230)',ref: 'slate-50'    },
        { name: '--fg-muted',    label: '보조 텍스트',    swatch: 'oklch(78% 0.01 230)',   ref: 'slate-300'   },
        { name: '--primary',     label: '주요 인터랙션',  swatch: 'oklch(68% 0.11 230)',   ref: 'ocean-400'   },
        { name: '--primary-soft',label: '소프트 배경',    swatch: 'oklch(25% 0.08 240)',   ref: 'ocean custom'},
      ],
    },
  };

  /* ── 04 Component Token 데이터 ── */
  const COMP_TOKENS = [
    {
      name: 'Button',
      tokens: [
        { name: 'btn-bg',         val: '→ --primary'      },
        { name: 'btn-bg-hover',   val: '→ --primary-hover' },
        { name: 'btn-color',      val: '→ --primary-fg'   },
        { name: 'btn-radius',     val: '→ --r-md (10px)'  },
        { name: 'btn-padding',    val: '9px 14px'          },
        { name: 'btn-font-size',  val: '13px / 500'        },
      ],
    },
    {
      name: 'Input',
      tokens: [
        { name: 'input-bg',           val: '→ --bg'        },
        { name: 'input-border',       val: '→ --border'    },
        { name: 'input-border-focus', val: '→ --primary'   },
        { name: 'input-radius',       val: '→ --r-md (10px)'},
        { name: 'input-padding',      val: '9px 12px'       },
        { name: 'input-font-size',    val: '14px / 400'     },
      ],
    },
  ];

  /* ────────────── 렌더 헬퍼 ────────────── */

  function FigVar({ v }) {
    if (v.swatch) {
      return (
        <div className="pg-figvar">
          <span className="pg-figvar__name mono">{v.name}</span>
          <div className="pg-figvar__val">
            <div className="pg-swatch" style={{ background: v.swatch }} />
            <span className="pg-figvar__text mono">{v.val}</span>
          </div>
        </div>
      );
    }
    if (v.spacingW !== undefined) {
      return (
        <div className="pg-figvar">
          <span className="pg-figvar__name mono">{v.name}</span>
          <div className="pg-figvar__val">
            <div className="pg-spacing-bar" style={{ width: v.spacingW * 3 }} />
            <span className="pg-figvar__text mono">{v.val}</span>
          </div>
        </div>
      );
    }
    if (v.radiusPx !== undefined) {
      return (
        <div className="pg-figvar">
          <span className="pg-figvar__name mono">{v.name}</span>
          <div className="pg-figvar__val">
            <div className="pg-radius-swatch" style={{ borderRadius: v.radiusPx }} />
            <span className="pg-figvar__text mono">{v.val}</span>
          </div>
        </div>
      );
    }
    if (v.typePreview) {
      return (
        <div className="pg-figvar">
          <span className="pg-figvar__name mono">{v.name}</span>
          <div className="pg-figvar__val">
            <span className="pg-figvar__type" style={v.style}>{v.typePreview}</span>
          </div>
        </div>
      );
    }
    return (
      <div className="pg-figvar">
        <span className="pg-figvar__name mono">{v.name}</span>
        <div className="pg-figvar__val">
          <span className="pg-figvar__text mono">{v.val}</span>
        </div>
      </div>
    );
  }

  /* ────────────── 패널 컨텐츠 ────────────── */

  function Panel0() {
    return (
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>Step 01 · Figma Variables</span>
        <h3 style={{ fontSize: 'clamp(22px,3vw,32px)', marginBottom: 10, fontWeight: 500 }}>변수 그룹 정의</h3>
        <p style={{ color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: 24, maxWidth: 600, fontSize: 15 }}>
          Figma의 Variable 패널에서 <strong>Color, Number, String</strong> 세 타입으로 분류해 그룹을 구성했습니다.
          이 단계가 이후 토큰 계층의 뼈대가 됩니다.
        </p>
        <div className="pg-fig-grid">
          {FIG_GROUPS.map(g => (
            <div key={g.title} className="pg-fig-group">
              <div className="pg-fig-group__head">
                <div className="pg-fig-group__dot" style={{ background: g.color }} />
                <span className="pg-fig-group__title mono">{g.title}</span>
              </div>
              <div className="pg-fig-group__body">
                {g.vars.map((v, i) => <FigVar key={i} v={v} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Panel1() {
    return (
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>Step 02 · Primitive Tokens</span>
        <h3 style={{ fontSize: 'clamp(22px,3vw,32px)', marginBottom: 10, fontWeight: 500 }}>원시 토큰 — 팔레트 정의</h3>
        <p style={{ color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: 24, maxWidth: 600, fontSize: 15 }}>
          시스템의 가장 낮은 레이어. <strong>색상 스케일 11단계 · 4배수 스페이싱 · 5단계 라디우스</strong>를 정의합니다.
          이 값들은 직접 컴포넌트에 쓰이지 않고, 시맨틱 토큰이 참조합니다.
        </p>

        {/* Ocean Scale */}
        <div style={{ marginBottom: 24 }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Ocean Blue Scale — 11 stops</div>
          <div className="pg-color-scale">
            {OCEAN_SCALE.map(s => (
              <div key={s.stop} className="pg-scale-stop" style={{ background: s.bg }} title={`ocean-${s.stop}`}>
                <span className="pg-scale-label mono" style={{ color: s.dark ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.7)' }}>
                  {s.stop}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent */}
        <div style={{ marginBottom: 24 }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Accent Colors</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {ACCENTS.map(a => (
              <div key={a.name} className="pg-accent-block" style={{ background: a.bg }}>
                <span style={{ fontSize: 11, color: a.dark ? 'rgba(0,0,0,.6)' : 'rgba(255,255,255,.85)', fontWeight: 500 }}>
                  {a.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Spacing — 4배수 시스템</div>
          {SPACINGS.map(s => (
            <div key={s.name} className="pg-spacing-row">
              <span className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)', minWidth: 44 }}>{s.name}</span>
              <div style={{ flex: 1 }}>
                <div style={{ height: 8, width: Math.min(s.w * 5, 300), background: 'var(--primary)', borderRadius: 2, opacity: .55 }} />
              </div>
              <span className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)', minWidth: 36, textAlign: 'right' }}>{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Panel2() {
    const data = SEM[semTheme];
    return (
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>Step 03 · Semantic Tokens</span>
        <h3 style={{ fontSize: 'clamp(22px,3vw,32px)', marginBottom: 10, fontWeight: 500 }}>시맨틱 토큰 — 의미 부여</h3>
        <p style={{ color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: 20, maxWidth: 600, fontSize: 15 }}>
          원시 토큰에 <em>맥락</em>을 붙입니다. <code className="mono" style={{ background: 'var(--bg-muted)', padding: '1px 6px', borderRadius: 4, fontSize: 12 }}>--primary</code>는
          라이트 모드에서 <strong>ocean-700</strong>을, 다크 모드에서 <strong>ocean-400</strong>을 참조합니다.
          컴포넌트는 이 레이어만 바라봅니다.
        </p>

        {/* Theme toggle */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {['light', 'dark'].map(t => (
            <button
              key={t}
              onClick={() => setSemTheme(t)}
              style={{
                padding: '5px 16px',
                border: '1px solid ' + (semTheme === t ? 'var(--primary)' : 'var(--border)'),
                borderRadius: 'var(--r-pill)',
                background: semTheme === t ? 'var(--primary)' : 'transparent',
                color: semTheme === t ? '#fff' : 'var(--fg-muted)',
                fontSize: 12, cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all .2s',
              }}>
              {t === 'light' ? 'Light Mode' : 'Dark Mode'}
            </button>
          ))}
        </div>

        <div className="pg-sem-split">
          {[['bg', 'Background'], ['fg', 'Foreground & Primary']].map(([key, label]) => (
            <div key={key}>
              <div className="pg-sem-col-head mono">{label}</div>
              {data[key].map(row => (
                <div key={row.name} className="pg-sem-row">
                  <div className="pg-swatch" style={{ background: row.swatch }} />
                  <span className="mono" style={{ fontSize: 11, flex: 1 }}>{row.name}</span>
                  <span style={{ fontSize: 11, opacity: .4 }}>→</span>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--primary)', opacity: .85 }}>{row.ref}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div style={{ marginTop: 20, padding: 16, background: 'var(--bg-sunken)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Token 참조 흐름</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto' }}>
            {[
              { label: 'Primitive', val: 'ocean-700', highlight: false },
              null,
              { label: 'Semantic',  val: '--primary', highlight: true  },
              null,
              { label: 'Component', val: 'btn-bg',    highlight: false },
            ].map((node, i) =>
              node === null
                ? <div key={i} style={{ padding: '0 8px', color: 'var(--fg-muted)', fontSize: 18, opacity: .4 }}>→</div>
                : (
                  <div key={i} style={{
                    flexShrink: 0, padding: '10px 16px', borderRadius: 'var(--r-lg)',
                    border: '1px solid ' + (node.highlight ? 'var(--primary)' : 'var(--border)'),
                    background: node.highlight ? 'oklch(46% 0.14 235 / .08)' : 'var(--bg)',
                    textAlign: 'center', minWidth: 110,
                  }}>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--fg-muted)', marginBottom: 4 }}>{node.label}</div>
                    <div className="mono" style={{ fontSize: 12, color: node.highlight ? 'var(--primary)' : 'var(--fg)' }}>{node.val}</div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
  }

  function Panel3() {
    return (
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>Step 04 · Component Tokens</span>
        <h3 style={{ fontSize: 'clamp(22px,3vw,32px)', marginBottom: 10, fontWeight: 500 }}>컴포넌트 토큰 — 구현</h3>
        <p style={{ color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: 24, maxWidth: 600, fontSize: 15 }}>
          시맨틱 토큰을 구체적인 컴포넌트 속성으로 연결합니다.
          Button과 Input 모두 동일한 <code className="mono" style={{ background: 'var(--bg-muted)', padding: '1px 6px', borderRadius: 4, fontSize: 12 }}>--primary</code>를
          참조하면서도, 각자의 역할에 맞게 다르게 표현됩니다.
        </p>

        <div className="pg-comp-grid">
          {COMP_TOKENS.map(comp => (
            <div key={comp.name} className="pg-comp-card">
              <div className="pg-comp-card__head mono">{comp.name} Component</div>
              <div className="pg-comp-card__body">
                {comp.tokens.map(t => (
                  <div key={t.name} className="pg-comp-token-row">
                    <span className="mono" style={{ fontSize: 11, flex: 1 }}>{t.name}</span>
                    <span className="mono" style={{ fontSize: 10, color: 'var(--primary)', opacity: .85 }}>{t.val}</span>
                  </div>
                ))}

                {/* Live preview */}
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                  <div className="eyebrow" style={{ marginBottom: 10 }}>Live preview</div>
                  {comp.name === 'Button' && (
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                      <button className="btn btn--primary">Primary</button>
                      <button className="btn btn--secondary">Secondary</button>
                      <button className="btn btn--ghost">Ghost</button>
                    </div>
                  )}
                  {comp.name === 'Input' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label className="field">
                        <span className="field__label">이메일</span>
                        <input className="field__input" placeholder="focus 하면 --primary 테두리 확인" />
                      </label>
                      <label className="field field--error">
                        <span className="field__label">비밀번호</span>
                        <input className="field__input" type="password" defaultValue="abc" />
                        <span className="field__hint">8자 이상 입력하세요</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const panelComponents = [Panel0, Panel1, Panel2, Panel3];
  const ActivePanel = panelComponents[activeStep];

  return (
    <section id="playground" className="section playground">
      <div className="container">

        {/* ── 섹션 헤더 ── */}
        <div className="section__header" data-reveal>
          <span className="eyebrow">05 — Design System</span>
          <h2 className="section__title display">
            토큰으로 <em className="italic">설계하고</em>,<br />
            코드로 증명하는 시스템.
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 560, marginTop: 8, fontSize: 15, lineHeight: 1.7 }}>
            피그마 변수 정의부터 컴포넌트 구현까지 — 토큰이 흐르는 전 과정을 직접 설계했습니다.
            아래에서 단계별로 확인하거나, 오른쪽 Playground에서 실시간으로 만져볼 수 있습니다.
          </p>
        </div>

        {/* ════════════════════════════════
            토큰 파이프라인 시각화
        ════════════════════════════════ */}
        <div style={{ marginBottom: 'var(--s-16)' }} data-reveal data-delay="1">

          {/* 스텝 네비게이션 */}
          <div className="pg-pipe-steps">
            {STEPS.map((s, i) => (
              <button
                key={i}
                className={'pg-pipe-step' + (activeStep === i ? ' is-active' : '')}
                onClick={() => setActiveStep(i)}>
                <span className="pg-pipe-step__num mono">{s.num}</span>
                <span className="pg-pipe-step__en">{s.en}</span>
                <span className="pg-pipe-step__ko mono">{s.ko}</span>
              </button>
            ))}
          </div>

          {/* 패널 */}
          <div className="pg-pipe-panel">
            <ActivePanel />
          </div>
        </div>

        {/* ════════════════════════════════
            Playground — 토큰 실시간 제어
        ════════════════════════════════ */}
        <div data-reveal data-delay="2">
          <div className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>Playground · 토큰을 직접 조작해보세요</div>

          <div className="playground__controls">
            <div className="pctrl">
              <div className="pctrl__label mono">ACCENT HUE</div>
              <div className="pctrl__row">
                {accents.map(a => (
                  <button
                    key={a.name}
                    className={'accent-swatch ' + (accent === a.hue ? 'is-active' : '')}
                    style={{ background: `oklch(56% 0.14 ${a.hue})` }}
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
              <div className="pctrl__row mono" style={{ fontSize: 10, opacity: .5, justifyContent: 'space-between' }}>
                <span>SHARP</span><span>CURRENT</span><span>PILL</span>
              </div>
            </div>
          </div>

          <div className="playground__grid">
            {/* Buttons */}
            <div className="pg-card">
              <div className="pg-card__head">
                <span className="mono" style={{ fontSize: 10, opacity: .5, letterSpacing: '.14em' }}>COMPONENT</span>
                <h4>Button</h4>
              </div>
              <div className="pg-buttons">
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
                <span className="mono" style={{ fontSize: 10, opacity: .5, letterSpacing: '.14em' }}>COMPONENT</span>
                <h4>Input</h4>
              </div>
              <div className="pg-inputs">
                <label className="field">
                  <span className="field__label">이메일</span>
                  <input className="field__input" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                </label>
                <label className="field field--error">
                  <span className="field__label">비밀번호</span>
                  <input className="field__input" type="password" defaultValue="abc" />
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
                <span className="mono" style={{ fontSize: 10, opacity: .5, letterSpacing: '.14em' }}>CONTROLS</span>
                <h4>Toggle · Chip · Badge</h4>
              </div>
              <div className="pg-misc">
                <div className="pg-misc__row">
                  <span>Notifications</span>
                  <button className={'pg-toggle ' + (toggleOn ? 'is-on' : '')} onClick={() => setToggleOn(!toggleOn)}>
                    <span className="pg-toggle__knob" />
                  </button>
                </div>
                <div className="pg-misc__chips">
                  <span className="chip">Default</span>
                  <span className="chip chip--solid">Solid</span>
                  <span className="chip chip--danger">Danger</span>
                </div>
                <div className="pg-misc__badges">
                  <span className="badge badge--success"><span className="badge__dot" />Active</span>
                  <span className="badge badge--warn"><span className="badge__dot" />Pending</span>
                  <span className="badge badge--danger"><span className="badge__dot" />Error</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="pg-card pg-card--wide">
              <div className="pg-card__head">
                <span className="mono" style={{ fontSize: 10, opacity: .5, letterSpacing: '.14em' }}>NAVIGATION</span>
                <h4>Tabs</h4>
              </div>
              <div>
                <div className="pg-tabs">
                  {['Overview', 'Components', 'Tokens', 'Motion'].map((t, i) => (
                    <button
                      key={t}
                      className={'pg-tab ' + (tabIdx === i ? 'is-active' : '')}
                      onClick={() => setTabIdx(i)}>
                      {t}
                    </button>
                  ))}
                </div>
                <div className="pg-tab-body">
                  <div className="mono" style={{ fontSize: 11, opacity: .5, letterSpacing: '.12em' }}>
                    {['OVERVIEW', 'COMPONENTS', 'TOKENS', 'MOTION'][tabIdx]}
                  </div>
                  <p style={{ marginTop: 6 }}>
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
      </div>
    </section>
  );
}

window.Playground = Playground;
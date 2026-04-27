// components/Process.jsx — 세로 타임라인 (좌 1/3 sticky) + 우 2/3 스크롤

function Process() {
  const [active, setActive] = React.useState(0);

  const STEPS = [
    {
      num: '01',
      kw: 'OBSERVE',
      title: '기획 & 리서치',
      subtitle: 'Planning',
      desc: '현장에서 사용자가 진짜로 막히는 지점을 찾습니다. 페인포인트를 뽑고, 친화도 분석으로 묶고, 플로우 다이어그램으로 옮깁니다.',
      deliverables: ['페인포인트 리스트', 'User Journey', 'IA 다이어그램', '와이어프레임'],
      images: [{ src: '/my-portfolio/assets/ux-file.png', caption: 'UX정리 자료' },
      ],
      color: 'oklch(56% 0.14 232)',
      colorSoft: 'oklch(56% 0.14 232 / .08)',
    },
    {
      num: '02',
      kw: 'DESIGN',
      title: 'UI 디자인',
      subtitle: 'UI Design',
      desc: '와이어프레임을 기반으로 Figma에서 고해상도 시안을 제작합니다. 컴포넌트 단위로 설계하고, 인터랙션 프로토타입으로 검증합니다.',
      deliverables: ['High-fidelity 시안', '인터랙션 프로토타입', '반응형 레이아웃', '다크모드 시안'],
      images: [{ src: '/my-portfolio/assets/ui-img.png', caption: '메인 화면 시안' },
      ],
      color: 'oklch(62% 0.18 145)',
      colorSoft: 'oklch(62% 0.18 145 / .08)',
    },
    {
      num: '03',
      kw: 'SYSTEMIZE',
      title: '디자인 시스템',
      subtitle: 'Design System',
      desc: 'Figma에서 프리미티브 → 시맨틱 → 컴포넌트의 흐름을 설계하고, Tailwind config로 1:1 매핑합니다. 디자이너와 개발자가 같은 언어로 말하게 만듭니다.',
      deliverables: ['Design Tokens', 'Tailwind config', 'Component library', 'Theme variants'],
      images: [{ src: '/my-portfolio/assets/components.png', caption: '컴포넌트 라이브러리' },
      ],
      color: 'oklch(66% 0.16 285)',
      colorSoft: 'oklch(66% 0.16 285 / .08)',
    },
    {
      num: '04',
      kw: 'SHIP',
      title: '퍼블리싱',
      subtitle: 'Development',
      desc: 'HTML/CSS로 직접 구현합니다. 디자인 의도가 코드 단계에서 절대 흐려지지 않도록, 설계부터 배포까지 한 사람의 손으로 이어집니다.',
      deliverables: ['HTML / CSS', '인터랙션', '접근성', '배포'],
      images: [
      ],
      color: 'oklch(70% 0.15 65)',
      colorSoft: 'oklch(70% 0.15 65 / .08)',
      codeVisual: true,
    },
  ];

  return (
    <section id="process" className="section process">
      <div className="container">

        <div className="section__header" data-reveal>
          <span className="eyebrow">02 — Process</span>
          <h2 className="section__title display">
            <em className="italic">One flow, four crafts.</em><br/>
            <span>기획부터 배포까지,<br/>끊기지 않는 한 사람의 손.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 'var(--s-8)', alignItems: 'start' }}>

          {/* ── 좌측 1/3 · Sticky 타임라인 탭 ── */}
          <div style={{ position: 'sticky', top: 100 }}>

            {/* 세로 선 */}
            <div style={{ position: 'relative', paddingLeft: 28 }}>
              <div style={{
                position: 'absolute', left: 9, top: 12, bottom: 12,
                width: 1, background: 'var(--border)',
              }} />

              {STEPS.map((step, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    position: 'relative',
                    marginBottom: i < STEPS.length - 1 ? 6 : 0,
                    cursor: 'pointer',
                  }}
                >
                  {/* 점 */}
                  <div style={{
                    position: 'absolute', left: -28, top: '50%',
                    transform: 'translateY(-50%)',
                    width: 18, height: 18, borderRadius: '50%',
                    background: active === i ? step.color : 'var(--bg-elev)',
                    border: `2px solid ${active === i ? step.color : 'var(--border-strong)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all .3s cubic-bezier(.2,.7,.2,1)',
                    zIndex: 1,
                    flexShrink: 0,
                  }}>
                    {active === i && (
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
                    )}
                  </div>

                  {/* 탭 버튼 */}
                  <button
                    onClick={() => setActive(i)}
                    style={{
                      width: '100%', textAlign: 'left',
                      padding: '12px 14px',
                      background: active === i ? step.colorSoft : 'transparent',
                      border: `1px solid ${active === i ? step.color + '45' : 'transparent'}`,
                      borderRadius: 'var(--r-lg)',
                      cursor: 'pointer', fontFamily: 'inherit',
                      transition: 'all .25s cubic-bezier(.2,.7,.2,1)',
                    }}
                  >
                    <div className="mono" style={{
                      fontSize: 9, letterSpacing: '.14em', marginBottom: 3,
                      color: active === i ? step.color : 'var(--fg-subtle)',
                      transition: 'color .25s',
                    }}>{step.num} · {step.kw}</div>
                    <div style={{
                      fontSize: 14, fontWeight: 600,
                      color: active === i ? 'var(--fg)' : 'var(--fg-muted)',
                      transition: 'color .25s',
                    }}>{step.title}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── 우측 2/3 · 스크롤 콘텐츠 ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* 헤더 */}
            <div style={{
              padding: '24px',
              background: STEPS[active].colorSoft,
              border: `1px solid ${STEPS[active].color}40`,
              borderRadius: 'var(--r-xl)',
              transition: 'all .3s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 'var(--r-md)', flexShrink: 0,
                  background: STEPS[active].color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="mono" style={{ fontSize: 13, color: '#fff', fontWeight: 700 }}>
                    {STEPS[active].num}
                  </span>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 9, color: STEPS[active].color, letterSpacing: '.14em', marginBottom: 2 }}>
                    {STEPS[active].kw}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--fg)', lineHeight: 1.2 }}>
                    {STEPS[active].title}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.8, margin: '0 0 16px' }}>
                {STEPS[active].desc}
              </p>
              {/* Deliverables */}
              <div>
                <div className="mono" style={{ fontSize: 9, color: 'var(--fg-subtle)', letterSpacing: '.14em', marginBottom: 8 }}>
                  DELIVERABLES
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {STEPS[active].deliverables.map(d => (
                    <span key={d} style={{
                      padding: '5px 12px',
                      background: 'var(--bg-elev)',
                      color: STEPS[active].color,
                      border: `1px solid ${STEPS[active].color}35`,
                      borderRadius: 'var(--r-pill)', fontSize: 12, fontWeight: 500,
                    }}>{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 이미지 / 코드 비주얼 */}
            <div style={{
              background: 'var(--bg-elev)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-xl)', overflow: 'hidden',
               transition: 'border-color .3s',
            }}>
              {STEPS[active].codeVisual ? (
                <ProcessCodeVisual />
              ) : STEPS[active].images && STEPS[active].images.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {STEPS[active].images.map((img, ii) => (
                    <div key={ii} style={{ borderBottom: ii < STEPS[active].images.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <img
                        src={img.src}
                        alt={img.caption}
                        style={{ width: '100%', display: 'block' }}
                      />
                      {img.caption && (
                        <div style={{ padding: '10px 16px', background: 'var(--bg-sunken)', borderTop: '1px solid var(--border)' }}>
                          <span className="mono" style={{ fontSize: 10, color: 'var(--fg-subtle)', letterSpacing: '.08em' }}>
                            {img.caption}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                /* 플레이스홀더 */
                <div style={{
                  aspectRatio: '16 / 9',
                  background: 'var(--bg-sunken)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 10,
                  color: 'var(--fg-subtle)',
                }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="3" y="3" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
                    <rect x="8" y="9"  width="16" height="3" rx="1.5" fill="currentColor" opacity=".25"/>
                    <rect x="8" y="15" width="11" height="2" rx="1"   fill="currentColor" opacity=".18"/>
                    <rect x="8" y="20" width="14" height="2" rx="1"   fill="currentColor" opacity=".18"/>
                  </svg>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.1em', opacity: .45 }}>이미지 추가 예정</span>
                  <span style={{ fontSize: 11, opacity: .3 }}>images 배열에 src 경로를 입력하세요</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ── 퍼블리싱 코드 비주얼 ── */
function ProcessCodeVisual() {
  const code = [
    { t: 'comment', v: '/* Design Token → CSS */' },
    { t: 'keyword', v: ':root {' },
    { t: 'string',  v: '  --color-primary:' },
    { t: 'value',   v: ' oklch(44% .14 235);' },
    { t: 'string',  v: '  --radius-md:' },
    { t: 'value',   v: '     8px;' },
    { t: 'keyword', v: '}' },
    { t: 'plain',   v: '' },
    { t: 'comment', v: '/* Component */' },
    { t: 'keyword', v: '.btn--primary {' },
    { t: 'string',  v: '  background:' },
    { t: 'value',   v: '  var(--color-primary);' },
    { t: 'string',  v: '  border-radius:' },
    { t: 'value',   v: ' var(--radius-md);' },
    { t: 'keyword', v: '}' },
  ];

  const COLOR = {
    comment: 'oklch(55% 0.05 155)',
    keyword: 'oklch(72% 0.12 295)',
    string:  'oklch(76% 0.10 230)',
    value:   'oklch(82% 0.10 60)',
    plain:   'oklch(70% 0.01 230)',
  };

  return (
    <div style={{
      background: 'oklch(12% 0.02 240)',
      fontFamily: 'ui-monospace,"SF Mono",Menlo,monospace',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '10px 16px', borderBottom: '1px solid oklch(22% 0.02 240)',
      }}>
        {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
        ))}
        <span style={{ marginLeft: 8, fontSize: 10, color: 'oklch(45% 0.01 240)', letterSpacing: '.1em' }}>
          style.css
        </span>
      </div>
      <div style={{ padding: '16px 20px' }}>
        {code.map((line, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, lineHeight: 1.9 }}>
            <span style={{
              minWidth: 22, color: 'oklch(32% 0.01 240)', fontSize: 10,
              userSelect: 'none', textAlign: 'right', flexShrink: 0,
            }}>{i + 1}</span>
            <span style={{ fontSize: 12.5, whiteSpace: 'pre', color: COLOR[line.t] }}>
              {line.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.Process = Process;
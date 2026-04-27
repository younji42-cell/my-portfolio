// components/Playground.jsx — Design System Token Pipeline

function Playground() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeBtnVariant, setActiveBtnVariant] = React.useState(0);
  const [btnHoverState, setBtnHoverState] = React.useState(null);
  const [activeBtn, setActiveBtn] = React.useState(null);

  const STEPS = [
    { num: '01', en: 'Figma Variables',  ko: '피그마 변수 설정' },
    { num: '02', en: 'Primitive Tokens', ko: '원시 토큰'        },
    { num: '03', en: 'Semantic Tokens',  ko: '시맨틱 토큰'      },
    { num: '04', en: 'Component Tokens', ko: '컴포넌트 토큰'    },
  ];

  /* ── 01 Figma Variables ── */
  const FIG_COLOR_GROUPS = [
    {
      title: 'Blue Scale',
      dot: 'oklch(56% 0.14 232)',
      vars: [
        { name: 'blue-50',  swatch: 'oklch(97% 0.012 232)' },
        { name: 'blue-100', swatch: 'oklch(93% 0.025 232)' },
        { name: 'blue-200', swatch: 'oklch(86% 0.05 232)'  },
        { name: 'blue-300', swatch: 'oklch(76% 0.09 232)'  },
        { name: 'blue-400', swatch: 'oklch(64% 0.13 232)'  },
        { name: 'blue-500', swatch: 'oklch(54% 0.15 232)'  },
        { name: 'blue-600', swatch: 'oklch(44% 0.14 235)'  },
        { name: 'blue-700', swatch: 'oklch(34% 0.11 238)'  },
        { name: 'blue-800', swatch: 'oklch(24% 0.08 240)'  },
        { name: 'blue-900', swatch: 'oklch(16% 0.05 242)'  },
        { name: 'blue-950', swatch: 'oklch(10% 0.03 244)'  },
      ],
    },
    {
      title: 'Semantic Colors',
      dot: 'oklch(62% 0.18 145)',
      vars: [
        { name: 'color-success', swatch: 'oklch(62% 0.18 145)', label: 'Success' },
        { name: 'color-warning', swatch: 'oklch(75% 0.16 75)',  label: 'Warning' },
        { name: 'color-error',   swatch: 'oklch(58% 0.20 25)',  label: 'Error'   },
        { name: 'color-info',    swatch: 'oklch(60% 0.15 245)', label: 'Info'    },
      ],
    },
  ];

  const FIG_NUMBER_GROUPS = [
    {
      title: 'Spacing (4배수)',
      dot: 'oklch(70% 0.13 190)',
      vars: [
        { name: 'space-1',  val: '4px',  w: 4  },
        { name: 'space-2',  val: '8px',  w: 8  },
        { name: 'space-3',  val: '12px', w: 12 },
        { name: 'space-4',  val: '16px', w: 16 },
        { name: 'space-6',  val: '24px', w: 24 },
        { name: 'space-8',  val: '32px', w: 32 },
        { name: 'space-12', val: '48px', w: 48 },
      ],
    },
    {
      title: 'Radius (4배수)',
      dot: 'oklch(66% 0.16 285)',
      vars: [
        { name: 'radius-1',   val: '4px',   rx: 4  },
        { name: 'radius-2',   val: '8px',   rx: 8  },
        { name: 'radius-3',   val: '12px',  rx: 12 },
        { name: 'radius-4',   val: '16px',  rx: 16 },
        { name: 'radius-pill',val: '999px', rx: 20 },
      ],
    },
  ];

  const FIG_TYPE_VARS = [
    { name: 'font-display', preview: '디스플레이',  size: 22, weight: 500, desc: 'Hero · Section Title'     },
    { name: 'font-heading', preview: '헤딩',         size: 18, weight: 600, desc: 'Card Title · Modal Title' },
    { name: 'font-body',    preview: '본문',          size: 15, weight: 400, desc: 'Paragraph · Description'  },
    { name: 'font-label',   preview: '라벨',          size: 12, weight: 500, desc: 'Button · Tag · Badge'     },
    { name: 'font-caption', preview: '캡션',          size: 11, weight: 400, desc: 'Helper · Timestamp'       },
    { name: 'font-mono',    preview: 'TOKEN_NAME',   size: 12, weight: 400, desc: 'Code · ID · Token',  mono: true },
  ];

  /* ── 02 Primitive CSS ── */
  const PRIM_CSS = `/* ── Color · Blue Scale ── */
--blue-50:  oklch(97% 0.012 232);
--blue-100: oklch(93% 0.025 232);
--blue-200: oklch(86% 0.05  232);
--blue-300: oklch(76% 0.09  232);
--blue-400: oklch(64% 0.13  232);
--blue-500: oklch(54% 0.15  232);
--blue-600: oklch(44% 0.14  235);
--blue-700: oklch(34% 0.11  238);
--blue-800: oklch(24% 0.08  240);
--blue-900: oklch(16% 0.05  242);
--blue-950: oklch(10% 0.03  244);

/* ── Color · Neutral ── */
--neutral-0:   oklch(99.5% 0.002 230);
--neutral-50:  oklch(97%   0.004 230);
--neutral-100: oklch(94%   0.006 230);
--neutral-200: oklch(88%   0.008 230);
--neutral-300: oklch(78%   0.01  230);
--neutral-400: oklch(64%   0.012 230);
--neutral-500: oklch(50%   0.014 232);
--neutral-600: oklch(38%   0.014 234);
--neutral-700: oklch(28%   0.012 238);
--neutral-800: oklch(20%   0.01  240);
--neutral-900: oklch(13%   0.008 242);
--neutral-950: oklch(8%    0.006 244);

/* ── Color · Status ── */
--color-success: oklch(62% 0.18 145);
--color-warning: oklch(75% 0.16 75);
--color-error:   oklch(58% 0.20 25);
--color-info:    oklch(60% 0.15 245);

/* ── Spacing · 4배수 ── */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-6:  24px;
--space-8:  32px;
--space-12: 48px;

/* ── Radius · 4배수 ── */
--radius-1:    4px;
--radius-2:    8px;
--radius-3:    12px;
--radius-4:    16px;
--radius-pill: 999px;

/* ── Typography ── */
--font-sans:         "Pretendard Variable", system-ui, sans-serif;
--font-size-display: clamp(40px, 6vw, 80px);
--font-size-heading: clamp(20px, 2.5vw, 28px);
--font-size-body:    15px;
--font-size-label:   12px;
--font-size-caption: 11px;`;

  /* ── 03 Semantic Tokens ── */
  const SEM_GROUPS = [
    {
      label: 'Primary Color',
      color: 'oklch(44% 0.14 235)',
      tokens: [
        { name: '--color-primary',        ref: 'blue-600',    swatch: 'oklch(44% 0.14 235)',    desc: '주요 인터랙션 · 버튼 · 링크' },
        { name: '--color-primary-hover',  ref: 'blue-700',    swatch: 'oklch(34% 0.11 238)',    desc: '호버 상태' },
        { name: '--color-primary-soft',   ref: 'blue-50',     swatch: 'oklch(97% 0.012 232)',   desc: '소프트 배경 · 뱃지' },
        { name: '--color-primary-fg',     ref: 'neutral-0',   swatch: 'oklch(99.5% 0.002 230)', desc: '프라이머리 위 텍스트' },
      ],
    },
    {
      label: 'Surface Color',
      color: 'oklch(94% 0.006 230)',
      tokens: [
        { name: '--color-bg',             ref: 'neutral-0',   swatch: 'oklch(99.5% 0.002 230)', desc: '페이지 배경' },
        { name: '--color-surface',        ref: 'neutral-0',   swatch: '#ffffff',                desc: '카드 · 모달' },
        { name: '--color-surface-raised', ref: 'neutral-50',  swatch: 'oklch(97% 0.004 230)',   desc: '엘리베이션 1단계' },
        { name: '--color-surface-sunken', ref: 'neutral-100', swatch: 'oklch(94% 0.006 230)',   desc: '함몰 · 입력창 배경' },
      ],
    },
    {
      label: 'Text Color',
      color: 'oklch(13% 0.008 242)',
      tokens: [
        { name: '--color-text-primary',   ref: 'neutral-900', swatch: 'oklch(13% 0.008 242)',   desc: '제목 · 강조 텍스트' },
        { name: '--color-text-secondary', ref: 'neutral-600', swatch: 'oklch(38% 0.014 234)',   desc: '본문 · 설명' },
        { name: '--color-text-tertiary',  ref: 'neutral-400', swatch: 'oklch(64% 0.012 230)',   desc: '힌트 · 플레이스홀더' },
        { name: '--color-text-inverse',   ref: 'neutral-0',   swatch: 'oklch(99.5% 0.002 230)', desc: '어두운 배경 위 텍스트' },
      ],
    },
    {
      label: 'Border Color',
      color: 'oklch(88% 0.008 230)',
      tokens: [
        { name: '--color-border',         ref: 'neutral-200', swatch: 'oklch(88% 0.008 230)',   desc: '기본 테두리' },
        { name: '--color-border-strong',  ref: 'neutral-300', swatch: 'oklch(78% 0.01 230)',    desc: '강조 테두리' },
        { name: '--color-border-focus',   ref: 'blue-500',    swatch: 'oklch(54% 0.15 232)',    desc: '포커스 링' },
      ],
    },
    {
      label: 'Status Color',
      color: 'oklch(62% 0.18 145)',
      tokens: [
        { name: '--color-success',        ref: 'color-success', swatch: 'oklch(62% 0.18 145)', desc: '성공 · 완료' },
        { name: '--color-warning',        ref: 'color-warning', swatch: 'oklch(75% 0.16 75)',  desc: '경고 · 주의' },
        { name: '--color-error',          ref: 'color-error',   swatch: 'oklch(58% 0.20 25)',  desc: '오류 · 위험' },
        { name: '--color-info',           ref: 'color-info',    swatch: 'oklch(60% 0.15 245)', desc: '정보 · 안내' },
      ],
    },
  ];

  const FLOW_NODES = [
    { label: 'Figma Variable', val: 'blue-600',        hi: false },
    { label: 'Primitive',      val: '--blue-600',       hi: false },
    { label: 'Semantic',       val: '--color-primary',  hi: true  },
    { label: 'Component',      val: '--btn-bg',         hi: false },
    { label: 'Output',         val: 'background:#…',   hi: false },
  ];

  /* ── 04 Component Tokens ── */
  const BTN_VARIANTS = [
    {
      label: 'Primary',
      tokens: [
        { name: '--btn-bg',         val: 'color-primary'       },
        { name: '--btn-bg-hover',   val: 'color-primary-hover' },
        { name: '--btn-color',      val: 'color-primary-fg'    },
        { name: '--btn-border',     val: 'transparent'         },
        { name: '--btn-radius',     val: 'radius-2 · 8px'      },
        { name: '--btn-font',       val: 'font-label · 500'    },
      ],
      s: {
        default: { background: 'oklch(44% 0.14 235)', color: '#fff', border: '1px solid transparent' },
        hover:   { background: 'oklch(34% 0.11 238)', color: '#fff', border: '1px solid transparent' },
        active:  { background: 'oklch(26% 0.08 240)', color: '#fff', border: '1px solid transparent' },
      },
    },
    {
      label: 'Secondary',
      tokens: [
        { name: '--btn-bg',         val: 'color-surface-sunken' },
        { name: '--btn-bg-hover',   val: 'color-surface-raised' },
        { name: '--btn-color',      val: 'color-text-primary'   },
        { name: '--btn-border',     val: 'color-border'         },
        { name: '--btn-radius',     val: 'radius-2 · 8px'       },
        { name: '--btn-font',       val: 'font-label · 500'     },
      ],
      s: {
        default: { background: 'oklch(94% 0.006 230)', color: 'oklch(13% 0.008 242)', border: '1px solid oklch(88% 0.008 230)' },
        hover:   { background: 'oklch(88% 0.008 230)', color: 'oklch(13% 0.008 242)', border: '1px solid oklch(78% 0.01 230)'  },
        active:  { background: 'oklch(78% 0.01 230)',  color: 'oklch(13% 0.008 242)', border: '1px solid oklch(64% 0.012 230)' },
      },
    },
    {
      label: 'Ghost',
      tokens: [
        { name: '--btn-bg',         val: 'transparent'        },
        { name: '--btn-bg-hover',   val: 'color-primary-soft' },
        { name: '--btn-color',      val: 'color-primary'      },
        { name: '--btn-border',     val: 'color-primary'      },
        { name: '--btn-radius',     val: 'radius-2 · 8px'     },
        { name: '--btn-font',       val: 'font-label · 500'   },
      ],
      s: {
        default: { background: 'transparent',          color: 'oklch(44% 0.14 235)', border: '1px solid oklch(44% 0.14 235)' },
        hover:   { background: 'oklch(97% 0.012 232)', color: 'oklch(44% 0.14 235)', border: '1px solid oklch(44% 0.14 235)' },
        active:  { background: 'oklch(93% 0.025 232)', color: 'oklch(34% 0.11 238)', border: '1px solid oklch(34% 0.11 238)' },
      },
    },
    {
      label: 'Danger',
      tokens: [
        { name: '--btn-bg',         val: 'color-error'          },
        { name: '--btn-bg-hover',   val: 'color-error · darken' },
        { name: '--btn-color',      val: 'neutral-0'            },
        { name: '--btn-border',     val: 'transparent'          },
        { name: '--btn-radius',     val: 'radius-2 · 8px'       },
        { name: '--btn-font',       val: 'font-label · 500'     },
      ],
      s: {
        default: { background: 'oklch(58% 0.20 25)', color: '#fff', border: '1px solid transparent' },
        hover:   { background: 'oklch(48% 0.18 25)', color: '#fff', border: '1px solid transparent' },
        active:  { background: 'oklch(40% 0.16 25)', color: '#fff', border: '1px solid transparent' },
      },
    },
  ];

  const SIZE_P = { L: '12px 20px', M: '9px 16px', S: '6px 12px' };
  const SIZE_F = { L: '15px',      M: '13px',     S: '11px'      };

  const INPUT_TOKENS = [
    { name: '--input-bg',            val: 'color-surface'       },
    { name: '--input-border',        val: 'color-border'        },
    { name: '--input-border-hover',  val: 'color-border-strong' },
    { name: '--input-border-focus',  val: 'color-border-focus'  },
    { name: '--input-radius',        val: 'radius-2 · 8px'      },
    { name: '--input-padding',       val: 'space-2 · space-3'   },
    { name: '--input-font',          val: 'font-body · 400'     },
    { name: '--input-color',         val: 'color-text-primary'  },
    { name: '--input-placeholder',   val: 'color-text-tertiary' },
  ];

  /* ── 공통 서브컴포넌트 ── */
  function GroupCard({ children, style }) {
    return (
      <div style={{
        background: 'var(--bg-sunken)', border: '1px solid var(--border)',
        borderRadius: 'var(--r-lg)', overflow: 'hidden', ...style,
      }}>
        {children}
      </div>
    );
  }

  function GroupHead({ dot, title }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
        {dot && <div style={{ width: 8, height: 8, borderRadius: 2, background: dot, flexShrink: 0 }} />}
        <span className="mono" style={{ fontSize: 10, color: 'var(--fg-muted)', letterSpacing: '.1em' }}>{title}</span>
      </div>
    );
  }

  function TokenRow({ name, val, swatch, desc, last }) {
    return (
      <div style={{
        display: 'grid', gridTemplateColumns: '220px 14px 110px 1fr',
        alignItems: 'center', gap: 12, padding: '9px 16px',
        borderBottom: last ? 'none' : '1px solid var(--border)',
      }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--fg)' }}>{name}</span>
        {swatch
          ? <div style={{ width: 14, height: 14, borderRadius: 3, background: swatch, border: '1px solid var(--border-strong)', flexShrink: 0 }} />
          : <div />
        }
        <span className="mono" style={{ fontSize: 10, color: 'oklch(44% 0.14 235)', opacity: .9 }}>{val}</span>
        {desc && <span style={{ fontSize: 12, color: 'var(--fg-muted)' }}>{desc}</span>}
      </div>
    );
  }

  function SectionHeader({ step, title, desc }) {
    return (
      <div style={{ marginBottom: 24 }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>{step}</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, marginBottom: 10, lineHeight: 1.2 }}>{title}</h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.75 }}>{desc}</p>
      </div>
    );
  }

  function CodeBlock({ code }) {
    const lines = code.split('\n');
    return (
      <div style={{ background: 'oklch(12% 0.02 240)', borderRadius: 'var(--r-lg)', overflow: 'hidden', fontFamily: 'ui-monospace,"SF Mono",Menlo,monospace' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderBottom: '1px solid oklch(22% 0.02 240)' }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c,i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
          <span style={{ marginLeft: 8, fontSize: 11, color: 'oklch(45% 0.01 240)', letterSpacing: '.1em' }}>tokens.css</span>
        </div>
        <div style={{ padding: '16px 20px', overflowX: 'auto', maxHeight: 400, overflowY: 'auto' }}>
          {lines.map((line, i) => {
            const isComment  = line.trim().startsWith('/*');
            const hasProp    = line.includes(':') && !isComment;
            const colonIdx   = hasProp ? line.indexOf(':') : -1;
            const prop       = hasProp ? line.slice(0, colonIdx) : '';
            const val        = hasProp ? line.slice(colonIdx) : '';
            return (
              <div key={i} style={{ display: 'flex', gap: 16, lineHeight: 1.85 }}>
                <span style={{ minWidth: 24, color: 'oklch(32% 0.01 240)', fontSize: 11, userSelect: 'none', textAlign: 'right', flexShrink: 0 }}>{i + 1}</span>
                <span style={{ fontSize: 12.5, whiteSpace: 'pre' }}>
                  {isComment
                    ? <span style={{ color: 'oklch(52% 0.05 155)' }}>{line}</span>
                    : hasProp
                    ? <><span style={{ color: 'oklch(72% 0.12 295)' }}>{prop}</span><span style={{ color: 'oklch(82% 0.10 60)' }}>{val}</span></>
                    : <span style={{ color: 'oklch(72% 0.01 230)' }}>{line}</span>
                  }
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ── PANELS ── */
  function Panel0() {
    return (
      <div>
        <SectionHeader
          step="Step 01 · Figma Variables"
          title="변수 그룹 정의"
           desc={<>Figma의 Variable 패널에서 Color · Number · String 세 타입으로 분류합니다.<br/>색상은 Blue Scale + Status Color, 숫자는 4배수 Spacing과 Radius, 문자는 Typography 역할별로 구성합니다.</>}
        />

        <div className="eyebrow" style={{ marginBottom: 10 }}>Color Variables</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          {FIG_COLOR_GROUPS.map(g => (
            <GroupCard key={g.title}>
              <GroupHead dot={g.dot} title={g.title} />
              <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {g.vars.map(v => (
                  <div key={v.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)' }}>{v.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 14, height: 14, borderRadius: 3, background: v.swatch, border: '1px solid var(--border-strong)' }} />
                      {v.label && <span style={{ fontSize: 10, color: 'var(--fg-subtle)' }}>{v.label}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </GroupCard>
          ))}
        </div>

        <div className="eyebrow" style={{ marginBottom: 10 }}>Number Variables</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          {FIG_NUMBER_GROUPS.map(g => (
            <GroupCard key={g.title}>
              <GroupHead dot={g.dot} title={g.title} />
              <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {g.vars.map(v => (
                  <div key={v.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)', minWidth: 76 }}>{v.name}</span>
                    {v.w !== undefined
                      ? <div style={{ flex: 1 }}><div style={{ height: 7, width: Math.min(v.w * 4, 140), background: 'oklch(44% 0.14 235 / .4)', borderRadius: 2 }} /></div>
                      : <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
                          <div style={{ width: 32, height: 18, border: '1px solid var(--border-strong)', borderRadius: Math.min(v.rx, 10), background: 'transparent' }} />
                        </div>
                    }
                    <span className="mono" style={{ fontSize: 10, color: 'var(--fg-subtle)' }}>{v.val}</span>
                  </div>
                ))}
              </div>
            </GroupCard>
          ))}
        </div>

        <div className="eyebrow" style={{ marginBottom: 10 }}>String Variables · Typography</div>
        <GroupCard>
          <GroupHead dot="oklch(72% 0.14 30)" title="Typography Scale" />
          <div style={{ padding: '4px 0' }}>
            {FIG_TYPE_VARS.map((v, i) => (
              <div key={v.name} style={{
                display: 'grid', gridTemplateColumns: '108px 1fr 80px 160px',
                alignItems: 'center', gap: 16, padding: '10px 16px',
                borderBottom: i < FIG_TYPE_VARS.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span className="mono" style={{ fontSize: 10, color: 'var(--fg-muted)' }}>{v.name}</span>
                <span style={{ fontSize: v.size, fontWeight: v.weight, fontFamily: v.mono ? 'ui-monospace,monospace' : 'inherit', color: 'var(--fg)' }}>{v.preview}</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--fg-subtle)' }}>{v.size}px · {v.weight}</span>
                <span style={{ fontSize: 11, color: 'var(--fg-subtle)' }}>{v.desc}</span>
              </div>
            ))}
          </div>
        </GroupCard>
      </div>
    );
  }

  function Panel1() {
    return (
      <div>
        <SectionHeader
          step="Step 02 · Primitive Tokens"
          title="원시 토큰 — CSS 변수 정의"
          desc={<>피그마 변수를 CSS Custom Property로 그대로 옮깁니다. <br/>이 값들은 시맨틱 토큰이 참조하는 원재료이며, 컴포넌트에 직접 사용하지 않습니다.</>}
        />
        <CodeBlock code={PRIM_CSS} />
      </div>
    );
  }

  function Panel2() {
    return (
      <div>
        <SectionHeader
          step="Step 03 · Semantic Tokens"
          title="시맨틱 토큰 — 의미 부여"
          desc={<>원시 토큰에 역할을 붙입니다. 컴포넌트는 --blue-600 대신 --color-primary만 알면 됩니다.<br/>Primary · Surface · Text · Border · Status 다섯 그룹으로 나뉩니다.</>}
        />

        {SEM_GROUPS.map(g => (
          <div key={g.label} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: g.color }} />
              <span className="eyebrow">{g.label}</span>
            </div>
            <GroupCard>
              {g.tokens.map((t, i) => (
                <TokenRow key={t.name} name={t.name} val={t.ref} swatch={t.swatch} desc={t.desc} last={i === g.tokens.length - 1} />
              ))}
            </GroupCard>
          </div>
        ))}

        {/* 참조 흐름 — 꽉 차게 */}
        <div style={{ marginTop: 20, padding: '18px 20px', background: 'var(--bg-sunken)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)' }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Token 참조 흐름</div>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {FLOW_NODES.map((node, i) => (
              <React.Fragment key={i}>
                <div style={{
                  flex: 1, padding: '10px 8px',
                  borderRadius: 'var(--r-md)',
                  border: '1px solid ' + (node.hi ? 'oklch(44% 0.14 235)' : 'var(--border)'),
                  background: node.hi ? 'oklch(44% 0.14 235 / .08)' : 'var(--bg)',
                  textAlign: 'center',
                }}>
                  <div className="mono" style={{ fontSize: 9, color: 'var(--fg-muted)', marginBottom: 4, letterSpacing: '.08em' }}>{node.label}</div>
                  <div className="mono" style={{ fontSize: 11, color: node.hi ? 'oklch(44% 0.14 235)' : 'var(--fg)', fontWeight: node.hi ? 600 : 400 }}>{node.val}</div>
                </div>
                {i < FLOW_NODES.length - 1 && (
                  <div style={{ flexShrink: 0, padding: '0 4px', color: 'var(--fg-muted)', fontSize: 14, opacity: .35 }}>→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function Panel3() {
    return (
      <div>
        <SectionHeader
          step="Step 04 · Component Tokens"
          title="컴포넌트 토큰 — 구현"
           desc={<>시맨틱 토큰을 컴포넌트 속성으로 연결합니다. <br/>버튼 위에 마우스를 올리거나 클릭해 Default · Hover · Active 상태 변화를 직접 확인 할 수 있습니다.</>}
        />

        {/* Button */}
        <div className="eyebrow" style={{ marginBottom: 12 }}>Button Component</div>

        {/* Variant Tabs */}
        <div style={{ display: 'flex', gap: 2, padding: 3, background: 'var(--bg-muted)', borderRadius: 'var(--r-md)', width: 'fit-content', marginBottom: 16 }}>
          {BTN_VARIANTS.map((v, i) => (
            <button key={v.label} onClick={() => setActiveBtnVariant(i)} style={{
              padding: '5px 14px', border: 'none', fontFamily: 'inherit', fontSize: 13, cursor: 'pointer',
              borderRadius: 'calc(var(--r-md) - 3px)',
              background: activeBtnVariant === i ? 'var(--bg-elev)' : 'transparent',
              color: activeBtnVariant === i ? 'var(--fg)' : 'var(--fg-muted)',
              boxShadow: activeBtnVariant === i ? 'var(--shadow-sm)' : 'none',
              transition: 'all .2s',
            }}>{v.label}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          {/* Token list */}
          <GroupCard>
            <GroupHead title="TOKEN DEFINITION" />
            <div style={{ padding: '4px 0' }}>
              {BTN_VARIANTS[activeBtnVariant].tokens.map((t, i, arr) => (
                <div key={t.name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
                  padding: '8px 14px', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--fg)' }}>{t.name}</span>
                  <span className="mono" style={{ fontSize: 10, color: 'oklch(44% 0.14 235)', opacity: .9 }}>{t.val}</span>
                </div>
              ))}
            </div>
          </GroupCard>

          {/* Live preview */}
          <GroupCard>
            <GroupHead title="LIVE PREVIEW · HOVER & CLICK" />
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {['L', 'M', 'S'].map(size => {
                const key = `${activeBtnVariant}-${size}`;
                const isHover  = btnHoverState === key;
                const isActive = activeBtn === key;
                const st = isActive
                  ? BTN_VARIANTS[activeBtnVariant].s.active
                  : isHover
                  ? BTN_VARIANTS[activeBtnVariant].s.hover
                  : BTN_VARIANTS[activeBtnVariant].s.default;
                return (
                  <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span className="mono" style={{ fontSize: 10, color: 'var(--fg-muted)', minWidth: 10 }}>{size}</span>
                    <button
                      onMouseEnter={() => setBtnHoverState(key)}
                      onMouseLeave={() => { setBtnHoverState(null); setActiveBtn(null); }}
                      onMouseDown={() => setActiveBtn(key)}
                      onMouseUp={() => setActiveBtn(null)}
                      style={{
                        ...st, padding: SIZE_P[size], fontSize: SIZE_F[size],
                        fontWeight: 500, borderRadius: 8, cursor: 'pointer',
                        fontFamily: 'inherit', transition: 'all .15s',
                        transform: isActive ? 'scale(0.97)' : 'none',
                      }}>
                      {BTN_VARIANTS[activeBtnVariant].label}
                    </button>
                    <span style={{
                      fontSize: 11,
                      color: isActive ? 'oklch(44% 0.14 235)' : isHover ? 'var(--fg-muted)' : 'var(--fg-subtle)',
                    }}>
                      {isActive ? '● Active' : isHover ? '● Hover' : '○ Default'}
                    </span>
                  </div>
                );
              })}
            </div>
          </GroupCard>
        </div>

        {/* Input */}
        <div className="eyebrow" style={{ marginBottom: 12 }}>Input Component</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <GroupCard>
            <GroupHead title="TOKEN DEFINITION" />
            <div style={{ padding: '4px 0' }}>
              {INPUT_TOKENS.map((t, i, arr) => (
                <div key={t.name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
                  padding: '8px 14px', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--fg)' }}>{t.name}</span>
                  <span className="mono" style={{ fontSize: 10, color: 'oklch(44% 0.14 235)', opacity: .9 }}>{t.val}</span>
                </div>
              ))}
            </div>
          </GroupCard>

          <GroupCard>
            <GroupHead title="LIVE PREVIEW · STATES" />
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Default', bordered: 'oklch(88% 0.008 230)', shadow: 'none',                              placeholder: '입력하세요' },
                { label: 'Hover',   bordered: 'oklch(78% 0.01 230)',  shadow: 'none',                              placeholder: '입력하세요' },
                { label: 'Focus',   bordered: 'oklch(54% 0.15 232)',  shadow: '0 0 0 3px oklch(54% 0.15 232 / .2)', placeholder: '입력하세요' },
                { label: 'Error',   bordered: 'oklch(58% 0.20 25)',   shadow: '0 0 0 3px oklch(58% 0.20 25 / .2)', placeholder: '잘못된 입력입니다' },
              ].map(state => (
                <div key={state.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--fg-muted)', minWidth: 44 }}>{state.label}</span>
                  <input readOnly placeholder={state.placeholder} style={{
                    flex: 1, padding: '8px 12px', fontSize: 13, fontFamily: 'inherit',
                    outline: 'none', borderRadius: 8, background: 'var(--bg)', color: 'var(--fg)',
                    border: '1px solid ' + state.bordered,
                    boxShadow: state.shadow,
                  }} />
                </div>
              ))}
            </div>
          </GroupCard>
        </div>
      </div>
    );
  }

  const PANELS = [Panel0, Panel1, Panel2, Panel3];
  const ActivePanel = PANELS[activeStep];

  return (
    <section id="playground" className="section playground">
      <div className="container">

        <div className="section__header" data-reveal>
          <span className="eyebrow">05 — Design System</span>
          <h2 className="section__title display">
            토큰으로 <span style={{color:'var(--primary)'}}>설계하고</span><br />
            코드로 증명하는 시스템.
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 560, marginTop: 8, fontSize: 15, lineHeight: 1.7 }}>
            피그마 변수 정의부터 컴포넌트 구현까지 — 토큰이 흐르는 전 과정을 직접 설계하고 있습니다.
          </p>
        </div>

        <div data-reveal data-delay="1">
          {/* 탭 네비게이션 */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'var(--bg-elev)', border: '1px solid var(--border)',
            borderRadius: 'var(--r-xl)', overflow: 'hidden',
            marginBottom: 'var(--s-4)',
          }}>
            {STEPS.map((s, i) => (
              <button key={i} onClick={() => setActiveStep(i)} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 3, padding: '16px 10px',
                cursor: 'pointer', border: 'none',
                borderRight: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
                background: activeStep === i ? 'var(--primary)' : 'transparent',
                color: activeStep === i ? '#fff' : 'var(--fg-muted)',
                transition: 'all .25s', fontFamily: 'inherit',
              }}>
                <span className="mono" style={{ fontSize: 10, opacity: activeStep === i ? .65 : .45 }}>{s.num}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{s.en}</span>
                <span className="mono" style={{ fontSize: 10, opacity: activeStep === i ? .7 : .45, letterSpacing: '.04em' }}>{s.ko}</span>
              </button>
            ))}
          </div>

          {/* 패널 */}
          <div style={{
            background: 'var(--bg-elev)', border: '1px solid var(--border)',
            borderRadius: 'var(--r-xl)', padding: 'var(--s-8)', minHeight: 480,
          }}>
            <ActivePanel />
          </div>
        </div>

      </div>
    </section>
  );
}

window.Playground = Playground;
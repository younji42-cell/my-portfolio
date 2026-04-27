// components/Skills.jsx + Contact.jsx

// components/SkillsContact.jsx

function Skills() {
  const WORK_STYLES = [
    {
      num: '01',
      category: 'COLLABORATION',
      title: '협업 방식',
      // 백틱(`)을 사용해 줄바꿈과 따옴표를 자유롭게 표현했습니다.
      content: `저는 질문하는 걸 좋아해요.
질문은 생각을 정리하는 가장 빠른 도구이자, 숨어 있던 인사이트를 건져 올리는 낚싯대라고 믿거든요.
기획을 하다가도 “이거, 우리 아빠도 바로 쓸 수 있을까요?” 혹은 “사용자가 여기서 길을 잃지는 않을까요?” 같은 질문을 툭툭 던지곤 합니다.
이런 질문들이 모여 기획의 빈틈을 메우고, 결국 사용자가 '어라, 나 존중받고 있네?'라고 느끼는 디테일을 만든다고 생각해요. 함께 머리를 맞대고 '왜?'를 고민할 때 더 단단한 제품이 나온다고 믿는 분들이라면, 저와 정말 즐겁게 일하실 수 있을 거예요!`,
      tags: ['질문 중심', '인사이트 도출', '사용자 중심'],
icon: (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    {/* 1. 바깥 원: 선명하게 보이도록 정수 좌표와 두께 조정 */}
    <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* 2. 물음표: 픽셀 그리드에 딱 맞춰 찌그러짐을 없앤 완벽한 정수 패스 */}
    <path 
      d="M8.5 7.5c0-1 0.7-1.5 1.5-1.5s1.5 0.5 1.5 1.5c0 0.8-0.3 1.2-0.8 1.7L9.5 10v1" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* 3. 아래 점: 픽셀 중앙에 위치 */}
    <circle cx="10" cy="14" r="1" fill="currentColor"/>
  </svg>
),
      color: 'oklch(56% 0.14 232)',
      colorSoft: 'oklch(56% 0.14 232 / .08)',
    },
    {
      num: '02',
      category: 'COMMUNICATION',
      title: '커뮤니케이션 스타일',
      // 여기서도 백틱(`)을 사용하여 에러를 방지했습니다.
      content: `제 디자인에 '정답'은 없다고 생각해요. '더 나은 대안'이 있을 뿐!
공들여 만든 시안이라도 더 좋은 의견이 있다면 기쁘게 수용합니다. 피드백을 주고받는 과정을 공격이 아닌 '제품을 더 뾰족하게 깎는 과정'으로 여기거든요. 유연한 태도로 최선의 답을 찾아가는 치열한 티키타카를 환영합니다.`,
      tags: ['유연한 사고', '피드백 수용', '능동적 소통'],
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          {/* 말풍선 외곽: 각진 부분을 그리드에 맞춤 */}
          <path 
            d="M3 4h14v10H6l-3 3V4z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinejoin="round" 
            strokeLinecap="round"
          />
          {/* 내부 선: 소수점 좌표를 정수로 정리 */}
          <line x1="7" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="7" y1="11" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: 'oklch(62% 0.18 145)',
      colorSoft: 'oklch(62% 0.18 145 / .08)',
    },
  ];
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__header" data-reveal>
          <span className="eyebrow">06 — About My Work</span>
          <h2 className="section__title display">
            일하는 방식과<br/>
            <span style={{color:'var(--primary)'}}>지금 빠져있는 것.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-8)', alignItems: 'start' }} data-reveal data-delay="1">

          {/* ── 좌측 · 작업 방식 ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>Working Style</div>

            {WORK_STYLES.map((w, i) => (
              <div key={i} style={{
                padding: '20px 22px',
                background: 'var(--bg-elev)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-xl)',
                transition: 'border-color .2s, transform .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = w.color + '60'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
              >
                {/* 헤더 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 'var(--r-md)', flexShrink: 0,
                    background: w.colorSoft, color: w.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${w.color}30`,
                  }}>
                    {w.icon}
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 9, color: 'var(--fg-subtle)', letterSpacing: '.12em', marginBottom: 2 }}>
                      {w.num} · {w.category}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{w.title}</div>
                  </div>
                </div>

                {/* 내용 */}
                <p style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.8, margin: '0 0 12px' }}>
                  {w.content}
                </p>

                {/* 태그 */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {w.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '3px 9px',
                      background: w.colorSoft,
                      color: w.color,
                      border: `1px solid ${w.color}30`,
                      borderRadius: 'var(--r-pill)', fontSize: 11, fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── 우측 · Currently ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>Currently Into</div>

            {/* 바이브코딩 메인 카드 */}
            <div style={{
              padding: '24px',
              background: 'linear-gradient(135deg, oklch(46% 0.14 235 / .12), oklch(66% 0.16 285 / .08))',
              border: '1px solid oklch(46% 0.14 235 / .3)',
              borderRadius: 'var(--r-xl)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* 배경 장식 */}
              <div style={{
                position: 'absolute', right: -20, top: -20,
                width: 120, height: 120, borderRadius: '50%',
                background: 'oklch(56% 0.14 232 / .08)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', right: 20, bottom: -30,
                width: 80, height: 80, borderRadius: '50%',
                background: 'oklch(66% 0.16 285 / .08)',
                pointerEvents: 'none',
              }} />

              {/* 뱃지 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, position: 'relative' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '5px 12px',
                  background: 'var(--primary)', color: '#fff',
                  borderRadius: 'var(--r-pill)', fontSize: 11, fontWeight: 600,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', animation: 'pulse 2s infinite' }} />
                  NOW OBSESSED
                </div>
              </div>

              {/* 제목 */}
              <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--fg)', marginBottom: 8, lineHeight: 1.2, position: 'relative' }}>
                바이브코딩
                <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--fg-muted)', marginLeft: 8 }}>Vibe Coding</span>
              </div>

              {/* 설명 */}
              <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.8, margin: '0 0 16px', position: 'relative' }}>
                내 생각을 디자인을 넘어{' '}
                <strong style={{ color: 'var(--fg)' }}>실제 구현·동작까지 연결</strong>하는 매력을 알아버렸어요.
                집에 와서 바이브코딩에 중독된 요즘입니다.
              </p>

              {/* 코드 스니펫 느낌 */}
              <div style={{
                padding: '12px 14px',
                background: 'oklch(12% 0.02 240)',
                borderRadius: 'var(--r-lg)',
                fontFamily: 'ui-monospace,"SF Mono",Menlo,monospace',
                fontSize: 12, lineHeight: 1.7,
                position: 'relative',
              }}>
                <div style={{ color: 'oklch(52% 0.05 155)' }}>{'// 디자인 → 코드로 연결되는 순간'}</div>
                <div>
                  <span style={{ color: 'oklch(72% 0.12 295)' }}>const </span>
                  <span style={{ color: 'oklch(76% 0.10 230)' }}>vibe </span>
                  <span style={{ color: 'oklch(70% 0.01 230)' }}>= </span>
                  <span style={{ color: 'oklch(82% 0.10 60)' }}>"design × code × flow"</span>
                </div>
                <div>
                  <span style={{ color: 'oklch(72% 0.12 295)' }}>export </span>
                  <span style={{ color: 'oklch(76% 0.10 230)' }}>default </span>
                  <span style={{ color: 'oklch(82% 0.10 60)' }}>YunjiLee</span>
                  <span style={{ color: 'oklch(70% 0.01 230)' }}>{'()'}</span>
                </div>
              </div>
            </div>

            {/* 서브 — 관심사 키워드 */}
            <div style={{
              padding: '18px 20px',
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-xl)',
            }}>
              <div className="mono" style={{ fontSize: 9, color: 'var(--fg-subtle)', letterSpacing: '.14em', marginBottom: 12 }}>
                KEYWORDS I KEEP COMING BACK TO
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {[
                  { label: 'Design Systems',  hot: true  },
                  { label: 'Vibe Coding',     hot: true  },
                  { label: 'AI × Design',     hot: true  },
                  { label: 'Motion UI',       hot: false },
                  { label: 'Token Pipeline',  hot: false },
                  { label: 'UX Research',     hot: false },
                  { label: 'Accessibility',   hot: false },
                  { label: 'Dark Mode',       hot: false },
                ].map(k => (
                  <span key={k.label} style={{
                    padding: '5px 12px',
                    background: k.hot ? 'var(--primary-soft)' : 'var(--bg-muted)',
                    color: k.hot ? 'var(--primary)' : 'var(--fg-muted)',
                    border: `1px solid ${k.hot ? 'var(--primary)' : 'var(--border)'}`,
                    borderRadius: 'var(--r-pill)', fontSize: 12,
                    fontWeight: k.hot ? 600 : 400,
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                  }}>
                    {k.hot && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} />}
                    {k.label}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = React.useState(false);
  const email = "leeyoonji42@gmail.com";
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
          <h2 className="section__title display">
            사용자의 존중받는 경험이<br /> 제품의 성장으로 이어지도록,
          </h2>
          <p className="contact__sub" style={{margintop:16}}>
            사용자가 배려받고 있음을 느끼는 'UX 기획'부터,<br /> 그 가치를 온전히 전달하는 '시스템 구현'까지 함께하고 싶습니다.
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
        </div>
        <footer className="footer">
          <div className="container footer__inner">
            <div className="mono" style={{opacity:.5, fontSize:11, letterSpacing:'.14em'}}>
              © 2026 YUNJI LEE · ALL RIGHTS RESERVED
            </div>
            <div className="mono" style={{opacity:.5, fontSize:11, letterSpacing:'.14em'}}>
             V1.0 — CURATED ARCHIVE
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

window.Skills = Skills;
window.Contact = Contact;

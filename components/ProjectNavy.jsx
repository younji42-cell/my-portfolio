// components/ProjectNavy.jsx

/* ─────────────────────────────────────────────────
   탭 1 · Discover — 현장 인터뷰 + 현황분석
───────────────────────────────────────────────── */

function TabDiscover() {
  const [subTab, setSubTab] = React.useState(0);
  const [selectedPain, setSelectedPain] = React.useState(0);
  const [hoveredNeed, setHoveredNeed] = React.useState(null);

  const PAINS = [
    {
      num: 'P1', title: '데이터 정합성 결여',
      color: 'oklch(58% 0.20 25)', soft: 'oklch(58% 0.20 25 / .08)',
      items: [
        {
          sub: '변수 간 논리적 모순 발생',
          desc: '기상학적 인과관계가 맞지 않는 데이터가 그대로 입력됨. 시스템이 차단하지 않음.',
          tags: [
            { left: '날씨: 맑음',    right: '강수확률: 높음',        c: 'oklch(58% 0.20 25)' },
            { left: '풍속 12m/s',    right: 'Gust 8m/s (물리 불가)', c: 'oklch(58% 0.20 25)' },
            { left: '유의파고 3.2m', right: '최대파고 2.8m',         c: 'oklch(58% 0.20 25)' },
          ],
        },
        {
          sub: '단순 수치 기입 오류',
          desc: '상식 밖의 Outlier가 입력되어도 시스템의 차단 기능이 부재함.',
          tags: [
            { left: '10 입력 의도',  right: '20 입력 (오타)',          c: 'oklch(70% 0.15 65)' },
            { left: '0.5 입력 의도', right: '5.0 입력 (소수점 오류)', c: 'oklch(70% 0.15 65)' },
          ],
        },
        {
          sub: '시계열 연속성 위배',
          desc: '이전·이후 시간대 흐름에서 급격히 튀는 값이 발생해 예보 신뢰도를 저하시킴.',
          tags: null,
        },
      ],
    },
    {
      num: 'P2', title: '고비용·저효율 수정 프로세스',
      color: 'oklch(70% 0.15 65)', soft: 'oklch(70% 0.15 65 / .08)',
      items: [
        { sub: '데이터 공백의 수동 보정',  desc: '수치 모델이 제공하지 않는 시간대 데이터를 일일이 수작업으로 채워야 함.', tags: null },
        { sub: '부분 수정의 기능적 한계',  desc: '특정 요소만 수정하려 해도 전체가 반영되거나 기능이 작동하지 않아 흐름이 끊김.', tags: null },
        { sub: '발표 시간 수동 갱신',      desc: '변경이 없어도 발표 시간을 수작업으로 바꿔야 하는 불필요한 행정 절차가 존재.', tags: null },
      ],
    },
    {
      num: 'P3', title: '직관성 낮은 UI/UX 환경',
      color: 'oklch(54% 0.15 232)', soft: 'oklch(54% 0.15 232 / .08)',
      items: [
        { sub: '데이터 가독성 저해',  desc: '24시간 흐름이 한눈에 보이지 않아 스크롤·화면 전환이 빈번하고 대조 오류가 생김.', tags: null },
        { sub: '파편화된 정보 배치', desc: '연결된 변수(바람-파도 등)들이 흩어져 있어 상관관계를 직관적으로 파악하기 어려움.', tags: null },
        { sub: '모바일 사용 불가',   desc: '현장 이동 중 수정이 필수적임에도 레이아웃이 데스크톱 위주로 고정되어 사용 불가.', tags: null },
      ],
    },
    {
      num: 'P4', title: '시스템 지능화 부재',
      color: 'oklch(62% 0.18 145)', soft: 'oklch(62% 0.18 145 / .08)',
      items: [
        { sub: '실무 패턴 미반영',     desc: '"아침 기온은 모델보다 높다" 같은 패턴이 반영되지 않아 보정 작업을 매번 수동 반복.', tags: null },
        { sub: '이상값 감지 기능 부재', desc: '관측값과 예보값의 괴리가 발생해도 시스템이 감지·알리지 않아 항상 주시해야 함.', tags: null },
      ],
    },
  ];

  const NEEDS = [
    {
      num: '01', keyword: '비교 가능한 UX',
      desc: '24시간 흐름과 변수 간 관계를 한 화면에서 비교·대조할 수 있는 레이아웃 구조.',
    },
    {
      num: '02', keyword: '인지부하 최소화',
      desc: '연관 변수를 그룹화하고, 필요한 정보만 적시에 노출해 전문가의 집중력을 보호.',
    },
    {
      num: '03', keyword: '이상값 자동 탐지',
      desc: '논리적 모순·시계열 이상·Outlier를 실시간 감지하고 사용자에게 명확히 알림.',
    },
  ];

  const pain = PAINS[selectedPain];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>01 · Discover</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.2 }}>
          문제의 실체를 <span style={{color:'var(--primary)'}}>직접 확인했습니다.</span>
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.8, margin: 0 }}>
          현장 인터뷰와 현황 분석을 통해 기상 입력 업무의 실제 페인포인트를 수집했습니다.
        </p>
      </div>

      {/* 서브탭 */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 20, borderBottom: '1px solid var(--border)' }}>
        {['현장 인터뷰', '현황 분석'].map((t, i) => (
          <button key={i} onClick={() => setSubTab(i)} style={{
            padding: '8px 18px', background: 'none', border: 'none',
            borderBottom: `2px solid ${subTab === i ? 'var(--primary)' : 'transparent'}`,
            marginBottom: -1, cursor: 'pointer', fontFamily: 'inherit',
            fontSize: 13, fontWeight: subTab === i ? 600 : 400,
            color: subTab === i ? 'var(--fg)' : 'var(--fg-muted)',
            transition: 'all .2s',
          }}>{t}</button>
        ))}
      </div>

      {/* 인터뷰 */}
      <div style={{ display: subTab === 0 ? 'grid' : 'none', gridTemplateColumns: '180px 1fr', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {PAINS.map((p, i) => (
            <button key={i} onClick={() => setSelectedPain(i)} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
              background: selectedPain === i ? p.soft : 'transparent',
              border: `1px solid ${selectedPain === i ? p.color + '50' : 'transparent'}`,
              borderRadius: 'var(--r-lg)', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
              transition: 'all .15s',
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: 'var(--r-sm)', flexShrink: 0,
                background: selectedPain === i ? p.color : 'var(--bg-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background .15s',
              }}>
                <span className="mono" style={{ fontSize: 9, color: selectedPain === i ? '#fff' : 'var(--fg-muted)', fontWeight: 600 }}>{p.num}</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: selectedPain === i ? 600 : 400, color: selectedPain === i ? 'var(--fg)' : 'var(--fg-muted)', lineHeight: 1.3 }}>{p.title}</span>
            </button>
          ))}
        </div>

        <div style={{ background: 'var(--bg-sunken)', border: `1px solid ${pain.color}35`, borderRadius: 'var(--r-xl)', padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: 32, height: 32, borderRadius: 'var(--r-md)', background: pain.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="mono" style={{ fontSize: 10, color: '#fff', fontWeight: 600 }}>{pain.num}</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{pain.title}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {pain.items.map((item, ii) => (
              <div key={ii} style={{ padding: '12px 14px', background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: pain.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>{item.sub}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.7, margin: item.tags ? '0 0 10px' : 0 }}>{item.desc}</p>
                {item.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {item.tags.map((tag, ti) => (
                      <div key={ti} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', background: tag.c + '15', border: `1px solid ${tag.c}45`, borderRadius: 'var(--r-pill)', fontSize: 11 }}>
                        <span style={{ color: 'var(--fg)', fontWeight: 500 }}>{tag.left}</span>
                        <span style={{ color: tag.c }}>→</span>
                        <span style={{ color: tag.c, fontWeight: 500 }}>{tag.right}</span>
                        <span style={{ color: tag.c, fontSize: 10 }}>⚠</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 현황 분석 */}
      <div style={{ display: subTab === 1 ? 'flex' : 'none', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 10, alignItems: 'center' }}>
          {[
            { tag: 'AS-IS', title: '입력 폼 패러다임', desc: '단순 수치 기입 도구. 입력값의 맥락·연관성을 시스템이 이해하지 못해 오류 탐지·보정 기능이 전무함.', c: 'oklch(58% 0.20 25)' },
            null,
            { tag: 'TO-BE', title: '의사결정 인터페이스', desc: '전문가의 판단을 데이터로 변환하는 의사결정 지원 도구. 시스템이 맥락을 이해하고 판단을 돕는 방향으로 재설계.', c: 'oklch(54% 0.15 232)' },
          ].map((item, i) => item === null
            ? <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-muted)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>→</div>
            : (
              <div key={i} style={{ padding: '18px 20px', background: item.c + '08', border: `1px solid ${item.c}40`, borderRadius: 'var(--r-xl)' }}>
                <div style={{ display: 'inline-flex', padding: '3px 10px', background: item.c, borderRadius: 'var(--r-pill)', marginBottom: 10 }}>
                  <span className="mono" style={{ fontSize: 9, color: '#fff', letterSpacing: '.1em' }}>{item.tag}</span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>{item.title}</div>
                <p style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            )
          )}
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>UX 도출 방향 · 3가지 핵심 과제</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {NEEDS.map((need, ni) => (
              <div key={ni}
                onMouseEnter={() => setHoveredNeed(ni)}
                onMouseLeave={() => setHoveredNeed(null)}
                style={{
                  padding: '16px', background: 'var(--bg-elev)',
                  border: `1px solid ${hoveredNeed === ni ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: 'var(--r-xl)',
                  transform: hoveredNeed === ni ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hoveredNeed === ni ? 'var(--shadow-md)' : 'none',
                  transition: 'border-color .2s, transform .2s, box-shadow .2s',
                }}
              >
                <div className="mono" style={{ fontSize: 10, color: 'var(--primary)', marginBottom: 8, letterSpacing: '.1em' }}>{need.num}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>{need.keyword}</div>
                <p style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.7, margin: 0 }}>{need.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '16px 20px', background: 'oklch(54% 0.15 232 / .06)', border: '1px solid oklch(54% 0.15 232 / .3)', borderRadius: 'var(--r-xl)' }}>
          <div className="eyebrow" style={{ marginBottom: 8 }}>Analysis Conclusion</div>
          <p style={{ fontSize: 14, lineHeight: 1.8, margin: 0, color: 'var(--fg)' }}>
            <strong style={{ color: 'var(--primary)' }}>비교 가능하고</strong> · <strong style={{ color: 'var(--primary)' }}>인지부하를 최소화하며</strong> · <strong style={{ color: 'var(--primary)' }}>이상값을 발견할 수 있는</strong> UX 도출이 이번 설계의 핵심 과제입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   탭 2 · Define — 어피니티 + 여정 지도
───────────────────────────────────────────────── */

// ProjectNavy.jsx 안의 TabDefine 함수만 아래로 교체하세요

function TabDefine() {
  const CLUSTERS = [
    {
      theme: '데이터 정합성 문제',
      color: 'oklch(58% 0.20 25)',
      notes: [
        { text: '변수 간 값이 기상학적으로 맞지 않음' },
        { text: '시계열에서 급격히 튀는 이상값 발생' },
        { text: '키보드 수치 입력 시 오타 빈번하게 기입됨' },
      ],
    },
    {
      theme: '입력의 번거로움',
      color: 'oklch(70% 0.15 65)',
      notes: [
        { text: '1일~14일, 1시간 간격으로 수동 입력·검증 필요' },
        { text: '숫자 100단위 입력인데 입력창이 지나치게 큼' },
        { text: '밀집도 없는 레이아웃 → 스크롤 과다 발생' },
      ],
    },
    {
      theme: '디바이스 제약',
      color: 'oklch(54% 0.15 232)',
      notes: [
        { text: '새벽 6시·저녁 7시 매일 입력 — 항상 PC 사용 불가' },
        { text: '작은 화면(모바일·태블릿)에서 입력 매우 어려움' },
      ],
    },
    {
      theme: '시스템 신뢰 부재',
      color: 'oklch(62% 0.18 145)',
      notes: [
        { text: '다양한 모델 참고 후 최종 입력은 사람이 직접 처리' },
        { text: '오타·잘못 기입 시 즉각 인지 불가' },
        { text: '놓친 오류를 뒤늦게 발견하는 경우 반복됨' },
      ],
    },
  ];

  // 감정: 0=매우불편 1=불편 2=보통 3=만족 4=매우만족
  const STAGES = [
    {
      stage: '데이터 수신',
      actions: ['모델 데이터 다운로드', '여러 모델 파일 열기'],
      thoughts: ['어떤 모델값이 맞는 거지?', '오늘 데이터 누락 없나?'],
      pains: ['모델마다 값이 달라 혼란', '비교할 화면이 없음'],
      emotion: 2,
    },
    {
      stage: '모델값 검토',
      actions: ['수치 하나하나 육안 비교', '이상값 여부 직접 판단'],
      thoughts: ['이 값이 맞는 건지 확신이 없다', '놓친 게 있을 것 같다'],
      pains: ['24시간 흐름이 한눈에 안 보임', '연관 변수가 흩어져 있음'],
      emotion: 1,
    },
    {
      stage: '보정값 결정',
      actions: ['경험 기반으로 수동 보정', '참고 자료와 대조'],
      thoughts: ['이 판단이 맞는지 모르겠다', '기록으로 남기기 어렵다'],
      pains: ['시스템이 판단을 돕지 않음', '매번 같은 보정 반복'],
      emotion: 1,
    },
    {
      stage: '시스템 입력',
      actions: ['1시간 간격 14일치 수동 입력', '키보드로 수치 타이핑'],
      thoughts: ['오타 안 냈는지 불안하다', '입력창이 너무 크고 불편하다'],
      pains: ['오타 입력 즉시 감지 불가', '레이아웃이 커서 스크롤 과다'],
      emotion: 0,
    },
    {
      stage: '검토 & 제출',
      actions: ['전체 데이터 재확인', '발표 시간 수동 갱신 후 제출'],
      thoughts: ['다 맞겠지… 확인할 방법이 없다', '또 처음부터 해야 하나'],
      pains: ['오류 검증 기능 없음', '변경 없어도 시간 수동 갱신 필요'],
      emotion: 1,
    },
  ];

  const EMOTION_C = [
    'oklch(58% 0.20 25)',
    'oklch(68% 0.18 45)',
    'oklch(75% 0.16 75)',
    'oklch(66% 0.14 140)',
    'oklch(62% 0.18 145)',
  ];
  const EMOTION_L = ['매우 불편', '불편', '보통', '만족', '매우 만족'];
  const EMOTION_E = ['😣', '😟', '😐', '🙂', '😊'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

      {/* 헤더 */}
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>02 · Define</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.2 }}>
          흩어진 인사이트를 <span style={{color:'var(--primary)'}}>패턴으로 묶습니다.</span>
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.8, margin: 0 }}>
          인터뷰에서 수집한 페인포인트를 어피니티 다이어그램으로 클러스터링하고,
          실제 업무 흐름을 사용자 여정 지도로 시각화했습니다.
        </p>
      </div>

      {/* ── 어피니티 다이어그램 ── */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Affinity Diagram</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {CLUSTERS.map((c, ci) => (
            <div key={ci} style={{
              background: 'var(--bg-elev)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-xl)', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: c.color, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>{c.theme}</span>
                <span className="mono" style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--fg-subtle)' }}>{c.notes.length}개</span>
              </div>
              <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {c.notes.map((n, ni) => (
                  <div key={ni} style={{
                    padding: '8px 10px',
                    background: c.color + '12',
                    borderLeft: `3px solid ${c.color}`,
                    borderRadius: '0 4px 4px 0',
                    fontSize: 12, lineHeight: 1.5, color: 'var(--fg)',
                  }}>
                    {n.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 사용자 여정 지도 ── */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>User Journey Map</div>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ minWidth: 720 }}>

            {/* 단계 헤더 */}
            <div style={{ display: 'grid', gridTemplateColumns: `88px repeat(${STAGES.length}, 1fr)`, gap: 6, marginBottom: 6 }}>
              <div />
              {STAGES.map((s, i) => (
                <div key={i} style={{
                  padding: '8px 8px', textAlign: 'center',
                  background: 'var(--primary-soft)', borderRadius: 'var(--r-md)',
                }}>
                  <div className="mono" style={{ fontSize: 9, color: 'var(--primary)', marginBottom: 2 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg)', lineHeight: 1.3 }}>{s.stage}</div>
                </div>
              ))}
            </div>

            {/* 행 */}
            {[
              { label: 'Actions',  key: 'actions',  color: 'var(--fg-muted)' },
              { label: 'Thoughts', key: 'thoughts', color: 'var(--fg-muted)' },
              { label: 'Pains',    key: 'pains',    color: 'oklch(58% 0.20 25)' },
            ].map(row => (
              <div key={row.label} style={{ display: 'grid', gridTemplateColumns: `88px repeat(${STAGES.length}, 1fr)`, gap: 6, marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: 8 }}>
                  <span className="mono" style={{ fontSize: 9, color: 'var(--fg-subtle)', letterSpacing: '.08em' }}>{row.label}</span>
                </div>
                {STAGES.map((s, i) => (
                  <div key={i} style={{
                    padding: '8px 8px', minHeight: 60,
                    background: row.key === 'pains' ? 'oklch(58% 0.20 25 / .05)' : 'var(--bg-sunken)',
                    border: `1px solid ${row.key === 'pains' ? 'oklch(58% 0.20 25 / .2)' : 'var(--border)'}`,
                    borderRadius: 'var(--r-md)',
                    fontSize: 11, color: row.color, lineHeight: 1.5,
                  }}>
                    {s[row.key].map((item, j) => (
                      <div key={j} style={{ marginBottom: j < s[row.key].length - 1 ? 4 : 0 }}>
                        {row.key === 'pains' && <span style={{ marginRight: 4, fontSize: 10 }}>•</span>}
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* 감정 곡선 */}
            <div style={{ display: 'grid', gridTemplateColumns: `88px repeat(${STAGES.length}, 1fr)`, gap: 6, marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="mono" style={{ fontSize: 9, color: 'var(--fg-subtle)', letterSpacing: '.08em' }}>Emotion</span>
              </div>
              {STAGES.map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '6px 0' }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: EMOTION_C[s.emotion] + '25',
                    border: `2px solid ${EMOTION_C[s.emotion]}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: 14 }}>{EMOTION_E[s.emotion]}</span>
                  </div>
                  <span style={{ fontSize: 9, color: EMOTION_C[s.emotion], textAlign: 'center', fontWeight: 500 }}>
                    {EMOTION_L[s.emotion]}
                  </span>
                </div>
              ))}
            </div>

            {/* 감정 흐름 SVG */}
            <div style={{ padding: '0 44px', marginTop: -4 }}>
              <svg width="100%" height="48" style={{ overflow: 'visible' }}>
                {(() => {
                  const colW = 100 / STAGES.length;
                  const points = STAGES.map((s, i) => ({
                    x: colW * i + colW / 2,
                    y: 40 - s.emotion * 8,
                  }));
                  const d = points.map((p, i) =>
                    i === 0 ? `M${p.x}%,${p.y}` : `L${p.x}%,${p.y}`
                  ).join(' ');
                  return (
                    <>
                      <path d={d} fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".5"/>
                      {points.map((p, i) => (
                        <circle key={i} cx={`${p.x}%`} cy={p.y} r="3" fill="var(--primary)" opacity=".7"/>
                      ))}
                    </>
                  );
                })()}
              </svg>
            </div>

          </div>
        </div>

        {/* 인사이트 */}
        <div style={{
          marginTop: 14, padding: '14px 18px',
          background: 'oklch(54% 0.15 232 / .06)',
          border: '1px solid oklch(54% 0.15 232 / .3)',
          borderRadius: 'var(--r-xl)',
        }}>
          <div className="eyebrow" style={{ marginBottom: 6 }}>Journey Insight</div>
          <p style={{ fontSize: 13, lineHeight: 1.8, margin: 0, color: 'var(--fg)' }}>
            가장 큰 감정 저하 구간은 <strong style={{ color: 'var(--primary)' }}>시스템 입력</strong> 단계로, 반복적인 수동 타이핑과 오류 감지 불가가 복합적으로 작용합니다.
            전체 여정에서 시스템이 사용자를 <strong style={{ color: 'var(--primary)' }}>능동적으로 돕는 구간이 단 한 곳도 없습니다.</strong>
          </p>
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────
   탭 3 · Develop — 와이어프레임
───────────────────────────────────────────────── */

// ProjectNavy.jsx 안의 TabDevelop 함수만 아래로 교체하세요

function TabDevelop() {

  const IDEATIONS = [
    {
      num: '01',
      title: '로직 전환 - 입력 폼 → 의사결정 흐름',
      color: 'oklch(54% 0.15 232)',
      colorSoft: 'oklch(54% 0.15 232 / .08)',
      desc: '단순 수치 기입 순서에서 벗어나, 그래프로 전체 흐름을 먼저 파악한 뒤 의사결정 → 세부 입력 → 검증 순서로 업무 로직 자체를 재설계했습니다.',
      points: [
        { label: 'AS-IS', text: '항목별 수치 입력 → 제출', dim: true },
        { label: 'TO-BE', text: '그래프 조망 → 의사결정 → 세부 입력 → 검증', dim: false },
      ],
    },
    {
      num: '02',
      title: '오류 제어 - 3단계 분리 전략',
      color: 'oklch(58% 0.20 25)',
      colorSoft: 'oklch(58% 0.20 25 / .08)',
      desc: '모든 오류를 즉시 표시하면 작업 흐름을 방해합니다. 오류 유형에 따라 개입 시점을 분리해 사용자 부담을 최소화했습니다.',
      points: [
        { label: '치명적 오류',   text: '입력 즉시 표시 — 범위 초과, 물리 불가 값', dim: false },
        { label: '논리적 모순',   text: '저장 시점에 통합 리스트 제공', dim: false },
        { label: '패턴 이상',     text: '시각적 하이라이팅으로 주의 환기', dim: false },
      ],
    },
    {
      num: '03',
      title: '이상 탐지 - 미니 그래프 & 인디케이터',
      color: 'oklch(62% 0.18 145)',
      colorSoft: 'oklch(62% 0.18 145 / .08)',
      desc: '시각화의 목적을 이상 탐지에 집중합니다. 데이터 흐름에서 벗어난 수치만 미니 그래프나 인디케이터를 통해 직관적으로 노출, 전체를 읽지 않아도 이상값을 즉시 인지할 수 있습니다.',
      points: [
        { label: '미니 그래프', text: '각 변수별 시계열 흐름을 셀 우측에 인라인 표시', dim: false },
        { label: '이상값 마커', text: '흐름에서 벗어난 수치에 빨간 점·하이라이트 자동 표시', dim: false },
      ],
    },
    {
      num: '04',
      title: '정보 그룹핑 - 탭 기반 변수 분류',
      color: 'oklch(70% 0.15 65)',
      colorSoft: 'oklch(70% 0.15 65 / .08)',
      desc: '흩어진 기상 변수를 날씨·기온·바람·파랑 등 의미 단위로 그룹핑해 탭 형태로 정리합니다. 연관 변수를 한 화면에서 함께 보여 상관관계를 직관적으로 파악할 수 있습니다.',
      points: [
        { label: '변수 그룹', text: '날씨 / 기온 / 바람 / 파랑 / 클라우드 — 탭으로 분리', dim: false },
        { label: '연관 배치', text: '바람-파도처럼 인과관계 있는 변수를 인접 배치', dim: false },
      ],
    },
  ];

  const WIREFRAMES = [
    {
      label: 'WF-01',
      title: '그래프 뷰 — 의사결정 & 비교 시각화',
      desc: '입력값·모델값·AI 권장값을 레이어로 겹쳐 비교. 이상 구간은 배경 하이라이트로 주의 환기.',
      img: '/assets/navy-wire01.png',
    },
    {
      label: 'WF-02',
      title: '테이블 뷰 — 수치 입력 & 이상값 표시',
      desc: '24시간 전체 흐름을 테이블로 조망하면서 이상값을 즉시 하이라이팅. 셀 우측 미니 그래프로 시계열 흐름 인라인 표시.',
      img: '/assets/navy-wire02.png',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* 헤더 */}
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>03 · Develop</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.2 }}>
          아이디어를  <span style={{color:'var(--primary)'}}>구조로 만들었습니다.</span>
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.8, margin: 0 }}>
          발견·정의 단계에서 도출한 문제를 바탕으로 4가지 핵심 아이데이션을 설계하고, 와이어프레임으로 구조를 검증했습니다.
        </p>
      </div>

      {/* ── 아이데이션 ── */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Ideation · 핵심 아이디어 4가지</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {IDEATIONS.map((idea, i) => (
            <div key={i} style={{
              background: idea.colorSoft,
              border: `1px solid ${idea.color}40`,
              borderRadius: 'var(--r-xl)',
              padding: '18px 20px',
            }}>
              {/* 헤더 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 'var(--r-md)', flexShrink: 0,
                  background: idea.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="mono" style={{ fontSize: 10, color: '#fff', fontWeight: 600 }}>{idea.num}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', lineHeight: 1.3 }}>{idea.title}</span>
              </div>

              {/* 설명 */}
              <p style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.75, margin: '0 0 12px' }}>
                {idea.desc}
              </p>

              {/* 포인트 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {idea.points.map((pt, pi) => (
                  <div key={pi} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 8,
                    padding: '7px 10px',
                    background: 'var(--bg-elev)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-md)',
                  }}>
                    <span style={{
                      flexShrink: 0, padding: '2px 7px',
                      background: idea.color, color: '#fff',
                      borderRadius: 'var(--r-pill)', fontSize: 9,
                      fontFamily: 'inherit', letterSpacing: '.06em', marginTop: 1,
                    }}>{pt.label}</span>
                    <span style={{
                      fontSize: 12, lineHeight: 1.5,
                      color: pt.dim ? 'var(--fg-subtle)' : 'var(--fg)',
                      textDecoration: pt.dim ? 'line-through' : 'none',
                    }}>{pt.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 와이어프레임 ── */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Wireframe · 구조 검증</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {WIREFRAMES.map((wf, i) => (
            <div key={i} style={{
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-xl)',
              overflow: 'hidden',
            }}>
              {/* 이미지 영역 */}
              <div style={{
                aspectRatio: '16 / 8',
                background: 'var(--bg-sunken)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid var(--border)',
                position: 'relative', overflow: 'hidden',
              }}>
                {wf.img ? (
                  <img
                    src={wf.img}
                    alt={wf.title}
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--fg-subtle)' }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
                      <rect x="7" y="7" width="14" height="3" rx="1" fill="currentColor" opacity=".3"/>
                      <rect x="7" y="13" width="9" height="2" rx="1" fill="currentColor" opacity=".2"/>
                      <rect x="7" y="17" width="12" height="2" rx="1" fill="currentColor" opacity=".2"/>
                    </svg>
                    <span className="mono" style={{ fontSize: 10, letterSpacing: '.1em', opacity: .6 }}>IMAGE 추가 예정</span>
                  </div>
                )}
                <div style={{
                  position: 'absolute', top: 10, left: 10,
                  padding: '3px 8px', background: 'var(--fg)', color: 'var(--bg)',
                  borderRadius: 'var(--r-pill)',
                }}>
                  <span className="mono" style={{ fontSize: 9, letterSpacing: '.1em' }}>{wf.label}</span>
                </div>
              </div>

              {/* 설명 */}
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 5 }}>{wf.title}</div>
                <p style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.65, margin: 0 }}>{wf.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────
   탭 4 · Deliver — 디자인 + 결과
───────────────────────────────────────────────── */

function TabDeliver() {
  const [modalImg, setModalImg] = React.useState(null);
// 함수 상단에 추가
const modalRoot = typeof document !== 'undefined' ? document.body : null;
  const DESIGNS = [
    {
      label: 'SCREEN 01',
      title: '그래프 뷰 — 시각화 & 의사결정',
      img:  '/assets/navymain.png'
    },
    {
      label: 'SCREEN 02',
      title: '테이블 뷰 — 수치 입력 & 이상값 탐지',
      img: '/assets/Main-2.png'
    },
  ];

  const FEEDBACKS = [
    {
      quote: '입력 전에 그래프로 흐름을 먼저 보니까 어디가 이상한지 바로 보입니다.',
      who: '담당자 인터뷰',
    },
    {
      quote: '오타가 나도 바로 빨간 표시가 뜨니까 예전처럼 제출하고 나서 발견하는 일이 없어졌습니다.',
      who: '담당자 인터뷰',
    },
  ];

  const BEFORE_AFTER = [
    {
      label: '이상값 발견',
      before: '제출 후 육안 재확인',
      after: '입력 즉시 인라인 표시',
    },
    {
      label: '화면 전환',
      before: '변수마다 스크롤·탭 이동',
      after: '그룹 탭으로 한 화면에서 처리',
    },
    {
      label: '오류 인지 시점',
      before: '저장 후 뒤늦게 발견',
      after: '치명적 오류 즉시 / 논리 오류 저장 시',
    },
    {
      label: '시계열 파악',
      before: '숫자만 나열된 셀 — 흐름 파악 불가',
      after: '미니 그래프로 흐름 인라인 확인',
    },
  ];

  const HIGHLIGHTS = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M6 8h8M6 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          <circle cx="15" cy="5" r="2.5" fill="oklch(54% 0.15 232)" stroke="var(--bg-elev)" strokeWidth="1"/>
        </svg>
      ),
      title: '입력폼 → 검증폼',
      desc: '단순 수치 기입 도구에서 입력과 동시에 오류를 감지·안내하는 검증 중심 인터페이스로 전환.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3L17 15H3L10 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
          <line x1="10" y1="8.5" x2="10" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <circle cx="10" cy="13.5" r="0.8" fill="currentColor"/>
        </svg>
      ),
      title: '오입력 즉시 확인',
      desc: '범위 초과·물리적 불가 값은 입력 즉시 표시. 논리 모순은 저장 시 통합 리스트로 제공해 흐름 방해를 최소화.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <polyline points="2,14 6,9 9,12 13,6 18,10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="13" cy="6" r="2" fill="oklch(58% 0.20 25)" stroke="var(--bg-elev)" strokeWidth="1"/>
        </svg>
      ),
      title: '시계열 이상 시각화',
      desc: '데이터 흐름에서 벗어난 수치만 미니 그래프·인디케이터로 직관적으로 노출. 전체를 읽지 않아도 이상값을 즉시 인지.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="11" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="2" y="12" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
          <rect x="11" y="12" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        </svg>
      ),
      title: '변수 그룹핑',
      desc: '흩어진 기상 변수를 날씨·기온·바람·파랑 단위로 탭 그룹화. 연관 변수를 인접 배치해 상관관계를 직관적으로 파악.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* 헤더 */}
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>04 · Deliver</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, margin: '0 0 8px', lineHeight: 1.2 }}>
          시스템으로 완성하고  <span style={{color:'var(--primary)'}}>증명합니다.</span>
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.8, margin: 0 }}>
          최종 디자인 2개 시안과 Before/After 비교, 이 프로젝트에서 달성한 핵심 전환을 정리했습니다.
        </p>
      </div>

      {/* ── 최종 디자인 ── */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Final Design · 클릭해서 크게 보기</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {DESIGNS.map((d, i) => (
            <div
              key={i}
              onClick={() => setModalImg(d)}
              style={{
                background: 'var(--bg-elev)', border: '1px solid var(--border)',
                borderRadius: 'var(--r-xl)', overflow: 'hidden',
                cursor: 'zoom-in', transition: 'border-color .2s, transform .2s, box-shadow .2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* 이미지 */}
              <div style={{ aspectRatio: '16 / 7', background: 'var(--bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderBottom: '1px solid var(--border)' }}>
                {d.img ? (
                  <img src={d.img} alt={d.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--fg-subtle)' }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect x="3" y="3" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
                      <rect x="7" y="8"  width="18" height="3" rx="1.5" fill="currentColor" opacity=".25"/>
                      <rect x="7" y="14" width="12" height="2" rx="1"   fill="currentColor" opacity=".18"/>
                      <rect x="7" y="19" width="15" height="2" rx="1"   fill="currentColor" opacity=".18"/>
                    </svg>
                    <span className="mono" style={{ fontSize: 10, letterSpacing: '.1em', opacity: .5 }}>IMAGE 추가 예정</span>
                  </div>
                )}
                {/* 확대 아이콘 오버레이 */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--primary)', opacity: 0,
                  transition: 'opacity .2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '.12'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                />
                <div style={{ position: 'absolute', top: 10, left: 10, padding: '3px 8px', background: 'var(--fg)', color: 'var(--bg)', borderRadius: 'var(--r-pill)' }}>
                  <span className="mono" style={{ fontSize: 9, letterSpacing: '.1em' }}>{d.label}</span>
                </div>
                <div style={{ position: 'absolute', top: 10, right: 10, width: 28, height: 28, borderRadius: '50%', background: 'var(--bg-elev)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-muted)' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M7.5 1.5H10.5V4.5M4.5 10.5H1.5V7.5M10.5 1.5L6.5 5.5M1.5 10.5L5.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>{d.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Before / After ── */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Before / After</div>
        <div style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
          {/* 컬럼 헤더 */}
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: 0, borderBottom: '1px solid var(--border)' }}>
            <div style={{ padding: '10px 16px' }} />
            <div style={{ padding: '10px 16px', borderLeft: '1px solid var(--border)', background: 'oklch(58% 0.20 25 / .06)' }}>
              <span className="mono" style={{ fontSize: 10, color: 'oklch(50% 0.18 25)', letterSpacing: '.1em' }}>BEFORE</span>
            </div>
            <div style={{ padding: '10px 16px', borderLeft: '1px solid var(--border)', background: 'oklch(54% 0.15 232 / .06)' }}>
              <span className="mono" style={{ fontSize: 10, color: 'var(--primary)', letterSpacing: '.1em' }}>AFTER</span>
            </div>
          </div>
          {BEFORE_AFTER.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: 0, borderBottom: i < BEFORE_AFTER.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)', letterSpacing: '.06em' }}>{row.label}</span>
              </div>
              <div style={{ padding: '12px 16px', borderLeft: '1px solid var(--border)', background: 'oklch(58% 0.20 25 / .04)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 12, color: 'oklch(45% 0.18 25)', textDecoration: 'line-through', opacity: .7 }}>{row.before}</span>
              </div>
              <div style={{ padding: '12px 16px', borderLeft: '1px solid var(--border)', background: 'oklch(54% 0.15 232 / .04)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: 'var(--fg)', fontWeight: 500 }}>{row.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 정성적 피드백 ── */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Qualitative Feedback</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FEEDBACKS.map((fb, i) => (
            <div key={i} style={{
              padding: '16px 20px',
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid var(--primary)',
              borderRadius: '0 var(--r-xl) var(--r-xl) 0',
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.8, margin: '0 0 8px', fontStyle: 'italic', color: 'var(--fg)' }}>
                "{fb.quote}"
              </p>
              <span className="mono" style={{ fontSize: 10, color: 'var(--fg-subtle)', letterSpacing: '.1em' }}>
                — {fb.who}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 핵심 전환 하이라이트 ── */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Key Highlights</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {HIGHLIGHTS.map((h, i) => (
            <div key={i} style={{
              display: 'flex', gap: 14, padding: '16px',
              background: 'var(--bg-elev)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-xl)',
            }}>
              <div style={{
                width: 38, height: 38, flexShrink: 0,
                borderRadius: 'var(--r-md)',
                background: 'var(--primary-soft)', color: 'var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {h.icon}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 5 }}>{h.title}</div>
                <p style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.7, margin: 0 }}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalImg && modalRoot && ReactDOM.createPortal(
        <div
          onClick={() => setModalImg(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'oklch(5% 0.01 240 / .5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg-elev)', borderRadius: 'var(--r-xl)',
              border: '1px solid var(--border)',
              width: '100%', maxWidth: 1100,
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* 모달 헤더 */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 20px', borderBottom: '1px solid var(--border)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ padding: '3px 8px', background: 'var(--fg)', color: 'var(--bg)', borderRadius: 'var(--r-pill)' }}>
                  <span className="mono" style={{ fontSize: 9, letterSpacing: '.1em' }}>{modalImg.label}</span>
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{modalImg.title}</span>
              </div>
              <button
                onClick={() => setModalImg(null)}
                style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'var(--bg-muted)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1,
                }}
              >×</button>
            </div>
            {/* 모달 이미지 */}
            <div style={{ aspectRatio: '16 / 8', background: 'var(--bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {modalImg.img ? (
                <img src={modalImg.img} alt={modalImg.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, color: 'var(--fg-subtle)' }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.1em', opacity: .5 }}>IMAGE 추가 예정</span>
                </div>
              )}
            </div>
          </div>
        </div>,
        modalRoot
      )}

    </div>
  );
}

/* ─────────────────────────────────────────────────
   탭 배열 — 최상단 선언
───────────────────────────────────────────────── */

const NAVY_TABS = [
  { label: 'Discover', ko: '발견', component: TabDiscover },
  { label: 'Define',   ko: '정의', component: TabDefine   },
  { label: 'Develop',  ko: '개발', component: TabDevelop  },
  { label: 'Deliver',  ko: '전달', component: TabDeliver  },
];

/* ─────────────────────────────────────────────────
   ProjectNavy — 메인
───────────────────────────────────────────────── */

function ProjectNavy() {
  const [active, setActive] = React.useState(0);

  return (
    <section id="project-navy" className="section project-navy">
      <div className="container">
{/* 헤더 */}
<div className="section__header" data-reveal>
  <span className="eyebrow">03 — Featured Project</span>
  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--s-6)', flexWrap: 'wrap', marginTop: 'var(--s-4)' }}>
    <div>
      {/* 프로젝트 컨텍스트 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <span style={{
          padding: '4px 10px', background: 'var(--primary)', color: '#fff',
          borderRadius: 'var(--r-pill)', fontSize: 10, fontWeight: 600, letterSpacing: '.08em',
        }}>PROJECT</span>
        <span className="chip">B2G</span>
        <span className="chip">진행중</span>
      </div>
      <h2 className="section__title display" style={{ marginBottom: 6 }}>
        해군 기상입력 플랫폼
      </h2>
      <div className="mono" style={{ color: 'var(--fg-subtle)', fontSize: 12, letterSpacing: '.04em' }}>
        NAVAL WEATHER INPUT PLATFORM · 2025—2026 · UX Research → UI Design → Dev
      </div>
    </div>
  </div>
</div>

{/* 탭 — 순서도 스타일 */}
<div data-reveal data-delay="1" style={{ marginBottom: 'var(--s-4)', marginTop: 'var(--s-6)' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {NAVY_TABS.map((tab, i) => (
      <React.Fragment key={i}>
        {/* 탭 버튼 */}
        <button
          onClick={() => setActive(i)}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 18px',
            width:'15%',
            background: active === i ? 'var(--primary)' : 'var(--bg-elev)',
            border: `1px solid ${active === i ? 'var(--primary)' : 'var(--border)'}`,
            borderRadius: 'var(--r-pill)',
            cursor: 'pointer', fontFamily: 'inherit',
            boxShadow: active === i ? 'var(--shadow-md)' : 'none',
            transition: 'all .25s cubic-bezier(.2,.7,.2,1)',
            flexShrink: 0,
          }}
        >
          {/* 번호 */}
          <div style={{
            width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
            background: active === i ? 'rgba(255,255,255,.2)' : 'var(--bg-muted)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span className="mono" style={{
              fontSize: 9, fontWeight: 700, letterSpacing: 0,
              color: active === i ? '#fff' : 'var(--fg-subtle)',
            }}>{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'left' }}>
            <span style={{
              fontSize: 13, fontWeight: 600,
              color: active === i ? '#fff' : 'var(--fg)',
              transition: 'color .2s', lineHeight: 1.2,
            }}>{tab.label}</span>
            <span className="mono" style={{
              fontSize: 9, letterSpacing: '.06em',
              color: active === i ? 'rgba(255,255,255,.65)' : 'var(--fg-subtle)',
              transition: 'color .2s',
            }}>{tab.ko}</span>
          </div>
        </button>

      {/* 화살표 연결선 */}
      {i < NAVY_TABS.length - 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: 24 }}>
          <span style={{
            fontSize: 12, fontWeight: 300,
            color: active > i ? 'var(--primary)' : 'var(--border-strong)',
            transition: 'color .3s',
          }}>›</span>
        </div>
      )}
      </React.Fragment>
    ))}
  </div>
</div>
        {/* 콘텐츠 — display:none으로 state 유지 */}
        <div data-reveal data-delay="2" style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 'var(--s-8)', minHeight: 480 }}>
          {NAVY_TABS.map((tab, i) => (
            <div key={i} style={{ display: active === i ? 'block' : 'none' }}>
              <tab.component />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

window.ProjectNavy = ProjectNavy;
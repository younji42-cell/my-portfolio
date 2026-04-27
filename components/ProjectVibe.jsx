
/* ═══════════════════════════════════════════════
   TAB 1 · DISCOVER
═══════════════════════════════════════════════ */

function ConnectDiscover() {

  const FINDINGS = [
    {
      num: 'F1',
      title: '말하고 싶은데 방법을 모르겠어요',
      color: 'oklch(58% 0.20 25)',
      colorSoft: 'oklch(58% 0.20 25 / .08)',
      desc: '대다수의 인터뷰 참가자는 배우자에게 하고 싶은 말이 있지만, 상처를 줄까 봐, 싸움이 될까 봐, 어떻게 시작해야 할지 몰라서 말을 삼킵니다. 이는 관계 만족도를 급격히 낮추는 핵심 패턴입니다.',
      quote: '할 말이 쌓이다 보니 어느 날 한꺼번에 터지는 거예요. 평소에 조금씩 표현하는 방법을 배우고 싶어요.',
      who: '37세, 여성, 결혼 8년차',
    },
    {
      num: 'F2',
      title: '남편은 상담가는걸 꺼려하는 것 같아요',
      color: 'oklch(54% 0.15 232)',
      colorSoft: 'oklch(54% 0.15 232 / .08)',
      desc: '여성 참가자의 71%가 전문 상담을 원하지만 배우자의 반대로 포기한 경험이 있었습니다. 남성 참가자들은 상담에 대한 저항감의 이유로 자존심, 실패 인정, 시간 낭비를 꼽았습니다.',
      quote: '우리가 그 정도로 심각해?라고 하는데... 저는 예방 차원에서 가고 싶었거든요.',
      who: '33세, 여성, 결혼 4년차',
      insight: '시사점: 상담보다 챌린지·트레이닝·미션의 언어 사용. 남성이 먼저 리드할 수 있는 UX 플로우 설계.',
    },
    {
      num: 'F3',
      title: '작은 인정이 큰 차이를 만드는 것 같아요',
      color: 'oklch(62% 0.18 145)',
      colorSoft: 'oklch(62% 0.18 145 / .08)',
      desc: '행복한 부부로 분류된 참가자들의 공통점은 감사 표현, 작은 칭찬, 스킨십의 일상화였습니다. 이들은 의식적으로 노력하고 있었으며, 이런 행동을 루틴화하는 데 도움이 필요하다고 했습니다.',
      quote: '매일 자기 전에 오늘 상대방이 해준 것 중 하나를 말하는 게 규칙이에요. 처음엔 어색했는데 이제 없으면 섭섭해요.',
      who: '29세, 여성, 결혼 2년차',
    },
  ];

  const AFFINITY = [
    { emoji: '💬', theme: '감정 표현의 어려움',   count: 73, color: 'oklch(58% 0.20 25)',  notes: ['감정 어휘 부족', '표현 방법을 모름', '표현 후 역효과 경험', '감정 억압의 패턴화'] },
    { emoji: '🏠', theme: '일상 공유의 단절',      count: 58, color: 'oklch(70% 0.15 65)',  notes: ['각자 스마트폰만 봄', '대화 없는 저녁', '취미의 분리', '함께하는 시간 부족'] },
    { emoji: '⚖️', theme: '역할 분담 갈등',       count: 52, color: 'oklch(66% 0.16 285)', notes: ['가사 인식 차이', '육아 부담 불균형', '기여도 인정 부재', '고마움을 표현 못 함'] },
    { emoji: '💰', theme: '경제적 투명성',         count: 44, color: 'oklch(75% 0.16 75)',  notes: ['소비 스타일 충돌', '재정 계획 공유 부재', '비밀 지출 발각', '미래 목표 불일치'] },
    { emoji: '🔒', theme: '프라이버시 & 신뢰',    count: 44, color: 'oklch(54% 0.15 232)', notes: ['데이터 저장 불안', '배우자 공개 여부 고민', '전문가 연결 신뢰 문제', '익명성 보장 요구'] },
    { emoji: '🌱', theme: '성장 욕구',             count: 41, color: 'oklch(62% 0.18 145)', notes: ['좋은 배우자가 되고 싶음', '관계를 배우고 싶음', '함께 성장하고픈 욕구', '예방적 관계 케어 원함'] },
  ];

  const [selectedFinding, setSelectedFinding] = React.useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>01 · Discover</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.2 }}>
          가까운 사람들에게 <strong style={{color:'var(--primary)'}}>직접 물었습니다.</strong>
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 600, margin: 0 }}>
          8명의 1:1 심층 인터뷰, 어피니티 노트, 주요 온라인 커뮤니티 AI 분석을 바탕으로 핵심 발견을 도출했습니다.
        </p>
      </div>

      {/* 리서치 수치 */}

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
  {[
    { num: '8명',   label: '지인 심층 인터뷰', sub: '결혼 2~10년차 부부' },
    { num: '60+개', label: '어피니티 노트',     sub: 'AI 보조 패턴 분류' },
    { num: 'AI 분석', label: '커뮤니티 리서치', sub: '맘카페·부부 커뮤니티 주요 패턴' },
  ].map((s, i) => (
    <div key={i} style={{ padding: '16px 20px', background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', textAlign: 'center' }}>
      <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--primary)', marginBottom: 4 }}>{s.num}</div>
      <div style={{ fontSize: 12, color: 'var(--fg)', fontWeight: 500, marginBottom: 3 }}>{s.label}</div>
      <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>{s.sub}</div>
    </div>
  ))}
</div>
      {/* 핵심 발견 */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>핵심 발견 · Key Findings</div>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 10 }}>
          {/* 좌측 리스트 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {FINDINGS.map((f, i) => (
              <button key={i} onClick={() => setSelectedFinding(i)} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                background: selectedFinding === i ? f.colorSoft : 'transparent',
                border: `1px solid ${selectedFinding === i ? f.color + '50' : 'transparent'}`,
                borderRadius: 'var(--r-lg)', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
                transition: 'all .15s',
              }}>
                <div style={{ width: 26, height: 26, borderRadius: 'var(--r-sm)', flexShrink: 0, background: selectedFinding === i ? f.color : 'var(--bg-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .15s' }}>
                  <span className="mono" style={{ fontSize: 9, color: selectedFinding === i ? '#fff' : 'var(--fg-muted)', fontWeight: 600 }}>{f.num}</span>
                </div>
                <span style={{ fontSize: 11, fontWeight: selectedFinding === i ? 600 : 400, color: selectedFinding === i ? 'var(--fg)' : 'var(--fg-muted)', lineHeight: 1.3 }}>{f.title}</span>
              </button>
            ))}
          </div>

          {/* 우측 상세 */}
          {(() => {
            const f = FINDINGS[selectedFinding];
            return (
              <div style={{ background: 'var(--bg-sunken)', border: `1px solid ${f.color}35`, borderRadius: 'var(--r-xl)', padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 'var(--r-md)', background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="mono" style={{ fontSize: 10, color: '#fff', fontWeight: 600 }}>{f.num}</span>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{f.title}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.75, margin: '0 0 14px' }}>{f.desc}</p>
                <div style={{ padding: '12px 14px', background: 'var(--bg-elev)', borderLeft: `3px solid ${f.color}`, borderRadius: '0 var(--r-md) var(--r-md) 0', marginBottom: f.insight ? 10 : 0 }}>
                  <p style={{ fontSize: 13, lineHeight: 1.7, margin: '0 0 6px', fontStyle: 'italic', color: 'var(--fg)' }}>"{f.quote}"</p>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--fg-subtle)', letterSpacing: '.08em' }}>— {f.who}</span>
                </div>
                {f.insight && (
                  <div style={{ padding: '10px 12px', background: f.colorSoft, border: `1px solid ${f.color}30`, borderRadius: 'var(--r-md)', marginTop: 10 }}>
                    <span style={{ fontSize: 12, color: f.color, lineHeight: 1.6 }}>💡 {f.insight}</span>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </div>

      {/* 어피니티 다이어그램 */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Affinity Diagram · 6개 클러스터</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {AFFINITY.map((a, i) => (
            <div key={i} style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
              <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14 }}>{a.emoji}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg)' }}>{a.theme}</span>
                </div>
                <span style={{ padding: '2px 7px', background: a.color + '20', color: a.color, borderRadius: 'var(--r-pill)', fontSize: 10, fontWeight: 600 }}>{a.count}건</span>
              </div>
              <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                {a.notes.map((n, ni) => (
                  <div key={ni} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--fg-muted)' }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
                    {n}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TAB 2 · DEFINE
═══════════════════════════════════════════════ */

function ConnectDefine() {
  const [activePersona, setActivePersona] = React.useState(0);
  const [activeHmw, setActiveHmw] = React.useState(0);

  const PERSONAS = [
    {
      name: '이지현',
      role: 'Primary Persona',
      age: '만 34세 · 콘텐츠 마케터',
      color: 'oklch(58% 0.20 25)',
      colorSoft: 'oklch(58% 0.20 25 / .08)',
      quote: '남편이 내 감정을 이해 못 하는 건지, 이해하기 싫은 건지 모르겠어요.',
      pain: '감정 표현이 서툰 남편과의 소통 단절. 일 끝나고 집에 오면 각자 폰만 봄. 대화를 시작하면 "그게 왜 문제야?"는 반응에 지침.',
      goal: '남편과 진짜 대화를 하고 싶다. 싸우지 않고도 내 감정을 전달하는 방법을 배우고 싶다.',
      trigger: '인스타에서 부부 관계 개선 릴스 보고 공감하거나, 친구가 앱 추천해줬을 때. 혼자 먼저 시작해보고 싶어함.',
      day: [
        { time: '07:00', text: '기상. 남편은 이미 출근. 카톡 한 마디 없이 나간 게 섭섭하지만 말 못 함.' },
        { time: '12:00', text: '직장 동료와 점심. "우리 남편은 왜 이럴까" 하소연.' },
        { time: '19:30', text: '퇴근. 남편은 소파에 TV 시청 중. "다녀왔어" 한 마디.' },
        { time: '21:00', text: '각자 방에서 핸드폰. 오늘도 대화 없음. 외로움 느낌.' },
        { time: '23:00', text: '자기 전 유튜브에서 "부부 소통법" 검색. 공감 영상 봄.' },
      ],
      empathy: {
        hear:  ['요즘 부부 상담 많이 간다더라', '남자들은 원래 그래, 참아', '유튜브: 남편이 변하는 법', '친구: 우리도 똑같아'],
        see:   ['TV만 보는 남편', 'SNS에서 행복해 보이는 커플들', '점점 줄어드는 대화', '커플 계정 팔로우 증가'],
        say:   ['"오늘 힘들었어" (속: 위로받고 싶어)', '"됐어, 신경 꺼" (속: 알아줬으면)', '친구에게: "이혼 생각은 아닌데..."', '"괜찮아" (속: 전혀 안 괜찮아)'],
        doIt:  ['유튜브 부부 소통 검색', '커뮤니티에 익명 글 작성', '혼자 책 읽기 (5분도 못 감)', '억지로 말 걸다 싸움'],
        pain:  ['외로운데 혼자 해결해야 함', '이게 맞는지 기준이 없음', '변화시키려다 더 나빠질까 봐', '"내가 너무 예민한가?" 자책'],
        gain:  ['남편이 "알아서" 노력해주면 좋겠음', '우리 관계가 특별하다는 느낌', '매일 5분이라도 진짜 대화', '"나는 정상이야" 안심'],
      },
    },
    {
      name: '박민준',
      role: 'Secondary Persona',
      age: '만 38세 · IT 스타트업 팀장',
      color: 'oklch(54% 0.15 232)',
      colorSoft: 'oklch(54% 0.15 232 / .08)',
      quote: '아내가 뭘 원하는지는 알겠는데... 어떻게 해줘야 하는지를 모르겠어요.',
      pain: '아내의 감정적 요구에 어떻게 반응해야 할지 모름. 논리적으로 문제를 해결하려 하면 아내는 더 화냄. 직장 스트레스 + 가정 갈등 이중고.',
      goal: '아내를 행복하게 해주고 싶다. 좋은 남편이 되는 방법을 구체적으로 배우고 싶다.',
      trigger: '아내에게 크게 혼난 후, 또는 퇴근길에 "나 오늘 또 실수했나" 반성할 때. 목표 지향적 접근법 선호.',
      day: [],
      empathy: null,
    },
  ];

  const HMW = [
    {
      category: '소통 & 감정 표현',
      color: 'oklch(58% 0.20 25)',
      items: [
        '감정 표현이 서툰 사람도 배우자에게 안전하게 감정을 전달할 수 있게 도울 수 있을까?',
        '대화가 싸움으로 번지기 전에 쿨다운 타임을 만들 수 있을까?',
        '상대방의 감정 표현 방식을 서로 이해하도록 도울 수 있을까?',
      ],
    },
    {
      category: '일상 연결',
      color: 'oklch(70% 0.15 65)',
      items: [
        '바쁜 부부가 5분도 안 되는 시간에 진짜 연결을 느낄 수 있게 할 수 있을까?',
        '각자 하던 것을 함께로 전환할 때 자연스럽게 도울 수 있을까?',
        '함께 성공 경험을 만들어 우리 팀이라는 감각을 키울 수 있을까?',
      ],
    },
    {
      category: '남성 참여 유도',
      color: 'oklch(54% 0.15 232)',
      items: [
        '상담의 스티그마 없이 남성이 자발적으로 참여하도록 유도할 수 있을까?',
        '남성의 문제 해결 성향을 관계 개선에 긍정적으로 활용할 수 있을까?',
        '여성이 먼저 시작해도 남성이 자연스럽게 합류하도록 설계할 수 있을까?',
      ],
    },
    {
      category: '진단 & 성장',
      color: 'oklch(62% 0.18 145)',
      items: [
        '우리 관계의 건강 상태를 객관적으로 보여주고 안심 또는 경각심을 줄 수 있을까?',
        '관계 개선의 작은 성과를 가시화해 동기를 유지하게 할 수 있을까?',
        '전문 상담이 필요한 수준인지 아닌지를 사용자 스스로 인식하도록 도울 수 있을까?',
      ],
    },
  ];

  const EMPATHY_LABELS = [
    { key: 'hear', label: '👂 HEAR', sub: '듣는 것' },
    { key: 'see',  label: '👀 SEE',  sub: '보는 것' },
    { key: 'say',  label: '💬 SAY',  sub: '말하는 것' },
    { key: 'doIt', label: '🎬 DO',   sub: '행동' },
    { key: 'pain', label: '😣 PAIN', sub: '고통' },
    { key: 'gain', label: '🌟 GAIN', sub: '욕구' },
  ];

  const persona = PERSONAS[activePersona];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>02 · Define</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.2 }}>
          공감을 <strong style={{color:'var(--primary)'}}>기회로 변환했습니다.</strong>
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.8,  margin: 0 }}>
          수집한 데이터를 페르소나와 공감 지도로 구조화하고, HMW 질문으로 기회 영역을 정의했습니다.
        </p>
      </div>

      {/* 페르소나 */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Persona</div>
        {/* 탭 */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          {PERSONAS.map((p, i) => (
            <button key={i} onClick={() => setActivePersona(i)} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px',
              background: activePersona === i ? p.color : 'var(--bg-elev)',
              border: `1px solid ${activePersona === i ? p.color : 'var(--border)'}`,
              borderRadius: 'var(--r-pill)', cursor: 'pointer', fontFamily: 'inherit',
              transition: 'all .2s',
            }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: activePersona === i ? 'rgba(255,255,255,.25)' : p.colorSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>👤</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: activePersona === i ? '#fff' : 'var(--fg)' }}>{p.name}</div>
                <div className="mono" style={{ fontSize: 9, color: activePersona === i ? 'rgba(255,255,255,.7)' : 'var(--fg-subtle)', letterSpacing: '.06em' }}>{p.role}</div>
              </div>
            </button>
          ))}
        </div>

        {/* 페르소나 카드 */}
        <div style={{ background: 'var(--bg-elev)', border: `1px solid ${persona.color}40`, borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
          {/* 헤더 */}
          <div style={{ padding: '20px 24px', background: persona.colorSoft, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: persona.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>👤</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--fg)', marginBottom: 2 }}>{persona.name}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-muted)' }}>{persona.age}</div>
              </div>
            </div>
            <div style={{ padding: '12px 14px', background: 'var(--bg-elev)', borderLeft: `3px solid ${persona.color}`, borderRadius: '0 var(--r-md) var(--r-md) 0' }}>
              <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--fg)', margin: 0, lineHeight: 1.6 }}>"{persona.quote}"</p>
            </div>
          </div>

          {/* 바디 */}
          <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {[
              { label: '🔴 핵심 고통', text: persona.pain, color: 'oklch(58% 0.20 25)' },
              { label: '🟢 핵심 목표', text: persona.goal, color: 'oklch(62% 0.18 145)' },
              { label: '⚡ 앱 사용 트리거', text: persona.trigger, color: persona.color },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, fontWeight: 600, color: item.color, marginBottom: 6 }}>{item.label}</div>
                <p style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* 하루 일과 — 이지현만 */}
          {persona.day.length > 0 && (
            <div style={{ padding: '0 24px 20px' }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Day in the Life</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {persona.day.map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span className="mono" style={{ fontSize: 11, color: persona.color, fontWeight: 600, minWidth: 42, flexShrink: 0, paddingTop: 1 }}>{d.time}</span>
                    <div style={{ flex: 1, height: 1, background: 'var(--border)', marginTop: 8, flexShrink: 0, maxWidth: 12 }} />
                    <span style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.6 }}>{d.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 공감 지도 — 이지현만 */}
      {activePersona === 0 && persona.empathy && (
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>이지현 공감 지도 · Empathy Map</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {EMPATHY_LABELS.map(({ key, label, sub }) => (
              <div key={key} style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
                <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--bg-sunken)' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>{label}</div>
                  <div className="mono" style={{ fontSize: 9, color: 'var(--fg-subtle)', letterSpacing: '.08em' }}>{sub}</div>
                </div>
                <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {persona.empathy[key].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 6, fontSize: 11, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--border-strong)', flexShrink: 0, marginTop: 5 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HMW */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 8}}>HMW · How Might We</div>
        <p style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.7, margin: '0 0 16px' }}>
          HMW 질문은 발견된 인사이트를 기회로 전환하는 프레임입니다. 이 질문들을 필터링해 핵심 문제를 정의합니다.
        </p>
        {/* 카테고리 탭 */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' }}>
          {HMW.map((h, i) => (
            <button key={i} onClick={() => setActiveHmw(i)} style={{
              padding: '6px 14px',
              background: activeHmw === i ? h.color : 'var(--bg-elev)',
              border: `1px solid ${activeHmw === i ? h.color : 'var(--border)'}`,
              borderRadius: 'var(--r-pill)', cursor: 'pointer', fontFamily: 'inherit',
              fontSize: 12, fontWeight: activeHmw === i ? 600 : 400,
              color: activeHmw === i ? '#fff' : 'var(--fg-muted)',
              transition: 'all .2s',
            }}>{h.category}</button>
          ))}
        </div>
        <div style={{ background: 'var(--bg-elev)', border: `1px solid ${HMW[activeHmw].color}35`, borderRadius: 'var(--r-xl)',  display: 'flex', flexDirection: 'column', gap: 10 }}>
          {HMW[activeHmw].items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center',padding: '10px 12px', background: 'var(--bg-sunken)', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ flexShrink: 0, marginTop: -4 }}>
                <span style={{ padding: '2px 7px', background: HMW[activeHmw].color, color: '#fff', borderRadius: 'var(--r-pill)', fontSize: 9, fontWeight: 600 }}>HMW</span>
              </div>
              <span style={{ fontSize: 13, color: 'var(--fg)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TAB 3 · DEVELOP
═══════════════════════════════════════════════ */

function ConnectDevelop() {
 
  const MVP_FEATURES = [
    {
      emoji: '🌡️',
      title: '관계 온도 체크인',
      desc: '하루 1번 감정 상태를 5단계 이모지로 입력. 파트너와 실시간 공유. 대화 물꼬를 여는 가장 작은 단위의 연결.',
      priority: 'P0',
      effort: 'Low',
      effortColor: 'oklch(62% 0.18 145)',
    },
    {
      emoji: '🎯',
      title: '데일리 커플 미션',
      desc: '매일 완료 가능한 미션 제공. 예: "오늘 고마운 것 1가지 말하기", "10초 포옹하기". 과학 기반 Gottman 미션 라이브러리.',
      priority: 'P0',
      effort: 'Mid',
      effortColor: 'oklch(75% 0.16 75)',
    },
    {
      emoji: '💌',
      title: '감정 카드 전송',
      desc: '사전 설계된 감정 표현 카드 50종 제공. "지금 나 좀 외로워", "고마워, 오늘 많이 힘들었지". 직접 말하기 어려운 감정을 카드로 전달.',
      priority: 'P0',
      effort: 'Low',
      effortColor: 'oklch(62% 0.18 145)',
    },
    {
      emoji: '🏆',
      title: '스트릭 & 레벨 시스템',
      desc: '연속 미션 완료 일수 스트릭 표시. 커플 공동 레벨 1~10 (씨앗→새싹→꽃→나무→숲). 레벨업 시 새 미션 카테고리 언락.',
      priority: 'P0',
      effort: 'Mid',
      effortColor: 'oklch(75% 0.16 75)',
    },
    {
      emoji: '🚀',
      title: '온보딩 & 파트너 연결',
      desc: '개인 진단(5문항 관계 유형 테스트) → 파트너 초대 링크 생성 → 함께 첫 미션. 혼자 시작도 가능(솔로 모드). 첫 10분 경험이 전체 리텐션을 결정.',
      priority: 'P0',
      effort: 'High',
      effortColor: 'oklch(58% 0.20 25)',
    },
  ];
 
  const PRINCIPLES = [
    {
      num: '01',
      title: '5분의 마법',
      en: '5-Minute Magic',
      desc: '모든 핵심 기능은 5분 이내 완료 가능해야 한다. 바쁜 부부에게 부담이 되는 순간 앱은 닫힌다. "시간이 없어서"는 핑계가 되어선 안 된다.',
      color: 'oklch(56% 0.14 232)',
      colorSoft: 'oklch(56% 0.14 232 / .08)',
    },
    {
      num: '02',
      title: '즐거운 의무',
      en: 'Joyful Duty',
      desc: '관계 개선은 의무감이 아닌 기대감으로 접근해야 한다. 게임화 요소(스트릭·레벨·배지)는 "하고 싶은 것"으로 만드는 장치다. 무겁지 않게, 그러나 진지하게.',
      color: 'oklch(66% 0.16 285)',
      colorSoft: 'oklch(66% 0.16 285 / .08)',
    },
    {
      num: '03',
      title: '혼자도 함께도',
      en: 'Solo or Together',
      desc: '파트너가 참여하지 않아도 앱은 완전히 작동해야 한다. 단, 함께 할 때 경험이 극적으로 좋아져야 한다. 강요가 아닌 "같이 하면 더 좋은" 설계.',
      color: 'oklch(62% 0.18 145)',
      colorSoft: 'oklch(62% 0.18 145 / .08)',
    },
    {
      num: '04',
      title: '안전한 공간',
      en: 'Safe Space',
      desc: '부부 간의 감정 데이터는 극도로 민감하다. 프라이버시를 최우선으로. 상대방이 내 체크인을 볼 수 있는 범위는 사용자가 완전히 통제한다.',
      color: 'oklch(54% 0.15 232)',
      colorSoft: 'oklch(54% 0.15 232 / .08)',
    },
    {
      num: '05',
      title: '보이는 성장',
      en: 'Visible Progress',
      desc: '변화는 느리고 보이지 않아서 포기한다. 관계의 성장을 수치·그래프·비주얼로 가시화한다. "우리가 나아지고 있다"는 증거가 지속의 동력이다.',
      color: 'oklch(70% 0.15 65)',
      colorSoft: 'oklch(70% 0.15 65 / .08)',
    },
  ];
 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
 
      {/* 헤더 */}
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>03 · Develop</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.2 }}>
          많은 니즈를 <strong style={{color:'var(--primary)'}}>가치있는 서비스</strong>로 연결했습니다.
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 600, margin: 0 }}>
          최종 컨셉을 정의하고, MVP 핵심 기능과 UX 설계 원칙을 도출했습니다.
        </p>
      </div>
 
      {/* 최종 컨셉 */}
      <div style={{
        padding: '24px',
        background: 'linear-gradient(135deg, oklch(56% 0.14 232 / .1), oklch(66% 0.16 285 / .06))',
        border: '1px solid oklch(56% 0.14 232 / .3)',
        borderRadius: 'var(--r-xl)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 160, height: 160, borderRadius: '50%', background: 'oklch(56% 0.14 232 / .06)', pointerEvents: 'none' }} />
        <div className="eyebrow" style={{ marginBottom: 10, color: 'var(--primary)' }}>FINAL CONCEPT</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--fg)', marginBottom: 8, lineHeight: 1.3 }}>
          '5분 커넥트(Connect)'<br/>
          <span style={{ fontWeight: 400, fontSize: 15, color: 'var(--fg-muted)' }}>습관 기반 관계 트레이닝</span>
        </div>
        <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.8, margin: '0 0 16px' }}>
          A(AI 코치)의 기술적 차별성 + B(게임화)의 참여 동기 + C(습관 트레이닝)의 행동 변화 효과를 결합합니다.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['하루 5분', '과학 기반', '혼자도 함께도 OK', '게임처럼 즐겁게'].map(tag => (
            <span key={tag} style={{ padding: '5px 12px', background: 'var(--primary-soft)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: 'var(--r-pill)', fontSize: 12, fontWeight: 500 }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
 
      {/* MVP 핵심 기능 */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>MVP 핵심 기능 · 출시 필수</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {MVP_FEATURES.map((f, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '40px 1fr auto',
              alignItems: 'flex-start', gap: 14,
              padding: '14px 18px',
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-xl)',
            }}>
              {/* 이모지 */}
              <div style={{ fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 2 }}>
                {f.emoji}
              </div>
              {/* 내용 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{f.title}</span>
                  <span style={{ padding: '2px 7px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--r-pill)', fontSize: 9, fontWeight: 700 }}>{f.priority}</span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
              {/* Effort */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3, flexShrink: 0 }}>
                <span className="mono" style={{ fontSize: 9, color: 'var(--fg-subtle)', letterSpacing: '.08em' }}>EFFORT</span>
                <span style={{ padding: '3px 9px', background: f.effortColor + '18', color: f.effortColor, border: `1px solid ${f.effortColor}35`, borderRadius: 'var(--r-pill)', fontSize: 11, fontWeight: 600 }}>
                  {f.effort}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* UX 설계 원칙 */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 4 }}>UX 설계 원칙 · Design Principles</div>
        <p style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.7, margin: '0 0 16px', maxWidth: 560 }}>
          앞으로의 모든 UI/UX 결정은 이 5가지 원칙에 따라 평가합니다.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
          {PRINCIPLES.map((p, i) => (
            <div key={i} style={{
              padding: '16px 14px',
              background: p.colorSoft,
              border: `1px solid ${p.color}35`,
              borderRadius: 'var(--r-xl)',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div style={{ fontSize: 22 }}>{p.icon}</div>
              <div>
                <div className="mono" style={{ fontSize: 9, color: p.color, letterSpacing: '.1em', marginBottom: 3 }}>{p.num}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--fg)', marginBottom: 1, lineHeight: 1.2 }}>{p.title}</div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--fg-subtle)', marginBottom: 8 }}>{p.en}</div>
                <p style={{ fontSize: 11, color: 'var(--fg-muted)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* 기술 스택 */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Tech Stack · 바이브코딩</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {['Expo', 'React Native', 'TypeScript', 'Claude AI', 'Cursor'].map(t => (
            <span key={t} style={{ padding: '6px 14px', background: 'var(--primary-soft)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: 'var(--r-pill)', fontSize: 12, fontWeight: 500 }}>{t}</span>
          ))}
          <span style={{ fontSize: 12, color: 'var(--fg-muted)', marginLeft: 4 }}>— 디자인을 실제 동작으로 직접 연결</span>
        </div>
      </div>
 
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TAB 4 · DELIVER
═══════════════════════════════════════════════ */

function ConnectDeliver() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>04 · Deliver</span>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.2 }}>
          AI와 함께 <strong style={{color:'var(--primary)'}}>앱으로 직접 구현했습니다.</strong>
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 600, margin: 0 }}>
          현재 핸드폰에서 구동 중입니다. 배포 전 단계이지만, 리서치와 설계의 깊이가 이 프로젝트의 핵심입니다.
        </p>
      </div>

      {/* 현재 상태 카드 */}
      <div style={{
        padding: '20px 24px',
        background: 'oklch(54% 0.15 232 / .06)',
        border: '1px solid oklch(54% 0.15 232 / .3)',
        borderRadius: 'var(--r-xl)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'oklch(70% 0.15 65)', animation: 'pulse 2s infinite' }} />
          <span className="mono" style={{ fontSize: 10, color: 'oklch(50% 0.14 65)', letterSpacing: '.1em', fontWeight: 600 }}>CURRENT STATUS · 개발 진행중</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { label: '✅ 완료', items: ['UX 리서치' ,  'Expo 앱 구현', '핵심 플로우 완성', 'UI 디자인 완성', '미션 콘텐츠 제작', '커플 연동 기능'] },
            { label: '🔄 진행중', items: ['기능 보완 & QA', '디자인 정교화'] },
            { label: '📋 예정', items: ['App Store 배포', '베타 테스트', '피드백 반영'] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 8 }}>{col.label}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {col.items.map((item, j) => (
                  <div key={j} style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 앱 스크린샷 플레이스홀더 */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>App Screenshots · 핸드폰 구동 화면</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {[
              { label: '온보딩', src: '/my-portfolio/assets/vibeapp05.png' },  // 예: src: '/my-portfolio/assets/connect-onboarding.png'
              { label: '홈',     src: '/my-portfolio/assets/vibeapp01.png' },
              { label: '감정카드',   src: '/my-portfolio/assets/vibeapp07.png'  },
              { label: '리포트', src: '/my-portfolio/assets/vibeapp03.png'  },
            ].map((screen, i) => (
              <div key={i} style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
                <div style={{ aspectRatio: '9/19.5', background: 'var(--bg-sunken)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {screen.src ? (
                    <img src={screen.src} alt={screen.label} style={{ width: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'var(--fg-subtle)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
                        <circle cx="12" cy="19" r="1" fill="currentColor" opacity=".3"/>
                      </svg>
                      <span className="mono" style={{ fontSize: 9, opacity: .4 }}>추가 예정</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '8px 12px', textAlign: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--fg-muted)' }}>{screen.label}</span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* 이 프로젝트에서 증명한 것 */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>이 프로젝트에서 증명한 것</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {[
            { icon: '🔍', title: '리서치 깊이', desc: '8명 심층 인터뷰부터 AI 커뮤니티 분석까지. 데이터 기반 UX 설계 역량.' },
            { icon: '🧩', title: '문제 구조화', desc: '페르소나, 공감 지도, HMW로 복잡한 감정 문제를 명확한 설계 기회로 전환.' },
            { icon: '⚡', title: '바이브코딩', desc: 'Expo + React Native로 디자인을 실제 동작하는 앱으로 직접 연결한 경험.' },
            { icon: '💡', title: '언어 설계', desc: '상담의 스티그마를 없애기 위해 미션·챌린지·트레이닝 언어를 의도적으로 설계.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '16px', background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)' }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 5 }}>{item.title}</div>
                <p style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   탭 배열 & 메인 컴포넌트
═══════════════════════════════════════════════ */

const CONNECT_TABS = [
  { label: 'Discover', ko: '발견', component: ConnectDiscover },
  { label: 'Define',   ko: '정의', component: ConnectDefine   },
  { label: 'Develop',  ko: '개발', component: ConnectDevelop  },
  { label: 'Deliver',  ko: '전달', component: ConnectDeliver  },
];

function ProjectVibe() {
  const [active, setActive] = React.useState(0);

  return (
    <section id="project-connect" className="section project-navy">
      <div className="container">

        {/* 헤더 */}
        <div className="section__header" data-reveal>
          <span className="eyebrow">04 — Featured Project</span>
          <div style={{ marginTop: 'var(--s-4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ padding: '4px 10px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--r-pill)', fontSize: 10, fontWeight: 600, letterSpacing: '.08em' }}>PROJECT</span>
              <span className="chip">바이브코딩</span>
              <span className="chip">Expo · React Native</span>
              <span className="chip">진행중</span>
            </div>
            <h2 className="section__title display" style={{ marginBottom: 6 }}>
              커넥트
            </h2>
            <div className="mono" style={{ color: 'var(--fg-subtle)', fontSize: 12, letterSpacing: '.04em' }}>
              CONNECT · 부부관계 개선 앱 · 2026 · UX Research → Vibe Coding
            </div>
          </div>
        </div>

        {/* 탭 */}
        <div data-reveal data-delay="1" style={{ marginBottom: 'var(--s-4)', marginTop: 'var(--s-6)' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {CONNECT_TABS.map((tab, i) => (
              <React.Fragment key={i}>
                <button onClick={() => setActive(i)} style={{
                  display: 'flex', alignItems: 'center', gap: 10, width:'15%',
                  padding: '10px 18px',
                  background: active === i ? 'var(--primary)' : 'var(--bg-elev)',
                  border: `1px solid ${active === i ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: 'var(--r-pill)',
                  cursor: 'pointer', fontFamily: 'inherit',
                  boxShadow: active === i ? 'var(--shadow-md)' : 'none',
                  transition: 'all .25s cubic-bezier(.2,.7,.2,1)', flexShrink: 0,
                }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, background: active === i ? 'rgba(255,255,255,.2)' : 'var(--bg-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="mono" style={{ fontSize: 9, fontWeight: 700, color: active === i ? '#fff' : 'var(--fg-subtle)' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'left' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: active === i ? '#fff' : 'var(--fg)', lineHeight: 1.2 }}>{tab.label}</span>
                    <span className="mono" style={{ fontSize: 9, letterSpacing: '.06em', color: active === i ? 'rgba(255,255,255,.65)' : 'var(--fg-subtle)' }}>{tab.ko}</span>
                  </div>
                </button>
                {i < CONNECT_TABS.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: 24 }}>
                    <span style={{ fontSize: 16, fontWeight: 300, color: active > i ? 'var(--primary)' : 'var(--border-strong)', transition: 'color .3s' }}>›</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 콘텐츠 */}
        <div data-reveal data-delay="2" style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 'var(--s-8)', minHeight: 480 }}>
          {CONNECT_TABS.map((tab, i) => (
            <div key={i} style={{ display: active === i ? 'block' : 'none' }}>
              <tab.component />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

window.ProjectVibe = ProjectVibe;
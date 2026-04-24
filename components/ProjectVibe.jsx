// components/ProjectVibe.jsx — 두번째 프로젝트: 바이브코딩 앱

function ProjectVibe() {
  const [tab, setTab] = React.useState('preview');
  const [promptIdx, setPromptIdx] = React.useState(0);
  const prompts = [
    "매일 기분을 한 줄로 기록하는 앱",
    "색으로 그날을 표현하는 무드 로그",
    "한 달치를 타일로 모아보는 캘린더",
  ];
  const [mood, setMood] = React.useState(4);
  const [note, setNote] = React.useState("오늘은 조용한 블루.");

  React.useEffect(() => {
    const t = setInterval(() => setPromptIdx(i => (i+1) % prompts.length), 3200);
    return () => clearInterval(t);
  }, []);

  // Fake 30-day data
  const days = Array.from({length:30}, (_,i) => ({
    d: i+1,
    mood: Math.floor(Math.random() * 5) + 1,
  }));
  // Make today the last one, use our selected mood
  days[days.length-1].mood = mood;

  const moodColors = [
    'oklch(55% 0.06 260)',  // 1 sad - deep blue
    'oklch(62% 0.09 240)',  // 2
    'oklch(72% 0.10 200)',  // 3
    'oklch(78% 0.12 170)',  // 4
    'oklch(85% 0.14 130)',  // 5 happy - light green
  ];

  return (
    <section id="project-vibe" className="section project-vibe">
      <div className="container">
        <div className="section__header" data-reveal>
          <span className="eyebrow">04 — Side Project</span>
          <div className="project-vibe__meta">
            <div>
              <h2 className="section__title display">
                <em className="italic">Mood.</em>log
              </h2>
              <div className="mono" style={{color:'var(--fg-subtle)', fontSize:13, letterSpacing:'.04em'}}>
                VIBE-CODED IN 48H · React + Claude · Personal Experiment
              </div>
            </div>
            <div className="project-vibe__tags">
              <span className="chip chip--solid">Vibe Coding</span>
              <span className="chip">AI-pair</span>
              <span className="chip">Shipped</span>
            </div>
          </div>
        </div>

        <div className="vibe-grid">
          {/* Prompt → App */}
          <div className="vibe-story">
            <div className="vibe-prompt">
              <div className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em', marginBottom:6}}>PROMPT</div>
              <div className="vibe-prompt__text">
                <span className="vibe-prompt__caret">›</span>
                <span key={promptIdx} className="vibe-prompt__rotating">{prompts[promptIdx]}</span>
              </div>
            </div>
            <div className="vibe-arrow mono">↓ 48h later</div>
            <div className="vibe-ship mono">
              <span className="vibe-ship__dot"/>
              SHIPPED · moodlog.vercel.app
            </div>
          </div>

          {/* App preview with tabs */}
          <div className="vibe-app">
            <div className="vibe-app__tabs">
              {['preview','code','prompt'].map(t => (
                <button key={t}
                        className={"vibe-app__tab " + (tab===t?"is-active":"")}
                        onClick={()=>setTab(t)}>
                  {t === 'preview' ? '미리보기' : t === 'code' ? '코드' : '프롬프트 기록'}
                </button>
              ))}
            </div>
            <div className="vibe-app__body">
              {tab === 'preview' && (
                <div className="mood-app">
                  <div className="mood-app__head">
                    <div>
                      <div className="mono" style={{fontSize:10, opacity:.5, letterSpacing:'.14em'}}>TODAY</div>
                      <div style={{fontSize:20, fontWeight:600}}>4월 24일 · 금</div>
                    </div>
                    <div className="mood-app__streak mono">
                      <svg width="12" height="14" viewBox="0 0 12 14"><path d="M6 1 C 3 4, 9 5, 6 9 C 4 11, 6 13, 6 13 C 6 13, 8 11, 6 9" fill="currentColor"/></svg>
                      12일 연속
                    </div>
                  </div>

                  <div className="mood-picker">
                    <div className="mono" style={{fontSize:10, opacity:.5, marginBottom:10, letterSpacing:'.14em'}}>HOW DO YOU FEEL?</div>
                    <div className="mood-picker__row">
                      {[1,2,3,4,5].map(m => (
                        <button key={m}
                                className={"mood-dot " + (mood===m?"is-selected":"")}
                                style={{background: moodColors[m-1]}}
                                onClick={()=>setMood(m)}>
                          {mood === m && <span className="mood-dot__check">✓</span>}
                        </button>
                      ))}
                    </div>
                    <div className="mood-picker__labels mono">
                      <span>low</span><span>high</span>
                    </div>
                  </div>

                  <div className="mood-note">
                    <textarea value={note} onChange={e=>setNote(e.target.value)}
                              placeholder="한 줄로 오늘을 적어보세요..." />
                  </div>

                  <div className="mood-month">
                    <div className="mono" style={{fontSize:10, opacity:.5, marginBottom:8, letterSpacing:'.14em'}}>THIS MONTH</div>
                    <div className="mood-month__grid">
                      {days.map(d => (
                        <div key={d.d} className="mood-tile"
                             style={{background: moodColors[d.mood-1]}}
                             title={`Day ${d.d} · mood ${d.mood}`}>
                          <span className="mood-tile__num mono">{d.d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {tab === 'code' && (
                <pre className="vibe-code mono">
<span className="tk-c">{"// App.jsx — shipped by vibe"}</span>{"\n"}
<span className="tk-k">function</span>{" "}<span className="tk-f">MoodLog</span>(){" {\n"}
{"  const [mood, setMood] = "}<span className="tk-f">useState</span>{"(4);\n"}
{"  const [note, setNote] = "}<span className="tk-f">useState</span>{"(\"\");\n"}
{"  const today = "}<span className="tk-f">useToday</span>{"();\n\n"}
{"  "}<span className="tk-k">return</span>{" (\n"}
{"    <"}<span className="tk-t">Card</span>{" tone={"}<span className="tk-s">moodTone(mood)</span>{"}>\n"}
{"      <"}<span className="tk-t">MoodPicker</span>{" value={mood} onChange={setMood} />\n"}
{"      <"}<span className="tk-t">NoteField</span>{" value={note} onChange={setNote} />\n"}
{"      <"}<span className="tk-t">MonthGrid</span>{" days={"}<span className="tk-f">useMonth</span>{"()} />\n"}
{"    </"}<span className="tk-t">Card</span>{">\n"}
{"  );\n"}
{"}"}
                </pre>
              )}
              {tab === 'prompt' && (
                <div className="vibe-prompts">
                  {[
                    {n:1, t:'12:04', p:"5점 척도 대신 색으로 고르는 피커가 더 감정적일 것 같아"},
                    {n:2, t:'14:22', p:"월별 그리드를 히트맵처럼 타일로 표시. gap은 2px."},
                    {n:3, t:'17:51', p:"연속 기록 스트릭을 불꽃 아이콘으로, 10일마다 색 바뀜."},
                    {n:4, t:'22:38', p:"로컬스토리지에 저장, 그리고 CSV export 버튼."},
                  ].map(p => (
                    <div key={p.n} className="vibe-prompts__item">
                      <div className="vibe-prompts__meta mono">
                        <span>#{p.n}</span><span>{p.t}</span>
                      </div>
                      <div className="vibe-prompts__body">{p.p}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Learning callouts */}
          <div className="vibe-callouts">
            <div className="vibe-callout">
              <div className="vibe-callout__kicker mono">WHAT I LEARNED</div>
              <h4>디자이너의 프롬프트는 다르다.</h4>
              <p>"예쁘게 해줘"가 아니라 "gap 2px의 30일 타일 히트맵, 색은 oklch로 5단계". 내가 시스템을 짜둔 만큼 AI는 정확하게 만든다.</p>
            </div>
            <div className="vibe-callout">
              <div className="vibe-callout__kicker mono">TOOLS</div>
              <div className="tool-grid">
                <div className="tool-chip"><span className="tool-chip__name">React</span><span className="tool-chip__cat mono">UI</span></div>
                <div className="tool-chip"><span className="tool-chip__name">Claude</span><span className="tool-chip__cat mono">Pair</span></div>
                <div className="tool-chip"><span className="tool-chip__name">Vercel</span><span className="tool-chip__cat mono">Ship</span></div>
                <div className="tool-chip"><span className="tool-chip__name">Tailwind</span><span className="tool-chip__cat mono">Style</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ProjectVibe = ProjectVibe;

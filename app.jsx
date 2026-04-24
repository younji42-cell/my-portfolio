// app.jsx — Main app entry

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "radiusScale": 1,
  "accentHue": 232
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [mouse, setMouse] = React.useState({ x: -100, y: -100 });
  const [hovering, setHovering] = React.useState(false);
  const [active, setActive] = React.useState('hero');
  const ringRef = React.useRef(null);
  const dotRef = React.useRef(null);

  // Theme
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.dark ? 'dark' : 'light');
  }, [t.dark]);

  // Radius scale
  React.useEffect(() => {
    document.documentElement.style.setProperty('--r-scale', t.radiusScale);
  }, [t.radiusScale]);

  // Accent hue
  React.useEffect(() => {
    const h = t.accentHue;
    const root = document.documentElement;
    root.style.setProperty('--primary', `oklch(36% 0.11 ${h})`);
    root.style.setProperty('--primary-hover', `oklch(28% 0.09 ${h})`);
    root.style.setProperty('--primary-soft', `oklch(95% 0.028 ${h})`);
    root.style.setProperty('--ring', `oklch(56% 0.14 ${h} / 0.35)`);
    if (t.dark) {
      root.style.setProperty('--primary', `oklch(68% 0.13 ${h})`);
      root.style.setProperty('--primary-soft', `oklch(25% 0.08 ${h})`);
    }
  }, [t.accentHue, t.dark]);

  // Cursor trail
  React.useEffect(() => {
    let rafId;
    let px = 0, py = 0, rx = 0, ry = 0;
    const onMove = (e) => {
      px = e.clientX; py = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = px + 'px';
        dotRef.current.style.top = py + 'px';
      }
      const el = e.target.closest('[data-cursor="link"], a, button, input, textarea, select, [role="button"]');
      setHovering(!!el);
    };
    const loop = () => {
      rx += (px - rx) * 0.18;
      ry += (py - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      rafId = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove);
    loop();
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Reveal on scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Active section tracking
  React.useEffect(() => {
    const sections = ['hero','about','process','project-navy','project-vibe','playground','skills','contact'];
    const onScroll = () => {
      const y = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= y) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navSections = [
    { id: 'about', label: 'About', num: '01' },
    { id: 'process', label: 'Process', num: '02' },
    { id: 'project-navy', label: 'Navy', num: '03' },
    { id: 'project-vibe', label: 'Mood.log', num: '04' },
    { id: 'playground', label: 'System', num: '05' },
    { id: 'contact', label: 'Contact', num: '07' },
  ];

  return (
    <>
      <div ref={dotRef} className={"cursor-dot " + (hovering ? "hovering" : "")}/>
      <div ref={ringRef} className={"cursor-ring " + (hovering ? "hovering" : "")}/>

      <Nav sections={navSections} activeSection={active}
           dark={t.dark} onToggleDark={() => setTweak('dark', !t.dark)}/>

      <main>
        <Hero/>
        <About/>
        <Process/>
        <ProjectNavy/>
        <ProjectVibe/>
        <Playground
          radiusScale={t.radiusScale}
          onRadiusChange={(v) => setTweak('radiusScale', v)}
          accent={t.accentHue}
          onAccentChange={(v) => setTweak('accentHue', v)}/>
        <Skills/>
        <Contact/>
      </main>

      <TweaksPanel>
        <TweakSection label="Theme"/>
        <TweakToggle label="Dark mode" value={t.dark}
                     onChange={(v) => setTweak('dark', v)}/>
        <TweakSection label="Shape"/>
        <TweakSlider label="Radius scale" value={t.radiusScale}
                     min={0} max={2} step={0.1}
                     onChange={(v) => setTweak('radiusScale', v)}/>
        <TweakSection label="Color"/>
        <TweakRadio label="Accent hue" value={t.accentHue}
                    options={[
                      {value: 232, label: 'Ocean'},
                      {value: 190, label: 'Teal'},
                      {value: 285, label: 'Violet'},
                      {value: 30, label: 'Coral'},
                    ]}
                    onChange={(v) => setTweak('accentHue', v)}/>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

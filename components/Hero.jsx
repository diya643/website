// Hero.jsx — Dark hero with Vimeo NYC timelapse background

const Hero = () => (
  <section style={{
    position: "relative",
    overflow: "hidden",
    paddingTop: 140,
    paddingBottom: 160,
    background: "#080b12",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  }}>

    {/* YouTube background — NYC aerial 4K drone footage, loops a 5-second clip */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: 0,
      overflow: "hidden",
    }}>
      <iframe
        id="hero-yt-bg"
        src="https://www.youtube.com/embed/qpRf06q2PKg?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=qpRf06q2PKg&playsinline=1&modestbranding=1&disablekb=1&start=10&end=15&enablejsapi=1"
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "177.8vh",
          height: "56.25vw",
          minWidth: "100%",
          minHeight: "100%",
          border: "none",
          opacity: 0.55,
          pointerEvents: "none",
        }}
        allow="autoplay; fullscreen"
        frameBorder="0"
      />
    </div>
    <script dangerouslySetInnerHTML={{ __html: `
      (function() {
        var CLIP_START = 10, CLIP_END = 15;
        var player, loopStarted = false;
        function onYTReady() {
          player = new YT.Player('hero-yt-bg', {
            events: {
              onReady: function() { startLoop(); },
              onStateChange: function(e) {
                if (e.data === YT.PlayerState.ENDED || e.data === YT.PlayerState.PAUSED) {
                  player.seekTo(CLIP_START, true);
                  player.playVideo();
                }
              }
            }
          });
        }
        function startLoop() {
          if (loopStarted) return;
          loopStarted = true;
          setInterval(function() {
            if (!player || typeof player.getCurrentTime !== 'function') return;
            var t = player.getCurrentTime();
            if (t >= CLIP_END || t < CLIP_START - 1) {
              player.seekTo(CLIP_START, true);
            }
          }, 150);
        }
        if (window.YT && window.YT.Player) { onYTReady(); }
        else {
          var prev = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = function() { if (prev) prev(); onYTReady(); };
          if (!document.getElementById('yt-api-script')) {
            var s = document.createElement('script');
            s.id = 'yt-api-script';
            s.src = 'https://www.youtube.com/iframe_api';
            document.head.appendChild(s);
          }
        }
      })();
    ` }} />

    {/* Dark overlay for text contrast + YouTube UI masking */}
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: 1,
      background: "linear-gradient(to bottom, rgba(5,8,15,0.72) 0%, rgba(5,8,15,0.38) 40%, rgba(5,8,15,0.38) 60%, rgba(5,8,15,0.72) 100%)",
    }} />
    {/* Mask YouTube top-left title chip — full opaque strip + gradient fade */}
    <div aria-hidden="true" style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 120, zIndex: 3,
      background: "linear-gradient(to bottom, rgba(5,8,15,1) 0%, rgba(5,8,15,0.97) 40%, rgba(5,8,15,0.5) 75%, transparent 100%)",
      pointerEvents: "none",
    }} />
    {/* Mask YouTube bottom-right "More videos" chip */}
    <div aria-hidden="true" style={{
      position: "absolute", bottom: 0, left: 0, right: 0, height: 120, zIndex: 3,
      background: "linear-gradient(to top, rgba(5,8,15,1) 0%, rgba(5,8,15,0.97) 40%, rgba(5,8,15,0.5) 75%, transparent 100%)",
      pointerEvents: "none",
    }} />
    {/* Mask YouTube right-side "More videos" text chip */}
    <div aria-hidden="true" style={{
      position: "absolute", top: 0, bottom: 0, right: 0, width: 200, zIndex: 3,
      background: "linear-gradient(to left, rgba(5,8,15,0.85) 0%, transparent 100%)",
      pointerEvents: "none",
    }} />

    <div className="container" style={{ position: "relative", zIndex: 2 }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
        textAlign: "center",
        maxWidth: 860,
        margin: "0 auto",
      }}>

        {/* Eyebrow pill */}
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "7px 16px",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 999,
          background: "rgba(255,255,255,0.06)",
          fontSize: 12.5,
          fontWeight: 500,
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.70)",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--pascal-accent)", flex: "none" }} />
          Enterprise AI Platform · Built for Finance
        </span>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(44px, 6vw, 76px)",
          lineHeight: 1.0,
          letterSpacing: "-0.05em",
          fontWeight: 600,
          color: "#fff",
          margin: 0,
        }}>
          Context driven AI for{" "}
          <span style={{ color: "#fff" }}>Institutional Finance</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 19,
          lineHeight: 1.55,
          color: "rgba(255,255,255,0.65)",
          margin: 0,
          maxWidth: 520,
        }}>
          AI agents to turn your enterprise data into investment alpha.
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="demo.html" className="pbtn pbtn-primary">
            Schedule a Demo
          </a>
        </div>

      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });

/* ═══════════════════════════════════════════════════════════════════
   MERIDIAN — main.js
   GSAP + ScrollTrigger animations, typewriter, sparkline, 
   navbar scroll, mobile menu, scroll counter, text scramble
   taste-skill: MOTION_INTENSITY 6 — CSS cubic-bezier + GSAP reveals
   Performance: hardware-accelerated (transform/opacity only)
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

/* ── GSAP Plugin Registration ──────────────────────────────────────── */
gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────────────
   1. NAVBAR SCROLL EFFECT
   ──────────────────────────────────────────────────────────────────── */
(function initNavbar() {
  const nav = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  let lastScrollY = 0;
  let ticking = false;

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', lastScrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile burger */
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('i').className = isOpen ? 'ph ph-x' : 'ph ph-list';
  });

  /* Close mobile menu on link click */
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('i').className = 'ph ph-list';
    });
  });
})();

/* ─────────────────────────────────────────────────────────────────────
   2. SCROLL REVEAL (Intersection Observer — no GSAP overhead for simple reveals)
   ──────────────────────────────────────────────────────────────────── */
(function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          /* Stagger siblings in the same parent container */
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.reveal-item:not(.is-visible)')
          );
          const idx = siblings.indexOf(entry.target);
          const delay = Math.min(idx * 90, 400);

          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
})();

/* ─────────────────────────────────────────────────────────────────────
   3. TEXT SCRAMBLE — Hero headline accent
   ──────────────────────────────────────────────────────────────────── */
(function initTextScramble() {
  const el = document.getElementById('scrambleText');
  if (!el) return;

  const phrases = ['actually ships', 'builds every week', 'gets unblocked', 'delivers value'];
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./';
  let phraseIdx = 0;
  let frameId;

  function scramble(target) {
    let iteration = 0;
    const original = target;
    clearInterval(frameId);

    frameId = setInterval(() => {
      el.textContent = original
        .split('')
        .map((char, idx) => {
          if (idx < iteration) return original[idx];
          if (char === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      if (iteration >= original.length) clearInterval(frameId);
      iteration += 0.4;
    }, 40);
  }

  /* Cycle phrases */
  function cyclePhrase() {
    phraseIdx = (phraseIdx + 1) % phrases.length;
    scramble(phrases[phraseIdx]);
  }

  /* Initial scramble on load, then cycle every 4s */
  setTimeout(() => scramble(phrases[0]), 800);
  setInterval(cyclePhrase, 4000);
})();

/* ─────────────────────────────────────────────────────────────────────
   4. SPARKLINE BAR CHART (animated, random-oscillating)
   ──────────────────────────────────────────────────────────────────── */
(function initSparkline() {
  const container = document.getElementById('sparkline1');
  if (!container) return;

  const BAR_COUNT = 18;
  const bars = [];
  let data = Array.from({ length: BAR_COUNT }, () => 30 + Math.random() * 60);

  /* Build bars */
  for (let i = 0; i < BAR_COUNT; i++) {
    const bar = document.createElement('div');
    bar.className = 'sparkline__bar';
    bar.style.height = data[i] + '%';
    container.appendChild(bar);
    bars.push(bar);
  }

  /* Animate: shift and update rightmost bar */
  setInterval(() => {
    data.shift();
    data.push(30 + Math.random() * 65);
    bars.forEach((bar, i) => {
      bar.style.height = data[i] + '%';
      bar.style.opacity = 0.4 + (i / BAR_COUNT) * 0.6;
    });
  }, 800);
})();

/* ─────────────────────────────────────────────────────────────────────
   5. TYPEWRITER — Bento terminal card
   ──────────────────────────────────────────────────────────────────── */
(function initTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el) return;

  const queries = [
    'Which engineer has the most unreviewed PRs this week?',
    'Show me sprint drift for the platform team in Q1.',
    'Who\'s at risk of burnout based on commit cadence?',
    'Compare review turnaround: frontend vs backend, last 30 days.',
    'Summarize all delayed tickets from the last sprint.',
  ];

  let queryIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let timeout;

  function type() {
    const current = queries[queryIdx];

    if (!isDeleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isDeleting = true;
        timeout = setTimeout(type, 2200);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        queryIdx = (queryIdx + 1) % queries.length;
        timeout = setTimeout(type, 400);
        return;
      }
    }

    const speed = isDeleting ? 22 : 38;
    timeout = setTimeout(type, speed);
  }

  /* Delay start so it's visible after scroll */
  setTimeout(type, 1200);
})();

/* ─────────────────────────────────────────────────────────────────────
   6. ANIMATED COUNTERS — Stats section
   ──────────────────────────────────────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat__val[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1600;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          /* Ease out quad */
          const eased = 1 - (1 - progress) * (1 - progress);
          const current = Math.floor(eased * target);
          el.textContent = current >= 1000
            ? current.toLocaleString('en-US')
            : String(current);

          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target >= 1000
            ? target.toLocaleString('en-US')
            : String(target);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach(el => observer.observe(el));
})();

/* ─────────────────────────────────────────────────────────────────────
   7. GSAP HERO ENTRANCE SEQUENCE
   ──────────────────────────────────────────────────────────────────── */
(function initHeroEntrance() {
  /* Stagger hero content in if user doesn't prefer reduced motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.from('#heroContent .reveal-item', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2,
    onComplete() {
      /* Remove inline styles so CSS transitions take over */
      document.querySelectorAll('#heroContent .reveal-item').forEach(el => {
        el.style.cssText = '';
        el.classList.add('is-visible');
      });
    }
  });

  gsap.from('#heroVisual', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5,
    onComplete() {
      const el = document.getElementById('heroVisual');
      if (el) { el.style.cssText = ''; el.classList.add('is-visible'); }
    }
  });
})();

/* ─────────────────────────────────────────────────────────────────────
   8. GSAP SECTION PARALLAX (Subtle vertical movement on blobs)
   ──────────────────────────────────────────────────────────────────── */
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.to('.mesh__blob--1', {
    y: -120,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.to('.mesh__blob--2', {
    y: 60,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
})();

/* ─────────────────────────────────────────────────────────────────────
   9. PRICE CARD HOVER TILT (subtle 3D)
   ──────────────────────────────────────────────────────────────────── */
(function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window) return; /* Skip on touch devices */

  document.querySelectorAll('.bento__card, .testi-card, .price-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -4;
      const ry = ((x - cx) / cx) * 4;
      card.style.transform = `translateY(-3px) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

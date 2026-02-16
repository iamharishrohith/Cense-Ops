document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // THEME TOGGLE — dark/light mode with persistence
    // ============================================================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('cence-ops-theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        html.setAttribute('data-theme', 'light');
    }

    function updateIcons() {
        const isLight = html.getAttribute('data-theme') === 'light';
        const moon = themeToggle.querySelector('.moon-icon');
        const sun = themeToggle.querySelector('.sun-icon');
        if (moon && sun) {
            moon.style.display = isLight ? 'none' : 'block';
            sun.style.display = isLight ? 'block' : 'none';
        }
    }
    // Only update icons if the themeToggle element exists
    if (themeToggle) {
        updateIcons();

        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('cence-ops-theme', next);
            updateIcons();
        });
    }


    // ============================================================
    // STICKY NAV — show after scrolling past hero
    // ============================================================
    const nav = document.querySelector('.nav');
    const hero = document.querySelector('.hero');

    const navObserver = new IntersectionObserver(([entry]) => {
        nav.classList.toggle('visible', !entry.isIntersecting);
    }, { threshold: 0 });

    navObserver.observe(hero);

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const linkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => linkObserver.observe(s));

    // ============================================================
    // SCROLL REVEAL — fade-in elements on scroll (all variants)
    // ============================================================
    const revealSelectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children';
    const reveals = document.querySelectorAll(revealSelectors);

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    reveals.forEach(el => revealObserver.observe(el));

    // ============================================================
    // CARD MOUSE TRACKING — radial glow follows cursor
    // ============================================================
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });

    // ============================================================
    // LIVE HEARTBEAT TICKER — simulated cost counter
    // ============================================================
    const savedEl = document.getElementById('tick-saved');
    const burnEl = document.getElementById('tick-burn');
    const wastedEl = document.getElementById('tick-wasted');

    if (savedEl && burnEl && wastedEl) {
        let saved = 14230;
        setInterval(() => {
            saved += Math.floor(Math.random() * 18) + 5;
            savedEl.textContent = '₹' + saved.toLocaleString('en-IN');

            const burn = 800 + Math.floor(Math.random() * 100);
            burnEl.textContent = '₹' + burn + '/min';

            const waste = 290 + Math.floor(Math.random() * 50);
            wastedEl.textContent = '₹' + waste + '/min';
        }, 1200);
    }

    // ============================================================
    // COUNTER ANIMATION — animate numbers on scroll
    // ============================================================
    const counters = document.querySelectorAll('[data-count]');

    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(c => countObserver.observe(c));

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 1400;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    // ============================================================
    // GENOME MAP HOVER — expand segments
    // ============================================================
    document.querySelectorAll('.genome-segment').forEach(seg => {
        seg.addEventListener('mouseenter', () => { seg.style.minWidth = '120px'; });
        seg.addEventListener('mouseleave', () => { seg.style.minWidth = ''; });
    });

    // ============================================================
    // ROI CALCULATOR — animate the big number
    // ============================================================
    const roiEl = document.getElementById('roi-value');
    if (roiEl) {
        const roiObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animateROI();
                roiObserver.unobserve(entry.target);
            }
        }, { threshold: 0.3 });
        roiObserver.observe(roiEl);
    }

    function animateROI() {
        const el = document.getElementById('roi-value');
        const duration = 1800;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const low = Math.floor(eased * 46);
            const high = Math.floor(eased * 115);
            el.textContent = low + '-' + high + 'x';
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    // ============================================================
    // SMOOTH SCROLL for anchor links
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ============================================================
    // PARALLAX — subtle depth on hero stats
    // ============================================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 8;
            const y = (e.clientY / window.innerHeight - 0.5) * 8;
            heroContent.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

});

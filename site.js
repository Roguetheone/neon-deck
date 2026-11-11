// Neon Deck website: the mobile menu. No tracking, no third-party code.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.site-header');
  if (!toggle || !header) return;

  const setOpen = (open) => {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => setOpen(!header.classList.contains('menu-open')));

  // Close on a link click, on Esc, on a click outside, and when the
  // window grows back to the desktop layout.
  header.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) setOpen(false);
  });
  matchMedia('(min-width: 861px)').addEventListener('change', (e) => e.matches && setOpen(false));
})();

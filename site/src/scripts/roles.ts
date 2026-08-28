/**
 * Role picker + horizontal career timeline (homepage sections 06–10).
 *
 * All four detail panels are already in the DOM; picking a card toggles which
 * one is visible. The URL hash is kept in sync so a chosen role survives a
 * reload and can be linked to directly (e.g. /#trainer).
 */

const PANEL_ATTR = 'data-role-panel';
const VALID_ROLES = new Set(['praktisi', 'trainer', 'konsultan', 'auditor']);

export function initRoles(): void {
  const pickers = document.querySelectorAll<HTMLButtonElement>('[data-role-pick]');
  const panels = document.querySelectorAll<HTMLElement>(`[${PANEL_ATTR}]`);
  if (!pickers.length || !panels.length) return;

  const show = (role: string | null, { scroll = true } = {}): void => {
    panels.forEach((panel) => {
      const key = panel.getAttribute(PANEL_ATTR);
      panel.hidden = role ? key !== role : key !== 'none';
    });

    pickers.forEach((button) => {
      button.setAttribute('aria-expanded', String(button.dataset.rolePick === role));
    });

    if (!role) return;

    // Newly-unhidden content was never measured by the reveal observer, so its
    // entrance animations are released here instead.
    const active = document.querySelector<HTMLElement>(`[${PANEL_ATTR}="${role}"]`);
    if (active) {
      active.querySelectorAll('[data-anim]').forEach((el) => el.classList.add('is-in'));
      if (role === 'praktisi') initTimeline(active);
    }

    if (scroll) {
      const target = document.getElementById('detail');
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  pickers.forEach((button) => {
    button.addEventListener('click', () => {
      const role = button.dataset.rolePick ?? null;
      // Clicking the open card closes it again.
      const next = button.getAttribute('aria-expanded') === 'true' ? null : role;
      show(next);
      history.replaceState(null, '', next ? `#${next}` : window.location.pathname);
    });
  });

  // Deep link support: /#trainer opens that panel on load without scroll-jacking
  // past the anchor the browser has already handled.
  const fromHash = window.location.hash.slice(1);
  if (VALID_ROLES.has(fromHash)) show(fromHash, { scroll: false });
}

/**
 * Reveals timeline entries as they scroll into the horizontal strip: the dot
 * pops first, then its card fades in. Also wires the ←/→ nudge buttons.
 */
function initTimeline(root: HTMLElement): void {
  const scroller = root.querySelector<HTMLElement>('[data-timeline-scroll]');
  if (!scroller || scroller.dataset.timelineReady === 'true') return;
  scroller.dataset.timelineReady = 'true';

  const items = scroller.querySelectorAll<HTMLElement>('[data-tl-item]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          entry.target.classList.add('is-in');
        }
      },
      { root: scroller, threshold: 0.55 },
    );
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add('is-in'));
  }

  const step = 340;
  root
    .querySelector<HTMLButtonElement>('[data-timeline-prev]')
    ?.addEventListener('click', () => scroller.scrollBy({ left: -step, behavior: 'smooth' }));
  root
    .querySelector<HTMLButtonElement>('[data-timeline-next]')
    ?.addEventListener('click', () => scroller.scrollBy({ left: step, behavior: 'smooth' }));
}

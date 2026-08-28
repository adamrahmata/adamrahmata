/**
 * Scroll-reveal engine.
 *
 * Every animated element starts in a hidden pose defined purely in CSS. This
 * observer's only job is to add `.is-in` once the element scrolls into view;
 * the CSS decides what "in" looks like. That keeps the final rendering
 * reachable without JS (see the <noscript> fallback in Layout.astro) and means
 * a reveal can never leave an element stuck half-styled.
 */

const REVEAL_SELECTOR = '[data-reveal], [data-stagger-group], [data-anim]:not([data-reveal] [data-anim])';

export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);
        el.classList.add('is-in');
        el.dispatchEvent(new CustomEvent('ara:reveal', { bubbles: true }));
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -5% 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}

/**
 * Count-up for the statistics row.
 *
 * `data-count-to` carries the target value and `data-count-decimals` how many
 * decimal places to keep (mandays is 832.5, everything else is whole). Numbers
 * are formatted Indonesian-style — "." groups thousands, "," is the decimal
 * separator — which the design system's readme calls out explicitly.
 */
export function initCounters(root: ParentNode = document): void {
  const counters = root.querySelectorAll<HTMLElement>('[data-count-to]');
  if (!counters.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const format = (value: number, decimals: number): string => {
    const [whole, fraction] = value.toFixed(decimals).split('.');
    const grouped = whole!.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return fraction ? `${grouped},${fraction}` : grouped;
  };

  const run = (el: HTMLElement): void => {
    const target = Number(el.dataset.countTo ?? '0');
    const decimals = Number(el.dataset.countDecimals ?? '0');
    const duration = Number(el.dataset.countDuration ?? '1800');

    if (reduced) {
      el.textContent = format(target, decimals);
      return;
    }

    const start = performance.now();
    const step = (now: number): void => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format(target * eased, decimals);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // Seed the zero state so the row never reflows when counting starts.
  counters.forEach((el) => {
    el.textContent = format(0, Number(el.dataset.countDecimals ?? '0'));
  });

  if (!('IntersectionObserver' in window)) {
    counters.forEach(run);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        run(entry.target as HTMLElement);
      }
    },
    { threshold: 0.35 },
  );

  counters.forEach((el) => observer.observe(el));
}

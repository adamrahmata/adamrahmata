/**
 * Bilingual (ID | EN) text switching.
 *
 * The prototype swapped every text node in the document against the dictionary
 * and kept a MutationObserver running to catch React re-renders — which is what
 * made the preview hang in chat 3, because the observer kept re-processing its
 * own writes.
 *
 * Here the pages are static HTML authored in Indonesian, so translation is an
 * explicit, bounded operation:
 *
 *   - `data-t` marks an element whose text is translatable. The Indonesian text
 *     already in the element *is* the dictionary key, so nothing is duplicated
 *     in the markup and the two can never drift apart.
 *   - `data-t-placeholder` / `data-t-aria` do the same for those attributes.
 *
 * Switching walks that fixed set once, writes each element at most once, and
 * stops. No observer, no polling, no possibility of a feedback loop.
 */

import dictionary from '../data/dictionary.json';

export type Lang = 'id' | 'en';

const STORAGE_KEY = 'ara_lang';
const ID_TO_EN = dictionary as Record<string, string>;

/** Cache of each element's original Indonesian text, keyed by the element. */
const originals = new WeakMap<Element, { text?: string; placeholder?: string; aria?: string }>();

export function getLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'id';
  } catch {
    // Private browsing or blocked storage — fall back to the default language.
    return 'id';
  }
}

function setStoredLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* Persisting the choice is a convenience, not a requirement. */
  }
}

function remember(el: Element): { text?: string; placeholder?: string; aria?: string } {
  let entry = originals.get(el);
  if (!entry) {
    entry = {};
    if (el.hasAttribute('data-t')) entry.text = (el.textContent ?? '').trim();
    if (el.hasAttribute('data-t-placeholder')) {
      entry.placeholder = el.getAttribute('placeholder') ?? '';
    }
    if (el.hasAttribute('data-t-aria')) entry.aria = el.getAttribute('aria-label') ?? '';
    originals.set(el, entry);
  }
  return entry;
}

function translate(source: string, lang: Lang): string {
  if (lang === 'id') return source;
  return ID_TO_EN[source] ?? source;
}

/** Applies `lang` to every marked element. Idempotent. */
export function applyLang(lang: Lang, root: ParentNode = document): void {
  root.querySelectorAll('[data-t]').forEach((el) => {
    const source = remember(el).text;
    if (source === undefined) return;
    const next = translate(source, lang);
    // Only touch the DOM when the value actually changes, so re-applying the
    // current language costs nothing and never disturbs the render.
    if (el.textContent !== next) el.textContent = next;
  });

  root.querySelectorAll('[data-t-placeholder]').forEach((el) => {
    const source = remember(el).placeholder;
    if (source === undefined) return;
    const next = translate(source, lang);
    if (el.getAttribute('placeholder') !== next) el.setAttribute('placeholder', next);
  });

  root.querySelectorAll('[data-t-aria]').forEach((el) => {
    const source = remember(el).aria;
    if (source === undefined) return;
    const next = translate(source, lang);
    if (el.getAttribute('aria-label') !== next) el.setAttribute('aria-label', next);
  });

  document.documentElement.lang = lang;
  paintSwitcher(lang);
}

function paintSwitcher(lang: Lang): void {
  document.querySelectorAll<HTMLElement>('[data-lang-set]').forEach((el) => {
    const isActive = el.dataset.langSet === lang;
    el.classList.toggle('is-active', isActive);
    el.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

export function initI18n(): void {
  const lang = getLang();
  applyLang(lang);

  document.addEventListener('click', (event) => {
    const trigger = (event.target as Element | null)?.closest<HTMLElement>('[data-lang-set]');
    if (!trigger) return;
    event.preventDefault();
    const next = trigger.dataset.langSet === 'en' ? 'en' : 'id';
    if (next === getLang()) return;
    setStoredLang(next);
    applyLang(next);
  });
}

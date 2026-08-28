/**
 * Rekam Jejak explorer: category tabs, keyword search, standard filter, sort
 * and pagination over the 286 assignment cards.
 *
 * Every card is rendered server-side with its searchable fields mirrored onto
 * data attributes, so this module never fetches or re-renders anything — it
 * only decides which of the existing nodes are shown and in what order. Without
 * JS the full list is still on the page, just unfiltered.
 */

const PER_PAGE = 12;

interface Row {
  el: HTMLElement;
  category: string;
  tags: string;
  haystack: string;
  mandays: number;
  hours: number;
  client: string;
  when: number;
}

type SortKey = 'date-desc' | 'mandays-desc' | 'mandays-asc' | 'client-asc';

const SORTERS: Record<SortKey, (a: Row, b: Row) => number> = {
  'date-desc': (a, b) => b.when - a.when,
  'mandays-desc': (a, b) => b.mandays - a.mandays,
  'mandays-asc': (a, b) => a.mandays - b.mandays,
  'client-asc': (a, b) => a.client.localeCompare(b.client, 'id'),
};

/** Indonesian thousands grouping, matching toLocaleString('id-ID'). */
const idNumber = (value: number): string => value.toLocaleString('id-ID');

export function initRekamJejak(): void {
  const list = document.querySelector<HTMLElement>('[data-assignment-list]');
  if (!list) return;

  const rows: Row[] = [...list.querySelectorAll<HTMLElement>('[data-assignment]')].map((el) => ({
    el,
    category: el.dataset.category ?? '',
    tags: el.dataset.tags ?? '',
    haystack: (el.dataset.search ?? '').toLowerCase(),
    mandays: Number(el.dataset.mandays ?? '0'),
    hours: Number(el.dataset.hours ?? '0'),
    client: el.dataset.client ?? '',
    when: Number(el.dataset.when ?? '0'),
  }));

  const tabs = document.querySelectorAll<HTMLButtonElement>('[data-cat-tab]');
  const search = document.querySelector<HTMLInputElement>('[data-assignment-search]');
  const tagSelect = document.querySelector<HTMLSelectElement>('[data-assignment-tag]');
  const sortSelect = document.querySelector<HTMLSelectElement>('[data-assignment-sort]');

  const countOut = document.querySelector<HTMLElement>('[data-result-count]');
  const mandaysOut = document.querySelector<HTMLElement>('[data-result-mandays]');
  const hoursOut = document.querySelector<HTMLElement>('[data-result-hours]');
  const emptyOut = document.querySelector<HTMLElement>('[data-assignment-empty]');

  const pager = document.querySelector<HTMLElement>('[data-pager]');
  const pageLabel = document.querySelector<HTMLElement>('[data-page-label]');
  const prevButton = document.querySelector<HTMLButtonElement>('[data-page-prev]');
  const nextButton = document.querySelector<HTMLButtonElement>('[data-page-next]');

  const state = {
    category: 'all',
    query: '',
    tag: 'all',
    sort: 'date-desc' as SortKey,
    page: 0,
  };

  // Deep links from the homepage role cards and the training topic badges.
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat && ['training', 'consultancy', 'auditor'].includes(cat)) state.category = cat;
  const q = params.get('q');
  if (q) state.query = q;

  if (search && state.query) search.value = state.query;
  tabs.forEach((tab) => {
    tab.setAttribute('aria-selected', String(tab.dataset.catTab === state.category));
  });

  const matches = (row: Row): boolean => {
    if (state.category !== 'all' && row.category !== state.category) return false;
    // The prototype matches loosely in both directions so that a tag like
    // "SMK3 PP 50/2012" is still found by the "SMK3" option and vice versa.
    if (state.tag !== 'all' && !row.tags.includes(state.tag) && !state.tag.includes(row.tags)) {
      const anyTagMatches = row.tags
        .split('|')
        .some((tag) => tag.includes(state.tag) || state.tag.includes(tag));
      if (!anyTagMatches) return false;
    }
    if (state.query && !row.haystack.includes(state.query.toLowerCase())) return false;
    return true;
  };

  const render = (): void => {
    const filtered = rows.filter(matches).sort(SORTERS[state.sort]);

    const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    state.page = Math.min(state.page, pages - 1);
    const start = state.page * PER_PAGE;
    const visible = filtered.slice(start, start + PER_PAGE);
    const visibleSet = new Set(visible.map((row) => row.el));

    rows.forEach((row) => {
      row.el.hidden = !visibleSet.has(row.el);
    });

    // Re-append in sorted order; nodes already hidden cost nothing to move.
    const fragment = document.createDocumentFragment();
    visible.forEach((row) => fragment.appendChild(row.el));
    list.appendChild(fragment);

    const totalMandays = filtered.reduce((sum, row) => sum + row.mandays, 0);
    const totalHours = filtered.reduce((sum, row) => sum + row.hours, 0);

    if (countOut) countOut.textContent = String(filtered.length);
    if (mandaysOut) mandaysOut.textContent = idNumber(Math.round(totalMandays * 10) / 10);
    if (hoursOut) hoursOut.textContent = idNumber(totalHours);
    if (emptyOut) emptyOut.hidden = filtered.length > 0;

    if (pageLabel) pageLabel.textContent = `${state.page + 1} / ${pages}`;
    if (prevButton) prevButton.disabled = state.page === 0;
    if (nextButton) nextButton.disabled = state.page >= pages - 1;
    if (pager) pager.hidden = filtered.length === 0;
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.category = tab.dataset.catTab ?? 'all';
      state.page = 0;
      tabs.forEach((other) => other.setAttribute('aria-selected', String(other === tab)));
      render();
    });
  });

  let searchTimer: number | undefined;
  search?.addEventListener('input', () => {
    window.clearTimeout(searchTimer);
    // Debounced so typing doesn't re-sort 286 rows on every keystroke.
    searchTimer = window.setTimeout(() => {
      state.query = search.value.trim();
      state.page = 0;
      render();
    }, 150);
  });

  tagSelect?.addEventListener('change', () => {
    state.tag = tagSelect.value;
    state.page = 0;
    render();
  });

  sortSelect?.addEventListener('change', () => {
    state.sort = sortSelect.value as SortKey;
    state.page = 0;
    render();
  });

  prevButton?.addEventListener('click', () => {
    state.page = Math.max(0, state.page - 1);
    render();
    list.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  nextButton?.addEventListener('click', () => {
    state.page += 1;
    render();
    list.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  render();
}

/** Manday estimator. Pure lookup table, ported verbatim from the prototype. */
export function initCalculator(): void {
  const form = document.querySelector<HTMLElement>('[data-calculator]');
  if (!form) return;

  const serviceEl = form.querySelector<HTMLSelectElement>('[name="service"]');
  const standardEl = form.querySelector<HTMLSelectElement>('[name="standard"]');
  const scopeEl = form.querySelector<HTMLSelectElement>('[name="scope"]');
  const locationEl = form.querySelector<HTMLSelectElement>('[name="location"]');

  const daysOut = form.querySelector<HTMLElement>('[data-calc-days]');
  const hoursOut = form.querySelector<HTMLElement>('[data-calc-hours]');
  const recOut = form.querySelector<HTMLElement>('[data-calc-recommendation]');
  const waLink = form.querySelector<HTMLAnchorElement>('[data-calc-wa]');
  const mailLink = form.querySelector<HTMLAnchorElement>('[data-calc-email]');

  const estimate = (): { days: number; recommendation: string } => {
    const service = serviceEl?.value ?? 'training';
    const standard = standardEl?.value ?? 'iso-integrated';
    const scope = scopeEl?.value ?? 'medium';

    let days = 2;
    let recommendation =
      'Pelatihan sistem manajemen dan teknik audit internal berfokus pada studi kasus nyata.';

    if (service === 'training') {
      if (standard === 'k3-umum') {
        days = scope === 'large' ? 12 : 10;
        recommendation =
          'Pembinaan komprehensif Ahli K3 Umum Sertifikasi Kemnaker RI termasuk modul regulasi, identifikasi bahaya, SMK3, dan ujian kompetensi resmi.';
      } else if (standard === 'iso-integrated') {
        days = scope === 'large' ? 4 : 3;
        recommendation =
          'In-House Training Pemahaman & Internal Auditor Terintegrasi ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 berbasis ISO 19011.';
      } else if (standard === 'hiradc') {
        days = 2;
        recommendation =
          'Workshop intensif praktikal pembuatan HIRADC & JSA langsung berbasis proses kerja operasional perusahaan Anda.';
      }
    } else if (service === 'consultancy') {
      if (standard === 'iso-integrated') {
        days = scope === 'large' ? 14 : scope === 'medium' ? 10 : 7;
        recommendation =
          'Pendampingan penuh dari GAP Analysis, penyusunan SOP & Manual Terpadu, Coaching Tim QHSE, hingga simulasi pra-audit sertifikasi.';
      } else if (standard === 'smk3') {
        days = scope === 'large' ? 16 : scope === 'medium' ? 10 : 6;
        recommendation =
          'Konsultasi pemenuhan 64/166 Kriteria SMK3 PP No. 50/2012, evaluasi dokumen kepatuhan hukum, dan pendampingan audit eksternal.';
      } else {
        days = scope === 'large' ? 8 : 5;
        recommendation = 'Konsultasi perancangan sistem dan pendampingan implementasi bertahap.';
      }
    } else if (service === 'audit') {
      if (standard === 'iso-integrated' || standard === 'smk3') {
        days = scope === 'large' ? 4 : scope === 'medium' ? 3 : 2;
        recommendation =
          'Audit independen (2nd Party / Mock Pre-Assessment) dengan pelaporan komprehensif temuan Major, Minor, dan Opportunity for Improvement (OFI).';
      } else {
        days = scope === 'large' ? 3 : 2;
        recommendation = 'Audit kepatuhan dan verifikasi implementasi prosedur lapangan.';
      }
    }

    return { days, recommendation };
  };

  const update = (): void => {
    const { days, recommendation } = estimate();

    if (daysOut) daysOut.textContent = String(days);
    if (hoursOut) hoursOut.textContent = String(days * 8);
    if (recOut) recOut.textContent = recommendation;

    // Human-readable labels rather than the raw select values, so the message
    // that lands in WhatsApp reads like a sentence.
    const label = (el: HTMLSelectElement | null): string =>
      el?.selectedOptions[0]?.textContent?.trim() ?? '';

    const message =
      `Halo Pak Adam Rahmat Agung, saya ingin berkonsultasi mengenai kebutuhan ` +
      `${label(serviceEl)} topik ${label(standardEl)} ` +
      `(skala: ${label(scopeEl)}, lokasi: ${label(locationEl)}). ` +
      `Estimasi sistem: ${days} mandays.`;

    const encoded = encodeURIComponent(message);
    const waNumber = form.dataset.wa ?? '';
    const email = form.dataset.email ?? '';

    if (waLink) waLink.href = `https://wa.me/${waNumber}?text=${encoded}`;
    if (mailLink) {
      mailLink.href =
        `mailto:${email}?subject=${encodeURIComponent('Permohonan Penawaran QHSE')}&body=${encoded}`;
    }
  };

  [serviceEl, standardEl, scopeEl, locationEl].forEach((el) => {
    el?.addEventListener('change', update);
  });

  update();
}

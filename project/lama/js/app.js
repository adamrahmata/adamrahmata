/**
 * Main Application Logic & Interactivity
 * QHSE Trainer, Consultant, & Auditor Portfolio
 * Clean, Professional, Vector SVG Icons, Official Logos & Field Photo Gallery
 */

// Reusable SVG Icon Helper Functions (Free, Open-Source MIT License)
const ICONS = {
  shield: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  shieldCheck: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  award: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  graduationCap: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  briefcase: `<svg class="svg-icon" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  search: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>`,
  calendar: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  clock: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  mapPin: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  building: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>`,
  users: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  check: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  camera: `<svg class="svg-icon svg-icon-xs" viewBox="0 0 24 24"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  sun: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  leaf: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  sunLeaf: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>`,
  fileText: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  mail: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  messageSquare: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  externalLink: `<svg class="svg-icon svg-icon-xs" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  // State
  const state = {
    lang: localStorage.getItem('qhse_lang') || 'id',
    theme: localStorage.getItem('qhse_theme') || 'dark',
    category: 'all',
    searchQuery: '',
    selectedTag: 'all',
    sortBy: 'date-desc',
    viewMode: 'grid', // 'grid' | 'table'
    currentPage: 1,
    itemsPerPage: 12,
    filteredData: [...(window.MANDAY_DATA || [])]
  };

  // DOM Elements
  const htmlRoot = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeDropdownMenu = document.getElementById('themeDropdownMenu');
  const themeDropdownContainer = document.getElementById('themeDropdownContainer');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.getElementById('navbar');

  // Explorer DOM Elements
  const categoryTabs = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('mandaySearchInput');
  const tagFilterSelect = document.getElementById('tagFilterSelect');
  const sortSelect = document.getElementById('sortSelect');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewTableBtn = document.getElementById('viewTableBtn');
  const mandayGridContainer = document.getElementById('mandayGridContainer');
  const mandayTableContainer = document.getElementById('mandayTableContainer');
  const mandayTableBody = document.getElementById('mandayTableBody');
  const filterCountDisplay = document.getElementById('filterCountDisplay');
  const filterMandaysDisplay = document.getElementById('filterMandaysDisplay');
  const filterHoursDisplay = document.getElementById('filterHoursDisplay');
  const paginationControls = document.getElementById('paginationControls');

  // Gallery Showcase Container
  const galleryShowcaseContainer = document.getElementById('galleryShowcaseContainer');

  // Modal DOM Elements
  const projectDetailModal = document.getElementById('projectDetailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalId = document.getElementById('modalId');
  const modalCategoryBadge = document.getElementById('modalCategoryBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalClient = document.getElementById('modalClient');
  const modalInstitution = document.getElementById('modalInstitution');
  const modalMandays = document.getElementById('modalMandays');
  const modalHours = document.getElementById('modalHours');
  const modalDate = document.getElementById('modalDate');
  const modalLocation = document.getElementById('modalLocation');
  const modalMethod = document.getElementById('modalMethod');
  const modalTags = document.getElementById('modalTags');
  const modalNotes = document.getElementById('modalNotes');
  const modalNotesRow = document.getElementById('modalNotesRow');
  const modalClientLogoBox = document.getElementById('modalClientLogoBox');
  const modalClientLogoImg = document.getElementById('modalClientLogoImg');
  const modalLembagaLogoBox = document.getElementById('modalLembagaLogoBox');
  const modalLembagaLogoImg = document.getElementById('modalLembagaLogoImg');
  const modalPhotoSection = document.getElementById('modalPhotoSection');
  const modalPhotoGallery = document.getElementById('modalPhotoGallery');

  // Calculator DOM Elements
  const calcService = document.getElementById('calcService');
  const calcStandard = document.getElementById('calcStandard');
  const calcScope = document.getElementById('calcScope');
  const calcLocation = document.getElementById('calcLocation');
  const calcDaysResult = document.getElementById('calcDaysResult');
  const calcHoursResult = document.getElementById('calcHoursResult');
  const calcRecommendation = document.getElementById('calcRecommendation');
  const calcWaBtn = document.getElementById('calcWaBtn');
  const calcEmailBtn = document.getElementById('calcEmailBtn');

  // Clients & Partners Showcase Elements
  const clientsGridViewWrapper = document.getElementById('clientsGridViewWrapper');
  const clientsMarqueeViewWrapper = document.getElementById('clientsMarqueeViewWrapper');
  const clientsModeGridBtn = document.getElementById('clientsModeGridBtn');
  const clientsModeMarqueeBtn = document.getElementById('clientsModeMarqueeBtn');
  const clientsGridContainer = document.getElementById('clientsGridContainer');
  const partnersGridContainer = document.getElementById('partnersGridContainer');
  const clientSectorTabs = document.getElementById('clientSectorTabs');
  const clientsFlowTrack1 = document.getElementById('clientsFlowTrack1');
  const clientsFlowTrack2 = document.getElementById('clientsFlowTrack2');
  const partnersFlowTrack = document.getElementById('partnersFlowTrack');

  // Contact Form
  const contactForm = document.getElementById('contactForm');

  /* ==========================================================================
     1. Theme Management (Dark / Light / Forest Dark / Forest Light)
     ========================================================================== */
  const themeIcons = {
    dark: ICONS.moon,
    light: ICONS.sun,
    forest: ICONS.leaf,
    'forest-light': ICONS.sunLeaf
  };

  const themeTitles = {
    dark: 'Tema Gelap (Dark)',
    light: 'Tema Terang (Light)',
    forest: 'Tema Forest Dark (ColorHunt)',
    'forest-light': 'Tema Forest Light (ColorHunt Cream)'
  };

  function applyTheme(theme) {
    if (!['dark', 'light', 'forest', 'forest-light'].includes(theme)) {
      theme = 'dark';
    }
    state.theme = theme;
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('qhse_theme', theme);

    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = themeIcons[theme] || ICONS.sun;
      themeToggleBtn.setAttribute('title', themeTitles[theme] || 'Pilih Tema');
    }

    // Update active class on dropdown items
    document.querySelectorAll('.theme-menu-item').forEach(btn => {
      const val = btn.getAttribute('data-theme-val');
      if (val === theme) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }

  applyTheme(state.theme);

  if (themeToggleBtn && themeDropdownMenu) {
    // Toggle dropdown on button click
    themeToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isShowing = themeDropdownMenu.classList.toggle('show');
      themeToggleBtn.setAttribute('aria-expanded', isShowing ? 'true' : 'false');
    });

    // Option selection
    document.querySelectorAll('.theme-menu-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedTheme = item.getAttribute('data-theme-val');
        if (selectedTheme) {
          applyTheme(selectedTheme);
        }
        themeDropdownMenu.classList.remove('show');
        themeToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (themeDropdownContainer && !themeDropdownContainer.contains(e.target)) {
        themeDropdownMenu.classList.remove('show');
        themeToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && themeDropdownMenu.classList.contains('show')) {
        themeDropdownMenu.classList.remove('show');
        themeToggleBtn.setAttribute('aria-expanded', 'false');
        themeToggleBtn.focus();
      }
    });
  }

  /* ==========================================================================
     2. Language Management (ID / EN)
     ========================================================================== */
  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('qhse_lang', lang);
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'id' ? 'EN' : 'ID';
    }

    const t = window.TRANSLATIONS && window.TRANSLATIONS[lang];
    if (!t) return;

    // Update all data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n').split('.');
      let val = t;
      for (const k of keyPath) {
        val = val ? val[k] : null;
      }
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    renderMandayData();
    updateEstimator();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(state.lang === 'id' ? 'en' : 'id');
    });
  }

  /* ==========================================================================
     3. Navbar Scroll & Mobile Menu
     ========================================================================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy active links
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'var(--bg-secondary)';
        navMenu.style.padding = '24px';
        navMenu.style.boxShadow = 'var(--shadow-lg)';
        navMenu.style.borderBottom = '1px solid var(--border-subtle)';
      }
    });
  }

  /* ==========================================================================
     4. Manday Explorer Data Filtering & Rendering
     ========================================================================== */
  function filterAndSortData() {
    let data = [...(window.MANDAY_DATA || [])];

    // 1. Category Filter
    if (state.category !== 'all') {
      data = data.filter(item => item.category === state.category);
    }

    // 2. Search Query
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      data = data.filter(item => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.client.toLowerCase().includes(q) ||
          item.institution.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q) ||
          item.tags.some(t => t.toLowerCase().includes(q))
        );
      });
    }

    // 3. Tag Filter
    if (state.selectedTag !== 'all') {
      data = data.filter(item => item.tags.includes(state.selectedTag));
    }

    // 4. Sort
    data.sort((a, b) => {
      if (state.sortBy === 'mandays-desc') return b.mandays - a.mandays;
      if (state.sortBy === 'mandays-asc') return a.mandays - b.mandays;
      if (state.sortBy === 'client-asc') return a.client.localeCompare(b.client);
      if (state.sortBy === 'date-desc') return (b.date || '').localeCompare(a.date || '');
      return 0;
    });

    state.filteredData = data;
    state.currentPage = 1;
    renderMandayData();
  }

  function renderMandayData() {
    const total = state.filteredData.length;
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, total);
    const paginatedItems = state.filteredData.slice(startIndex, endIndex);

    // Dynamic stats
    const totalMandays = state.filteredData.reduce((acc, curr) => acc + (curr.mandays || 0), 0);
    const totalHours = state.filteredData.reduce((acc, curr) => acc + (curr.hours || 0), 0);

    if (filterCountDisplay) filterCountDisplay.textContent = total;
    if (filterMandaysDisplay) filterMandaysDisplay.textContent = totalMandays.toLocaleString();
    if (filterHoursDisplay) filterHoursDisplay.textContent = totalHours.toLocaleString();

    // Render Grid
    if (mandayGridContainer) {
      if (paginatedItems.length === 0) {
        mandayGridContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--text-muted);">
            <div style="margin-bottom: 12px; color: var(--text-muted);">${ICONS.search}</div>
            <p style="font-size: 1.1rem; font-weight: 600; color: var(--text-primary);">Data Tidak Ditemukan</p>
            <p style="font-size: 0.9rem;">Coba sesuaikan kata kunci pencarian atau reset filter kategori.</p>
          </div>
        `;
      } else {
        mandayGridContainer.innerHTML = paginatedItems.map(item => {
          const categoryClass = item.category === 'training' ? 'badge-training' : (item.category === 'consultancy' ? 'badge-consultancy' : 'badge-auditor');
          const categoryLabel = item.category === 'training' ? 'Pelatihan' : (item.category === 'consultancy' ? 'Konsultasi' : 'Audit');
          
          const tagsHtml = item.tags.slice(0, 3).map(t => `<span class="badge badge-tag">${escapeHtml(t)}</span>`).join('');
          
          const hasPhotos = item.photos && item.photos.length > 0;
          const photoBadge = hasPhotos ? `<span class="card-photo-chip">${ICONS.camera} ${item.photos.length} Foto</span>` : '';

          const clientLogoHtml = item.clientLogo ? `
            <div class="card-client-logo-box" title="${escapeHtml(item.client)}">
              <img src="${item.clientLogo}" alt="${escapeHtml(item.client)}" loading="lazy">
            </div>
          ` : '';

          const lembagaLogoHtml = item.institutionLogo ? `
            <div class="card-lembaga-logo-box" title="${escapeHtml(item.institution)}">
              <img src="${item.institutionLogo}" alt="${escapeHtml(item.institution)}" loading="lazy">
            </div>
          ` : '';

          const logoRowHtml = (clientLogoHtml || lembagaLogoHtml) ? `
            <div class="manday-card-logo-row">
              ${clientLogoHtml || `<span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted);">${escapeHtml(item.client)}</span>`}
              ${lembagaLogoHtml}
            </div>
          ` : '';

          return `
            <div class="manday-card" onclick="window.openProjectModal('${item.id}')">
              <div class="manday-card-top">
                <div class="manday-card-badges">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="badge ${categoryClass}">${categoryLabel}</span>
                    ${photoBadge}
                  </div>
                  <span class="manday-id">${item.id}</span>
                </div>

                ${logoRowHtml}

                <h4 class="manday-card-title">${escapeHtml(item.title)}</h4>
                
                <div class="manday-card-client">
                  <span style="color: var(--text-accent); display: flex; align-items: center;">${ICONS.building}</span>
                  <span style="font-weight: 700; color: var(--text-primary);">${escapeHtml(item.client)}</span>
                </div>
                
                <div class="manday-card-meta">
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="display: flex; align-items: center;">${ICONS.users}</span>
                    <span><strong>Mitra:</strong> ${escapeHtml(item.institution || '-')}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="display: flex; align-items: center;">${ICONS.mapPin}</span>
                    <span><strong>Lokasi:</strong> ${escapeHtml(item.location || 'Indonesia')}</span>
                  </div>
                  ${item.date ? `
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="display: flex; align-items: center;">${ICONS.calendar}</span>
                      <span><strong>Waktu:</strong> ${escapeHtml(item.date)}</span>
                    </div>
                  ` : ''}
                </div>

                <div class="manday-card-tags">
                  ${tagsHtml}
                </div>
              </div>

              <div class="manday-card-footer">
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Durasi:</span>
                  <span class="manday-value">${item.mandays} Mandays (${item.hours} Jam)</span>
                </div>
                <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); window.openProjectModal('${item.id}')">
                  Detail <span style="display: inline-flex; align-items: center; margin-left: 2px;">${ICONS.arrowRight}</span>
                </button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Render Table
    if (mandayTableBody) {
      if (paginatedItems.length === 0) {
        mandayTableBody.innerHTML = `
          <tr>
            <td colspan="7" style="text-align: center; padding: 36px; color: var(--text-muted);">
              Data tidak ditemukan dengan filter saat ini.
            </td>
          </tr>
        `;
      } else {
        mandayTableBody.innerHTML = paginatedItems.map(item => {
          const categoryClass = item.category === 'training' ? 'badge-training' : (item.category === 'consultancy' ? 'badge-consultancy' : 'badge-auditor');
          const categoryLabel = item.category === 'training' ? 'Pelatihan' : (item.category === 'consultancy' ? 'Konsultasi' : 'Audit');
          
          const clientDisplay = item.clientLogo ? `
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="background: #FFF; padding: 2px 6px; border-radius: 4px; display: inline-flex;"><img src="${item.clientLogo}" style="max-height: 18px; max-width: 60px; object-fit: contain;"></span>
              <span>${escapeHtml(item.client)}</span>
            </div>
          ` : escapeHtml(item.client);

          return `
            <tr>
              <td style="font-family: var(--font-mono); font-weight: 600; color: var(--text-muted);">${item.id}</td>
              <td style="font-weight: 600; max-width: 280px;">${escapeHtml(item.title)}</td>
              <td><span class="badge ${categoryClass}">${categoryLabel}</span></td>
              <td style="font-weight: 600;">${clientDisplay}</td>
              <td style="color: var(--text-secondary);">${escapeHtml(item.institution || '-')}</td>
              <td style="font-family: var(--font-mono); font-weight: 700; color: var(--text-accent);">${item.mandays} d (${item.hours} h)</td>
              <td>
                <button class="btn btn-outline btn-sm" onclick="window.openProjectModal('${item.id}')">
                  Detail
                </button>
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    renderPagination(total);
  }

  function renderPagination(total) {
    if (!paginationControls) return;

    const totalPages = Math.ceil(total / state.itemsPerPage) || 1;
    let html = `
      <div style="font-size: 0.85rem; color: var(--text-muted);">
        Menampilkan <strong>${total > 0 ? (state.currentPage - 1) * state.itemsPerPage + 1 : 0} - ${Math.min(state.currentPage * state.itemsPerPage, total)}</strong> dari <strong>${total}</strong> penugasan
      </div>
      <div class="page-numbers">
        <button class="page-btn" ${state.currentPage === 1 ? 'disabled' : ''} onclick="window.goToPage(${state.currentPage - 1})">‹</button>
    `;

    const maxBtns = 5;
    let startPage = Math.max(1, state.currentPage - Math.floor(maxBtns / 2));
    let endPage = Math.min(totalPages, startPage + maxBtns - 1);
    if (endPage - startPage + 1 < maxBtns) {
      startPage = Math.max(1, endPage - maxBtns + 1);
    }

    if (startPage > 1) {
      html += `<button class="page-btn" onclick="window.goToPage(1)">1</button>`;
      if (startPage > 2) html += `<span style="padding: 0 4px; color: var(--text-muted);">...</span>`;
    }

    for (let p = startPage; p <= endPage; p++) {
      html += `
        <button class="page-btn ${p === state.currentPage ? 'active' : ''}" onclick="window.goToPage(${p})">${p}</button>
      `;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) html += `<span style="padding: 0 4px; color: var(--text-muted);">...</span>`;
      html += `<button class="page-btn" onclick="window.goToPage(${totalPages})">${totalPages}</button>`;
    }

    html += `
        <button class="page-btn" ${state.currentPage === totalPages ? 'disabled' : ''} onclick="window.goToPage(${state.currentPage + 1})">›</button>
      </div>
    `;

    paginationControls.innerHTML = html;
  }

  window.goToPage = function(page) {
    const totalPages = Math.ceil(state.filteredData.length / state.itemsPerPage) || 1;
    if (page < 1 || page > totalPages) return;
    state.currentPage = page;
    renderMandayData();
    const explorerEl = document.getElementById('portfolio');
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Event Listeners for Explorer
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.category = tab.getAttribute('data-category');
      filterAndSortData();
    });
  });

  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.searchQuery = e.target.value;
        filterAndSortData();
      }, 200);
    });
  }

  if (tagFilterSelect) {
    tagFilterSelect.addEventListener('change', (e) => {
      state.selectedTag = e.target.value;
      filterAndSortData();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      filterAndSortData();
    });
  }

  if (viewGridBtn && viewTableBtn) {
    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewTableBtn.classList.remove('active');
      mandayGridContainer.style.display = 'grid';
      mandayTableContainer.style.display = 'none';
      state.viewMode = 'grid';
    });

    viewTableBtn.addEventListener('click', () => {
      viewTableBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      mandayGridContainer.style.display = 'none';
      mandayTableContainer.style.display = 'block';
      state.viewMode = 'table';
    });
  }

  /* ==========================================================================
     5. Photo Lightbox Modal Controller (Used by Project Detail Modal)
     ========================================================================== */
  const galleryLightboxModal = document.getElementById('galleryLightboxModal');
  const lightboxMainImage = document.getElementById('lightboxMainImage');
  const lightboxClientName = document.getElementById('lightboxClientName');
  const lightboxInstName = document.getElementById('lightboxInstName');
  const lightboxProjectTitle = document.getElementById('lightboxProjectTitle');
  const lightboxPhotoCounter = document.getElementById('lightboxPhotoCounter');
  const lightboxThumbsStrip = document.getElementById('lightboxThumbsStrip');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  let currentLightboxPhotos = [];
  let currentLightboxIndex = 0;
  let currentLightboxMeta = {};

  // Lightbox Implementation
  window.openPhotoLightbox = function(photoList, initialIndex = 0, meta = {}) {
    if (!photoList || photoList.length === 0 || !galleryLightboxModal) return;
    currentLightboxPhotos = photoList;
    currentLightboxIndex = Math.max(0, Math.min(initialIndex, photoList.length - 1));
    currentLightboxMeta = meta || {};

    if (lightboxClientName) lightboxClientName.textContent = meta.client || 'Dokumentasi Penugasan';
    if (lightboxInstName) lightboxInstName.textContent = meta.institution || 'QHSE Field Operation';
    if (lightboxProjectTitle) lightboxProjectTitle.textContent = meta.title || 'Kegiatan Lapangan';

    updateLightboxStage();
    galleryLightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.openPhotoLightboxByProjectItem = function(itemId, photoIdx = 0) {
    const item = (window.MANDAY_DATA || []).find(d => d.id === itemId);
    if (!item || !item.photos || item.photos.length === 0) return;
    window.openPhotoLightbox(item.photos, photoIdx, {
      client: item.client,
      institution: item.institution,
      title: item.title,
      location: item.location
    });
  };

  window.openImageLightbox = function(src, title) {
    window.openPhotoLightbox([src], 0, {
      client: title || 'Dokumentasi Penugasan',
      institution: 'QHSE Field',
      title: title || 'Dokumentasi Penugasan Lapangan'
    });
  };

  function updateLightboxStage() {
    if (!lightboxMainImage || currentLightboxPhotos.length === 0) return;
    const currentSrc = currentLightboxPhotos[currentLightboxIndex];
    lightboxMainImage.style.opacity = '0';
    lightboxMainImage.onload = () => {
      lightboxMainImage.style.opacity = '1';
    };
    lightboxMainImage.onerror = () => {
      lightboxMainImage.style.opacity = '1';
    };
    lightboxMainImage.src = currentSrc;
    if (lightboxMainImage.complete) {
      lightboxMainImage.style.opacity = '1';
    }

    if (lightboxPhotoCounter) {
      lightboxPhotoCounter.textContent = `Foto ${currentLightboxIndex + 1} dari ${currentLightboxPhotos.length}`;
    }

    if (lightboxPrevBtn) lightboxPrevBtn.style.display = currentLightboxPhotos.length > 1 ? 'flex' : 'none';
    if (lightboxNextBtn) lightboxNextBtn.style.display = currentLightboxPhotos.length > 1 ? 'flex' : 'none';

    // Render thumbnail strip
    if (lightboxThumbsStrip) {
      if (currentLightboxPhotos.length > 1) {
        lightboxThumbsStrip.style.display = 'flex';
        lightboxThumbsStrip.innerHTML = currentLightboxPhotos.map((src, i) => `
          <div class="lightbox-thumb-mini ${i === currentLightboxIndex ? 'active' : ''}" onclick="selectLightboxIndex(${i})">
            <img src="${src}" alt="Thumb ${i+1}">
          </div>
        `).join('');
      } else {
        lightboxThumbsStrip.style.display = 'none';
      }
    }
  }

  window.selectLightboxIndex = function(idx) {
    if (idx >= 0 && idx < currentLightboxPhotos.length) {
      currentLightboxIndex = idx;
      updateLightboxStage();
    }
  };

  window.prevLightboxPhoto = function() {
    if (currentLightboxPhotos.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxPhotos.length) % currentLightboxPhotos.length;
    updateLightboxStage();
  };

  window.nextLightboxPhoto = function() {
    if (currentLightboxPhotos.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxPhotos.length;
    updateLightboxStage();
  };

  window.closePhotoLightbox = function() {
    if (galleryLightboxModal) {
      galleryLightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (galleryLightboxModal && galleryLightboxModal.classList.contains('open')) {
      if (e.key === 'ArrowLeft') window.prevLightboxPhoto();
      if (e.key === 'ArrowRight') window.nextLightboxPhoto();
      if (e.key === 'Escape') window.closePhotoLightbox();
    }
  });

  /* ==========================================================================
     6. Project Detail Modal
     ========================================================================== */
  window.openProjectModal = function(id) {
    const item = (window.MANDAY_DATA || []).find(d => d.id === id);
    if (!item || !projectDetailModal) return;

    const isPublic = !item.client || item.client.toLowerCase() === 'public' || item.client.toLowerCase() === 'kelas publik';
    
    modalId.textContent = item.id;
    modalTitle.textContent = item.title;
    modalClient.textContent = isPublic ? 'Peserta Kelas Publik (Multi-Perusahaan)' : item.client;
    modalInstitution.textContent = item.institution || '-';
    modalMandays.textContent = `${item.mandays} Mandays`;
    modalHours.textContent = `${item.hours} Jam`;
    modalDate.textContent = item.date || '-';
    modalLocation.textContent = item.location || 'Indonesia';
    modalMethod.textContent = item.method || 'Onsite';

    // Client Logo Display
    if (item.clientLogo && modalClientLogoBox && modalClientLogoImg) {
      modalClientLogoBox.innerHTML = `<img id="modalClientLogoImg" src="${item.clientLogo}" alt="${escapeHtml(item.client)}" loading="lazy">`;
    } else if (modalClientLogoBox) {
      if (isPublic) {
        modalClientLogoBox.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: center; gap: 8px; color: var(--text-accent); font-weight: 700; font-size: 0.85rem;">
            <svg class="svg-icon svg-icon-md" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>Public Training Class</span>
          </div>
        `;
      } else {
        modalClientLogoBox.innerHTML = `<span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">${escapeHtml(item.client)}</span>`;
      }
    }

    // Institution Logo Display
    if (item.institutionLogo && modalLembagaLogoBox && modalLembagaLogoImg) {
      modalLembagaLogoBox.innerHTML = `<img id="modalLembagaLogoImg" src="${item.institutionLogo}" alt="${escapeHtml(item.institution)}" loading="lazy">`;
    } else if (modalLembagaLogoBox) {
      modalLembagaLogoBox.innerHTML = `<span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">${escapeHtml(item.institution || '-')}</span>`;
    }

    // Category Badge
    const categoryLabel = item.category === 'training' ? 'Pelatihan & Sertifikasi' : (item.category === 'consultancy' ? 'Konsultasi & GAP Assessment' : 'Audit & Verifikasi');
    const categoryClass = item.category === 'training' ? 'badge-training' : (item.category === 'consultancy' ? 'badge-consultancy' : 'badge-auditor');
    modalCategoryBadge.className = `badge ${categoryClass}`;
    modalCategoryBadge.textContent = categoryLabel;

    // Tags
    if (item.tags && item.tags.length > 0) {
      modalTags.innerHTML = item.tags.map(t => `<span class="badge badge-tag">${escapeHtml(t)}</span>`).join(' ');
    } else {
      modalTags.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">-</span>';
    }

    // Notes
    if (item.notes && item.notes.trim()) {
      modalNotesRow.style.display = 'grid';
      modalNotes.textContent = item.notes;
    } else {
      modalNotesRow.style.display = 'none';
    }

    // Photos inside modal
    if (item.photos && item.photos.length > 0 && modalPhotoSection && modalPhotoGallery) {
      modalPhotoSection.style.display = 'block';
      modalPhotoGallery.innerHTML = item.photos.map((p, pIdx) => `
        <div class="modal-photo-item" onclick="window.openPhotoLightboxByProjectItem('${item.id}', ${pIdx})">
          <img src="${p}" alt="Dokumentasi ${escapeHtml(item.title)}" loading="lazy">
        </div>
      `).join('');
    } else if (modalPhotoSection) {
      modalPhotoSection.style.display = 'none';
    }

    projectDetailModal.classList.add('open');
  };

  window.openPhotoLightboxByProjectItem = function(itemId, photoIdx) {
    const item = (window.MANDAY_DATA || []).find(d => d.id === itemId);
    if (!item || !item.photos) return;
    window.openPhotoLightbox(item.photos, photoIdx, {
      client: item.client,
      institution: item.institution,
      title: item.title,
      location: item.location
    });
  };

  function closeModal() {
    if (projectDetailModal) {
      projectDetailModal.classList.remove('open');
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (projectDetailModal) {
    projectDetailModal.addEventListener('click', (e) => {
      if (e.target === projectDetailModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* ==========================================================================
     7. Dynamic Clients & Partner Institutions Rendering & Filtering
     ========================================================================== */
  function renderClientsGrid(sector = 'all') {
    if (!clientsGridContainer) return;
    const clientList = window.ALL_CLIENTS_DATA || [];
    const filtered = sector === 'all' 
      ? clientList 
      : clientList.filter(c => c.sector === sector);

    if (filtered.length === 0) {
      clientsGridContainer.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">Tidak ada data klien di sektor ini.</div>`;
      return;
    }

    clientsGridContainer.innerHTML = filtered.map(c => `
      <div class="client-card" data-sector="${c.sector}">
        <div class="client-logo-box" title="${escapeHtml(c.name)}">
          <img src="${c.file}" alt="${escapeHtml(c.name)}" class="client-logo-img" loading="lazy" onerror="this.style.display='none';">
        </div>
        <div class="client-name">${escapeHtml(c.name)}</div>
        <div class="client-sector-tag">${escapeHtml(c.sub)}</div>
      </div>
    `).join('');
  }

    function renderPartnersGrid() {
    if (!partnersGridContainer) return;
    const partnerList = window.ALL_LEMBAGA_DATA || [];
    partnersGridContainer.innerHTML = partnerList.map(p => `
      <div class="partner-logo-card">
        <div class="partner-logo-box" title="${escapeHtml(p.name)}">
          <img src="${p.file}" alt="${escapeHtml(p.name)}" class="partner-logo-img" loading="lazy" onerror="this.style.display='none';">
        </div>
        <div class="partner-name">${escapeHtml(p.name)}</div>
        <div class="partner-type-tag">${escapeHtml(p.type)}</div>
      </div>
    `).join('');
  }

  function renderMarqueeTracks() {
    if (!clientsFlowTrack1 || !clientsFlowTrack2 || !partnersFlowTrack) return;
    const clientList = window.ALL_CLIENTS_DATA || [];
    const partnerList = window.ALL_LEMBAGA_DATA || [];

    const mid = Math.ceil(clientList.length / 2);
    const half1 = clientList.slice(0, mid);
    const half2 = clientList.slice(mid);

    // Repeat partnerList 4 times per half so it is wide enough for seamless loop on all displays
    const partnerHalf = [...partnerList, ...partnerList, ...partnerList, ...partnerList];

    const renderFlowCard = (item) => {
      const tooltipText = item.sub || item.type 
        ? `${item.name} (${item.sub || item.type})` 
        : item.name;
      return `
        <div class="flow-logo-card" title="${escapeHtml(tooltipText)}">
          <div class="flow-logo-box">
            <img src="${item.file}" alt="${escapeHtml(item.name)}" class="flow-logo-img" loading="lazy" onerror="this.parentElement.parentElement.style.display='none';">
          </div>
        </div>
      `;
    };

    // Duplicate client halves and partner sequence twice for seamless -50% translation loop
    clientsFlowTrack1.innerHTML = [...half1, ...half1].map(renderFlowCard).join('');
    clientsFlowTrack2.innerHTML = [...half2, ...half2].map(renderFlowCard).join('');
    partnersFlowTrack.innerHTML = [...partnerHalf, ...partnerHalf].map(renderFlowCard).join('');

    // Synchronize linear speed / tempo across all tracks (slow, steady, relaxed pace)
    const SECONDS_PER_ITEM = 2.8;
    clientsFlowTrack1.style.animationDuration = `${(half1.length * SECONDS_PER_ITEM).toFixed(1)}s`;
    clientsFlowTrack2.style.animationDuration = `${(half2.length * SECONDS_PER_ITEM).toFixed(1)}s`;
    partnersFlowTrack.style.animationDuration = `${(partnerHalf.length * SECONDS_PER_ITEM).toFixed(1)}s`;
  }

  function setClientsViewMode(mode) {
    if (mode === 'marquee') {
      if (clientsGridViewWrapper) clientsGridViewWrapper.style.display = 'none';
      if (clientsMarqueeViewWrapper) clientsMarqueeViewWrapper.style.display = 'block';
      if (clientSectorTabs) {
        clientSectorTabs.style.opacity = '0.35';
        clientSectorTabs.style.pointerEvents = 'none';
      }
      if (clientsModeGridBtn) clientsModeGridBtn.classList.remove('active');
      if (clientsModeMarqueeBtn) clientsModeMarqueeBtn.classList.add('active');
      renderMarqueeTracks();
    } else {
      if (clientsGridViewWrapper) clientsGridViewWrapper.style.display = 'block';
      if (clientsMarqueeViewWrapper) clientsMarqueeViewWrapper.style.display = 'none';
      if (clientSectorTabs) {
        clientSectorTabs.style.opacity = '1';
        clientSectorTabs.style.pointerEvents = 'auto';
      }
      if (clientsModeGridBtn) clientsModeGridBtn.classList.add('active');
      if (clientsModeMarqueeBtn) clientsModeMarqueeBtn.classList.remove('active');
    }
  }

  if (clientsModeGridBtn) {
    clientsModeGridBtn.addEventListener('click', () => setClientsViewMode('grid'));
  }

  if (clientsModeMarqueeBtn) {
    clientsModeMarqueeBtn.addEventListener('click', () => setClientsViewMode('marquee'));
  }

  if (clientSectorTabs) {
    clientSectorTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.client-sector-btn');
      if (!btn) return;
      clientSectorTabs.querySelectorAll('.client-sector-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sector = btn.getAttribute('data-sector') || 'all';
      renderClientsGrid(sector);
    });
  }

  /* ==========================================================================
     8. Manday & Consultation Estimator Calculator
     ========================================================================== */
  function updateEstimator() {
    if (!calcService || !calcStandard || !calcScope || !calcDaysResult) return;

    const service = calcService.value; // 'training' | 'consultancy' | 'audit'
    const standard = calcStandard.value; // 'iso-integrated' | 'iso-single' | 'smk3' | 'hiradc' | 'k3-umum'
    const scope = calcScope.value; // 'small' | 'medium' | 'large'
    const loc = calcLocation.value; // 'jabodetabek' | 'jawa' | 'remote'

    let baseDays = 2;
    let recommendation = '';

    if (service === 'training') {
      if (standard === 'k3-umum') {
        baseDays = scope === 'large' ? 12 : 10;
        recommendation = 'Pembinaan komprehensif Ahli K3 Umum Sertifikasi Kemnaker RI termasuk modul regulasi, identifikasi bahaya, SMK3, dan ujian kompetensi resmi.';
      } else if (standard === 'iso-integrated') {
        baseDays = scope === 'large' ? 4 : 3;
        recommendation = 'In-House Training Pemahaman & Internal Auditor Terintegrasi ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 berbasis ISO 19011.';
      } else if (standard === 'hiradc') {
        baseDays = 2;
        recommendation = 'Workshop intensif praktikal pembuatan HIRADC & JSA langsung berbasis proses kerja operasional perusahaan Anda.';
      } else {
        baseDays = 2;
        recommendation = 'Pelatihan sistem manajemen dan teknik audit internal berfokus pada studi kasus nyata.';
      }
    } else if (service === 'consultancy') {
      if (standard === 'iso-integrated') {
        baseDays = scope === 'large' ? 14 : (scope === 'medium' ? 10 : 7);
        recommendation = 'Pendampingan penuh dari GAP Analysis, penyusunan SOP & Manual Terpadu, Coaching Tim QHSE, hingga simulasi pra-audit sertifikasi.';
      } else if (standard === 'smk3') {
        baseDays = scope === 'large' ? 16 : (scope === 'medium' ? 10 : 6);
        recommendation = 'Konsultasi pemenuhan 64/166 Kriteria SMK3 PP No. 50/2012, evaluasi dokumen kepatuhan hukum, dan pendampingan audit eksternal.';
      } else {
        baseDays = scope === 'large' ? 8 : 5;
        recommendation = 'Konsultasi perancangan sistem dan pendampingan implementasi bertahap.';
      }
    } else if (service === 'audit') {
      if (standard === 'iso-integrated' || standard === 'smk3') {
        baseDays = scope === 'large' ? 4 : (scope === 'medium' ? 3 : 2);
        recommendation = 'Audit independen (2nd Party / Mock Pre-Assessment) dengan pelaporan komprehensif temuan Major, Minor, dan Opportunity for Improvement (OFI).';
      } else {
        baseDays = scope === 'large' ? 3 : 2;
        recommendation = 'Audit kepatuhan dan verifikasi implementasi prosedur lapangan.';
      }
    }

    const totalHours = baseDays * 8;
    calcDaysResult.textContent = `${baseDays}`;
    calcHoursResult.textContent = `${totalHours} Jam Kerja`;
    calcRecommendation.textContent = recommendation;

    // Generate Contact Links
    const serviceName = calcService.options[calcService.selectedIndex].text;
    const standardName = calcStandard.options[calcStandard.selectedIndex].text;
    const scopeName = calcScope.options[calcScope.selectedIndex].text;
    const locName = calcLocation.options[calcLocation.selectedIndex].text;

    const message = `Halo Pak Adam Rahmat Agung, saya ingin berkonsultasi mengenai kebutuhan ${serviceName} untuk topik ${standardName} (Skala: ${scopeName}, Lokasi: ${locName}). Estimasi durasi sistem: ~${baseDays} Mandays (${totalHours} Jam). Mohon informasi ketersediaan jadwal & proposal penawarannya. Terima kasih.`;

    if (calcWaBtn) {
      calcWaBtn.href = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    }
    if (calcEmailBtn) {
      calcEmailBtn.href = `mailto:adam.rahmatagung.qhse@gmail.com?subject=${encodeURIComponent(`Inquiry ${serviceName} - ${standardName}`)}&body=${encodeURIComponent(message)}`;
    }
  }

  [calcService, calcStandard, calcScope, calcLocation].forEach(el => {
    if (el) el.addEventListener('change', updateEstimator);
  });
  updateEstimator();

  /* ==========================================================================
     9. Contact Form Handler
     ========================================================================== */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const company = document.getElementById('contactCompany').value;
      const email = document.getElementById('contactEmail').value;
      const phone = document.getElementById('contactPhone').value;
      const service = document.getElementById('contactService').value;
      const msg = document.getElementById('contactMessage').value;

      const formattedMsg = `*Permintaan Konsultasi QHSE Melalui Website*\n\n*Nama:* ${name}\n*Perusahaan:* ${company}\n*Email:* ${email}\n*No. Telp:* ${phone}\n*Layanan:* ${service}\n*Pesan / Cakupan:* ${msg}`;

      window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(formattedMsg)}`, '_blank');
    });
  }

  /* ==========================================================================
     10. Initial Render
     ========================================================================== */
  filterAndSortData();
  renderClientsGrid('all');
  renderPartnersGrid();
  renderMarqueeTracks();

  // Helper
  function escapeHtml(string) {
    if (!string) return '';
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});

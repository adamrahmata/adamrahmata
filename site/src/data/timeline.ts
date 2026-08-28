/**
 * Corporate career, 2006 → now. Rendered newest-last so the horizontal strip
 * reads left (2006) to right (today), as decided in chat 2.
 */

export interface TimelineEntry {
  year: string;
  /** Duration chip, e.g. "2 tahun". */
  dur: string;
  role: string;
  org: string;
  desc: string;
  /** Chapter marker rendered above the dot when a new phase starts. */
  phase?: string;
  /** Photo under /public/img/timeline. */
  img?: string;
  /** The present-day entry gets the bobbing amber dot. */
  current?: boolean;
}

/** Chronological order, oldest first. */
export const timeline: TimelineEntry[] = [
  {
    year: '2006 - 2007',
    dur: '1 tahun',
    phase: 'Bab 1: Fondasi teknik',
    role: 'Drafter',
    org: 'PT. Team Nawagraha Kencana',
    desc: 'Titik awal karier profesional sebagai drafter.',
  },
  {
    year: '2007 - 2008',
    dur: '1 tahun',
    role: 'Drafter',
    org: "Jami' Al-Jami'ah Team Planner of UISU",
    desc: "Tim perencana pembangunan Masjid Al-Jami'ah UISU.",
  },
  {
    year: '2008 - 2010',
    dur: '2 tahun',
    role: 'Drafter',
    org: 'PT. Musim Mas',
    desc: 'Perancangan gambar teknik di lingkungan industri agribisnis.',
  },
  {
    year: '2009 - 2010',
    dur: '1 tahun',
    role: 'Temporary Lecturer (AutoCAD)',
    org: 'Professional Management College Indonesia (PMCI)',
    desc: 'Berbagi ilmu menggambar teknik sebagai pengajar tidak tetap.',
  },
  {
    year: '2010 - 2012',
    dur: '2 tahun',
    phase: 'Bab 2: Praktisi HSE korporasi',
    role: 'Safety Officer',
    org: 'PT. Palmas Project Engineering',
    desc: 'Gerbang masuk dunia K3: pengawasan keselamatan proyek engineering.',
    img: '/img/timeline/2010-safety-officer.jpg',
  },
  {
    year: '2012 - 2014',
    dur: '2 tahun',
    role: 'HES Senior Officer',
    org: 'PT. Indotruck Utama',
    desc: 'Mengelola program HES di perusahaan distribusi alat berat.',
  },
  {
    year: '2014 - 2016',
    dur: '2 tahun',
    role: 'HSE Coordinator',
    org: 'PT. Triagung Jaya Abadi',
    desc: 'Memimpin koordinasi K3 lintas proyek dan pembinaan tim lapangan.',
    img: '/img/timeline/2014-hse-coordinator.jpg',
  },
  {
    year: '2016 - 2017',
    dur: '1 tahun',
    role: 'HSE Engineer',
    org: 'PT. Sinotech Engineering Indonesia',
    desc: 'Mengawal aspek HSE pada proyek rekayasa dan konstruksi.',
  },
  {
    year: '2017 - sekarang',
    dur: '9 tahun berjalan',
    current: true,
    phase: 'Bab 3: Profesional independen',
    role: 'QHSE Trainer, Consultant and Auditor',
    org: 'Independen, 26 lembaga mitra, 100+ klien korporasi',
    desc: 'Praktik mandiri: pelatihan, konsultasi sistem manajemen, dan audit lintas industri.',
    img: '/img/timeline/2017-independen.jpg',
  },
];

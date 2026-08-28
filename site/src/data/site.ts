/** Single source of truth for contact details, navigation and headline figures. */

export const site = {
  name: 'Adam Rahmat Agung',
  domain: 'adamrahmata.com',
  url: 'https://www.adamrahmata.com',
  role: 'QHSE Trainer, Consultant and Auditor',
  email: 'adam.rahmata@gmail.com',
  linkedin: 'https://linkedin.com/in/adam-rahmat-agung-b84444165',
  instagram: 'https://instagram.com/advmrahmat46gung',
  /** International format, no leading "+" — wa.me wants it bare. */
  waNumber: '6281265360816',
  waNumberDisplay: '0812-6536-0816',
} as const;

/** Builds a wa.me deep link with a prefilled opening message. */
export function waHref(message = 'Halo Pak Adam, saya ingin berdiskusi'): string {
  return `https://wa.me/${site.waNumber}?text=${encodeURIComponent(message)}`;
}

export interface NavItem {
  label: string;
  href: string;
}

/** The uniform top bar agreed in chat 3 ("seragamkan"), shared by all pages. */
export const nav: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Jasa', href: '/jasa/' },
  { label: 'Rekam Jejak', href: '/rekam-jejak/' },
  { label: 'Klien', href: '/klien/' },
  { label: 'Artikel', href: '/artikel/' },
  { label: 'Kontak', href: '/kontak/' },
];

/** Headline figures shown on the homepage stat row. */
export const stats = {
  years: 16,
  mandays: 832.5,
  hours: 6850,
  clients: 90,
  partners: 23,
  projects: 279,
  trainingSessions: 216,
  consultingAssignments: 61,
  auditAssignments: 19,
} as const;

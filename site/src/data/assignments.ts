import assignmentsJson from './assignments.json';
import summaryJson from './manday-summary.json';

/** One assignment row from the legacy manday dataset. */
export interface Assignment {
  id: string;
  category: 'training' | 'consultancy' | 'auditor';
  categoryName: string;
  title: string;
  institution: string;
  institutionLogo: string;
  client: string;
  clientLogo: string;
  duration: string;
  method: string;
  /** Indonesian month and year, e.g. "Agustus 2017". */
  date: string;
  location: string;
  mandays: number;
  hours: number;
  tags: string[];
}

export interface MandaySummary {
  totalAssignments: number;
  totalMandays: number;
  totalHours: number;
  totalClients: number;
  categories: Record<string, { count: number; mandays: number; hours: number }>;
}

export const assignments = assignmentsJson as Assignment[];
export const summary = summaryJson as MandaySummary;

const MONTHS = [
  'januari',
  'februari',
  'maret',
  'april',
  'mei',
  'juni',
  'juli',
  'agustus',
  'september',
  'oktober',
  'november',
  'desember',
];

/**
 * Turns "Agustus 2017" into a sortable integer. Matches the prototype's
 * monthNum(): year × 12 plus the month index, with unparseable dates sorting
 * to the bottom rather than throwing.
 */
export function monthNumber(date: string): number {
  const parts = (date || '').toLowerCase().split(' ');
  const monthIndex = MONTHS.indexOf(parts[0] ?? '');
  const year = Number.parseInt(parts[1] ?? '', 10) || 0;
  return year * 12 + (monthIndex < 0 ? 0 : monthIndex);
}

export const categoryLabels: Record<string, string> = {
  all: 'Semua',
  training: 'Pelatihan',
  consultancy: 'Konsultasi',
  auditor: 'Audit',
};

/** Standards/topics offered in the filter dropdown, matched against tags. */
export const tagOptions = [
  { value: 'all', label: 'Semua standar / topik' },
  { value: 'ISO 9001 (Mutu)', label: 'ISO 9001 (Mutu)' },
  { value: 'ISO 14001 (Lingkungan)', label: 'ISO 14001 (Lingkungan)' },
  { value: 'ISO 45001 (K3)', label: 'ISO 45001 (K3)' },
  { value: 'SMK3 PP 50/2012', label: 'SMK3 PP 50/2012' },
  { value: 'HIRADC & Risk', label: 'HIRADC & Manajemen Risiko' },
  { value: 'Kemnaker RI', label: 'Sertifikasi Kemnaker RI' },
  { value: 'BNSP', label: 'Sertifikasi BNSP' },
  { value: 'IFC Standards', label: 'IFC Standards & ESA' },
  { value: 'Audit ISO 19011', label: 'Audit ISO 19011' },
];

export const sortOptions = [
  { value: 'date-desc', label: 'Urutan: terbaru' },
  { value: 'mandays-desc', label: 'Mandays tertinggi' },
  { value: 'mandays-asc', label: 'Mandays terendah' },
  { value: 'client-asc', label: 'Nama klien (A-Z)' },
];

export function countByCategory(category: string): number {
  return category === 'all'
    ? assignments.length
    : assignments.filter((item) => item.category === category).length;
}

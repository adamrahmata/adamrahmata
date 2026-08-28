import careerJson from './career.json';

/** One grouped assignment title from the Manday Update spreadsheet. */
export interface CareerGroup {
  title: string;
  partners: string[];
  clients: string[];
  sessions: number;
  days: number;
  hours: number;
  yearMin: number | null;
  yearMax: number | null;
  entries: string[];
}

export interface CareerData {
  trainings: CareerGroup[];
  consultancy: CareerGroup[];
  audits: CareerGroup[];
}

export const career = careerJson as unknown as CareerData;

export type RoleKey = 'praktisi' | 'trainer' | 'konsultan' | 'auditor';
export type DetailRole = Exclude<RoleKey, 'praktisi'>;

export const roleSource: Record<DetailRole, CareerGroup[]> = {
  trainer: career.trainings,
  konsultan: career.consultancy,
  auditor: career.audits,
};

/** Category slug used by the Rekam Jejak deep links. */
export const roleCategory: Record<DetailRole, string> = {
  trainer: 'training',
  konsultan: 'consultancy',
  auditor: 'auditor',
};

export const roleTitles: Record<DetailRole, string> = {
  trainer: 'Judul-judul training',
  konsultan: 'Proyek konsultasi',
  auditor: 'Proyek audit',
};

/** "(2022)" or "(2019–2022)", empty when the group carries no years. */
function yearLabel(group: CareerGroup): string {
  if (!group.yearMin) return '';
  return group.yearMin === group.yearMax
    ? ` (${group.yearMin})`
    : ` (${group.yearMin}–${group.yearMax})`;
}

export interface DetailItem {
  title: string;
  meta: string;
  /** Clients, capped at 12 with a "+N lainnya" overflow chip. */
  companies: string[];
  partners: string[];
  counts: string;
  slug: string;
}

/**
 * Builds the card list for one role, matching the prototype's buildItems():
 * trainer cards are measured in sessions/days/hours, the other two in
 * assignments/mandays, and the client list is truncated at twelve.
 */
export function buildDetailItems(role: DetailRole): DetailItem[] {
  return roleSource[role].map((group, index) => {
    const years = yearLabel(group);

    const companies =
      group.clients.length > 12
        ? [...group.clients.slice(0, 12), `+${group.clients.length - 12} lainnya`]
        : group.clients;

    const meta =
      role === 'trainer'
        ? `${group.sessions} sesi · ${group.days} hari${group.hours ? ` · ${group.hours} jam` : ''}${years}`
        : `${group.sessions} penugasan · ${group.days} mandays${years}`;

    return {
      title: group.title,
      meta,
      companies,
      partners: group.partners,
      counts: `${group.partners.length} mitra · ${group.clients.length} klien`,
      slug: `${role}-${index}`,
    };
  });
}

/** Every distinct partner institution across all three categories. */
export function allPartners(): string[] {
  const seen = new Set<string>();
  for (const groups of Object.values(roleSource)) {
    for (const group of groups) {
      for (const partner of group.partners) seen.add(partner);
    }
  }
  return [...seen].sort((a, b) => a.localeCompare(b, 'id'));
}

/** Every distinct client across all three categories. */
export function allClients(): string[] {
  const seen = new Set<string>();
  for (const groups of Object.values(roleSource)) {
    for (const group of groups) {
      for (const client of group.clients) seen.add(client);
    }
  }
  return [...seen].sort((a, b) => a.localeCompare(b, 'id'));
}

# Revisi daftar mitra perusahaan

_Started 2026-08-25 09:00 UTC_

---

## User

Continuing from "Alignment training cards".

## Assistant

Kami sedang membangun situs profesional untuk Adam Rahmat Agung, instruktur K3 independen, dengan dua tahap besar: (1) migrasi & integrasi situs lama "adamrahmata", (2) pembuatan modul-modul layanan baru dalam bahasa Indonesia dan Inggris.

**Keputusan penting yang dibuat:**

- Situs lama disimpan sebagai arsip di folder `lama/` tanpa mengubah file asli.
- Struktur navigasi disederhanakan: Beranda · Jasa · Rekam Jejak · Klien · Artikel · Kontak (modul Pengalaman dihapus karena sudah tertampil di Beranda dan Rekam Jejak).
- Empat modul layanan baru dibangun mengikuti desain "Alam Energy" (kartu putih, radius 8px, grid 1200px, Montserrat/Mulish): Training K3 (5 keunggulan + 10 badge topik), Konsultasi QHSE (6 tahapan), Audit (12 kartu klausul ISO 19011:2026 + platform HLS), dan Rekam Jejak Manday (portfolio 286 penugasan + kalkulator).
- Bilingual (ID | EN) dengan switcher teks di top bar; gaya terjemahan profesional santai; default bahasa Indonesia; data penugasan tetap ID.
- Setiap halaman jasa punya animasi scroll unik (flip naik, meluncur bergantian, zoom kabur).

**Status terkini:**

Semua 9 halaman (Beranda, Jasa, Training, Konsultasi, Audit, Rekam Jejak, Klien, Artikel, Kontak) sudah diterjemahkan ID/EN dan aktif. Preview browser awalnya beku akibat loop i18n versi pertama (masalah browser, bukan kode), sudah diperbaiki dengan gabung mutasi, timing load event, dan cache-busting `v=2`. Instruksi: **refresh tab browser untuk menyegarkan preview yang beku**, lalu coba toggle EN/ID.

**File utama:** Adam Rahmat Agung.dc.html, Training.dc.html, Konsultasi.dc.html, Audit.dc.html, Rekam Jejak.dc.html, Jasa.dc.html, Klien.dc.html, Artikel.dc.html, Kontak.dc.html, i18n.js, folder lama/ (arsip).

**Langkah selanjutnya:** Tunggu konfirmasi apakah preview sudah lancar setelah refresh, lalu lanjut dengan penyesuaian konten atau fitur tambahan sesuai kebutuhan.

## User

pada bagian ini revisi "Lembaga training & konsultan yang pernah menggandeng sebagai mitra." menjadi Lembaga training dan konsultan seperti PJK3, TUK, Lembaga independen lainnya pernah menggandeng sebagai mitra. kemudian revisi "Perusahaan dari beragam industri yang pernah menugaskan langsung." menjadi Perusahaan dari beragam sektor seperti manufaktur, minyak dan gas, pertambangan, konstruksi pernah menugaskan melalui lembaga mitra.

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

_[tool: ready_for_verification]_

Kedua kalimat sudah direvisi di Beranda beserta terjemahan Inggrisnya di i18n.js — kartu "Klien Langsung" kini menyebut sektor manufaktur, migas, pertambangan, konstruksi via lembaga mitra, dan kartu "Lembaga Mitra" menyebut PJK3, TUK, dan lembaga independen lainnya.

## User

Total hari kerja penugasan resmi: training, konsultasi, dan audit. direvisi menjadi Total hari penugasan resmi seperti training, konsultasi dan audit. kemudian revisi Akumulasi "jam mengajar di kelas dan mendampingi klien di lapangan." menjadi akumulasi jam mengajar di kelas dan mendampingi client melalui sesi konsultasi dan kegiatan audit.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Kedua deskripsi statistik sudah direvisi di Beranda beserta terjemahan Inggrisnya.


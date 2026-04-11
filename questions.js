// questions.js — VorQuest Bank Soal 4 Pilar MPR RI
// 10 Paket × (9 PG + 1 Essay) = 100 Soal

const PAKETS = [
  // ══════════════════════════════════════════════
  // PAKET 1 — Sejarah Perumusan Pancasila
  // ══════════════════════════════════════════════
  {
    id: 1,
    title: 'Paket 1 – Sejarah Perumusan Pancasila',
    topic: 'Pancasila',
    pg: [
      {
        q: 'Sidang pertama BPUPKI berlangsung pada tanggal...?',
        options: ['A. 29 Mei – 1 Juni 1945', 'B. 10 – 16 Juli 1945', 'C. 18 Agustus 1945', 'D. 1 Maret 1945'],
        answer: 'A',
      },
      {
        q: 'Siapakah yang mengusulkan nama "Pancasila" pada sidang BPUPKI 1 Juni 1945?',
        options: ['A. Muhammad Yamin', 'B. Soepomo', 'C. Soekarno', 'D. Hatta'],
        answer: 'C',
      },
      {
        q: 'Rumusan dasar negara yang diajukan Muhammad Yamin secara lisan pada 29 Mei 1945 berjumlah...',
        options: ['A. 3 asas', 'B. 4 asas', 'C. 5 asas', 'D. 6 asas'],
        answer: 'C',
      },
      {
        q: 'Panitia Sembilan dibentuk untuk menyusun rumusan dasar negara dan diketuai oleh...',
        options: ['A. Soepomo', 'B. Soekarno', 'C. Hatta', 'D. Radjiman Wedyodiningrat'],
        answer: 'B',
      },
      {
        q: 'Piagam Jakarta ditandatangani pada tanggal...',
        options: ['A. 1 Juni 1945', 'B. 22 Juni 1945', 'C. 17 Agustus 1945', 'D. 18 Agustus 1945'],
        answer: 'B',
      },
      {
        q: 'Apa perbedaan utama Piagam Jakarta dengan Pancasila yang disahkan 18 Agustus 1945?',
        options: [
          'A. Sila pertama Piagam Jakarta berbunyi "Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya"',
          'B. Piagam Jakarta tidak memiliki sila kemanusiaan',
          'C. Piagam Jakarta hanya memuat 4 sila',
          'D. Urutan sila dalam Piagam Jakarta terbalik',
        ],
        answer: 'A',
      },
      {
        q: 'BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia) dibentuk oleh...',
        options: ['A. Belanda', 'B. Amerika Serikat', 'C. Jepang', 'D. Inggris'],
        answer: 'C',
      },
      {
        q: 'Ketua BPUPKI adalah...',
        options: ['A. Soekarno', 'B. Hatta', 'C. Radjiman Wedyodiningrat', 'D. Ahmad Soebardjo'],
        answer: 'C',
      },
      {
        q: 'Sidang kedua BPUPKI membahas tentang...',
        options: [
          'A. Dasar negara',
          'B. Rancangan UUD dan bentuk negara',
          'C. Proklamasi kemerdekaan',
          'D. Pembentukan kabinet',
        ],
        answer: 'B',
      },
    ],
    essay: {
      q: 'Jelaskan proses perumusan Pancasila dari sidang BPUPKI pertama hingga ditetapkannya Pancasila pada 18 Agustus 1945. Apa peran Panitia Sembilan dalam proses tersebut?',
      rubrik: 'Jawaban mencakup: (1) Sidang BPUPKI I 29 Mei–1 Juni 1945 dan usulan dari Yamin, Soepomo, Soekarno; (2) Pembentukan Panitia Sembilan dan lahirnya Piagam Jakarta 22 Juni 1945; (3) Perubahan sila pertama pada 18 Agustus 1945 oleh PPKI; (4) Penetapan Pancasila sebagai dasar negara.',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 2 — Pancasila sebagai Ideologi & Dasar Negara
  // ══════════════════════════════════════════════
  {
    id: 2,
    title: 'Paket 2 – Pancasila sebagai Ideologi & Dasar Negara',
    topic: 'Pancasila',
    pg: [
      {
        q: 'Pancasila sebagai dasar negara berarti Pancasila berfungsi sebagai...',
        options: [
          'A. Pedoman hidup sehari-hari',
          'B. Sumber dari segala sumber hukum negara',
          'C. Tujuan pembangunan nasional',
          'D. Simbol persatuan bangsa',
        ],
        answer: 'B',
      },
      {
        q: 'Sila "Kemanusiaan yang Adil dan Beradab" tercermin dalam sikap...',
        options: [
          'A. Mengutamakan kepentingan golongan sendiri',
          'B. Menghormati hak asasi manusia tanpa membeda-bedakan',
          'C. Menjalankan ibadah dengan tekun',
          'D. Mematuhi peraturan pemerintah',
        ],
        answer: 'B',
      },
      {
        q: 'Lambang sila "Persatuan Indonesia" adalah...',
        options: ['A. Bintang', 'B. Rantai', 'C. Pohon Beringin', 'D. Kepala Banteng'],
        answer: 'C',
      },
      {
        q: 'Pancasila sebagai ideologi terbuka artinya...',
        options: [
          'A. Nilai-nilainya dapat diubah kapan saja',
          'B. Nilainya relevan dan dapat dijabarkan sesuai perkembangan zaman',
          'C. Terbuka untuk diganti ideologi lain',
          'D. Semua orang boleh menafsirkan sesuai keinginan sendiri',
        ],
        answer: 'B',
      },
      {
        q: 'Nilai dasar Pancasila bersifat...',
        options: ['A. Tetap dan tidak berubah', 'B. Fleksibel sesuai kebutuhan pemerintah', 'C. Berubah setiap periode kepemimpinan', 'D. Disesuaikan dengan budaya daerah'],
        answer: 'A',
      },
      {
        q: 'Sila kelima Pancasila berbunyi...',
        options: [
          'A. Persatuan Indonesia',
          'B. Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
          'C. Keadilan Sosial bagi Seluruh Rakyat Indonesia',
          'D. Ketuhanan Yang Maha Esa',
        ],
        answer: 'C',
      },
      {
        q: 'Pancasila sebagai pandangan hidup (way of life) bangsa Indonesia berarti...',
        options: [
          'A. Pancasila mengatur seluruh aspek kehidupan bernegara secara teknis',
          'B. Pancasila menjadi petunjuk dan arah dalam menjalani kehidupan bermasyarakat dan bernegara',
          'C. Pancasila hanya berlaku bagi pejabat negara',
          'D. Pancasila setara dengan konstitusi negara',
        ],
        answer: 'B',
      },
      {
        q: 'Lambang negara Indonesia yang di dalamnya memuat simbol-simbol sila Pancasila adalah...',
        options: ['A. Garuda Pancasila', 'B. Bendera Merah Putih', 'C. Pita Bhinneka Tunggal Ika', 'D. Burung Cenderawasih'],
        answer: 'A',
      },
      {
        q: 'Contoh pengamalan sila "Keadilan Sosial bagi Seluruh Rakyat Indonesia" adalah...',
        options: [
          'A. Berdoa sebelum belajar',
          'B. Menghargai pendapat orang lain dalam rapat',
          'C. Tidak bersikap boros dan suka menghambur-hamburkan uang',
          'D. Mengutamakan produk dalam negeri',
        ],
        answer: 'C',
      },
    ],
    essay: {
      q: 'Apa yang dimaksud dengan Pancasila sebagai ideologi terbuka? Jelaskan perbedaannya dengan ideologi tertutup dan berikan contoh penerapan nilai Pancasila dalam kehidupan modern.',
      rubrik: 'Jawaban mencakup: (1) Definisi ideologi terbuka—nilai dasar tetap, nilai instrumental dapat berkembang; (2) Perbandingan dengan ideologi tertutup yang kaku dan dogmatis; (3) Contoh konkret penerapan nilai Pancasila di era modern (misal toleransi di media sosial, gotong royong dalam bencana, dll).',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 3 — UUD NRI 1945: Sejarah & Perubahan
  // ══════════════════════════════════════════════
  {
    id: 3,
    title: 'Paket 3 – UUD NRI 1945: Sejarah & Perubahan',
    topic: 'UUD NRI 1945',
    pg: [
      {
        q: 'UUD 1945 pertama kali disahkan oleh...',
        options: ['A. BPUPKI', 'B. PPKI', 'C. MPR', 'D. DPR'],
        answer: 'B',
      },
      {
        q: 'Berapa kali UUD 1945 telah diamandemen?',
        options: ['A. 2 kali', 'B. 3 kali', 'C. 4 kali', 'D. 5 kali'],
        answer: 'C',
      },
      {
        q: 'Amandemen pertama UUD 1945 dilakukan pada tahun...',
        options: ['A. 1998', 'B. 1999', 'C. 2000', 'D. 2001'],
        answer: 'B',
      },
      {
        q: 'Pasal 1 ayat 1 UUD 1945 menyatakan bahwa negara Indonesia adalah negara...',
        options: ['A. Federasi', 'B. Kesatuan yang berbentuk Republik', 'C. Monarki konstitusional', 'D. Konfederasi'],
        answer: 'B',
      },
      {
        q: 'Amandemen UUD 1945 keempat dilaksanakan pada tahun...',
        options: ['A. 2001', 'B. 2002', 'C. 2003', 'D. 2004'],
        answer: 'B',
      },
      {
        q: 'Salah satu perubahan penting dalam amandemen UUD 1945 adalah...',
        options: [
          'A. Penghapusan Mahkamah Agung',
          'B. Pembentukan Mahkamah Konstitusi',
          'C. Penghapusan MPR',
          'D. Pembentukan DPD sebagai pengganti DPR',
        ],
        answer: 'B',
      },
      {
        q: 'Setelah amandemen, presiden dan wakil presiden dipilih secara langsung oleh...',
        options: ['A. MPR', 'B. DPR', 'C. Rakyat', 'D. Partai politik'],
        answer: 'C',
      },
      {
        q: 'Masa jabatan presiden berdasarkan UUD 1945 setelah amandemen adalah...',
        options: ['A. 4 tahun, maksimal 3 kali', 'B. 5 tahun, maksimal 2 kali', 'C. 6 tahun, maksimal 2 kali', 'D. 5 tahun, tidak terbatas'],
        answer: 'B',
      },
      {
        q: 'Pasal yang mengatur tentang pendidikan nasional dalam UUD 1945 adalah...',
        options: ['A. Pasal 28', 'B. Pasal 30', 'C. Pasal 31', 'D. Pasal 33'],
        answer: 'C',
      },
    ],
    essay: {
      q: 'Jelaskan alasan dan tujuan dilakukannya amandemen UUD 1945 setelah reformasi 1998. Apa saja perubahan mendasar yang terjadi dalam sistem pemerintahan Indonesia akibat amandemen tersebut?',
      rubrik: 'Jawaban mencakup: (1) Latar belakang reformasi 1998 dan tuntutan demokratisasi; (2) Tujuan amandemen: membatasi kekuasaan eksekutif, memperkuat check and balance; (3) Perubahan: pemilihan presiden langsung, pembentukan MK dan KY, penguatan DPD, batas masa jabatan presiden, penghapusan Tap MPR sebagai sumber hukum.',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 4 — Lembaga-Lembaga Negara
  // ══════════════════════════════════════════════
  {
    id: 4,
    title: 'Paket 4 – Lembaga-Lembaga Negara',
    topic: 'UUD NRI 1945',
    pg: [
      {
        q: 'Lembaga negara yang berwenang menguji undang-undang terhadap UUD 1945 adalah...',
        options: ['A. Mahkamah Agung', 'B. Mahkamah Konstitusi', 'C. Komisi Yudisial', 'D. DPR'],
        answer: 'B',
      },
      {
        q: 'DPD (Dewan Perwakilan Daerah) terdiri dari wakil-wakil dari...',
        options: ['A. Partai politik', 'B. Provinsi', 'C. Kabupaten/Kota', 'D. Organisasi masyarakat'],
        answer: 'B',
      },
      {
        q: 'MPR terdiri dari anggota DPR dan...',
        options: ['A. Presiden', 'B. DPD', 'C. Mahkamah Agung', 'D. BPK'],
        answer: 'B',
      },
      {
        q: 'Lembaga yang bertugas memeriksa pengelolaan dan tanggung jawab keuangan negara adalah...',
        options: ['A. Bank Indonesia', 'B. Kementerian Keuangan', 'C. BPK (Badan Pemeriksa Keuangan)', 'D. KPK'],
        answer: 'C',
      },
      {
        q: 'Komisi Yudisial (KY) memiliki kewenangan untuk...',
        options: [
          'A. Mengadili perkara pidana berat',
          'B. Mengusulkan pengangkatan hakim agung dan menjaga kehormatan hakim',
          'C. Membuat undang-undang bersama DPR',
          'D. Melakukan audit keuangan negara',
        ],
        answer: 'B',
      },
      {
        q: 'Presiden sebagai kepala negara dan kepala pemerintahan dibantu oleh...',
        options: ['A. DPR', 'B. MPR', 'C. Wakil Presiden dan menteri-menteri', 'D. BPK'],
        answer: 'C',
      },
      {
        q: 'Fungsi DPR yang meliputi pengawasan terhadap jalannya pemerintahan disebut fungsi...',
        options: ['A. Legislasi', 'B. Anggaran', 'C. Pengawasan', 'D. Yudikasi'],
        answer: 'C',
      },
      {
        q: 'Jumlah anggota DPD dari setiap provinsi adalah...',
        options: ['A. 2 orang', 'B. 3 orang', 'C. 4 orang', 'D. 5 orang'],
        answer: 'C',
      },
      {
        q: 'Mahkamah Agung memiliki kewenangan untuk...',
        options: [
          'A. Menguji UU terhadap UUD 1945',
          'B. Mengadili pada tingkat kasasi dan menguji peraturan di bawah undang-undang',
          'C. Membubarkan partai politik',
          'D. Memilih anggota KPU',
        ],
        answer: 'B',
      },
    ],
    essay: {
      q: 'Jelaskan sistem checks and balances antarlembaga negara di Indonesia. Bagaimana mekanisme saling mengawasi antara lembaga eksekutif, legislatif, dan yudikatif setelah amandemen UUD 1945?',
      rubrik: 'Jawaban mencakup: (1) Pengertian checks and balances; (2) Kewenangan DPR mengawasi presiden, hak interpelasi/angket/menyatakan pendapat; (3) MK menguji UU terhadap UUD; (4) Presiden dapat memveto peraturan DPR; (5) BPK mengawasi keuangan eksekutif; (6) KY mengawasi hakim MA.',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 5 — NKRI: Bentuk & Dasar Negara
  // ══════════════════════════════════════════════
  {
    id: 5,
    title: 'Paket 5 – NKRI: Bentuk & Dasar Negara',
    topic: 'NKRI',
    pg: [
      {
        q: 'NKRI adalah singkatan dari...',
        options: [
          'A. Negara Kesatuan Republik Indonesia',
          'B. Negara Konstitusional Republik Indonesia',
          'C. Negara Kesejahteraan Rakyat Indonesia',
          'D. Negara Kesatuan Rakyat Indonesia',
        ],
        answer: 'A',
      },
      {
        q: 'Pasal UUD 1945 yang menyatakan bahwa bentuk NKRI tidak dapat diubah adalah...',
        options: ['A. Pasal 1 ayat 1', 'B. Pasal 37 ayat 5', 'C. Pasal 28A', 'D. Pasal 25A'],
        answer: 'B',
      },
      {
        q: 'Wilayah NKRI membentang dari...',
        options: [
          'A. Sabang sampai Merauke',
          'B. Banda Aceh sampai Jayapura',
          'C. Sumatera sampai Papua',
          'D. Sabang sampai Timor-Timur',
        ],
        answer: 'A',
      },
      {
        q: 'Indonesia memproklamasikan kemerdekaannya pada tanggal...',
        options: ['A. 17 Agustus 1945', 'B. 18 Agustus 1945', 'C. 1 Juni 1945', 'D. 22 Juni 1945'],
        answer: 'A',
      },
      {
        q: 'Konsep Wawasan Nusantara merupakan cara pandang bangsa Indonesia terhadap...',
        options: [
          'A. Hubungan antarnegara ASEAN',
          'B. Kesatuan wilayah darat, laut, dan udara Indonesia sebagai satu kesatuan',
          'C. Pembagian wilayah berdasarkan suku bangsa',
          'D. Perbatasan Indonesia dengan negara tetangga',
        ],
        answer: 'B',
      },
      {
        q: 'Deklarasi Djuanda (1957) menetapkan bahwa Indonesia menganut konsep...',
        options: [
          'A. Negara kepulauan (archipelagic state)',
          'B. Negara pantai (coastal state)',
          'C. Zona ekonomi eksklusif sepanjang 12 mil',
          'D. Batas wilayah berdasarkan perjanjian kolonial',
        ],
        answer: 'A',
      },
      {
        q: 'Semboyan bangsa Indonesia yang mengandung makna persatuan dalam keberagaman adalah...',
        options: ['A. Pancasila', 'B. Bhinneka Tunggal Ika', 'C. Garuda Pancasila', 'D. Merah Putih'],
        answer: 'B',
      },
      {
        q: 'Otonomi daerah di Indonesia diatur dalam UUD 1945 pasal...',
        options: ['A. Pasal 17', 'B. Pasal 18', 'C. Pasal 22', 'D. Pasal 25'],
        answer: 'B',
      },
      {
        q: 'Yang dimaksud dengan integrasi nasional adalah...',
        options: [
          'A. Penyeragaman budaya seluruh daerah',
          'B. Proses penyatuan berbagai perbedaan menjadi satu kesatuan bangsa yang utuh',
          'C. Penggabungan wilayah-wilayah baru ke dalam NKRI',
          'D. Proses penghapusan suku-suku bangsa yang ada',
        ],
        answer: 'B',
      },
    ],
    essay: {
      q: 'Mengapa bentuk negara kesatuan dianggap paling tepat bagi Indonesia? Jelaskan tantangan yang dihadapi NKRI dalam menjaga persatuan di tengah keberagaman yang luar biasa, dan solusi yang dapat diterapkan.',
      rubrik: 'Jawaban mencakup: (1) Alasan historis dan geografis pilihan bentuk kesatuan; (2) Tantangan: separatisme, kesenjangan ekonomi antardaerah, konflik SARA; (3) Solusi: otonomi daerah, pembangunan merata, pendidikan kebangsaan, penegakan hukum, penguatan identitas nasional.',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 6 — Bhinneka Tunggal Ika: Asal Usul & Makna
  // ══════════════════════════════════════════════
  {
    id: 6,
    title: 'Paket 6 – Bhinneka Tunggal Ika: Asal Usul & Makna',
    topic: 'Bhinneka Tunggal Ika',
    pg: [
      {
        q: 'Semboyan "Bhinneka Tunggal Ika" berasal dari kitab...',
        options: ['A. Sutasoma', 'B. Negarakertagama', 'C. Pararaton', 'D. Mahabharata'],
        answer: 'A',
      },
      {
        q: 'Kitab yang memuat semboyan "Bhinneka Tunggal Ika" ditulis oleh...',
        options: ['A. Prapanca', 'B. Tantular', 'C. Ranggawarsita', 'D. Ken Arok'],
        answer: 'B',
      },
      {
        q: 'Arti dari semboyan "Bhinneka Tunggal Ika" adalah...',
        options: [
          'A. Bersatu dalam perbedaan, berbeda dalam persatuan',
          'B. Berbeda-beda tetapi tetap satu',
          'C. Satu nusa, satu bangsa, satu bahasa',
          'D. Persatuan dan kesatuan adalah kekuatan',
        ],
        answer: 'B',
      },
      {
        q: '"Bhinneka Tunggal Ika" tercantum pada lambang negara yaitu...',
        options: ['A. Perisai Garuda Pancasila', 'B. Pita yang dicengkeram Garuda Pancasila', 'C. Sayap Garuda Pancasila', 'D. Kepala Garuda Pancasila'],
        answer: 'B',
      },
      {
        q: 'Bhinneka Tunggal Ika berasal dari bahasa...',
        options: ['A. Jawa Kuno', 'B. Melayu Kuno', 'C. Sansekerta', 'D. Kawi (Jawa Kuno)'],
        answer: 'D',
      },
      {
        q: 'Kitab Sutasoma ditulis pada masa kerajaan...',
        options: ['A. Sriwijaya', 'B. Majapahit', 'C. Singasari', 'D. Mataram'],
        answer: 'B',
      },
      {
        q: 'Makna Bhinneka Tunggal Ika dalam konteks kebangsaan Indonesia mengandung prinsip...',
        options: [
          'A. Monokulturalisme',
          'B. Multikulturalisme',
          'C. Etnosentrisme',
          'D. Nasionalisme sempit',
        ],
        answer: 'B',
      },
      {
        q: 'Unsur-unsur keberagaman yang terdapat dalam Bhinneka Tunggal Ika meliputi...',
        options: [
          'A. Suku, agama, ras, dan antargolongan (SARA)',
          'B. Hanya suku dan agama',
          'C. Hanya bahasa dan budaya',
          'D. Hanya ras dan keturunan',
        ],
        answer: 'A',
      },
      {
        q: 'Dalam kitab Sutasoma, kalimat lengkap yang menjadi asal semboyan Bhinneka Tunggal Ika adalah...',
        options: [
          'A. "Bhinneka Tunggal Ika tan hana dharma mangrwa"',
          'B. "Bhinneka Tunggal Ika nusantara jaya"',
          'C. "Bhinneka Tunggal Ika dharma negara"',
          'D. "Bhinneka Tunggal Ika bhumi nusantara"',
        ],
        answer: 'A',
      },
    ],
    essay: {
      q: 'Jelaskan makna filosofis "Bhinneka Tunggal Ika" dalam konteks masyarakat Indonesia yang beragam. Mengapa semboyan ini dipilih sebagai lambang persatuan bangsa, dan bagaimana relevansinya di era globalisasi saat ini?',
      rubrik: 'Jawaban mencakup: (1) Asal-usul dari Kitab Sutasoma karya Mpu Tantular; (2) Makna: perbedaan agama/suku/budaya tidak menghalangi persatuan; (3) Alasan pemilihan: mencerminkan realitas keberagaman Indonesia; (4) Relevansi masa kini: tantangan intoleransi, hoaks, perpecahan di media sosial; pentingnya menghargai perbedaan.',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 7 — Bhinneka Tunggal Ika dalam Kehidupan
  // ══════════════════════════════════════════════
  {
    id: 7,
    title: 'Paket 7 – Bhinneka Tunggal Ika dalam Kehidupan',
    topic: 'Bhinneka Tunggal Ika',
    pg: [
      {
        q: 'Sikap yang mencerminkan pengamalan Bhinneka Tunggal Ika dalam kehidupan sehari-hari adalah...',
        options: [
          'A. Hanya bergaul dengan orang yang satu suku',
          'B. Menghormati dan menghargai perbedaan agama dan budaya teman',
          'C. Menganggap budaya sendiri paling baik',
          'D. Menolak tradisi daerah lain',
        ],
        answer: 'B',
      },
      {
        q: 'Sikap yang bertentangan dengan nilai Bhinneka Tunggal Ika adalah...',
        options: [
          'A. Toleransi antaragama',
          'B. Gotong royong antar suku',
          'C. Diskriminasi berdasarkan ras',
          'D. Menghargai keberagaman budaya',
        ],
        answer: 'C',
      },
      {
        q: 'Prinsip toleransi dalam Bhinneka Tunggal Ika berarti...',
        options: [
          'A. Menyeragamkan semua perbedaan',
          'B. Mengakui dan menghargai perbedaan tanpa memaksakan kehendak',
          'C. Mencampuradukkan semua ajaran agama',
          'D. Menghilangkan identitas budaya masing-masing',
        ],
        answer: 'B',
      },
      {
        q: 'Indonesia memiliki lebih dari 300 suku bangsa. Hal ini merupakan...',
        options: [
          'A. Ancaman bagi persatuan',
          'B. Kelemahan bangsa Indonesia',
          'C. Kekayaan dan kekuatan bangsa jika dikelola dengan baik',
          'D. Hambatan dalam pembangunan nasional',
        ],
        answer: 'C',
      },
      {
        q: 'Hari Kebangkitan Nasional yang diperingati setiap tahun untuk mengingatkan persatuan bangsa jatuh pada...',
        options: ['A. 17 Agustus', 'B. 20 Mei', 'C. 28 Oktober', 'D. 2 Mei'],
        answer: 'B',
      },
      {
        q: 'Sumpah Pemuda 28 Oktober 1928 menyatakan tekad satu nusa, satu bangsa, dan satu...',
        options: ['A. Agama', 'B. Bahasa', 'C. Pemimpin', 'D. Hukum'],
        answer: 'B',
      },
      {
        q: 'Salah satu ancaman terhadap Bhinneka Tunggal Ika di era digital adalah...',
        options: [
          'A. Penggunaan teknologi untuk pembelajaran',
          'B. Penyebaran hoaks dan ujaran kebencian berbasis SARA di media sosial',
          'C. Globalisasi budaya yang memperkaya seni lokal',
          'D. Kemudahan akses informasi antardaerah',
        ],
        answer: 'B',
      },
      {
        q: 'Pakaian adat dari berbagai daerah yang ditampilkan dalam acara nasional merupakan contoh...',
        options: [
          'A. Pemborosan anggaran negara',
          'B. Perayaan keberagaman budaya dalam bingkai persatuan',
          'C. Kompetisi antardaerah',
          'D. Pelestarian budaya yang menghambat modernisasi',
        ],
        answer: 'B',
      },
      {
        q: 'Gerakan yang berupaya memecah belah persatuan Indonesia berdasarkan perbedaan suku disebut...',
        options: ['A. Nasionalisme', 'B. Patriotisme', 'C. Separatisme', 'D. Globalisme'],
        answer: 'C',
      },
    ],
    essay: {
      q: 'Bagaimana cara generasi muda Indonesia dapat memperkuat nilai-nilai Bhinneka Tunggal Ika di era digital dan globalisasi? Berikan minimal tiga contoh nyata yang dapat dilakukan.',
      rubrik: 'Jawaban mencakup: (1) Pemahaman bahaya hoaks dan ujaran kebencian; (2) Cara konkret: melawan hoaks SARA dengan cek fakta, menampilkan konten budaya lokal di media sosial, mengikuti kegiatan lintas budaya, dll; (3) Pentingnya literasi digital untuk memperkuat persatuan; (4) Peran aktif pemuda sebagai agen persatuan.',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 8 — HAM dan Kewarganegaraan
  // ══════════════════════════════════════════════
  {
    id: 8,
    title: 'Paket 8 – HAM dan Kewarganegaraan',
    topic: 'UUD NRI 1945',
    pg: [
      {
        q: 'HAM (Hak Asasi Manusia) bersifat universal artinya...',
        options: [
          'A. Hanya berlaku di negara-negara maju',
          'B. Berlaku untuk semua manusia tanpa terkecuali di mana pun berada',
          'C. Diberikan oleh pemerintah kepada warganya',
          'D. Dapat dicabut jika melanggar hukum',
        ],
        answer: 'B',
      },
      {
        q: 'Pasal 28 UUD 1945 (setelah amandemen) memuat tentang...',
        options: [
          'A. Pertahanan negara',
          'B. Hak dan kebebasan dasar warga negara (HAM)',
          'C. Kewajiban membayar pajak',
          'D. Pendidikan nasional',
        ],
        answer: 'B',
      },
      {
        q: 'Deklarasi Universal HAM (DUHAM) ditetapkan oleh PBB pada tahun...',
        options: ['A. 1945', 'B. 1948', 'C. 1950', 'D. 1966'],
        answer: 'B',
      },
      {
        q: 'Kewajiban warga negara Indonesia yang diatur dalam UUD 1945 meliputi...',
        options: [
          'A. Mendapatkan pekerjaan dan kehidupan layak',
          'B. Membela negara dan membayar pajak',
          'C. Mendapatkan pendidikan dan kesehatan',
          'D. Mendapatkan perlindungan dari negara',
        ],
        answer: 'B',
      },
      {
        q: 'Lembaga yang menangani pelanggaran HAM di Indonesia adalah...',
        options: ['A. KPK', 'B. Komnas HAM', 'C. BPK', 'D. Ombudsman'],
        answer: 'B',
      },
      {
        q: 'Hak yang tidak dapat dikurangi dalam keadaan apapun (non-derogable rights) meliputi...',
        options: [
          'A. Hak pilih dalam pemilu',
          'B. Hak memiliki properti',
          'C. Hak untuk hidup dan larangan penyiksaan',
          'D. Hak bekerja dan mendapat upah',
        ],
        answer: 'C',
      },
      {
        q: 'Asas kewarganegaraan Indonesia berdasarkan UU No. 12 Tahun 2006 menggunakan asas...',
        options: [
          'A. Hanya ius soli (tempat lahir)',
          'B. Hanya ius sanguinis (keturunan)',
          'C. Kombinasi ius soli dan ius sanguinis',
          'D. Naturalisasi penuh',
        ],
        answer: 'C',
      },
      {
        q: 'Seorang warga negara yang ingin mengajukan keberatan atas aturan hukum yang merugikan HAM-nya dapat mengajukan ke...',
        options: ['A. Mahkamah Agung', 'B. Mahkamah Konstitusi', 'C. Komnas HAM', 'D. DPR'],
        answer: 'B',
      },
      {
        q: 'Hak mendapatkan pendidikan diatur dalam UUD 1945 pasal...',
        options: ['A. Pasal 27', 'B. Pasal 28', 'C. Pasal 31', 'D. Pasal 34'],
        answer: 'C',
      },
    ],
    essay: {
      q: 'Jelaskan hubungan antara Hak Asasi Manusia (HAM) dan kewajiban warga negara dalam sistem hukum Indonesia. Berikan contoh kasus pelanggaran HAM dan bagaimana mekanisme penegakannya di Indonesia.',
      rubrik: 'Jawaban mencakup: (1) Pengertian HAM dan kewajibannya yang berjalan seiring; (2) Dasar hukum HAM di Indonesia: Pasal 28A-J UUD 1945 dan UU No. 39/1999; (3) Contoh kasus pelanggaran HAM (misalnya kasus tragedi 1998); (4) Mekanisme: Komnas HAM → Pengadilan HAM Ad Hoc; (5) Peran masyarakat dalam pengawasan HAM.',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 9 — Sistem Pemerintahan & Demokrasi
  // ══════════════════════════════════════════════
  {
    id: 9,
    title: 'Paket 9 – Sistem Pemerintahan & Demokrasi',
    topic: 'NKRI',
    pg: [
      {
        q: 'Indonesia menganut sistem pemerintahan...',
        options: ['A. Parlementer', 'B. Presidensial', 'C. Monarki', 'D. Semi-presidensial'],
        answer: 'B',
      },
      {
        q: 'Dalam sistem presidensial, presiden bertanggung jawab kepada...',
        options: ['A. Parlemen/DPR', 'B. MPR', 'C. Rakyat', 'D. Mahkamah Agung'],
        answer: 'C',
      },
      {
        q: 'Pemilihan Umum (Pemilu) di Indonesia diselenggarakan untuk memilih...',
        options: [
          'A. Presiden dan Wakil Presiden saja',
          'B. Anggota DPR saja',
          'C. Presiden/Wapres, DPR, DPD, DPRD',
          'D. Hanya kepala daerah',
        ],
        answer: 'C',
      },
      {
        q: 'Asas pemilu di Indonesia dikenal dengan singkatan LUBER JURDIL, yang berarti...',
        options: [
          'A. Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil',
          'B. Langsung, Universal, Bebas, Rahasia, Jujur, dan Ideal',
          'C. Luas, Umum, Bebas, Rahasia, Jujur, dan Ilmiah',
          'D. Langsung, Umum, Bersih, Rahasia, Jujur, dan Adil',
        ],
        answer: 'A',
      },
      {
        q: 'Demokrasi Pancasila yang dianut Indonesia mengutamakan...',
        options: [
          'A. Keputusan berdasarkan suara mayoritas mutlak',
          'B. Musyawarah mufakat dan mengutamakan kepentingan bersama',
          'C. Keputusan individu yang berwenang',
          'D. Sistem oligarki yang dipandu oleh tokoh-tokoh tertentu',
        ],
        answer: 'B',
      },
      {
        q: 'Partai politik di Indonesia memiliki fungsi sebagai...',
        options: [
          'A. Pelaksana kebijakan pemerintah',
          'B. Lembaga yudikatif negara',
          'C. Sarana rekrutmen politik dan artikulasi kepentingan rakyat',
          'D. Pengawas keuangan negara',
        ],
        answer: 'C',
      },
      {
        q: 'Lembaga yang bertanggung jawab menyelenggarakan Pemilu di Indonesia adalah...',
        options: ['A. Kementerian Dalam Negeri', 'B. KPU (Komisi Pemilihan Umum)', 'C. Bawaslu', 'D. Mahkamah Konstitusi'],
        answer: 'B',
      },
      {
        q: 'Salah satu ciri pokok demokrasi adalah...',
        options: [
          'A. Kekuasaan ada di tangan satu orang',
          'B. Adanya jaminan kebebasan pers dan berpendapat',
          'C. Tidak ada oposisi terhadap pemerintah',
          'D. Pemimpin dipilih seumur hidup',
        ],
        answer: 'B',
      },
      {
        q: 'Sistem multi-partai di Indonesia bertujuan untuk...',
        options: [
          'A. Mempersulit pembentukan pemerintahan',
          'B. Memberikan ruang bagi berbagai kelompok untuk berpartisipasi dalam politik',
          'C. Membatasi hak pilih warga negara',
          'D. Memperkuat kekuasaan presiden',
        ],
        answer: 'B',
      },
    ],
    essay: {
      q: 'Jelaskan perbedaan antara Demokrasi Pancasila dengan demokrasi liberal Barat. Apa kelebihan dan tantangan dalam menerapkan Demokrasi Pancasila di Indonesia saat ini?',
      rubrik: 'Jawaban mencakup: (1) Ciri demokrasi liberal: individualisme, voting mayoritas, kebebasan mutlak; (2) Ciri Demokrasi Pancasila: musyawarah mufakat, kepentingan bersama, dilandasi nilai-nilai Pancasila; (3) Kelebihan: menghargai kearifan lokal, menjaga harmoni; (4) Tantangan: praktik korupsi, politik uang, rendahnya partisipasi masyarakat.',
    },
  },

  // ══════════════════════════════════════════════
  // PAKET 10 — Soal Campuran 4 Pilar
  // ══════════════════════════════════════════════
  {
    id: 10,
    title: 'Paket 10 – Soal Campuran 4 Pilar',
    topic: 'Campuran',
    pg: [
      {
        q: 'Empat Pilar MPR RI terdiri dari...',
        options: [
          'A. Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika',
          'B. Pancasila, Sumpah Pemuda, NKRI, Demokrasi',
          'C. UUD 1945, Demokrasi, HAM, Bhinneka Tunggal Ika',
          'D. Pancasila, UUD 1945, HAM, Sumpah Pemuda',
        ],
        answer: 'A',
      },
      {
        q: 'Dari empat pilar MPR RI, yang berfungsi sebagai sumber dari segala sumber hukum adalah...',
        options: ['A. UUD 1945', 'B. Pancasila', 'C. NKRI', 'D. Bhinneka Tunggal Ika'],
        answer: 'B',
      },
      {
        q: 'Pembukaan UUD 1945 alinea keempat memuat...',
        options: [
          'A. Pernyataan kemerdekaan Indonesia',
          'B. Dasar negara Pancasila dan tujuan negara',
          'C. Sejarah perjuangan bangsa Indonesia',
          'D. Hak dan kewajiban warga negara',
        ],
        answer: 'B',
      },
      {
        q: 'Tujuan negara Indonesia yang tercantum dalam Pembukaan UUD 1945 alinea keempat meliputi...',
        options: [
          'A. Memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut menjaga perdamaian dunia',
          'B. Memperluas wilayah, memperkuat angkatan bersenjata, dan meningkatkan kekayaan negara',
          'C. Melindungi warga negara, memperbesar pendapatan negara, dan mengembangkan teknologi',
          'D. Menjaga keamanan, meningkatkan GDP, dan memperluas pengaruh internasional',
        ],
        answer: 'A',
      },
      {
        q: 'Konsep gotong royong yang menjadi salah satu nilai inti bangsa Indonesia paling mencerminkan sila...',
        options: ['A. Sila pertama', 'B. Sila kedua', 'C. Sila ketiga', 'D. Sila keempat'],
        answer: 'C',
      },
      {
        q: 'Pasal 33 UUD 1945 mengatur tentang...',
        options: [
          'A. Pertahanan negara',
          'B. Perekonomian nasional dan kesejahteraan sosial',
          'C. Hak asasi manusia',
          'D. Pemilihan umum',
        ],
        answer: 'B',
      },
      {
        q: 'Nilai persatuan dalam Pancasila sila ketiga paling tepat diwujudkan melalui...',
        options: [
          'A. Memenangkan kompetisi internasional',
          'B. Mengutamakan kepentingan bangsa di atas golongan',
          'C. Menolak pengaruh budaya asing',
          'D. Hanya menggunakan produk dalam negeri',
        ],
        answer: 'B',
      },
      {
        q: 'Dalam UUD 1945, kebebasan berpendapat dan berserikat dijamin dalam...',
        options: ['A. Pasal 27', 'B. Pasal 28', 'C. Pasal 30', 'D. Pasal 33'],
        answer: 'B',
      },
      {
        q: 'Nilai dasar Pancasila yang menekankan keseimbangan antara hak dan kewajiban adalah...',
        options: [
          'A. Ketuhanan Yang Maha Esa',
          'B. Kemanusiaan yang Adil dan Beradab',
          'C. Keadilan Sosial bagi Seluruh Rakyat Indonesia',
          'D. Persatuan Indonesia',
        ],
        answer: 'C',
      },
    ],
    essay: {
      q: 'Jelaskan keterkaitan antara keempat pilar MPR RI (Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika). Mengapa keempat pilar ini harus dipahami dan diamalkan secara bersamaan oleh seluruh warga negara Indonesia?',
      rubrik: 'Jawaban mencakup: (1) Pancasila sebagai filosofi dasar; (2) UUD 1945 sebagai hukum tertinggi yang mengejawantahkan Pancasila; (3) NKRI sebagai bentuk negara yang dipilih sesuai nilai Pancasila; (4) Bhinneka Tunggal Ika sebagai semboyan pemersatu; (5) Keterkaitan: keempatnya saling menguatkan dan tidak dapat dipisahkan; (6) Pentingnya pengamalan oleh seluruh rakyat untuk mewujudkan tujuan nasional.',
    },
  },
];

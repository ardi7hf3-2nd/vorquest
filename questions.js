// VorQuest — Bank Soal 4 Pilar MPR RI (GABUNGAN + TAMBAHAN)
// Sumber: questions.js (37 paket) + Soal_Cerdas_Cermat_UUD_1945_UNTAN.docx + SOAL_WAWASAN_NUSANTARA.docx
// Total: 12 paket, dikelompokkan per topik
// Format per paket: pg[] (9 soal PG) + essay (1 soal essay)

const PAKETS = [

  // ══════════════════════════════════════════════
  // KELOMPOK: PANCASILA (Paket 1–2)
  // ══════════════════════════════════════════════

  { id:1, title:"Paket 1 – Pancasila: Sejarah, Ideologi & Dasar Negara", topic:"Pancasila",
    pg:[
      {id:"1-1",q:"BPUPKI dibentuk pada tanggal...",options:["A. 17 Agustus 1945","B. 29 April 1945","C. 1 Juni 1945","D. 22 Juni 1945"],answer:"B"},
      {id:"1-2",q:"Ir. Soekarno pertama kali mengusulkan nama 'Pancasila' pada sidang BPUPKI tanggal...",options:["A. 29 Mei 1945","B. 22 Juni 1945","C. 1 Juni 1945","D. 18 Agustus 1945"],answer:"C"},
      {id:"1-3",q:"Pancasila ditetapkan secara resmi sebagai dasar negara oleh PPKI pada tanggal...",options:["A. 17 Agustus 1945","B. 22 Juni 1945","C. 18 Agustus 1945","D. 1 Juni 1945"],answer:"C"},
      {id:"1-4",q:"Pancasila sebagai dasar negara berarti Pancasila menjadi...",options:["A. Lambang negara Indonesia","B. Dasar untuk mengatur penyelenggaraan negara dan seluruh warga negara","C. Pedoman hidup pribadi","D. Simbol pemersatu bangsa"],answer:"B"},
      {id:"1-5",q:"Dalam hierarki norma hukum Indonesia, Pancasila berkedudukan sebagai...",options:["A. Peraturan setingkat undang-undang","B. Sumber dari segala sumber hukum","C. Ketetapan MPR","D. Peraturan pemerintah"],answer:"B"},
      {id:"1-6",q:"Pedoman Penghayatan dan Pengamalan Pancasila (P4) ditetapkan pada tanggal...",options:["A. 2 Maret 1978","B. 4 Maret 1978","C. 12 Maret 1978","D. 22 Maret 1978"],answer:"D"},
      {id:"1-7",q:"Dengan dicabutnya Ketetapan MPR RI No II/MPR/1978 berarti...",options:["A. Bebas menafsirkan Pancasila","B. Pancasila menjadi tidak bermakna","C. Nilai-nilai dasar Pancasila tetap harus dilaksanakan","D. Pancasila tinggal sejarah"],answer:"C"},
      {id:"1-8",q:"Rumusan Pancasila yang resmi dan sah terdapat dalam...",options:["A. Pidato Bung Karno 1 Juni 1945","B. Proklamasi 17 Agustus 1945","C. Pembukaan UUD 1945","D. Piagam Jakarta"],answer:"C"},
      {id:"1-9",q:"Hari Lahir Pancasila diperingati setiap tanggal...",options:["A. 17 Agustus","B. 22 Juni","C. 1 Juni","D. 18 Agustus"],answer:"C"},
    ],
    essay:{id:"1-e",q:"Jelaskan proses perumusan Pancasila mulai dari sidang BPUPKI hingga penetapannya tanggal 18 Agustus 1945! Serta jelaskan perbedaan antara Pancasila sebagai dasar negara dan sebagai ideologi negara!",rubrik:"Proses: Sidang BPUPKI I (29 Mei–1 Juni 1945) → Piagam Jakarta 22 Juni 1945 → PPKI 18 Agustus 1945 dengan perubahan sila pertama dari 'Ketuhanan dengan kewajiban menjalankan syariat Islam' menjadi 'Ketuhanan Yang Maha Esa'. Dasar negara: fondasi mengatur penyelenggaraan negara, bersifat yuridis-konstitusional. Ideologi: sistem kehidupan nasional meliputi etika/moral, politik, ekonomi, sosial budaya, dan pertahanan keamanan."},
  },

  { id:2, title:"Paket 2 – Pancasila: Nilai, Pengamalan & Tantangan", topic:"Pancasila",
    pg:[
      {id:"2-1",q:"Konsep Empat Pilar Kehidupan Berbangsa dan Bernegara pertama kali dicetuskan oleh...",options:["A. Ir. Soekarno","B. Taufiq Kiemas","C. Drs. Mohammad Hatta","D. Megawati Soekarnoputri"],answer:"B"},
      {id:"2-2",q:"Pengaruh globalisasi menjadi tantangan kebangsaan karena...",options:["A. Memudahkan ekspor","B. Membuat persaingan antar bangsa semakin tajam","C. Meningkatkan pariwisata","D. Memperkuat budaya lokal"],answer:"B"},
      {id:"2-3",q:"Hubungan sosial yang selaras dan seimbang antara individu dan masyarakat dijiwai oleh nilai-nilai Pancasila yaitu sila...",options:["A. Sila pertama","B. Sila kedua","C. Sila ketiga","D. Sila keempat"],answer:"B"},
      {id:"2-4",q:"Kekuatan Pancasila sebagai dasar negara yang tetap tegak walaupun mengalami berbagai cobaan terletak pada...",options:["A. Posisi negara kepulauan yang strategis","B. Keyakinan bangsa Indonesia akan kebenaran Pancasila","C. Pegawai Negeri Sipil yang menjaganya","D. Kekuatan TNI dan Polri"],answer:"B"},
      {id:"2-5",q:"Dalam membina rasa nasionalisme di kalangan masyarakat, hal yang TIDAK perlu dihindari adalah...",options:["A. Patriotisme","B. Sukuisme","C. Chauvinisme","D. Ekstremisme"],answer:"A"},
      {id:"2-6",q:"Landasan idiil negara Indonesia adalah...",options:["A. UUD 1945","B. TAP MPR","C. Pancasila","D. Proklamasi Kemerdekaan"],answer:"C"},
      {id:"2-7",q:"Hak istimewa (prerogatif) Presiden dalam bidang yudikatif menurut UUD 1945, kecuali...",options:["A. Grasi","B. Amnesti","C. Abolisi","D. Petisi"],answer:"D"},
      {id:"2-8",q:"Posisi Pancasila dalam Empat Pilar ditempatkan sebagai...",options:["A. Setara dengan tiga pilar lainnya","B. Nilai fundamental berbangsa dan bernegara","C. Pilar pelengkap","D. Pilar historis saja"],answer:"B"},
      {id:"2-9",q:"Empat Pilar MPR RI terdiri dari...",options:["A. Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika","B. Pancasila, UUD 1945, MPR, DPR","C. Pancasila, Proklamasi, NKRI, Bhinneka Tunggal Ika","D. Pancasila, UUD 1945, Demokrasi, NKRI"],answer:"A"},
    ],
    essay:{id:"2-e",q:"Jelaskan kedudukan serta tugas dan wewenang MPR sebelum dan sesudah amandemen UUD NRI Tahun 1945! Apa perbedaan mendasar kedudukan MPR tersebut?",rubrik:"Sebelum amandemen: (1) MPR adalah penjelmaan seluruh rakyat dan lembaga tertinggi negara pemegang dan pelaksana kedaulatan; (2) Tugas: menetapkan dan mengubah UUD, menetapkan GBHN, memilih dan mengangkat Presiden dan Wapres. Setelah amandemen: (4) MPR bukan lagi lembaga tertinggi; (5) Terdiri dari DPR dan DPD; (6) Kedaulatan berada di tangan rakyat dan dilaksanakan menurut UUD."},
  },


  // ══════════════════════════════════════════════
  // KELOMPOK: UUD NRI 1945 (Paket 3–5)
  // ══════════════════════════════════════════════

  { id:3, title:"Paket 3 – UUD NRI 1945: Sejarah, Perubahan & Struktur", topic:"UUD NRI 1945",
    pg:[
      {id:"3-1",q:"UUD NRI Tahun 1945 pertama kali ditetapkan pada tanggal...",options:["A. 17 Agustus 1945","B. 18 Agustus 1945","C. 22 Agustus 1945","D. 1 September 1945"],answer:"B"},
      {id:"3-2",q:"Perubahan (amandemen) UUD 1945 dilakukan sebanyak...",options:["A. 2 kali","B. 3 kali","C. 4 kali","D. 5 kali"],answer:"C"},
      {id:"3-3",q:"Setelah amandemen, batang tubuh UUD 1945 terdiri dari...",options:["A. 16 bab, 37 pasal, 49 ayat","B. 21 bab, 73 pasal, 170 ayat","C. 20 bab, 60 pasal, 120 ayat","D. 25 bab, 80 pasal, 200 ayat"],answer:"B"},
      {id:"3-4",q:"Usul perubahan UUD dapat diajukan oleh sekurang-kurangnya...",options:["A. 1/2 dari jumlah anggota MPR","B. 1/3 dari jumlah anggota MPR","C. 2/3 dari jumlah anggota MPR","D. 3/4 dari jumlah anggota MPR"],answer:"B"},
      {id:"3-5",q:"Yang TIDAK dapat dilakukan perubahan dalam UUD 1945 adalah...",options:["A. Pasal-pasal tentang lembaga negara","B. Pembukaan UUD 1945 dan bentuk NKRI","C. Pasal-pasal tentang HAM","D. Pasal-pasal tentang pemerintahan daerah"],answer:"B"},
      {id:"3-6",q:"Amandemen pertama UUD 1945 dilakukan pada tanggal...",options:["A. 19 Oktober 1998","B. 19 Oktober 1999","C. 19 Oktober 2000","D. 19 Oktober 2002"],answer:"B"},
      {id:"3-7",q:"Dasar hukum pembentukan Mahkamah Konstitusi adalah...",options:["A. UU Nomor 21 tahun 2003","B. UU Nomor 22 tahun 2003","C. UU Nomor 23 tahun 2003","D. UU Nomor 24 tahun 2003"],answer:"D"},
      {id:"3-8",q:"Kewenangan Mahkamah Konstitusi, KECUALI...",options:["A. Menguji UU terhadap UUD","B. Memutus sengketa kewenangan lembaga negara","C. Mengadili pada tingkat kasasi","D. Memutus pembubaran partai politik"],answer:"C"},
      {id:"3-9",q:"Negara Indonesia ialah Negara Kesatuan yang berbentuk Republik. Pernyataan ini adalah isi UUD 1945...",options:["A. Pasal 1 ayat 1","B. Pasal 1 ayat 2","C. Pasal 1 ayat 3","D. Pasal 2 ayat 1"],answer:"A"},
    ],
    essay:{id:"3-e",q:"Jelaskan latar belakang dan 5 kesepakatan dasar yang menjadi landasan perubahan UUD 1945!",rubrik:"Latar belakang: kekuasaan tertinggi di MPR, kekuasaan besar Presiden, pasal terlalu luwes, kewenangan besar Presiden. Kesepakatan: 1) Tidak ubah Pembukaan, 2) Pertahankan NKRI, 3) Pertegas sistem presidensil, 4) Penjelasan normatif masuk pasal, 5) Cara adendum."},
  },

  { id:4, title:"Paket 4 – Lembaga Negara, HAM & Sistem Pemerintahan", topic:"UUD NRI 1945",
    pg:[
      {id:"4-1",q:"Setelah amandemen, MPR terdiri dari anggota...",options:["A. DPR dan utusan golongan","B. DPR dan DPD","C. DPR, DPD, dan utusan presiden","D. DPR saja"],answer:"B"},
      {id:"4-2",q:"Mahkamah Konstitusi terdiri dari...",options:["A. 7 orang hakim konstitusi","B. 9 orang hakim konstitusi","C. 11 orang hakim konstitusi","D. 5 orang hakim konstitusi"],answer:"B"},
      {id:"4-3",q:"DPR memiliki fungsi legislasi, fungsi anggaran, dan fungsi pengawasan berdasarkan...",options:["A. Pasal 19","B. Pasal 20A ayat (1)","C. Pasal 21","D. Pasal 22"],answer:"B"},
      {id:"4-4",q:"Setiap warga negara berhak mendapat pendidikan. Hal ini tercantum dalam UUD 1945 pasal...",options:["A. 31 ayat 1","B. 31 ayat 2","C. 31 ayat 3","D. 31 ayat 4"],answer:"A"},
      {id:"4-5",q:"Majelis Permusyawaratan Rakyat terdiri atas anggota DPR dan anggota DPD yang dipilih melalui pemilihan umum. Hal ini adalah isi UUD 1945 amandemen...",options:["A. Pasal 1 ayat 2","B. Pasal 1 ayat 3","C. Pasal 2 ayat 1","D. Pasal 2 ayat 2"],answer:"C"},
      {id:"4-6",q:"Jumlah seluruh anggota DPD tidak lebih dari...",options:["A. 1/4 jumlah anggota DPR","B. 1/3 jumlah anggota DPR","C. 1/2 jumlah anggota DPR","D. 2/3 jumlah anggota DPR"],answer:"B"},
      {id:"4-7",q:"Makna pasal 1 ayat (2) UUD 1945 yang menyatakan 'Kedaulatan berada di tangan rakyat dan dilaksanakan menurut undang-undang dasar' adalah...",options:["A. MPR memegang kedaulatan tertinggi","B. Kedaulatan dijalankan melalui cara-cara dan lembaga yang ditentukan UUD 1945","C. Presiden memegang kekuasaan tertinggi","D. Kedaulatan dilaksanakan langsung oleh rakyat"],answer:"B"},
      {id:"4-8",q:"Kaitan Undang-Undang Pemilu dengan UUD 1945 yang menyatakan penetapan anggota DPD dipilih dari setiap Provinsi melalui Pemilu adalah...",options:["A. Pasal 22A ayat 1","B. Pasal 22B ayat 1","C. Pasal 22C ayat 1","D. Pasal 22D ayat 1"],answer:"C"},
      {id:"4-9",q:"Menurut TAP MPR No. VI Tahun 2001, tantangan kebangsaan mencakup, KECUALI...",options:["A. Lemahnya penghayatan dan pengamalan agama","B. Kurangnya keteladanan pemimpin","C. Meningkatnya Indeks Pembangunan Manusia","D. Tidak berjalannya penegakan hukum"],answer:"C"},
    ],
    essay:{id:"4-e",q:"Jelaskan makna yang terkandung dalam rumusan Pasal 1 ayat (2) UUD NRI Tahun 1945. Apa implikasinya bagi sistem ketatanegaraan Indonesia setelah amandemen?",rubrik:"Jawaban mencakup: (1) Penjabaran langsung paham kedaulatan rakyat dari Pembukaan UUD 1945 alinea IV; (2) Kedaulatan dijalankan melalui cara-cara dan lembaga yang ditentukan UUD 1945; (3) Mengubah sistem dari supremasi MPR kepada sistem kedaulatan rakyat; (4) Kedaulatan tidak dijalankan satu lembaga saja; (5) Implikasi: lembaga negara melaksanakan bagian-bagian dari kedaulatan sesuai aturan UUD 1945."},
  },

  { id:5, title:"Paket 5 – UUD 1945: Amandemen, Hukum & Istilah Ketatanegaraan", topic:"UUD NRI 1945",
    pg:[
      {id:"5-1",q:"Yang dimaksud dengan 'adendum' dalam konteks UUD 1945 adalah...",options:["A. Penggantian seluruh naskah UUD","B. Perubahan dengan tetap mempertahankan naskah asli UUD 1945; naskah perubahan dilekatkan pada naskah asli","C. Penambahan pasal baru secara terpisah","D. Pembatalan pasal lama"],answer:"B"},
      {id:"5-2",q:"'Checks and balances' dalam sistem ketatanegaraan berarti...",options:["A. Pemeriksaan keuangan negara","B. Saling mengawasi dan mengimbangi antarlembaga negara","C. Keseimbangan APBN","D. Pengawasan pemilu"],answer:"B"},
      {id:"5-3",q:"Yang dimaksud dengan 'grasi' adalah...",options:["A. Penghapusan hak tuntutan pidana","B. Pengampunan/pemotongan hukuman yang diberikan oleh kepala negara kepada orang yang telah dijatuhi hukuman","C. Pemulihan nama baik","D. Pengangkatan hakim"],answer:"B"},
      {id:"5-4",q:"Yang dimaksud dengan 'abolisi' dalam hukum ketatanegaraan adalah...",options:["A. Pengampunan hukuman kepada terpidana","B. Hak kepala negara untuk menghapuskan hak tuntutan pidana dan menghentikannya jika telah dijalankan","C. Pemulihan nama baik seseorang","D. Pengangkatan pejabat negara"],answer:"B"},
      {id:"5-5",q:"'Ius soli' adalah cara penetapan kewarganegaraan berdasarkan...",options:["A. Garis keturunan orang tua","B. Tempat kelahiran","C. Pernikahan dengan WNI","D. Lama tinggal di Indonesia"],answer:"B"},
      {id:"5-6",q:"Yang dimaksud dengan 'ratifikasi' adalah...",options:["A. Pencabutan undang-undang","B. Pengesahan suatu dokumen negara oleh parlemen, khususnya perjanjian antarnegara","C. Pembatalan perjanjian","D. Pengajuan RUU"],answer:"B"},
      {id:"5-7",q:"'Hak angket' DPR adalah...",options:["A. Hak meminta keterangan kepada Presiden","B. Hak DPR untuk melakukan penyelidikan terhadap kebijakan pemerintah yang penting dan strategis serta berdampak luas","C. Hak mengusulkan RUU","D. Hak menyampaikan pertanyaan kepada pemerintah"],answer:"B"},
      {id:"5-8",q:"Upaya pemberantasan KKN harus dilaksanakan secara tegas terhadap siapapun juga, baik pejabat negara, mantan pejabat negara, keluarga dan kroninya maupun pihak swasta/konglomerat adalah isi ketetapan...",options:["A. Pasal 3 TAP MPR RI No XI/1998","B. Pasal 4 TAP MPR RI No XI/1998","C. Pasal 5 TAP MPR RI No XI/1998","D. Pasal 6 TAP MPR RI No XI/1998"],answer:"B"},
      {id:"5-9",q:"Pemisahan TNI dan Kepolisian Republik Indonesia dimuat didalam...",options:["A. TAP MPR RI No VI/2000","B. TAP MPR RI No VII/2000","C. TAP MPR RI No VIII/2000","D. TAP MPR RI No IX/2000"],answer:"A"},
    ],
    essay:{id:"5-e",q:"Jelaskan perbedaan antara grasi, rehabilitasi, amnesti, dan abolisi beserta siapa yang berwenang memberikannya!",rubrik:"Grasi: pengampunan/pemotongan hukuman kepada terpidana, Presiden dengan pertimbangan MA. Rehabilitasi: pemulihan nama baik, Presiden dengan pertimbangan MA. Amnesti: pengampunan kelompok orang (misal tahanan politik), Presiden dengan pertimbangan DPR. Abolisi: penghapusan hak tuntutan pidana, Presiden dengan pertimbangan DPR."},
  },


  // ══════════════════════════════════════════════
  // KELOMPOK: NKRI (Paket 6–7)
  // ══════════════════════════════════════════════

  { id:6, title:"Paket 6 – NKRI: Bentuk Negara & Sejarah Kemerdekaan", topic:"NKRI",
    pg:[
      {id:"6-1",q:"Sumpah Pemuda diresmikan pada tanggal...",options:["A. 20 Mei 1908","B. 28 Oktober 1928","C. 17 Agustus 1945","D. 28 Oktober 1945"],answer:"B"},
      {id:"6-2",q:"BPUPKI dibentuk oleh...",options:["A. Ir. Soekarno","B. Drs. Mohammad Hatta","C. Jenderal Harada Kumakici","D. Jenderal Koiso Kuniaki"],answer:"C"},
      {id:"6-3",q:"Kapan Jepang menyerah tanpa syarat kepada Sekutu?",options:["A. 6 Agustus 1945","B. 9 Agustus 1945","C. 14 Agustus 1945","D. 17 Agustus 1945"],answer:"C"},
      {id:"6-4",q:"Bendera Merah Putih yang digunakan pada pembacaan proklamasi kemerdekaan 17 Agustus 1945 dijahit oleh...",options:["A. Dewi Soekarno","B. Fatmawati","C. Inggit Ganarsih","D. Cut Nyak Dien"],answer:"B"},
      {id:"6-5",q:"Di rumah siapakah perumusan teks proklamasi dilakukan?",options:["A. Ir. Soekarno","B. Moh. Hatta","C. Ahmad Soebardjo","D. Laksamana Maeda"],answer:"D"},
      {id:"6-6",q:"Yang menandatangani naskah proklamasi kemerdekaan Indonesia adalah...",options:["A. Hanya Ir. Soekarno","B. Ir. Soekarno dan Moh. Hatta","C. Soekarno, Hatta, dan Soebardjo","D. Seluruh anggota PPKI"],answer:"B"},
      {id:"6-7",q:"Negara sahabat yang pertama kali mengakui kemerdekaan Indonesia adalah...",options:["A. India","B. Malaysia","C. Arab Saudi","D. Mesir"],answer:"D"},
      {id:"6-8",q:"Perlawanan rakyat Batak kepada penjajah Belanda pada tahun 1883–1907 dipimpin oleh...",options:["A. Teuku Umar","B. Cut Nyak Dien","C. Sisingamangaraja XII","D. Tuanku Imam Bonjol"],answer:"C"},
      {id:"6-9",q:"Orang yang pertama kali mengemukakan istilah Pancasila adalah...",options:["A. Moh. Yamin","B. Soepomo","C. Bung Karno","D. Moh. Hatta"],answer:"C"},
    ],
    essay:{id:"6-e",q:"Jelaskan perjalanan perjuangan kemerdekaan Indonesia dari terbentuknya BPUPKI hingga proklamasi kemerdekaan pada 17 Agustus 1945! Sertakan tokoh-tokoh kunci dan peran mereka masing-masing.",rubrik:"Jawaban mencakup: (1) BPUPKI dibentuk 1 Maret 1945 oleh Jepang, diketuai Radjiman Widiodiningrat; (2) Sidang BPUPKI I (29 Mei – 1 Juni 1945): perumusan dasar negara oleh M. Yamin, Soepomo, Soekarno; (3) Panitia Sembilan merumuskan Piagam Jakarta (22 Juni 1945); (4) BPUPKI dibubarkan, PPKI dibentuk (7 Agustus 1945); (5) Jepang menyerah kepada Sekutu (14 Agustus 1945); (6) Peristiwa Rengasdengklok; (7) Perumusan teks proklamasi di rumah Laksamana Maeda; (8) Proklamasi dibacakan Soekarno-Hatta, 17 Agustus 1945."},
  },

  { id:7, title:"Paket 7 – NKRI: Sumpah Pemuda, Pahlawan & Bhinneka Tunggal Ika", topic:"NKRI",
    pg:[
      {id:"7-1",q:"Semboyan 'Bhinneka Tunggal Ika' berasal dari bahasa...",options:["A. Jawa","B. Sansekerta","C. Melayu","D. Arab"],answer:"B"},
      {id:"7-2",q:"Bhinneka Tunggal Ika pertama kali diungkapkan oleh...",options:["A. Ir. Soekarno","B. Mpu Tantular","C. Mpu Gandring","D. Ki Hadjar Dewantara"],answer:"B"},
      {id:"7-3",q:"Karya Mpu Tantular yang memuat Bhinneka Tunggal Ika berjudul...",options:["A. Kakawin Sutasoma","B. Negarakertagama","C. Pararaton","D. Serat Centhini"],answer:"A"},
      {id:"7-4",q:"Bhinneka Tunggal Ika ditetapkan sebagai semboyan resmi negara melalui...",options:["A. UUD 1945","B. Peraturan Pemerintah No. 66 Tahun 1951","C. Ketetapan MPR","D. Keputusan Presiden"],answer:"B"},
      {id:"7-5",q:"Hari Kartini diperingati setiap tanggal...",options:["A. 21 April","B. 28 Oktober","C. 10 November","D. 22 Desember"],answer:"A"},
      {id:"7-6",q:"Tokoh yang mendirikan Taman Siswa adalah...",options:["A. Ki Hajar Dewantara","B. KH Ahmad Dahlan","C. HOS Cokroaminoto","D. Tan Malaka"],answer:"A"},
      {id:"7-7",q:"Kerja paksa yang diterapkan Jepang kepada rakyat Indonesia disebut...",options:["A. Cultuurstelsel","B. Tanam Paksa","C. Romusha","D. Herendiensten"],answer:"C"},
      {id:"7-8",q:"Sikap yang mencerminkan nilai Bhinneka Tunggal Ika adalah...",options:["A. Fanatisme kelompok","B. Toleransi dan menghargai perbedaan","C. Egoisme suku","D. Diskriminasi agama"],answer:"B"},
      {id:"7-9",q:"Nilai Bhinneka Tunggal Ika dalam konteks globalisasi berfungsi sebagai...",options:["A. Penghalang masuknya budaya asing","B. Filter untuk menyerap budaya luar yang positif tanpa kehilangan identitas bangsa","C. Penolak semua nilai asing","D. Pendorong westernisasi"],answer:"B"},
    ],
    essay:{id:"7-e",q:"Jelaskan latar belakang terbentuknya Sumpah Pemuda dan makna ketiga butir Sumpah Pemuda bagi persatuan dan kesatuan bangsa Indonesia! Mengapa Sumpah Pemuda harus tetap diperingati hingga saat ini?",rubrik:"Latar belakang: ingin mewujudkan persatuan organisasi pemuda, sifat kedaerahan masyarakat, kegagalan perlawanan bersifat lokal. Makna butir 1: bertumpah darah satu – tanah air Indonesia. Makna butir 2: berbangsa satu – bangsa Indonesia. Makna butir 3: menjunjung bahasa persatuan – Bahasa Indonesia. Relevansi: tonggak persatuan, sumber inspirasi semangat nasionalisme."},
  },


  // ══════════════════════════════════════════════
  // KELOMPOK: DPD (Paket 8–9)
  // ══════════════════════════════════════════════

  { id:8, title:"Paket 8 – DPD: Sejarah, Keanggotaan & Fungsi", topic:"DPD",
    pg:[
      {id:"8-1",q:"DPD (Dewan Perwakilan Daerah) pertama kali diatur dalam UUD 1945 pada perubahan ke...",options:["A. Pertama","B. Kedua","C. Ketiga","D. Keempat"],answer:"C"},
      {id:"8-2",q:"Pasal UUD 1945 yang mengatur eksistensi DPD adalah...",options:["A. Pasal 22A dan 22B","B. Pasal 22C dan 22D","C. Pasal 22E dan 22F","D. Pasal 20 dan 21"],answer:"B"},
      {id:"8-3",q:"Jumlah anggota DPD dari setiap provinsi adalah...",options:["A. 2 orang","B. 3 orang","C. 4 orang","D. 5 orang"],answer:"C"},
      {id:"8-4",q:"Peserta pemilihan umum untuk memilih anggota DPD adalah...",options:["A. Partai politik","B. Organisasi kemasyarakatan","C. Perseorangan","D. Gabungan partai"],answer:"C"},
      {id:"8-5",q:"Fungsi DPD dalam bidang legislasi mencakup hal berikut, KECUALI...",options:["A. Mengajukan RUU kepada DPR","B. Ikut membahas RUU","C. Menetapkan dan mengesahkan undang-undang","D. Memberikan pertimbangan atas RUU tertentu"],answer:"C"},
      {id:"8-6",q:"Kedudukan DPD menurut Jimly Assiddiqie dalam fungsi legislasi paling jauh hanya dapat disebut sebagai...",options:["A. Legislator penuh","B. Co-legislator","C. Super legislator","D. Veto player"],answer:"B"},
      {id:"8-7",q:"Hasil pengawasan DPD atas pelaksanaan undang-undang disampaikan kepada...",options:["A. Presiden","B. MPR","C. DPR sebagai bahan pertimbangan untuk ditindaklanjuti","D. Mahkamah Agung"],answer:"C"},
      {id:"8-8",q:"Alat kelengkapan DPD yang berfungsi menyelesaikan pelanggaran yang dilakukan oleh anggota DPD adalah...",options:["A. Panitia Ad Hoc","B. Badan Kehormatan","C. Panitia Musyawarah","D. Panitia Perancang Undang-Undang"],answer:"B"},
      {id:"8-9",q:"Reformasi total yang menjadi latar belakang perubahan UUD 1945 berhasil dimulai pada tanggal...",options:["A. 17 Agustus 1945","B. 21 Mei 1998","C. 1 Juni 1999","D. 18 Agustus 2002"],answer:"B"},
    ],
    essay:{id:"8-e",q:"Uraikan tiga fungsi utama DPD (legislasi, pertimbangan, dan pengawasan) beserta bidang yang tercakup dalam masing-masing fungsi tersebut!",rubrik:"Legislasi: mengajukan dan membahas RUU terkait otonomi daerah, hub. pusat-daerah, pembentukan/pemekaran daerah, pengelolaan SDA, dan perimbangan keuangan. Pertimbangan (konsultasi): atas RUU APBN, RUU pajak/pendidikan/agama, dan pemilihan anggota BPK. Pengawasan (kontrol): atas pelaksanaan UU terkait otonomi daerah, hub. pusat-daerah, SDA, APBN, pajak, pendidikan, dan agama; hasilnya disampaikan ke DPR."},
  },

  { id:9, title:"Paket 9 – DPD: Sistem Bikameral, Hak, Kewajiban & Penguatan", topic:"DPD",
    pg:[
      {id:"9-1",q:"Jimly Assiddiqie menyebut struktur parlemen Indonesia pasca amandemen keempat UUD 1945 sebagai...",options:["A. Unikameral","B. Bikameral","C. Trikameral","D. Multikameral"],answer:"C"},
      {id:"9-2",q:"Sistem bikameral 'soft' yang diterapkan Indonesia artinya...",options:["A. Sistem dua kamar dengan kewenangan yang seimbang","B. Sistem dua kamar dengan posisi kamar kedua (DPD) yang lemah","C. Sistem satu kamar yang fleksibel","D. Sistem campuran unikameral dan bikameral"],answer:"B"},
      {id:"9-3",q:"Hak anggota DPD yang memberikan kebebasan untuk tidak dituntut di pengadilan atas pernyataan dalam rapat adalah...",options:["A. Hak protokoler","B. Hak imunitas","C. Hak membela diri","D. Hak administratif"],answer:"B"},
      {id:"9-4",q:"Anggota DPD berkewajiban menyerap, menghimpun, menampung, dan menindaklanjuti...",options:["A. Kebijakan partai politik","B. Aspirasi masyarakat dan daerah","C. Keputusan pemerintah pusat","D. Arahan presiden"],answer:"B"},
      {id:"9-5",q:"Untuk memperkuat DPD agar terjadi checks and balances dengan DPR, salah satu usulan yang direkomendasikan adalah...",options:["A. Menghapus DPD dan mengembalikan ke sistem unikameral","B. Memberikan hak veto bagi DPD untuk UU yang berkaitan langsung dengan kepentingan daerah","C. Menyatukan DPD dengan DPR menjadi satu kamar","D. Mengubah DPD menjadi lembaga yudikatif"],answer:"B"},
      {id:"9-6",q:"Penguatan sistem bikameral atau kesejajaran DPD dan DPR sangat tergantung pada...",options:["A. Keputusan Presiden","B. Putusan Mahkamah Konstitusi","C. Political will rakyat melalui perubahan kelima UUD 1945","D. Kebijakan pimpinan DPD"],answer:"C"},
      {id:"9-7",q:"Dalam perbandingan dengan AS, Kongres Amerika Serikat terdiri atas...",options:["A. MPR dan DPR","B. DPR dan DPD","C. House of Representatives dan Senate","D. Eerste Kamer dan Tweede Kamer"],answer:"C"},
      {id:"9-8",q:"Komposisi MPR berdasarkan UUD 1945 hasil amandemen terdiri atas...",options:["A. Anggota DPR, DPD, dan utusan golongan","B. Anggota DPR dan DPD yang dipilih melalui pemilihan umum","C. Anggota DPR, DPD, dan TNI/Polri","D. Anggota DPR dan utusan daerah"],answer:"B"},
      {id:"9-9",q:"Kata 'dapat' dalam rumusan pasal 22D UUD 1945 menunjukkan bahwa kewenangan DPD bersifat...",options:["A. Imperatif konstitusional","B. Wajib dilaksanakan","C. Fakultatif (boleh dilakukan atau tidak)","D. Mutlak dan tidak dapat diganggu gugat"],answer:"C"},
    ],
    essay:{id:"9-e",q:"Berikan analisis mengenai kelemahan utama DPD dan rekomendasikan langkah-langkah konkret untuk memperkuat peran DPD dalam sistem ketatanegaraan Indonesia!",rubrik:"Kelemahan: (1) kewenangan legislatif sangat terbatas/hanya co-legislator; (2) hasil pengawasan tidak mengikat; (3) tidak ada hak veto; (4) minority position di MPR; (5) tidak dapat mengajukan usul perubahan UU terkait. Rekomendasi: (1) amandemen UUD 1945 kelima untuk memberikan kewenangan setara DPR di bidang legislasi daerah; (2) berikan hak veto atas UU yang langsung menyangkut kepentingan daerah; (3) perkuat fungsi pengawasan agar memiliki implikasi hukum; (4) DPD mengisi kekosongan aspirasi golongan yang tidak terwakili."},
  },


  // ══════════════════════════════════════════════
  // KELOMPOK: SOAL TAMBAHAN DARI DOKUMEN LUAR
  // ══════════════════════════════════════════════

  { id:10, title:"Paket 10 – Cerdas Cermat UUD 1945 (UNTAN)", topic:"UUD NRI 1945",
    pg:[
      {id:"10-1",q:"Berapa kali UUD 1945 diamandemen?",options:["A. 1 kali","B. 2 kali","C. 3 kali","D. 4 kali"],answer:"D"},
      {id:"10-2",q:"Kapan amandemen pertama UUD 1945 dilakukan?",options:["A. 19 Oktober 1998","B. 19 Oktober 1999","C. 18 Agustus 2000","D. 9 November 2001"],answer:"B"},
      {id:"10-3",q:"Di bagian mana dalam UUD 1945 disebutkan tata cara pembentukan Mahkamah Konstitusi?",options:["A. Aturan Peralihan Pasal I","B. Aturan Peralihan Pasal II","C. Aturan Peralihan Pasal III","D. Aturan Peralihan Pasal IV"],answer:"C"},
      {id:"10-4",q:"Setiap warga negara wajib mengikuti pendidikan dasar dan pemerintah wajib membiayainya. Hal ini tercantum dalam UUD 1945 pasal...",options:["A. 31 ayat 1","B. 31 ayat 2","C. 31 ayat 3","D. 31 ayat 4"],answer:"B"},
      {id:"10-5",q:"Berikut adalah hak-hak Dewan Perwakilan Rakyat, kecuali...",options:["A. Hak interpelasi","B. Hak angket","C. Hak menyatakan pendapat","D. Hak mosi tidak percaya"],answer:"D"},
      {id:"10-6",q:"Gubernur, Bupati, dan Walikota masing-masing sebagai kepala pemerintah daerah provinsi, kabupaten, dan kota dipilih melalui...",options:["A. Mekanisme demokratis","B. Pemilihan langsung","C. Pemilihan oleh parpol mayoritas","D. Tidak ada jawaban yang benar"],answer:"A"},
      {id:"10-7",q:"Berkenaan dengan perubahan isi dari UUD 1945, sebenarnya telah diatur oleh TAP MPR No IV/MPR/1983 tentang...",options:["A. Interpelasi","B. Budget","C. Mosi tidak percaya","D. Referendum"],answer:"D"},
      {id:"10-8",q:"Tugas MPR menurut pasal 3 UUD 1945 adalah...",options:["A. Menetapkan Undang-Undang Dasar","B. Memilih Presiden dan Wakil Presiden","C. Mengubah Undang-Undang Dasar","D. Meminta pertanggung jawaban dari Presiden"],answer:"A"},
      {id:"10-9",q:"Lambang Negara ialah Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika, adalah isi dari UUD 1945 pasal 36A. Ini merupakan hasil amandemen...",options:["A. Kesatu","B. Kedua","C. Ketiga","D. Keempat"],answer:"B"},
    ],
    essay:{id:"10-e",q:"Jelaskan makna pemilihan umum yang dilaksanakan secara langsung, umum, bebas, rahasia, jujur, dan adil (LUBER JURDIL)! Serta jelaskan apa yang dimaksud dengan referendum berdasarkan TAP MPR No IV/MPR/1983.",rubrik:"LUBER JURDIL: Langsung – pemilih memberikan suara langsung tanpa perantara. Umum – berlaku bagi semua WNI yang memenuhi syarat. Bebas – pemilih bebas menentukan pilihan tanpa paksaan. Rahasia – pilihan dijaga kerahasiaannya. Jujur – penyelenggara dan peserta harus jujur. Adil – semua peserta diperlakukan setara tanpa diskriminasi. Referendum: kegiatan untuk meminta pendapat rakyat secara langsung yang menyatakan setuju atau tidak setuju terhadap kehendak MPR untuk mengubah UUD 1945."},
  },

  { id:11, title:"Paket 11 – Wawasan Nusantara & Geopolitik Indonesia", topic:"Wawasan Nusantara",
    pg:[
      {id:"11-1",q:"Wawasan nusantara sebagai wawasan nasional bangsa Indonesia bersumber dari...",options:["A. Nilai budaya bangsa","B. Letak geografis negara","C. Politik luar negeri","D. Kebijakan pemerintah pusat"],answer:"A"},
      {id:"11-2",q:"Geopolitik pertama kali dicetuskan oleh...",options:["A. Karl Houshofer","B. Frederich Ratzel","C. Rudolph Kjellen","D. Karl Marx"],answer:"C"},
      {id:"11-3",q:"Asas wawasan nusantara yang menekankan bahwa semua wilayah tanah air Indonesia adalah satu kesatuan disebut asas...",options:["A. Kepentingan yang sama","B. Keadilan","C. Kesatuan wilayah","D. Solidaritas"],answer:"C"},
      {id:"11-4",q:"Implementasi wawasan nusantara dalam bidang pertahanan keamanan tercermin melalui...",options:["A. Pembangunan gedung DPR","B. Upaya membentuk serikat buruh","C. Bela negara oleh seluruh warga","D. Pembukaan pasar bebas"],answer:"C"},
      {id:"11-5",q:"Tujuan dari wawasan nusantara adalah...",options:["A. Membuka peluang asing mengelola SDA","B. Memperkuat dominasi politik pusat","C. Menjaga persatuan bangsa dan keutuhan wilayah","D. Membatasi kebebasan berpendapat"],answer:"C"},
      {id:"11-6",q:"Dalam wawasan nusantara, wilayah laut Indonesia dianggap sebagai...",options:["A. Wilayah netral","B. Perairan internasional","C. Penghubung antarpulau","D. Pemisah wilayah"],answer:"C"},
      {id:"11-7",q:"Konsep wawasan nusantara secara formal pertama kali diresmikan dalam...",options:["A. UUD 1945","B. TAP MPR","C. Ketetapan Lemhannas","D. GBHN"],answer:"D"},
      {id:"11-8",q:"Konsep wawasan nusantara secara formal telah digunakan sejak masa...",options:["A. Reformasi","B. Kemerdekaan","C. Orde Lama","D. Orde Baru"],answer:"D"},
      {id:"11-9",q:"Semboyan yang mencerminkan semangat wawasan nusantara adalah...",options:["A. Tut Wuri Handayani","B. Bhinneka Tunggal Ika","C. Merdeka atau Mati","D. Sekali Merdeka Tetap Merdeka"],answer:"B"},
    ],
    essay:{id:"11-e",q:"Jelaskan apa yang dimaksud dengan Wawasan Nusantara sebagai geopolitik Indonesia! Bagaimana implementasinya dalam kehidupan berbangsa dan bernegara di bidang pertahanan, politik, dan pendidikan?",rubrik:"Wawasan Nusantara: cara pandang dan sikap bangsa Indonesia mengenai diri dan lingkungannya berdasarkan Pancasila dan UUD 1945, mengutamakan persatuan dan kesatuan wilayah. Implementasi: Pertahanan – bela negara oleh seluruh warga, menjaga keutuhan NKRI. Politik – pemilu yang adil dan demokratis, menolak politik identitas sempit. Pendidikan – mengajarkan nilai-nilai kebangsaan sejak dini, menghargai perbedaan. Prinsip dasar: persatuan dan kesatuan, keutuhan wilayah, keadilan dan kesejahteraan."},
  },

  { id:12, title:"Paket 12 – Demokrasi, Budaya & Pahlawan Nasional", topic:"Campuran",
    pg:[
      {id:"12-1",q:"Demokrasi adalah pemerintahan yang berasal dari rakyat oleh rakyat dan untuk rakyat adalah pendapat...",options:["A. F.D Roosevelt","B. Montesquieu","C. J.J Rousseau","D. Abraham Lincoln"],answer:"D"},
      {id:"12-2",q:"Kekuasaan tertinggi dalam suatu negara demokrasi ada di tangan...",options:["A. MPR/DPR","B. Penguasa","C. Negara","D. Rakyat"],answer:"D"},
      {id:"12-3",q:"Pahlawan yang dijuluki 'Ayam Jantan dari Timur' adalah...",options:["A. Sultan Hasanuddin","B. Diponegoro","C. Teuku Umar","D. Pattimura"],answer:"A"},
      {id:"12-4",q:"Lagu 'Rasa Sayange' berasal dari...",options:["A. Maluku","B. Papua","C. Sulawesi","D. NTT"],answer:"A"},
      {id:"12-5",q:"Tari Saman berasal dari...",options:["A. Aceh","B. Sumatera Barat","C. Riau","D. Jambi"],answer:"A"},
      {id:"12-6",q:"Gamelan berasal dari...",options:["A. Jawa dan Bali","B. Papua","C. Kalimantan","D. Sulawesi"],answer:"A"},
      {id:"12-7",q:"Kedaulatan ada di tangan rakyat dan dikerjakan menurut UUD sebagai bunyi dari...",options:["A. UUD 1945 Pasal 1 Ayat 1","B. UUD 1945 Pasal 1 Ayat 2","C. UUD 1945 Pasal 1 Ayat 3","D. Wakil Presiden No. X"],answer:"B"},
      {id:"12-8",q:"Prinsip-prinsip demokrasi yang berlaku universal mencakup...",options:["A. Keterlibatan warga negara dalam pembuatan keputusan","B. Tingkat perbedaan tertentu di antara warga negara","C. Tidak adanya kebebasan tertentu yang diakui warga negara","D. Penegakan hukum yang sepihak"],answer:"A"},
      {id:"12-9",q:"Demokrasi Pancasila bersumber pada...",options:["A. Tata nilai budaya bangsa Indonesia","B. Adat istiadat bangsa Indonesia","C. Keanekaragaman di Indonesia","D. Karakteristik bangsa Indonesia"],answer:"A"},
    ],
    essay:{id:"12-e",q:"Jelaskan perbedaan antara demokrasi langsung dan demokrasi perwakilan (tidak langsung)! Sistem demokrasi apa yang dianut Indonesia dan bagaimana perwujudannya dalam sistem pemilihan umum?",rubrik:"Demokrasi langsung: rakyat langsung mengambil keputusan politik tanpa perantara (tepat untuk negara kecil/kuno seperti Yunani Kuno). Demokrasi perwakilan: rakyat memilih wakil untuk membuat keputusan atas nama mereka, cocok untuk negara berpenduduk banyak dan wilayah luas. Indonesia menganut demokrasi Pancasila yang bersumber pada nilai budaya bangsa dengan prinsip musyawarah mufakat. Perwujudan: pemilu legislatif (DPR, DPD, DPRD) dan eksekutif (Presiden/Wakil Presiden) secara langsung, umum, bebas, rahasia, jujur, dan adil."},
  },

];

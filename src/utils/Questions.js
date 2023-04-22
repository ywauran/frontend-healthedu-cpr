import HeadTiltChin from "../assets/images/head_tilt-chin.jpg";
import RecoveryOne from "../assets/images/recovery_one.jpg";
import RecoveryTwo from "../assets/images/recovery_two.jpg";
import RecoveryThree from "../assets/images/circulation_three.jpg";
import RecoveryFour from "../assets/images/recovery_four.jpg";
import RecoveryFive from "../assets/images/recovery_five.jpg";

export const Questions = [
  {
    prompt: "1.	Resusitasi jantung paru adalah?",
    optionA:
      "Suatu intervensi tindakan yang dilakukan untuk mendapatkan kembali fungsi dari pernapasan dan fungsi sirkulasi normal pada seseorang akibat dari henti napas dan henti jantung",
    optionB:
      "Suatu tindakan yang dilakukan sebagai usaha untuk membantu seseorang yang mengalami nyeri sangat hebat ",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt: "2. Indikasi Resusitasi jantung paru dilakukan jika?",
    optionA: "Seseorang mengalami Patah tulang",
    optionB: "Seseorang mengalami Henti jantung dan Henti nafas",
    image: null,
    asnwer: "optionB",
  },
  {
    prompt: "3. Tujuan dari pemberian resusitasi jantung paru adalah?",
    optionA: "Untuk mengurangi rasa nyeri pada luka",
    optionB:
      "Pemberian bantuan untuk oksigen darurat untuk organ vital otak dan jantung dengan ventilasi buatan dan pemberian sirkulasi buatan.",
    image: null,
    asnwer: "optionB",
  },
  {
    prompt:
      "4. Dalam melakukan resusitasi jantung paru 6 kriteria yang benar adalah?",
    optionA: "Danger, Respone, Circulation, Breathing, Shout for help, Airway",
    optionB: "Danger, Respone, Shout for help, Circulation, Airway, Breathing",
    image: null,
    asnwer: "optionB",
  },
  {
    prompt:
      "5. Pada saat kita menemui seseorang dalam keadaan tidak sadar maka hal pertama yang harus dilakukan?",
    optionA: "Memeriksa respon korban",
    optionB: "Pastikan keamanan 3A : Aman penolong, korban dan Lingkungan",
    image: null,
    asnwer: "optionB",
  },
  {
    prompt: "6.	Saat memeriksa respon korban apa yang harus dilakukan?",
    optionA:
      "Menepuk-nepuk bahu korban dan berteriak memanggil korban “Bangun-bangun pak/ibu, apakah bapak/ibu dalam keadaan baik-baik saja?” ",
    optionB: "Melakukan cek nadi dan nafas pada korban",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "7.	Jika korban tersebut terlihat tidak memberikan respon saat dipanggil maka dilakukan? ",
    optionA:
      "Minta bantuan dengan segera berteriak minta tolong dan segera mengaktifkan sistem gawat darurat atau EMS 119",
    optionB: "Memberikan bantuan nafas sebanyak 2 kali",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "8. Setelah panggil bantuan (Shout for help) langkah selanjutnya adalah?",
    optionA: "Kaji nadi dan pernafasan kurang dari 10 detik",
    optionB: "Melakukan teknik Head tilt-chin lift",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "9.	Resusitasi jantung paru pada orang dawasa dilakukan dengan perbandingan/rasio?",
    optionA: "30 : 2 (30 kompresi : 2 Ventilasi)",
    optionB: "15 : 2 (15 kompresi : 2 Ventilasi)",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt: "10.	Kedalaman saat melakukan kompresi adalah?",
    optionA: "2 inch / 5cm",
    optionB: "3 cm",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt: "11.	Resusitasi jantung paru dilakukan dengan kecepatan kompresi?",
    optionA: "60 – 80 x/menit",
    optionB: "100 – 120 x/menit",
    image: null,
    asnwer: "optionB",
  },
  {
    prompt:
      "12.	 Saat melakukan kompresi penolong meletakkan tumit telapak tangan pada?",
    optionA:
      "Seperdua di bagian bawah sternum atau pada pertengahan dada korban",
    optionB: "Bagian bahu korban",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "13.	Posisi penolong dan posisi korban saat melakukan kompresi adalah?",
    optionA:
      "Penolong berlutut sejajar dengan bahu korban di samping korban dan posisi korban supinasi/terlentang pada tempat datar dan keras",
    optionB:
      "Penolong berada dekat di kaki korban dan posisi korban dalam keadaan supinasi/terlentang pada tempat yang datar dan keras",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "14.	Saat memeriksa Jalan Nafas (Airway) hal yang harus dilakukan adalah ?",
    optionA:
      "Membersihkan jalan nafas dan membuka jalan nafas teknik (Head tilt-Chin lift) Teknik (Jaw thrust) jika dicurigai terjadi trauma servikal",
    optionB: "Melakukan RJP dengan kombinasi 30 kompresi : 2 ventilasi",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "15.	Pada gambar diatas adalah teknik membuka jalan nafas dengan teknik?",
    optionA: "Jawl Thrust",
    optionB: "Head tilt-chin lift",
    image: [HeadTiltChin],
    asnwer: "optionB",
  },
  {
    prompt:
      "16. Pada gambar di atas dilakukan jika nadi dan nafas sudah ada tetapi korban tidak sadar disebut posisi?",
    optionA: "Posisi supinasi/terlentang",
    optionB: "Posisi pemulihan/recovery position",
    image: [
      RecoveryOne,
      RecoveryTwo,
      RecoveryThree,
      RecoveryFour,
      RecoveryFive,
    ],
    asnwer: "optionB",
  },
  {
    prompt:
      "17. Pada pernafasan (Breathing) dilakukan pemberian bantuan nafas sebanyak?",
    optionA: "2x bantuan nafas",
    optionB: "4x bantuan nafas",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "18. Saat melakukan evaluasi setelah pemberian RJP jika nadi teraba tetapi tidak ada nafas, penolong melakukan ?",
    optionA: "Pemberian bantuan nafas yaitu sebanyak 10 - 12 kali per menit",
    optionB: "Kompresi dan ventilasi 30 : 2 sampai 5 siklus",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "19. Saat melakukan evaluasi setelah pemberian RJP Jika nadi karotis tidak ada, maka penolong akan ?",
    optionA:
      "Melanjutkan kembali pemberian kompresi dan ventilasi 30 : 2 sampai 5 siklus.",
    optionB: "Melakukan recovery position",
    image: null,
    asnwer: "optionA",
  },
  {
    prompt:
      "20.	Penanganan resusitasi jantung paru dihentikan apabila dengan alasan ?",
    optionA:
      "Penolong merasa tidak punya hak melakukan resusitasi jantung paru",
    optionB:
      "Mengalami kelelahan, petugas medis telah datang, korban tidak berespon minimal waktu 20 menit, ada tanda-tanda kematian.",
    image: null,
    asnwer: "optionB",
  },
];

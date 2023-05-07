import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ResponseImage from "../../assets/images/response.jpg";
import ShoutForHelpImage from "../../assets/images/shout_for_help.jpg";
import CirculationOneImage from "../../assets/images/circulation_one.jpg";
import CirculationTwoImage from "../../assets/images/circulation_two.jpg";
import CirculationThreeImage from "../../assets/images/circulation_three.jpg";
import CirculationFourImage from "../../assets/images/circulation_four.jpg";
import HeadTiltChin from "../../assets/images/head_tilt-chin.jpg";
import JawThrust from "../../assets/images/jaw_thrust.jpg";
import BreathingImage from "../../assets/images/breathing.jpg";
import RecoveryOne from "../../assets/images/recovery_one.jpg";
import RecoveryTwo from "../../assets/images/recovery_two.jpg";
import RecoveryThree from "../../assets/images/recovery_three.jpg";
import RecoveryFour from "../../assets/images/recovery_four.jpg";
import RecoveryFive from "../../assets/images/recovery_five.jpg";

const MainUser = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("1");
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const validation = () => {
    if (name.length === 0 || age <= 8) {
      setError(true);
    } else {
      navigate(`/quis/${name}/${age}/${gender}`);
    }
  };
  return (
    <>
      <header className="border-b-2 shadow sticky py-2 top-0 z-50 bg-white">
        <div className="flex justify-between py-2 px-4">
          <h1 className="text-blue-700 font-bold">
            Healthedu <span className="text-blue-800">Cpr</span>
          </h1>
          <nav className="hidden">
            <ul className="flex space-x-4">
              <li>Pengertian</li>
              <li>Tujuan</li>
              <li>Indikasi</li>
              <li>Penanganan</li>
              <li></li>
            </ul>
          </nav>
          <nav className={`${openNavigation ? "block" : "hidden"} fixed `}>
            <div className="flex flex-col p-4 h-full w-1/2 fixed bg-black right-0 top-0">
              <button className="self-end">
                <MdOutlineClose
                  className="text-white"
                  onClick={() => setOpenNavigation(!openNavigation)}
                />
              </button>
              <ul className="flex flex-col text-white text-center py-4">
                <li>Pengertian</li>
                <li>Tujuan</li>
                <li>Indikasi</li>
                <li>Penanganan</li>
                <li></li>
              </ul>
            </div>
          </nav>
          <button>
            <RxHamburgerMenu
              onClick={() => setOpenNavigation(!openNavigation)}
            />
          </button>
        </div>
      </header>
      <main className="main p-4 pb-8">
        <section className="p-2">
          <h2 className="font-bold text-center text-xl">Pengertian</h2>
          <article>
            <p className="indent-10">
              Resusitasi jantung paru adalah suatu intervensi tindakan yang
              dilakukan sebagai usaha untuk mendapatkan kembali fungsi dari
              pernapasan dan fungsi sirkulasi yang normal pada seseorang akibat
              dari henti napas dan henti jantung melalui pemberian berupa
              kompresi dada dan bantuan nafas. jika tidak segera dilaksanakan
              penanganan dapat mengakibatkan kematian dengan waktu yang cepat
              dan singkat.
            </p>
          </article>
        </section>
        <section className="p-2">
          <h2 className="font-bold text-center text-xl">Tujuan</h2>
          <article>
            <p className="indent-10">
              Pemberian bantuan untuk oksigen darurat yang diberikan dengan baik
              dan secara efektif untuk organ vital yaitu pada otak dan jantung
              dengan melakukan pemberian melalui ventilasi buatan agar dapat
              berfungsi secara baik dan untuk pemberian sirkulasi buatan.
            </p>
            <p className="indent-10">
              Hal ini dilakukan agar dapat mencegah berhentinya fungsi sirkulasi
              darah atau fungsi pernafasan terhenti melakukan usaha yaitu
              pemberian kompresi dada dan ventilasi yang benar dan tepat pada
              seseorang yang dikarenakan terjadi henti jantung dan henti nafas.
            </p>
          </article>
        </section>
        {/* Indikasi yaitu Henti Jantung dan Henti Nafas */}
        <section className="p-2">
          <h2 className="font-bold text-center text-xl py-4">
            Indikasi yaitu Henti Jantung dan Henti Nafas
          </h2>
          <ul className="grid gap-y-4 grid-cols-1 md:grid-cols-2  gap-x-10 mt-4">
            <li className="shadow p-4">
              <p>
                1. <span className="font-semibold">Henti jantung</span> berarti
                keadaan dimana pada peredaraan darah normal secara tiba-tiba
                terganggu dengan tidak adanya tekanan darah arteri. Yang terjadi
                penghentian secara mendadak pada aktivitas pemompaan yang
                efektif sehiingga mengakibatkan berhentinya sirkulasi yang
                normal.
              </p>
            </li>
            <li className="shadow p-4">
              <p>
                2. <span className="font-semibold">Henti nafas</span> adalah
                suatu kejadian ketika seseorang terhenti fungsi pernafasan atau
                tidak efektif dalam bernafas, dapat terjadi secara bersamaan
                dengan kejadian henti jantung namun sistem pernafasan tidak
                selalu berhenti jika jantung tidak berfungsi dengan baik, jika
                pada sistem saraf dan otot tidak menunjang pada pernafasan maka
                seseorang akan mengalami keadaan henti nafas. Henti nafas dapat
                dikenali dengan tidak ada terjadi pengembangan dada dan tidak
                ada aliran udara pada pernafasan dari korban
              </p>
            </li>
          </ul>
        </section>
        {/* Penanganan */}
        <section className="p-2">
          <h2 className="font-bold text-xl text-center">Langkah-langkah</h2>
          <article>
            <div className="criteria">
              <ul className="grid gap-y-4 md:grid-cols-3 md:gap-4">
                <li className="shadow p-3">
                  <p>1. Memastikan Keamanan</p>
                </li>
                <li className="shadow p-3">
                  <p>2. Memeriksa Respon</p>
                </li>
                <li className="shadow p-3">
                  <p>3. Panggil Bantuan</p>
                </li>
                <li className="shadow p-3">
                  <p>4. Sirkulasi</p>
                </li>
                <li className="shadow p-3">
                  <p>5. Periksa Jalan Nafas</p>
                </li>
                <li className="shadow p-3">
                  <p>6. Pernafasan</p>
                </li>
              </ul>
            </div>
            {/* Memastikan Kemanan (Danger) */}
            <div>
              <h3 className="font-semibold text-center text-xl">
                Memastikan Kemanan (Danger)
              </h3>
              <h4 className="font-bold text-center">3A</h4>
              <ul className="text-justify">
                <li>
                  <span className="font-semibold">Aman Penolong</span>,
                  menggunakan alat pelindung diri dan menjadi suatu prioritas
                  agar terhindar menjadi korban berikutnya.{" "}
                </li>
                <li>
                  <span className="font-semibold">Aman Pasien/Korban</span>,
                  mengamankan korban ke tempat yang aman,
                </li>
                <li>
                  <span className="font-semibold">Aman Lingkungan</span>,
                  memperhatikan situasi dan keadaan sekitar
                </li>
              </ul>
            </div>
            {/* Memeriksa Respon Korban (Response) */}
            <div>
              <h3 className="font-semibold text-center text-xl">
                Memeriksa Respon Korban (Response)
              </h3>
              <div className="flex items-center justify-center">
                <img src={ResponseImage} alt="" className="w-[300px]" />
              </div>
              <p className="indent-10">
                Menepuk-nepuk bahu korban dengan pelan dan lembut agar mencegah
                pergerakan yang berlebihan dan setelah itu berteriak memanggil
                korban “Bangun-bangun pak/ibu, apakah bapak/ibu dalam keadaan
                baik-baik saja?” Apabila korban tidak bereaksi jika dipanggil
                bisa memberikan rangsangan nyeri dengan menekan pada kuku
                ataupun pada bagian dada korban.
              </p>
            </div>
            {/* Panggil Bantuan (Shout For Help) */}
            <div>
              <h3 className="font-semibold text-center text-xl">
                Panggil Bantuan (Shout For Help)
              </h3>
              <div className="flex items-center justify-center">
                <img src={ShoutForHelpImage} alt="" className="w-[300px]" />
              </div>
              <p className="indent-10">
                Jika korban tersebut terlihat tidak memberikan respon jika
                dipanggil maka minta bantuan dengan segera berteriak minta
                tolong dan segera mengaktifkan sistem gawat darurat atau EMS
                119.
              </p>
            </div>
            {/* Sirkulasi (Circulation) */}
            <div>
              <h3 className="font-semibold text-xl text-center">
                Sirkulasi (Circulation)
              </h3>
              <ul>
                <li>
                  <p className="indent-10">
                    Mengecek nadi yaitu dengan memeriksa ada atau tidaknya nadi
                    korban menentukannya dilakukan cara yaitu : Meraba arteri
                    karotis pada daerah leher korban menggunakan dua jari tangan
                    yaitu jari telunjuk dan tengah yang diletakkan di
                    pertengahan leher akan teraba trakhea lalu kemudian
                    digeserkan kira-kira 2-3 cm ke arah sisi kanan atau kiri
                    (disarankan pada sisi yang paling dekat dengan penolong)
                    dilakukan kurang dari 10 detik dan juga melihat ada atau
                    tidak pernafasan pada korban.
                  </p>
                </li>
                <li>
                  <p className="indent-10">
                    Posisi korban dalam keadaan supinasi/terlentang pada tempat
                    yang datar ataupun keras.
                  </p>
                </li>
                <li>
                  <p className="indent-10">
                    Posisi penolong berlutut senyaman mungkin sejajar dengan
                    bahu korban di samping korban.
                  </p>
                </li>
                <li>
                  <p className="indent-10">
                    Penolong meletakkan dengan salah satu tumit telapak tangan
                    pada seperdua di bagian bawah sternum atau pada pertengahan
                    dada korban dan tumit telapak tangan lainnya berada pada
                    atas tangan pertama kemudian jari-jari tangan disatukan dan
                    mengunci.
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={CirculationOneImage}
                      alt=""
                      className="w-[300px]"
                    />
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <img
                      src={CirculationTwoImage}
                      alt=""
                      className="w-[300px]"
                    />
                  </div>
                </li>
                <li>
                  <p className="indent-10">
                    Pemberian kompresi yang meliputi posisi lengan penolong
                    tegak lurus dengan penekanan dada kuat dengan kedalaman
                    (minimum 2inch/5cm) dan kecepatan kompresi yaitu 100-120
                    kali per menit kemudian biarkan dan lihat rekoil dada
                    selesai dengan sempurna, mengurangi interupsi berlebihan
                    saat pemberiaan kompresi. Kemudian dilakukan kompresi pada
                    orang dewasa dengan perbandingan atau rasio yaitu 30
                    kompresi : 2 ventilasi (satu atau dua penolong).
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={CirculationThreeImage}
                      alt=""
                      className="w-[300px]"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={CirculationFourImage}
                      alt=""
                      className="w-[300px]"
                    />
                  </div>
                </li>
              </ul>
            </div>
            {/* Periksa Jalan Nafas (Airway) */}
            <div>
              <h3 className="font-semibold text-center text-xl">
                Periksa Jalan Nafas (Airway)
              </h3>
              <ul>
                <li>
                  <p className="indent-10">
                    Membersihkan jalan nafas dengan cross finger, finger swab
                    jika terdapat benda asing : Buka mulut korban dengan cara
                    jari silang (Cross finger) ibu jari yang diletakkan di mulut
                    korban berlawanan dengan jari telunjuk. finger swab (sapuan
                    jari) menggunakan dua jari, bisa memakai kasa/bagian kain
                    untuk dilapisi agar cairan terserap. secara hati-hati
                  </p>
                </li>
                <li>
                  <p className="indent-10">
                    Membuka jalan nafas yang harus dipastikan tidak adanya
                    sumbatan benda asing dilakukan teknik Head tilt-Chin lift
                    dan dilakukan Jaw thrust jika dicurigai mengalami trauma
                    servikal.
                  </p>
                  <ul>
                    <li>
                      <div className="flex items-center justify-center">
                        <img src={HeadTiltChin} alt="" className="w-[300px]" />
                      </div>
                      <p>
                        <span className="font-semibold">Teknik Head Tilt</span>{" "}
                        : Satu tangan berada di dahi korban lalu dorong dahi ke
                        arah belakang sehingga kepala menengadah dan pada mulut
                        korban dengan keadaan sedikit terbuka dan teknik chin
                        lift yaitu mengangkat dagu korban.
                      </p>
                    </li>
                    <li>
                      <div className="flex items-center justify-center">
                        <img src={JawThrust} alt="" className="w-[300px]" />
                      </div>
                      <p>
                        <span className="font-semibold">Teknik Jaw thrust</span>{" "}
                        : mengangkat dagu dengan kedua tangan agar rahang gigi
                        bawah akan berada ke arah lebih depan dari pada rahang
                        gigi yang atas.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Pernafasan (Breathing) */}
            <div>
              <h3 className="font-semibold text-center text-xl">
                Pernafasan (Breathing)
              </h3>
              <p className="indent-20">
                Bantuan nafas memberikan 2 kali hembusan. Tiap 1 kali hembusan
                dengan waktu 5 detik – 6 detik dan sampai terlihat ada
                pengembangan dada pada korban. Apabila nadi ada tetapi korban
                tidak ada nafas maka secepatnya memberikan bantuan nafas yaitu
                sebanyak 10-12 kali/menit.
              </p>
              <div className="flex items-center justify-center">
                <img src={BreathingImage} alt="" className="w-[300px]" />
              </div>
              <p>Dengan cara :</p>
              <p className="indent-10">
                {" "}
                Mulut ke mulut yaitu teknik yang cepat dan tepat digunakan untuk
                pemberian udara ke paru-paru korban. Menutup seluruh bagian
                mulut korban sehingga tidak akan terjadi kebocoran, juga harus
                memperhatikan untuk menutup lubang hidung korban pada saat
                menghembuskan nafas menggunakan jari-jari agar udara tidak akan
                keluar kembali dari hidung korban.
              </p>
            </div>
            {/* Evaluasi */}
            <div>
              <h3 className="font-semibold text-center text-xl">Evaluasi</h3>
              <p className="indent-10">
                Sesudah dilakukan kompresi dan ventilasi 30 : 2 Selama 2 menit
                lalu dilakukan evaluasi :
              </p>
              <ul className="grid gap-y-3">
                <li className="shadow p-3">
                  <p>
                    1. Jika nadi karotis tidak ada, maka penolong akan
                    melanjutkan kembali pemberian kompresi dan ventilasi 30 : 2
                    sampai 5 siklus.
                  </p>
                </li>
                <li className="shadow p-3">
                  <p>
                    2. Jika nadi teraba tetapi tidak ada nafas, penolong
                    melakukan pemberian bantuan nafas yaitu sebanyak 10 - 12
                    kali per menit.
                  </p>
                </li>
                <li className="shadow p-3">
                  <p>
                    3. Jika nafas ada dan nadi sudah ada tetapi korban tidak
                    sadar, atur posisi korban berikan posisi pemulihan (recovery
                    position) agar jalan nafas korban terbuka.
                  </p>
                </li>
              </ul>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <div>
                  <img src={RecoveryTwo} alt="" className="w-[300px]" />
                  <p></p>
                </div>
                <div>
                  <img src={RecoveryThree} alt="" className="w-[300px]" />
                </div>
                <div>
                  <img src={RecoveryFour} alt="" className="w-[300px]" />
                </div>

                <div>
                  <img src={RecoveryFive} alt="" className="w-[300px]" />
                </div>
              </div>
              <div className="mt-2 flex justify-center">
                <p className="font-semibold">
                  Recovery Position/Posisi Pemulihan/Posisi Miring Mantap
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-center text-xl">
                Penanganan RJP dapat dihentikan bila:
              </h3>
              <ul className="grid gap-4">
                <li className="shadow p-3">
                  <p>
                    1. penolong sudah memberikan bantuan dengan optimal
                    mengalami kelelahan atau pada tempat kejadian petugas medis
                    telah datang.
                  </p>
                </li>
                <li className="shadow p-3">
                  <p>
                    2. Pada saat penanganan lanjutan penderita tidak berespon
                    dengan minimal waktu 20 menit
                  </p>
                </li>
                <li className="shadow p-3">
                  <p>
                    3. Terdapat atau terlihat ada tanda kematian.
                    <br />
                    Tanda-tanda jika seseorang sudah mati secara biologis yaitu
                    :
                  </p>
                  <ul>
                    <li>
                      <p>
                        • kebiruan : Terlihat tanda merah tua sampai kebiruan
                        pada bagian tubuh terbawa pada korban,
                      </p>
                    </li>
                    <li>
                      <p>
                        • kekakuan : Anggota tubuh dan pada batang tubuh korban
                        kaku, mulai empat jam dan akan menghilang sekitar
                        sepuluh jam{" "}
                      </p>
                    </li>
                    <li>
                      <p>• pembusukan/adanya bau busuk</p>
                    </li>
                    <li>
                      <p>
                        • terputusnya kepala akibat cidera yang terjadi tidak
                        memungkinkan untuk hidup dan lain sebagainya.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section className="quiz">
          <h2 className="font-bold">Kuis</h2>
          <div>
            <div className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="label__input">
                  Nama
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="" className="label__input">
                  Umur
                </label>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="" className="label__input">
                  Jenis Kelamin
                </label>
                <select
                  name=""
                  id=""
                  className="input"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="1">Laki-laki</option>
                  <option value="2">Perempuan</option>
                </select>
              </div>
              <div className={`${error ? "block" : "hidden"} text-red-600`}>
                <p>Anda belum mengisi nama dan umur</p>
              </div>
              <button
                onClick={() => validation()}
                className="button__primary mt-10 w-full text-center"
              >
                Mulai
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default MainUser;

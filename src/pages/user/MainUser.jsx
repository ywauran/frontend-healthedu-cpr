import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const MainUser = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("1");
  return (
    <>
      <header className="border-b-2 sticky top-0 z-50 bg-white">
        <div className="flex justify-between py-2 px-4">
          <h1>Healthedu Cpr</h1>
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
      <main className="p-4 pb-8">
        <section className="p-2">
          <h2 className="font-bold">Pengertian</h2>
          <article>
            <p>
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
          <h2 className="font-bold">Tujuan</h2>
          <article>
            <p>
              Pemberian bantuan untuk oksigen darurat yang diberikan dengan baik
              dan secara efektif untuk organ vital yaitu pada otak dan jantung
              dengan melakukan pemberian melalui ventilasi buatan agar dapat
              berfungsi secara baik dan untuk pemberian sirkulasi buatan.
            </p>
            <p>
              Hal ini dilakukan agar dapat mencegah berhentinya fungsi sirkulasi
              darah atau fungsi pernafasan terhenti melakukan usaha yaitu
              pemberian kompresi dada dan ventilasi yang benar dan tepat pada
              seseorang yang dikarenakan terjadi henti jantung dan henti nafas.
            </p>
          </article>
        </section>
        <section className="p-2">
          <h2 className="font-bold">
            Indikasi yaitu Henti Jantung dan Henti Nafas
          </h2>
          <ul type="">
            <li>
              <p>
                1. Henti jantung berarti keadaan dimana pada peredaraan darah
                normal secara tiba-tiba terganggu dengan tidak adanya tekanan
                darah arteri. Yang terjadi penghentian secara mendadak pada
                aktivitas pemompaan yang efektif sehiingga mengakibatkan
                berhentinya sirkulasi yang normal.
              </p>
            </li>
            <li>
              <p>
                2. Henti nafas adalah suatu kejadian ketika seseorang terhenti
                fungsi pernafasan atau tidak efektif dalam bernafas, dapat
                terjadi secara bersamaan dengan kejadian henti jantung namun
                sistem pernafasan tidak selalu berhenti jika jantung tidak
                berfungsi dengan baik, jika pada sistem saraf dan otot tidak
                menunjang pada pernafasan maka seseorang akan mengalami keadaan
                henti nafas. Henti nafas dapat dikenali dengan tidak ada terjadi
                pengembangan dada dan tidak ada aliran udara pada pernafasan
                dari korban
              </p>
            </li>
          </ul>
        </section>
        <section className="p-2">
          <h2 className="font-bold">Penanganan</h2>
          <article>
            <div className="criteria">
              <ul>
                <li>
                  <p>1. Memastikan Keamanan</p>
                </li>
                <li>
                  <p>2. Memeriksa Respon</p>
                </li>
                <li>
                  <p>3. Panggil Bantuan</p>
                </li>
                <li>
                  <p>4. Sirkulasi</p>
                </li>
                <li>
                  <p>5. Periksa Jalan Nafas</p>
                </li>
                <li>
                  <p>6. Pernafasan</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Memastikan Kemanan (Danger)</h3>
              <h4>3A</h4>
              <ul>
                <li>
                  Aman Penolong, menggunakan alat pelindung diri dan menjadi
                  suatu prioritas agar terhindar menjadi korban berikutnya.{" "}
                </li>
                <li>
                  Aman Pasien/Korban, mengamankan korban ke tempat yang aman,
                </li>
                <li>
                  Aman Lingkungan, memperhatikan situasi dan keadaan sekitar
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">
                Memeriksa Respon Korban (Response)
              </h3>
              <p>
                Menepuk-nepuk bahu korban dengan pelan dan lembut agar mencegah
                pergerakan yang berlebihan dan setelah itu berteriak memanggil
                korban “Bangun-bangun pak/ibu, apakah bapak/ibu dalam keadaan
                baik-baik saja?” Apabila korban tidak bereaksi jika dipanggil
                bisa memberikan rangsangan nyeri dengan menekan pada kuku
                ataupun pada bagian dada korban.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Panggil Bantuan (Shout For Help)
              </h3>
              <p>
                Jika korban tersebut terlihat tidak memberikan respon jika
                dipanggil maka minta bantuan dengan segera berteriak minta
                tolong dan segera mengaktifkan sistem gawat darurat atau EMS
                119.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Sirkulasi (Circulation)</h3>
              <ul>
                <li>
                  <p>
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
                  <p>
                    Posisi korban dalam keadaan supinasi/terlentang pada tempat
                    yang datar ataupun keras.
                  </p>
                </li>
                <li>
                  <p>
                    Posisi penolong berlutut senyaman mungkin sejajar dengan
                    bahu korban di samping korban.
                  </p>
                </li>
                <li>
                  <p>
                    Penolong meletakkan dengan salah satu tumit telapak tangan
                    pada seperdua di bagian bawah sternum atau pada pertengahan
                    dada korban dan tumit telapak tangan lainnya berada pada
                    atas tangan pertama kemudian jari-jari tangan disatukan dan
                    mengunci.
                  </p>
                </li>
                <li>
                  <p>
                    Pemberian kompresi yang meliputi posisi lengan penolong
                    tegak lurus dengan penekanan dada kuat dengan kedalaman
                    (minimum 2inch/5cm) dan kecepatan kompresi yaitu 100-120
                    kali per menit kemudian biarkan dan lihat rekoil dada
                    selesai dengan sempurna, mengurangi interupsi berlebihan
                    saat pemberiaan kompresi. Kemudian dilakukan kompresi pada
                    orang dewasa dengan perbandingan atau rasio yaitu 30
                    kompresi : 2 ventilasi (satu atau dua penolong).
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Periksa Jalan Nafas (Airway)</h3>
              <ul>
                <li>
                  <p>
                    Membersihkan jalan nafas dengan cross finger, finger swab
                    jika terdapat benda asing : Buka mulut korban dengan cara
                    jari silang (Cross finger) ibu jari yang diletakkan di mulut
                    korban berlawanan dengan jari telunjuk. finger swab (sapuan
                    jari) menggunakan dua jari, bisa memakai kasa/bagian kain
                    untuk dilapisi agar cairan terserap. secara hati-hati
                  </p>
                </li>
                <li>
                  <p>
                    Membuka jalan nafas yang harus dipastikan tidak adanya
                    sumbatan benda asing dilakukan teknik Head tilt-Chin lift
                    dan dilakukan Jaw thrust jika dicurigai mengalami trauma
                    servikal.
                  </p>
                  <ul>
                    <li>
                      <p>
                        Teknik Head Tilt : Satu tangan berada di dahi korban
                        lalu dorong dahi ke arah belakang sehingga kepala
                        menengadah dan pada mulut korban dengan keadaan sedikit
                        terbuka dan teknik chin lift yaitu mengangkat dagu
                        korban.
                      </p>
                    </li>
                    <li>
                      <p>
                        Teknik Jaw thrust teknik jaw thrust yaitu dengan cara
                        mengangkat dagu dengan kedua tangan agar rahang gigi
                        bawah akan berada ke arah lebih depan dari pada rahang
                        gigi yang atas.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Pernafasan (Breathing)</h3>
              <p>
                Bantuan nafas memberikan 2 kali hembusan. Tiap 1 kali hembusan
                dengan waktu 5 detik – 6 detik dan sampai terlihat ada
                pengembangan dada pada korban. Apabila nadi ada tetapi korban
                tidak ada nafas maka secepatnya memberikan bantuan nafas yaitu
                sebanyak 10-12 kali/menit.
              </p>
              <p>
                Dengan cara : <br />
                Mulut ke mulut yaitu teknik yang cepat dan tepat digunakan untuk
                pemberian udara ke paru-paru korban. Menutup seluruh bagian
                mulut korban sehingga tidak akan terjadi kebocoran, juga harus
                memperhatikan untuk menutup lubang hidung korban pada saat
                menghembuskan nafas menggunakan jari-jari agar udara tidak akan
                keluar kembali dari hidung korban.
              </p>
            </div>
          </article>
        </section>
        <section className="quiz">
          <h2 className="font-bold">Kuis</h2>
          <div>
            <form>
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
              <Link
                to={`/quis/${name}/${age}/${gender}`}
                className="button__primary mt-4 w-full"
              >
                submit
              </Link>
            </form>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default MainUser;

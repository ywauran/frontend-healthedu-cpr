import React, { useState, useEffect } from "react";
import { app } from "../../../config";

import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase(app);

const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [countFemale, setCountFemale] = useState(0);
  const [countMale, setCountMale] = useState(0);

  const getData = () => {
    const dbRef = ref(db, "result");
    onValue(dbRef, (snapshot) => {
      let data = [];
      snapshot.forEach((childSnapshot) => {
        let key = childSnapshot.key;
        let value = childSnapshot.val();

        data.push({
          key: key,
          value: value,
        });
      });
      setData(data);
      console.log(data);
      setCountMale(data.filter((item) => item.value.gender === "1").length);
      setCountFemale(data.filter((item) => item.value.gender !== "1").length);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="shadow p-10 text-center">
            Jumlah Laki-laki <br /> {countMale}
          </div>
          <div className="shadow p-10 text-center">
            Jumlah Perempuan <br /> {countFemale}
          </div>
        </div>
        <div className="w-full mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Umur
                </th>
                <th scope="col" className="px-6 py-3">
                  Jenis Kelamin
                </th>
                <th scope="col" className="px-6 py-3">
                  Salah
                </th>
                <th scope="col" className="px-6 py-3">
                  Benar
                </th>
                <th scope="col" className="px-6 py-3">
                  Nilai
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, number) => (
                <tr
                  key={number + 1}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{number + 1}</td>
                  <td className="px-6 py-4">{item.value.name}</td>
                  <td className="px-6 py-4">{item.value.age}</td>
                  <td className="px-6 py-4">
                    {item.value.gender === "1" ? "Laki-laki" : "Perempuan"}{" "}
                  </td>
                  <td className="px-6 py-4">{20 - item.value.score}</td>
                  <td className="px-6 py-4">{item.value.score}</td>
                  <td className="px-6 py-4">{item.value.score * 5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

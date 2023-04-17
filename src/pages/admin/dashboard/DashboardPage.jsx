import React from "react";

const DashboardPage = () => {
  const data = [
    {
      name: "Yohanes Harke Wauran",
      age: 21,
      gender: 1,
      wrong: 10,
      correct: 10,
      score: 50,
    },
    {
      name: "Yohanes Harke Wauran",
      age: 21,
      gender: 1,
      wrong: 10,
      correct: 10,
      score: 50,
    },
    {
      name: "Yohanes Harke Wauran",
      age: 21,
      gender: 1,
      wrong: 10,
      correct: 10,
      score: 50,
    },
  ];
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="shadow p-10">hello</div>
          <div className="shadow p-10">hello</div>
          <div className="shadow p-10">hello</div>
          <div className="shadow p-10">hello</div>
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
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.age}</td>
                  <td className="px-6 py-4">
                    {item.gender === 1 ? "Laki-laki" : "Perempuan"}{" "}
                  </td>
                  <td className="px-6 py-4">{item.wrong}</td>
                  <td className="px-6 py-4">{item.correct}</td>
                  <td className="px-6 py-4">{item.score}</td>
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

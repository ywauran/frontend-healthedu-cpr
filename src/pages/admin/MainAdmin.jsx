import React, { useState, useEffect } from "react";
import { useNavigate, Route, Routes, Link } from "react-router-dom";
import Header from "../../components/Header";
import AddQuestionPage from "./question/AddQuestionPage";
import EditQuetionPage from "./question/EditQuetionPage";
import DataQuestionPage from "./question/DataQuestionPage";
import DetailQuestionPage from "./question/DetailQuestionPage";
import DashboardPage from "./dashboard/DashboardPage";
import { MdOutlineDashboard, MdDescription } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const MainAdmin = () => {
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();
  const menus = [
    {
      name: "Dashboard",
      link: "/pages/dashboard",
      icon: MdOutlineDashboard,
      isAdmin: true,
    },
    // {
    //   name: "Data Pertanyaan",
    //   link: "/pages/data-question",
    //   icon: MdDescription,
    // },
  ];
  const [openModalLogout, setOpenModalLogout] = useState(false);
  const Logout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="flex overflow-y-hidden">
        <div
          className={`bg-[#0e0e0e] min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex flex-col justify-between h-[90%]">
            <div className="mt-4 flex flex-col gap-4 relative">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute z-50 left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
            <button
              onClick={() => setOpenModalLogout(true)}
              className="text-sm  gap-3.5 font-medium p-2 bg-gray-800 rounded-md"
            >
              Keluar
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-hidden  text-gray-900 font-semibold">
          <div>
            <Header />
          </div>
          <div className="p-5">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              {/* Criteria */}
              {/* <Route
                path="/detail-question/:id"
                element={<DetailQuestionPage />}
              />
              <Route path="/add-question" element={<AddQuestionPage />} />
              <Route path="/data-question" element={<DataQuestionPage />} />
              <Route path="/edit-question/:id" element={<EditQuetionPage />} /> */}
            </Routes>
          </div>
        </div>

        {/* Modal Logout */}
        <div
          id="modalLogout"
          tabIndex="-1"
          aria-hidden="true"
          className={`flex items-center fixed top-0 left-0 right-0 z-50 ${
            openModalLogout ? "block" : "hidden"
          } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
        >
          <div className="flex justify-center items-center relative w-full h-max">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-center p-4 border-b rounded-t">
                <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                  Keluar
                </h3>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-base text-center leading-relaxed text-gray-500 dark:text-gray-400">
                  Anda yakin ingin keluar ?
                </p>
              </div>

              <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="button__primary w-24"
                  onClick={() => Logout()}
                >
                  Ya
                </button>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  onClick={() => setOpenModalLogout(false)}
                  className="button__warn w-24"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAdmin;

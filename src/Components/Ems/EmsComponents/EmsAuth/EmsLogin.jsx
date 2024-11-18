import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import fireIcon from "/images/fire.webp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmsLogin({ handleLogin, invalidUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
    notifyToast();
  };

  let notifyToast = () => toast(invalidUser);
  useEffect(() => {
    notifyToast();
  }, [invalidUser]);

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="max-w-[450px] m-auto w-full">
          <div className="text-centerm m-auto mb-4 flex justify-center items-center bg-gradient-to-b from-slate-900 to-slate-800 rounded-full shadow-3xl w-[50px] h-[50px]">
            <img
              src={fireIcon}
              height={40}
              width={40}
              alt=""
              className="inline-block opacity-80"
            />
          </div>
          <div className="bg-slate-800 rounded-xl p-6 mx-4 shadow-xl">
            <h2 className="text-slate-400 text-center text-lg font-bold">
              Sign in
            </h2>
            <form className="mt-4 space-y-4">
              <div>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    className="rounded-full p-3 px-5 w-full bg-slate-900 outline-none text-slate-500 placeholder:italic placeholder:text-slate-700"
                    placeholder="Enter E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FaRegUser className="w-4 h-4 absolute right-4 text-slate-500" />
                </div>
              </div>
              <div>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    required
                    className="rounded-full p-3 px-5 w-full bg-slate-900 outline-none text-slate-500 placeholder:italic placeholder:text-slate-700"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FaRegEye className="w-4 h-4 absolute right-4 text-slate-500" />
                </div>
              </div>
              <div>
                <button
                  onClick={onSubmit}
                  className="border border-slate-600 p-2 px-4 rounded-full text-slate-400"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
      className="text-sm"
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Slide
      />
    </>
  );
}

export default EmsLogin;

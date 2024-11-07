import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import fireIcon from "/images/fire.webp";

function Ems() {
  useEffect(() => {
    document.getElementById("nav").classList.add("hidden");
    document.getElementById("root").classList.remove("pb-16");
    return () => {
      document.getElementById("nav").classList.remove("hidden");
      document.getElementById("root").classList.add("pb-16");
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();
    console.log("Email is:", email, "and password is:", password)
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="max-w-[450px] m-auto w-full">
        <div className="text-centerm m-auto mb-4 flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 rounded-full shadow-3xl w-[50px] h-[50px]">
          <img
            src={fireIcon}
            height={40}
            width={40}
            alt=""
            className="inline-block opacity-80"
          />
        </div>
        <div className="bg-gray-800 rounded-xl p-6 mx-4 shadow-2xl">
          <h2 className="text-gray-400 text-center text-lg font-bold">
            Sign in
          </h2>
          <form className="mt-4 space-y-4">
            <div>
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  className="rounded-full p-3 px-5 w-full bg-gray-900 outline-none text-gray-500 placeholder:italic placeholder:text-gray-700"
                  placeholder="Enter E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FaRegUser className="w-4 h-4 absolute right-4 text-gray-500" />
              </div>
            </div>

            <div>
              <div className="relative flex items-center">
                <input
                  type="password"
                  required
                  className="rounded-full p-3 px-5 w-full bg-gray-900 outline-none text-gray-500 placeholder:italic placeholder:text-gray-700"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <FaRegEye className="w-4 h-4 absolute right-4 text-gray-500" />
              </div>
            </div>

            {/* <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-1 block text-sm text-gray-800"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="jajvascript:void(0);"
                className="text-blue-600 hover:underline font-semibold"
              >
                Forgot your password?
              </a>
            </div>
          </div> */}

            <div>
              <button
                onClick={onSubmit}
                className="border border-gray-600 p-2 px-4 rounded-full text-gray-400"
              >
                Sign in
              </button>
            </div>
            {/* <p className="text-gray-800 text-sm mt-3 text-center">
            Don't have an account?{" "}
            <a
              href="javascript:void(0);"
              className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
            >
              Register here
            </a>
          </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ems;

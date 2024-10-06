import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      {/* Arka Plan Dalgalı Şekiller */}
      <img src="/Ellipse 1 (1).png" alt="arka plan şekiller" className="absolute top-0 left-0 w-1/3 sm:w-1/4" />
      <img src="/Ellipse 2 (1).png" alt="arka plan şekiller" className="absolute top-0 right-0 w-1/3 sm:w-1/4" />

      {/* Login Formu */}
      <div className="relative z-10 bg-white shadow-lg rounded-lg p-6 sm:p-10 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-4xl sm:text-5xl lg:text-[70px] font-semibold text-green-600 mb-4 lg:mb-6">LOGIN</h2>
        <form>
          <div className="mb-4">
            <input
              className="w-full h-12 sm:h-[60px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-black/75 text-base sm:text-lg"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full h-12 sm:h-[60px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-black/75 text-base sm:text-lg"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-[233px] h-[50px] sm:h-[62px] rounded-[10px] bg-green-500 text-white font-semibold p-3 hover:bg-green-600 transition duration-300"
          >
            LOGIN
          </button>
        </form>

        {/* Sosyal Medya Girişleri */}
        <div className="flex items-center justify-between mt-6">
          <span className="border-t border-black w-1/4 sm:w-[196px]"></span>
          <span className="px-2 text-lg sm:text-[25px] font-semibold text-black">OR</span>
          <span className="border-t border-black w-1/4 sm:w-[196px]"></span>
        </div>
        <div className="flex justify-center space-x-10 sm:space-x-14 mt-6">
          <img
            src="/image 1 (3).png"
            alt="Google"
            className="w-6 sm:w-8 h-6 sm:h-8 cursor-pointer"
          />
          <img
            src="/image 2 (3).png"
            alt="Facebook"
            className="w-6 sm:w-8 h-6 sm:h-8 cursor-pointer"
          />
        </div>

        {/* Alt Bağlantılar */}
        <div className="flex justify-between mt-6">
          <a href="#" className="text-xs sm:text-sm font-semibold text-green-500 hover:underline">
            Forgot password
          </a>
          <a href="#" className="text-xs sm:text-sm font-semibold text-green-500 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

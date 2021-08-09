import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-300">
      <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2 className="mb-4 text-xs font-semibold tracking-widest text-gray-50 uppercase title-font">
            Hai, saya
          </h2>
          <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-white sm:text-5xl title-font">
            {" "}
            Rahmat Agung Julians
          </h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
            Saya bersemangat membuat kontribusi ke sumber terbuka, memberikan
            pengetahuan teknologi untuk semua orang, dan membangun komunitas.
          </p>
        </div>
        <div className="flex justify-left lg:justify-center ">
          <a
            href="https://github.com/rahmatagungj"
            title="github rahmat agung julians"
            rel="nofollow"
          >
            <button className="flex items-center px-6 py-2 mt-auto mr-3 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Github
            </button>
          </a>
          <a
            href="https://www.rahmatagungjulians.tech/"
            title="blog rahmat agung julians"
            rel="nofollow"
          >
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Blog
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

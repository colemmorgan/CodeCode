import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "../Components/Nav";
import { FcAbout } from "react-icons/fc";
import Footer from "../Components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import Toc from "../Components/Toc";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Nav />
      <section className="bg-blue relative py-28 z-10">
        <img
          src="./HeroGradient.png"
          alt=""
          className="absolute z-[-1] left-1/2 opacity-70 top-[0px]"
        />
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-center justify-center relative pb-44 md:pb-96">
          {/* Aboslute Images */}
          <div className="hidden md:flex absolute mt-8 top-24 right-[17%] translate-x-1/2 w-[44%] z-20 h-full  items-center justify-center">
            <img src="./HeroProblemEditor.png" alt="" />
          </div>
          <div className="hidden md:flex absolute z-20 left-[15%] w-[30%] -translate-x-1/2 mt-8 top-60 h-full items-center justify-center">
            <img src="./HeroExerciseList.png" alt="" />
          </div>
          <div className="absolute mt-8 top-[18rem] left-1/2 -translate-x-1/2 z-10 h-full w-[80%] flex items-center justify-center">
            <img src="./HeroProblemStatement.png" alt="" />
          </div>
          <div className="hidden md:flex absolute mt-8 top-[39rem] right-[19%] translate-x-1/2 w-[45%] z-20 items-center justify-center">
            <img src="./HeroFeedback.png" alt="" />
          </div>
          {/*  */}
          <span className="py-1 px-4 border border-gray-700 rounded-lg text-xs bgg">
            Introducing CodeCode
          </span>
          <h1 className="mt-8 text-5xl text-center font-semibold line-height leading-tight text-greyText">
            Experience the <span className="gradient-text">Future</span> of{" "}
            <br />
            Computing Education
          </h1>
          <p className="max-w-2xl mt-8 text-center text-sm text-dull leading-8">
            Edugator is a platform where any UF student can practice computing
            concepts with rich immediate feedback. Designed to promote
            experiential life-long learning for computing learners.
          </p>
          <div className="mt-8 relative z-40">
            <Link to={user ? "/code" : "/login"}>
              <button className="rounded-lg  p-[2px] gradient-b group cursor-pointer">
                <p className="py-2 px-4 bg-greyBlue rounded-md text-sm group-hover:bg-blue">
                  Start Coding
                </p>
              </button>
            </Link>
            <button className="ml-8 text-md fle cursor-pointer">
              <p>
                Learn More{" "}
                <span className="ml-1">
                  <FaArrowRightLong className="inline" />
                </span>
              </p>{" "}
            </button>
          </div>
        </div>
      </section>
      <section className="bg-blue relative">
        {/* <img src="./test.png" alt="" className="absolute max-w-[900px] -bottom-[370px] left-1/2 -translate-x-1/2 rounded-md"/> */}
        <div className="w-full rounded-[40px] rounded-t-none bg-white pt-28 pb-40 text-blue">
          <div className="max-w-[1380px] flex flex-col itemx-center justify-center px-8 mx-auto">
            <div className="pt-24 pb-4 text-center">
              <p className="text-lightBlue font-medium font-sm tracking-[1.4px] pb-4">
                LEARNING REIMAGINED
              </p>
              <h3 className="pb-6 max-w-xl mx-auto text-4xl font-semibold">
                {" "}
                We manage your course content, so you can focus on learning.
              </h3>
              <p className="text-gray-500">
                We provide a platform for students to learn computing concepts.
              </p>
            </div>
            <div className="flex flex-wrap items-center  justify-center w-full">
              <Card title={"Learn"} />
              <Card title={"Code"} />
              <Card title={"Practice"} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center px-4 pt-24 pb-40">
          <h3 className="font-semibold text-4xl">Table of Contents</h3>
          <Toc/>
        </div>
      </section>
      <section className="bg-white py-32 rounded-[40px] rounded-t-none lg:py-48">
        <div className="max-w-[1280px] w-full mx-auto px-8 text-black flex flex-col items-center justify-center lg:flex-row lg:items-start">
          <div className="flex flex-col  max-w-[500px] text-center items-center mb-16 lg:text-left lg:items-start lg:w-1/2">
            <span className="text-7xl">
              <FcAbout />
            </span>
            <p className="text-3xl font-semibold mt-4">
              Interested in beginning <br /> CodeCode today?
            </p>
            <p className="mt-4">
              CodeCode is always free. Sign up today to practice your javascript
              skills and become a React developer.
            </p>
            <p className="flex items-center mt-4">
              Sign Up{" "}
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </p>
          </div>
          <div className="flex flex-col max-w-[500px] text-center items-center lg:text-left lg:items-start lg:pl-16 lg:w-1/2">
            <figure className="relative h-20 pr-44">
              <div className="h-16 w-16 rounded-full overflow-hidden absolute bg-green z-50" />
              <div className="h-16 w-16 rounded-full overflow-hidden absolute left-10 bg-lightBlue z-40" />
              <div className="h-16 w-16 rounded-full overflow-hidden absolute left-20 bg-purple-500 z-30" />
              <div className="h-16 w-16 rounded-full overflow-hidden absolute left-[120px] bg-yellow-400 z-20" />
            </figure>
            <p className="text-3xl font-semibold">
              Built by developers, for <br />
              developers.
            </p>
            <p className="mt-4">
              CodeCode is designed for students and aspiring developers who wish
              to continue their pursuit of knowledge and excellence
            </p>
            <p className="flex items-center mt-4 cursor-not-allowed">
              Meet Our Team
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;



function Card({ title, desc }) {
  return (
    <div className="flex flex-col items-start max-w-96 w-full mx-4 mt-8 ">
      <div className="px-4 pt-8 temp-b rounded-lg overflow-hidden relative h-52 group w-full cursor-pointer  hover:bg-green transition-all">
        <div className="max-w-60 mx-auto shadow-md absolute w-full bottom-[-20px] left-1/2 -translate-x-1/2 group-hover:bottom-0 transition-all">
          <div className="w-full h-6 rounded-t-lg bg-gray-800 flex justify-start items-center space-x-1.5 px-3 ">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="w-2 h-2 rounded-full bg-green"></span>
          </div>
          <div className=" cardbg border-t-0 w-full h-36 pt-4 px-4">
            <div className="h-full w-full card-inner rounded-md shadow-md rounded-b-none"></div>
          </div>
        </div>
      </div>
      <h3 className="pt-4 text-xl font-semibold">{title}</h3>
      <p className="pt-2 text-gray-500">
        Learn the fundamentals of computer science with our interactive lessons
        and practice exercises.
      </p>
    </div>
  );
}

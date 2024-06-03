import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "../Components/Nav";



function Home() {


  return (
    <>
      <Nav/>
      <section className="bg-blue relative py-28 z-10">
        <img
          src="./HeroGradient.png"
          alt=""
          className="absolute z-[-1] left-1/2 opacity-70 top-[0px]"
        />
        <div className="max-w-[1280px] mx-auto pb-96 px-8 flex flex-col items-center justify-center relative">
          {/* Aboslute Images */}
          <div className="absolute mt-8 top-24 right-[17%] translate-x-1/2 w-[44%] z-20 h-full flex items-center justify-center">
            <img src="./HeroProblemEditor.png" alt="" />
          </div>
          <div className="absolute z-20 left-[15%] w-[30%] -translate-x-1/2 mt-8 top-60 h-full flex items-center justify-center">
            <img src="./HeroExerciseList.png" alt="" />
          </div>
          <div className="absolute mt-8 top-[18rem] left-1/2 -translate-x-1/2 z-10 h-full w-[80%] flex items-center justify-center">
            <img src="./HeroProblemStatement.png" alt="" />
          </div>
          <div className="absolute mt-8 top-[39rem] right-[19%] translate-x-1/2 w-[45%] z-20 flex items-center justify-center">
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
            <button className="rounded-lg  p-[2px] gradient-b group cursor-pointer">
              <p className="py-2 px-4 bg-greyBlue rounded-md text-sm group-hover:bg-blue">
                Start Coding
              </p>
            </button>
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
      <section className="bg-blue ">
        <div className="w-full rounded-[40px] rounded-t-none bg-white pt-28 pb-80 text-blue">
          <div className="max-w-[1380px] flex flex-col itemx-center justify-center px-8 mx-auto">
            <div className="pt-24 pb-4 text-center">
              <p className="text-lightBlue font-medium font-sm tracking-[1.4px] pb-4">LEARNING REIMAGINED</p>
              <h3 className="pb-6 max-w-xl mx-auto text-4xl font-semibold"> We manage your course content, so you can focus on learning.</h3>
              <p className="text-gray-500">We provide a platform for students to learn computing concepts.</p>
            </div>
            <div className="flex flex-wrap items-center  justify-center w-full">
              <Card title={"Learn"}/>
              <Card title={"Code"}/>
              <Card title={"Practice"}/>
            </div>
          </div>
        </div>
      </section>
      <section className="fu bg-blue">ff</section>
    </>
  );
}

export default Home;

function Card({title, desc}) {
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
    <p className="pt-2 text-gray-500">Learn the fundamentals of computer science with our interactive lessons and practice exercises.</p>
    </div>

  );
}


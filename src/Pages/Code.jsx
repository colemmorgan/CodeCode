import React, { useState, useEffect, useRef } from "react";
import CodeSvg from "../assets/CodeSvg";
import CodeNav from "../Components/CodeNav";
import ProblemTabs from "../Components/ProblemTabs";


export default function Code() {
  return (
    <section className="flex bg-blue">
      <CodeNav />
      <ProblemTabs/>
      <div className="relative w-full flex items-center justify-center">
    <div className="code-gradient"></div>
      <div id="blur"></div>
        <div className="z-10 flex flex-col items-center">
        <CodeSvg/>
        <p className="text-2xl font-semibold text-center mt-8">Select a problem to begin!</p>
        </div>
      </div>
    </section>
  );
}











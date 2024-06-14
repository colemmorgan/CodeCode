import React, { useState, useEffect, useRef } from "react";
import CodeSvg from "../assets/CodeSvg";
import CodeNav from "../Components/CodeNav";
import ProblemTabs from "../Components/ProblemTabs";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


export default function Code() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);
  return (
    <section className="flex bg-blue">
      <CodeNav />
      <ProblemTabs/>
      <div className="relative w-full flex items-center justify-center h-screen">
    <div className="code-gradient "></div>
      <div id="blur"></div>
        <div className="z-10 flex flex-col items-center">
        <CodeSvg/>
        <p className="text-2xl font-semibold text-center mt-8">Select a problem to begin!</p>
        </div>
      </div>
    </section>
  );
}











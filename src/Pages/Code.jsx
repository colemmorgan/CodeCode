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
    <>
      <Modal />
      <section className="flex bg-blue">
        <CodeNav />
        <ProblemTabs />
        <div className="relative w-full flex items-center justify-center h-screen">
          <div className="code-gradient "></div>
          <div id="blur"></div>
          <div className="z-10 flex flex-col items-center">
            <CodeSvg />
            <p className="text-2xl font-semibold text-center mt-8">
              Select a problem to begin!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-blue bg-opacity-30 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="bg-greyBlue w-full max-w-[550px] rounded-lg p-12">
            <p className="text-center font-medium text-3xl">
              Sorry for the Inconvenience
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              The coding execution system is no longer supported. You may still
              navigate the site and access all of the questions, but you will
              not be able to run any of your code. Thank you for your
              understanding.
            </p>
            <button
              className="bg-lightBlue w-full mt-8 py-2 rounded-md font-medium cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              Continue{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

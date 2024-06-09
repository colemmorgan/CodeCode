import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGetUserData from "../hooks/useGetUserData";
import { auth } from "../firebase/firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import useGetProblem from "../hooks/useGetProblem";

export default function Account() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [signOut, error] = useSignOut(auth);

  const [loading, setLoading] = useState(true);
  const [problemId, setProblemId] = useState("")

  const { liked, disliked, solved, setData, starred } = useGetUserData();

  const [showTabs, setShowTabs] = useState({
    showLiked: true,
    showDisliked: false,
    showStarred: false,
  });

  function formatDateWithLeadingZeros(timestamp) {
    const date = new Date(++timestamp);
    const formattedDate =
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      date.getDate().toString().padStart(2, "0") +
      "/" +
      date.getFullYear();

    return formattedDate;
  }

  const handleSignOut = () => {
    signOut();
    navigate("/");
    toast.success("Successfully logged out", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
  };

  const setShowStarred = () => {
    setShowTabs({ showLiked: false, showDisliked: false, showStarred: true });
  };
  const setShowLiked = () => {
    setShowTabs({ showLiked: true, showDisliked: false, showStarred: false });
  };
  const setShowDisliked = () => {
    setShowTabs({ showLiked: false, showDisliked: true, showStarred: false });
  };

  useEffect(() => {
    if(starred && showTabs.showStarred) {
      setProblemId(starred[starred.length - 1])
    }
    else if(liked && showTabs.showLiked) {
      setProblemId(liked[liked.length - 1])
    }
    else if(disliked && showTabs.showDisliked) {
      setProblemId(disliked[disliked.length - 1])
    }



  },[starred,liked,disliked,showTabs])

  return (
    <div className="min-h-screen bg-greyBlue">
      <nav className="flex justify-center items-center h-16 bg-greyBlue">
        <ul className="flex text-sm font-semibold">
          <Link to={"/"} className="">
            <li className="mx-6 cursor-pointer">Home</li>
          </Link>
          <Link to={"/"} className="">
            <li className="mx-6 cursor-pointer">Problems</li>
          </Link>
          <li className="mx-6 cursor-pointer" onClick={handleSignOut}>
            Logout
          </li>
        </ul>
      </nav>
      <div className="bg-blue">
        <div className="max-w-[1100px] mx-auto px-6 py-8 flex items-center justify-between ">
          <div className="flex">
            <span className="h-12 w-12 bg-lightBlue rounded-full mr-4"></span>
            <div className="">
              <p className="text-xl font-semibold">Cole Morgan</p>

              <p className=" mt-[1px] text-dull">
                {user ? user.email : "No user"}
              </p>
            </div>
          </div>
          <button className="bg-greyBlue px-6 py-2.5 rounded-md border border-lightBlue text-sm">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="bg-greyBlue w-full ">
        <div className="max-w-[1100px] mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold">Coding Stats</h2>
          <ul className="flex flex-wrap pt-2">
            {!user ? (
              <>
                <div className="bg-blue mt-4 mr-4 w-[272px] h-[108px] rounded-lg"></div>
                <div className="bg-blue mt-4 mr-4 w-[272px] h-[108px] rounded-lg"></div>
                <div className="bg-blue mt-4 mr-4 w-[272px] h-[108px] rounded-lg"></div>
              </>
            ) : (
              <>
                <CodingStat stat={solved.length} desc={"Problems Solved"} />
                <CodingStat stat={liked.length} desc={"Problems Liked"} />
                <CodingStat
                  stat={formatDateWithLeadingZeros(user.metadata.createdAt)}
                  desc={"Account Created"}
                />{" "}
              </>
            )}
          </ul>
          <h2 className="text-2xl font-semibold mt-8">Recently Solved</h2>
          <ul className="flex flex-col pt-3">
            <RecentProblem problem={solved[solved.length - 1]} />
          </ul>
          <div className="flex justify-center mt-12">
            <span
              className={`mx-1 px-4 py-2 rounded-md text-dull font-semibold cursor-pointer ${showTabs.showLiked ? "bg-blue text-white" : ""}`}
              onClick={setShowLiked}
            >
              Liked
            </span>
            <span
              className={`mx-1 px-4 py-2 rounded-md text-dull font-semibold cursor-pointer ${showTabs.showDisliked ? "bg-blue text-white" : ""}`}
              onClick={setShowDisliked}
            >
              Disliked
            </span>
            <span
              className={`mx-1 px-4 py-2 rounded-md text-dull font-semibold cursor-pointer ${showTabs.showStarred ? "bg-blue text-white" : ""}`}
              onClick={setShowStarred}
            >
              Starred
            </span>
          </div>
          <ul className="flex flex-col pt-3 pb-12">
            <RecentProblem problem={problemId}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

function RecentProblem({ problem }) {
  const { currentProblem } = useGetProblem(problem);
  return (
    <li className="bg-blue w-full px-8 py-4 mt-4 rounded-md">
      {currentProblem ? (
        <>
          <p className="text-lg underline">{currentProblem.title}</p>
          <p className="mt-2">{currentProblem.description}</p>
        </>
      ) : (
        <>
          <p className="text-lg underline"> No Problem Completed</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            culpa provident eveniet soluta quae qui itaque totam impedit
            dignissimos nisi.
          </p>
        </>
      )}
    </li>
  );
}

function CodingStat({ stat, desc }) {
  return (
    <li className="bg-blue p-6 mt-4 rounded-lg mr-4">
      <div className="w-56 text-center">
        <p className="text-3xl font-semibold">{stat ? stat : "0"}</p>
        <p className="mt-1 text-dull text-sm">{desc}</p>
      </div>
    </li>
  );
}

import { Firestore, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";

export default function ProblemDesc({ problem }) {
  return (
    <div className="row-span-5 container">
      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: problem.header }} />
        <div className="flex mt-4 text-gray-700">
          <div className="bg-green font-semibold py-1.5 px-4 flex items-center rounded-md mr-2 cursor-pointer text-sm">
            <span className="pb-0.5 mr-1">
              {" "}
              <AiFillLike />
            </span>
            <p>Like</p>
          </div>
          <div className="bg-red-400 font-semibold py-1.5 px-4 flex items-center rounded-md mr-2 cursor-pointer text-sm">
            <span className="pb-0.5 mr-1">
              {" "}
              <AiFillDislike />
            </span>
            <p>Dislike</p>
          </div>
          <div className="bg-yellow-300 font-semibold py-1.5 px-4 flex items-center rounded-md mr-2 cursor-pointer text-sm">
            <span className="pb-0.5 mr-1">
              {" "}
              <FaRegStar />
            </span>
            <p>Star</p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: problem.body }} />
      </div>
    </div>
  );
}

function useGetUsersDataOnProblem(str) {
  const [data, setData] = useState({
    liked: false,
    disliked: false,
    starred: false,
    solved: false,
  });
  useEffect(() => {
    const getUsersDataOnProblem = async () => {
      const userRef = doc(Firestore, "users", user?.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        const [
          solvedProblems,
          likedProblems,
          dislikedProblems,
          starredProblems,
        ] = data;
        setData({
          liked: likedProblems.includes(problemId),
          disliked: dislikedProblems.includes(problemId),
          starred: starredProblems.includes(problemId),
          solved: solvedProblems.includes(problemId),
        });
      }
    };

    getUsersDataOnProblem();
  }, []);
}

import {
  doc,
  getDoc,
  runTransaction,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaStar, FaCheckCircle, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import useGetProblem from "../hooks/useGetProblem";
import { LuLoader2 } from "react-icons/lu";


export default function ProblemDesc({ problem, _solved }) {
  const [user] = useAuthState(auth);
  const { currentProblem, loading, setCurrentProblem } = useGetProblem(
    problem.id
  );
  const { liked, disliked, solved, setData, starred } =
    useGetUsersDataOnProblem(problem.id);
  const [updating, setUpdating] = useState(false);

  const returnUserDataAndProblemData = async (transaction) => {
    const userRef = doc(firestore, "users", user.uid);
    const problemRef = doc(firestore, "problems", problem.id);
    const userDoc = await transaction.get(userRef);
    const problemDoc = await transaction.get(problemRef);
    return { userDoc, problemDoc, userRef, problemRef };
  };
  const handleLike = async () => {
    if (!user) {
      toast.error("You must be logged in to like a problem", {
        position: "top-left",
        theme: "dark",
      });
      return;
    }
    if (updating) return;
    setUpdating(true);
    await runTransaction(firestore, async (transaction) => {
      const { problemDoc, userDoc, problemRef, userRef } =
        await returnUserDataAndProblemData(transaction);

      if (userDoc.exists() && problemDoc.exists()) {
        if (liked) {
          // remove problem id from likedProblems on user document, decrement likes on problem document
          transaction.update(userRef, {
            likedProblems: userDoc
              .data()
              .likedProblems.filter((id) => id !== problem.id),
          });
          transaction.update(problemRef, {
            likes: problemDoc.data().likes - 1,
          });

          setCurrentProblem((prev) =>
            prev ? { ...prev, likes: prev.likes - 1 } : null
          );
          setData((prev) => ({ ...prev, liked: false }));
        } else if (disliked) {
          transaction.update(userRef, {
            likedProblems: [...userDoc.data().likedProblems, problem.id],
            dislikedProblems: userDoc
              .data()
              .dislikedProblems.filter((id) => id !== problem.id),
          });
          transaction.update(problemRef, {
            likes: problemDoc.data().likes + 1,
            dislikes: problemDoc.data().dislikes - 1,
          });

          setCurrentProblem((prev) =>
            prev
              ? { ...prev, likes: prev.likes + 1, dislikes: prev.dislikes - 1 }
              : null
          );
          setData((prev) => ({ ...prev, liked: true, disliked: false }));
        } else {
          transaction.update(userRef, {
            likedProblems: [...userDoc.data().likedProblems, problem.id],
          });
          transaction.update(problemRef, {
            likes: problemDoc.data().likes + 1,
          });
          setCurrentProblem((prev) =>
            prev ? { ...prev, likes: prev.likes + 1 } : null
          );
          setData((prev) => ({ ...prev, liked: true }));
        }
      }
    });
    setUpdating(false);
  };
  const handleDislike = async () => {
    if (!user) {
      toast.error("You must be logged in to dislike a problem", {
        position: "top-left",
        theme: "dark",
      });
      return;
    }
    if (updating) return;
    setUpdating(true);
    await runTransaction(firestore, async (transaction) => {
      const { problemDoc, userDoc, problemRef, userRef } =
        await returnUserDataAndProblemData(transaction);
      if (userDoc.exists() && problemDoc.exists()) {
        if (disliked) {
          transaction.update(userRef, {
            dislikedProblems: userDoc
              .data()
              .dislikedProblems.filter((id) => id !== problem.id),
          });
          transaction.update(problemRef, {
            dislikes: problemDoc.data().dislikes - 1,
          });
          setCurrentProblem((prev) =>
            prev ? { ...prev, dislikes: prev.dislikes - 1 } : null
          );
          setData((prev) => ({ ...prev, disliked: false }));
        } else if (liked) {
          transaction.update(userRef, {
            dislikedProblems: [...userDoc.data().dislikedProblems, problem.id],
            likedProblems: userDoc
              .data()
              .likedProblems.filter((id) => id !== problem.id),
          });
          transaction.update(problemRef, {
            dislikes: problemDoc.data().dislikes + 1,
            likes: problemDoc.data().likes - 1,
          });
          setCurrentProblem((prev) =>
            prev
              ? { ...prev, dislikes: prev.dislikes + 1, likes: prev.likes - 1 }
              : null
          );
          setData((prev) => ({ ...prev, disliked: true, liked: false }));
        } else {
          transaction.update(userRef, {
            dislikedProblems: [...userDoc.data().dislikedProblems, problem.id],
          });
          transaction.update(problemRef, {
            dislikes: problemDoc.data().dislikes + 1,
          });
          setCurrentProblem((prev) =>
            prev ? { ...prev, dislikes: prev.dislikes + 1 } : null
          );
          setData((prev) => ({ ...prev, disliked: true }));
        }
      }
    });
    setUpdating(false);
  };
  const handleStar = async () => {
    if (!user) {
      toast.error("You must be logged in to star a problem", {
        position: "top-left",
        theme: "dark",
      });
      return;
    }
    if (updating) return;
    setUpdating(true);

    if (!starred) {
      const userRef = doc(firestore, "users", user.uid);
      await updateDoc(userRef, {
        starredProblems: arrayUnion(problem.id),
      });
      setData((prev) => ({ ...prev, starred: true }));
    } else {
      const userRef = doc(firestore, "users", user.uid);
      await updateDoc(userRef, {
        starredProblems: arrayRemove(problem.id),
      });
      setData((prev) => ({ ...prev, starred: false }));
    }

    setUpdating(false);
  };

  return (
    <div className="container relative overflow-y-scroll custom-scrollbar">
      <div className="content ">
        <div className="flex items-center">
          {!currentProblem ? (
            <div className="h-[45px] flex items-center justify-center min-w-72 bg-blue rounded-lg">
              {" "}
              <span className="animate-spin text-white">
                <LuLoader2 />
              </span>
            </div>
          ) : (
            <h1 className="title">{currentProblem.title}</h1>
          )}
          {(solved || _solved) && (
            <span className="text-green text-4xl mt-1 ml-4 ">
              <FaCheckCircle />
            </span>
          )}
        </div>
        <div className="">
          {!currentProblem || updating ? (
            <div className="h-7 w-40 bg-blue flex items-center justify-center mt-3 rounded-lg"><span className="animate-spin text-lg"><LuLoader2/></span></div>
          ) : (
            <div className="flex mt-3 text-lg">
              <div className="flex items-center text-dull mr-4">
                <span className="mr-2.5">{currentProblem.likes}</span>
                <span
                  className="pb-1 text-xl hover:text-green cursor-pointer"
                  style={{ color: liked ? "#10b981" : "" }}
                  onClick={handleLike}
                >
                  <FaThumbsUp />
                </span>
              </div>
              <div className="flex items-center text-dull mr-5">
                <span className="mr-2.5">{currentProblem.dislikes}</span>
                <span
                  className="text-xl hover:text-red-400 cursor-pointer"
                  style={{ color: disliked ? "rgb(248,113,113)" : "" }}
                  onClick={handleDislike}
                >
                  <FaThumbsDown />
                </span>
              </div>
              <div
                className="flex items-center text-dull mr-3"
                style={{ color: starred ? "rgb(234,179,8)" : "" }}
              >
                <span className="pb-1 text-xl hover:text-yellow-500 cursor-pointer" onClick={handleStar}>
                  <FaStar />
                </span>
              </div>
            </div>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: problem.header }} />
        <div dangerouslySetInnerHTML={{ __html: problem.body }} />
      </div>
    </div>
  );
}

function useGetUsersDataOnProblem(problemId) {
  const [data, setData] = useState({
    liked: false,
    disliked: false,
    starred: false,
    solved: false,
  });
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getUsersDataOnProblem = async () => {
      const userRef = doc(firestore, "users", user?.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        const {
          solvedProblems,
          likedProblems,
          dislikedProblems,
          starredProblems,
        } = data;
        setData({
          liked: likedProblems.includes(problemId), // likedProblems["two-sum","jump-game"]
          disliked: dislikedProblems.includes(problemId),
          starred: starredProblems.includes(problemId),
          solved: solvedProblems.includes(problemId),
        });
      }
    };

    if (user) getUsersDataOnProblem();
    return () =>
      setData({ liked: false, disliked: false, starred: false, solved: false });
  }, [problemId, user]);

  return { ...data, setData };
}

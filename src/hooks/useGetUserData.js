import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth,firestore } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useGetUserData() {
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
        const userData = userSnap.data();
        const {
          solvedProblems,
          likedProblems,
          dislikedProblems,
          starredProblems,
        } = userData;
        setData({
          liked: likedProblems,
          disliked: dislikedProblems,
          starred: starredProblems,
          solved: solvedProblems,
        });
      }
    };

    if (user) getUsersDataOnProblem();
    return () =>
      setData({
        liked: false,
        disliked: false,
        starred: false,
        solved: false,
      });
  }, [user]);

  return { ...data, setData };
}
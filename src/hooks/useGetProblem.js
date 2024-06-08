import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import {firestore } from "../firebase/firebase";

export default function useGetProblem(problemId) {
    
    const [currentProblem, setCurrentProblem] = useState(null);
    const [loading, setLoading] = useState(true);   
    useEffect(() => {
      const getCurrentProblem = async () => {
        if(problemId === "" ||  problemId === undefined || problemId == null ) return {currentProblem: ""}
        setLoading(true);
        const docRef = doc(firestore, "problems", problemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const problem = docSnap.data();
          setCurrentProblem({ id: docSnap.id, ...problem });
        }
      };
      getCurrentProblem();
    }, [problemId]);
  
    return { currentProblem, loading, setCurrentProblem };
  }
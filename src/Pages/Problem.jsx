import CodeEditor from "../Components/CodeEditor";
import CodeResults from "../Components/CodeResults";
import CodeNav from "../Components/CodeNav";
import ProblemTabs from "../Components/ProblemTabs";
import { CaesarCipher } from "../problems/CeasarCipher";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import ProblemDesc from "../Components/ProblemDesc";
import Confetti from 'react-confetti'
import { useState } from "react";

export default function Problem() {
  const problems = {
    "caesar-cipher": CaesarCipher,
    // Add other problems here
  };
  const { problemId } = useParams();
  const problem = problems[problemId];

  if (!problem) {
    return <div>Problem not found!</div>;
  }

  const [success, setSuccess] = useState(false)
  return (
    <section className="flex bg-blue">

      <CodeNav />
      <ProblemTabs />
      <div class="grid grid-cols-2 grid-rows-5 gap-2 h-screen w-full p-3">
        {/* <Confetti
        gravity={0.3}
        tweenDuration={4000}
        /> */}
        <ProblemDesc problem={problem}/>
        <CodeEditor problem={problem}/>
        <CodeResults problem={problem}/>
      </div>
    </section>
  );
}

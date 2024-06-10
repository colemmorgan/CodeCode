import CodeEditor from "../Components/CodeEditor";
import CodeResults from "../Components/CodeResults";
import CodeNav from "../Components/CodeNav";
import ProblemTabs from "../Components/ProblemTabs";
import { CaesarCipher } from "../problems/js-algorithms/CeasarCipher";
import {StringIteration} from "../problems/basic-iteration/StringIteration"
import {ArrayIteration} from "../problems/basic-iteration/ArrayIteration"
import {ObjectIteration} from "../problems/basic-iteration/ObjectIteration"
import { useRecoilState } from "recoil";
import { confettiAtom } from "../atoms/OutputAtom";
import { useNavigate, useParams } from "react-router-dom";
import ProblemDesc from "../Components/ProblemDesc";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import Split from "react-split";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import useWindowSize from "../hooks/useWindowSize";


export default function Problem() {
  const problems = {
    "caesar-cipher": CaesarCipher,
    "basic-string-iteration": StringIteration,
    "basic-array-iteration": ArrayIteration,
    "basic-object-iteration":ObjectIteration,
  };
  const { problemId } = useParams();
  const problem = problems[problemId];

  if (!problem) {
    return <div>Problem not found!</div>;
  }

  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useRecoilState(confettiAtom);
  const [solved, setSolved] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  

  return (
    <section className="flex bg-blue overflow-hidden max-h-screen">
      <CodeNav />
      <ProblemTabs />
      <div className="relative min-h-screen w-full">
      {showConfetti && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1}/>}
      <HorizontalSplit>
        <ProblemDesc problem={problem} _solved={solved} />

        <VerticalSplit>
          <CodeEditor problem={problem} setSolved={setSolved} />
          <CodeResults problem={problem} />
        </VerticalSplit>
      </HorizontalSplit>
      </div>
    </section>
  );
}
function VerticalSplit({ children }) {
  return (
    <Split
      sizes={[60, 40]}
      minSize={0}
      direction="vertical"
      cursor="col-resize"
      className="overflow-y-hidden"
    >
      {children}
    </Split>
  );
}

function HorizontalSplit({ children }) {
 return (
  <Split
  sizes={[50, 50]}
  direction="horizontal"
  className="flex p-2.5 overflow-x-hidden h-full"
  minSize={0} 
>
  {children}
</Split>
 )
}

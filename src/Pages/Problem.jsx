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
import { useParams } from "react-router-dom";
import ProblemDesc from "../Components/ProblemDesc";
import Confetti from "react-confetti";
import { useState } from "react";
import Split from "react-split";


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

  const [showConfetti, setShowConfetti] = useRecoilState(confettiAtom);
  const [solved, setSolved] = useState(false);

  return (
    <section className="flex bg-blue overflow-hidden max-h-screen">
      <CodeNav />
      <ProblemTabs />
      <HorizontalSplit>
        {showConfetti && <Confetti gravity={0.3} tweenDuration={4000} />}
        <ProblemDesc problem={problem} _solved={solved} />

        <VerticalSplit>
          <CodeEditor problem={problem} setSolved={setSolved} />
          <CodeResults problem={problem} />
        </VerticalSplit>
      </HorizontalSplit>
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
  className="flex p-2.5 overflow-x-hidden "
  minSize={0} 
>
  {children}
</Split>
 )
}

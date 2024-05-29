import CodeEditor from "../Components/CodeEditor";
import CodeResults from "../Components/CodeResults";
import CodeNav from "../Components/CodeNav";
import ProblemTabs from "../Components/ProblemTabs";
import { CaesarCipher } from "../problems/CeasarCipher";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useParams } from "react-router-dom";

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
  return (
    <section className="flex bg-blue">
      <CodeNav />
      <ProblemTabs />
      <div class="grid grid-cols-2 grid-rows-5 gap-2 h-screen w-full p-3">
        <div
          className="row-span-5"
          dangerouslySetInnerHTML={{ __html: problem.code }}
        ></div>
        <CodeEditor />
        <CodeResults />
      </div>
    </section>
  );
}

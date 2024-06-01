import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";

export default function ProblemDesc({ problem }) {
  return (
    <div className="row-span-5 container">
      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: problem.header }} />
        <div className="flex mt-4 text-gray-800">
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
              <FaRegStar/>
            </span>
            <p>Star</p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: problem.body}}/>
      </div>
    </div>
  );
}

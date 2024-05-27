import React from "react";

export default function CodeResults() {
  return (
    <div className="bg-greyBlue row-span-2 rounded-lg overflow-hidden">
      <div
        className="h-12 px-6 flex items-center text-sm font-semibold text-dull"
        style={{ background: "rgb(25, 34, 49)" }}
      >
        Testing
      </div>
      <div className="grid grid-cols-12 border-b border-gray-700 text-dull text-xs">
        <div className="col-span-4 h-10 flex items-center px-4 ">
          <p className=" font-semibold">INPUT</p>
        </div>
        <div className="col-span-3 h-10 flex items-center px-3">
          <p className="font-semibold">OUTPUT</p>
        </div>
        <div className="col-span-3 h-10 flex items-center px-3">
          <p className="font-semibold">EXPECTED</p>
        </div>
        <div className="col-span-2 h-10  flex items-center px-3">
          <p className="font-semibold">RESULT</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const JobBoardComponent = ({
  job: {
    id,
    company,
    logo,
    Isnew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) => {
  const langAndTools = [];

  if (languages) {
    langAndTools.push(...languages);
  }

  if (tools) {
    langAndTools.push(...tools);
  }

  return (
    <div className="flex bg-white shadow-md m-4 p-6 rounded">
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className="flex flex-col ml-4">
        <h3 className="font-bold text-teal-500">{company}</h3>
        <h2 className="font-bold text-xl">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className=" flex ml-auto items-center justify-end">
        {langAndTools
          ? langAndTools.map((langAndTool) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-3 p-2 rounded-xl">
                {langAndTool}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;

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
}) => (
  <div className="flex bg-white shadow-md m-4 p-4">
    <div>
      <img src={logo} alt={company} />
    </div>
    <div className="ml-2">
      <h3 className="font-bold text-xl text-color-">{company}</h3>
      <h2>{position}</h2>
      <p>
        {postedAt} · {contract} · {location}
      </p>
    </div>
    <div></div>
  </div>
);

export default JobBoardComponent;

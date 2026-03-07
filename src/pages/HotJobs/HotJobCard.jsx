import React from "react";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    company_logo,
    jobType,
    title,
    company,
    location,
    description,
    requirements,
  } = job;
  return (
    <div className=" h-[310px] w-[274px] p-6 bg-base-100  shadow-xl">
      <div className="">
        <div className="flex justify-between">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src={company_logo}
            alt=""
          />
          <span className="text-xl w-[91px] h-[34px] bg-white text-[#4640DE] text-[16px] font-normal border border-[#4640DE] text-center flex justify-center items-center">
            {jobType}
          </span>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold size-[18px] w-auto">{title}</h3>
        </div>
        <div className="flex items-center mt-3 gap-x-2 flex-nowrap">
          <aside className="font-normal text-[16px] text-[#515B6F] whitespace-nowrap">
            {company}
          </aside>

          <div className="h-1 w-1 bg-[#515B6F] rounded-full opacity-30"></div>

          <aside className="font-normal text-[16px] text-[#515B6F] truncate min-w-0">
            {location}
          </aside>
        </div>
        <div className="mt-1">
          <p className="text-[#7C8493] font-normal text-[16px] leading-[160%] line-clamp-2">
            {description}
          </p>
        </div>
        <div className="mt-3 flex gap-2 flex-wrap">
          <aside className="px-3 py-1 flex items-center text-center rounded-[80px] bg-[#EB8533]/10 text-[#FFB836] text-sm">
            {requirements[0]}
          </aside>

          <aside className="px-3 py-1 flex items-center text-center rounded-[80px] text-[#56CDAD] bg-[#56CDAD]/10 text-sm">
            {requirements[1]}
          </aside>
        </div>

        <div className="flex justify-end mt-4">
          <Link to={`/jobs/${_id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;

import { useLoaderData } from "react-router-dom";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl text-center text-blue-400">
        Find your jobs here!
      </h2>

     <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-[20%] md:px-8 md:grid md:grid-cols-4 md:overflow-visible">
  {jobs.map((job) => (
    <div key={job._id} className="min-w-[80%] snap-center md:min-w-0">
      <HotJobCard job={job} />
    </div>
  ))}
</div>
    </div>
  );
};

export default HotJobs;

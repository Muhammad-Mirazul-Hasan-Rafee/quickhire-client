import Lines from "../../assets/Hero/heroLines.svg";
import heroBg from "../../assets/Hero/heroBg.svg";
import Hero from "../../assets/Hero/hero.svg";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import Main from "./Main";
import HotJobs from "./HotJobs";
const Home = () => {

  return (
    <div className="mx-8  gap-x-4 grid grid-cols-1 lg:grid-cols-2 items-center">
      {/* LEFT SIDE */}
  <aside>

    <div>
      <div className="mb-4">
        <h2 className="font-semibold text-4xl lg:text-7xl text-[#25324B] clash-display">
          Discover <br />
          <span className="text-[#25324B]">more than </span>
          <br />
          <span className="text-[#26A4FF]">5000+ Jobs</span>
        </h2>
      </div>

      <div className="mb-[75px]">
        <img src={Lines} alt="" />
      </div>

      <p className="epilogue-font text-[20px] font-normal max-w-[512px] leading-[160%]">
        Great platform for the job seeker that searching for
        <br /> new career heights and passionate about startups.
      </p>
    </div>

    <br />

    {/* SEARCH BAR */}
    <div className="relative mt-8">

      <div className="absolute w-full max-w-[870px] bg-white shadow p-4  z-10">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-center">

          <div className=" flex items-center gap-2">
            <CiSearch />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="input input-primary w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <CiLocationOn />
            <select
              defaultValue="Server location"
              className="select select-neutral w-full"
            >
              <option disabled>Server location</option>
              <option>North America</option>
              <option>EU west</option>
              <option>South East Asia</option>
            </select>
          </div>

          {/* BUTTON */}
          <button className="btn btn-primary h-[57px] px-8 whitespace-nowrap">
            Search my job
          </button>

        </div>

        <p className="mt-3 text-sm">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>

      </div>

    </div>

  </aside>


  {/* RIGHT HERO IMAGE */}
  <aside className="hidden lg:block relative mr-48 min-h-[707px] bg-white overflow-hidden">

    <img
      src={heroBg}
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      alt=""
    />

    <img
      src={Hero}
      className="relative w-[501px] h-[707px] mt-7"
      alt=""
    />

  </aside>

{/* Main */}
<Main></Main>


</div>
  );
};

export default Home;

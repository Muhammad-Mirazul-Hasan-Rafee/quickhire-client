import Lines from "../../assets/Hero/heroLines.svg";
import heroBg from "../../assets/Hero/heroBg.svg";
import Hero from "../../assets/Hero/hero.svg";

const Home = () => {
  console.log(heroBg);
  return (
    <div className="mx-8 flex gap-x-4">
      {/* left side */}
      <aside className="border border-red-600">
        <div>
          <div>
            <h2 className="font-semibold text-7xl text-[#25324B] clash-display">
              Discover <br />
              <span className="text-[#25324B]">more than </span>
              <br />
              <span className="text-[#26A4FF]">5000+ Jobs</span>
            </h2>
          </div>
          <div>
            <img src={Lines} alt="" />
          </div>
          <p className="epilogue-font text-[20px] font-normal w-[512px] h-[64px] leading-[160%]">
            Great platform for the job seeker that searching for
            <br /> new career heights and passionate about startups.
          </p>
        </div>
        <br />
        <div className="relative">
          <div className="absolute w-[852px] h-[89px] bg-white shadow">box</div>
          <div>
            <p>Popular : UI Designer, UX Researcher, Android, Admin</p>
          </div>
        </div>
      </aside>

      <aside className="relative ml-48 min-h-[707px] bg-white overflow-hidden">
        <img
          src={heroBg}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt=""
        />

        <img src={Hero} className="relative w-[501px] h-[707px] mt-7" alt="" />
      </aside>
    </div>
  );
};

export default Home;

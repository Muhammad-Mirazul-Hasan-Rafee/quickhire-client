import Lines from "../../assets/Hero/heroLines.svg";
import HeroImg from "../../assets/Hero/hero.svg";

const Home = () => {
  return (
    <div className="mx-5 flex">
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
          <p className="epilogue-font text-[20px] font-normal w-[512px] h-[64px] leading-[160%]">Great platform for
          the job seeker that searching for<br/> new career heights and passionate about startups.</p>
        </div>
      </aside>

      <aside className="bg-img">
        <img src={HeroImg} alt="" />
      </aside>
    </div>
  );
};

export default Home;

// import carousel1 from "../../assets/Hero/carousel1.svg";
// import carousel2 from "../../assets/Hero/carousel2.svg";
// import carousel3 from "../../assets/Hero/carousel3.svg";
// import carousel4 from "../../assets/Hero/carousel4.svg";
// import carousel5 from "../../assets/Hero/carousel5.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Main = () => {

//   const images = [
//     carousel1,
//     carousel2,
//     carousel3,
//     carousel4,
//     carousel5,
//   ];


  return (
    <div className="w-full py-5">

      <p className="text-lg font-semibold mb-10">
        Companies we helped grow
      </p>

  

    
  {/* Explore Category */}
      <div className="flex justify-between items-center w-[1192px] h-[53px]">
        <aside className="text-5xl font-semibold">
            Explore by <span className="text-[#26A4FF]">category</span>
        </aside>
        <aside>
            <Link to="/alljobs" className="flex gap-x-3 items-center text-[#4640DE]">Show all jobs <span><IoIosArrowRoundForward /></span></Link>
        </aside>
      </div>
    </div>
  );
};

export default Main;
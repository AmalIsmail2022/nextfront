
import Image from "next/image";
import Hero from "./_components/Hero/Hero";
import Sec1 from "./_components/Sec1/Sec1";
import Sec2 from "./_components/Sec2/Sec2";
import Sec3 from "./_components/Sec3/Sec3";
import Sec4 from "./_components/Sec4/Sec4";
import Sec5 from "./_components/Sec5/Sec5";
import Sec66 from "./_components/Sec6/Sec66";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sec1 />
      <Sec2 />
      {/* <Sec4 /> */}
      <Sec5 />
      <Sec66 />
      <Sec3 />
       
    </div>
  );
}

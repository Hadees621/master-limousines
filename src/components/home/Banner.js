/* eslint-disable @next/next/no-img-element */
import { image_urls } from "@/util";
import { archivo300, leagueSpartan700 } from "@/util/fonts";
import React from "react";
import Font from "../responsive/Font";

const Content = () => {
  return (
    <div className="absolute  right-[4.5%]  top-[59%] flex translate-x-[-4.5%] translate-y-[-59%] flex-col  items-end">
      <Font
        classes={`text-right uppercase leading-[0] text-white drop-shadow-md  ${leagueSpartan700}`}
        size={48}
      >
        San Diego
      </Font>
      <Font
        classes={`text-right uppercase leading-[1.5] text-white drop-shadow-md  ${leagueSpartan700}`}
        size={48}
      >
        Limousine
      </Font>
      <Font
        classes={`text-right uppercase leading-[0] text-white drop-shadow-md  ${leagueSpartan700}`}
        size={48}
      >
        Service
      </Font>

      <div className="mt-12 flex w-[450px]  flex-col items-end justify-end opacity-0 transition-all lg:opacity-100">
        <Font
          classes={`ps-[94px] leading-[1.1] text-end text-[#e9dede] ${archivo300}`}
          size={8.2}
        >
          Offering luxury transportation options for any occasion. We have a
          vehicle to fit your needs, from stylish limousines to spacious party
          buses. Our professional chauffeurs have local knowledge and provide
          top-notch service to make your experience unforgettable.
        </Font>

        <Font
          classes={`ps-[121px] text-right leading-[1.1] text-[#e9dede] ${archivo300} mt-5 `}
          size={8.2}
        >
          So choose us for an elegant and memorable transportation experience.
        </Font>
      </div>
    </div>
  );
};

function Banner() {
  return (
    <div className="relative h-[257px] xxs:h-auto">
      {/* <div class="absolute w-[200px] h-[130vh] bg-black right-0 opacity-95"></div> */}
      <div class="absolute right-[0px] h-[130vh] w-[1250px] bg-gradient-to-l from-black to-transparent shadow-md"></div>
      <img
        src={image_urls.home_banner}
        alt="hero-banner"
        className="h-full w-full object-cover xxs:h-auto"
        srcset=""
      />
      {/* <Content /> */}
    </div>
  );
}

export default Banner;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { image_urls } from "@/util";
import { leagueSpartan700, montserrat400 } from "@/util/fonts";

function BlackCard({ number, text }) {
  return (
    <div className="flex h-[200px] w-[170px]  flex-col justify-between bg-black py-10">
      <h1 className={`text-center text-5xl ${leagueSpartan700} text-white`}>
        {number}
      </h1>
      <p className="px-10 text-center text-xs uppercase text-white">{text}</p>
    </div>
  );
}

function Estd() {
  const cards = [
    { number: "900", text: "Happy Customers" },
    { number: "12", text: "LUXURY LIMOS" },
    { number: "900k", text: "MILES" },
    { number: "30", text: "QUALIFIED HAUFFEURS" },
  ];

  const style = {
    display: "grid",
    gridTemplateColumns: "170px 170px 170px 170px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div className="relative">
      <img src={image_urls.home_banner_bottom_center} alt="" />
      <div
        class="absolute left-1/2 top-[15%] translate-x-[-50%] translate-y-[-15%] w-[72%] px-32  py-14"
        style={{ ...style }}
      >
        {cards.map((card, idx) => {
          return <BlackCard key={idx} {...card} />;
        })}
      </div>
      <div className="absolute left-1/2 top-1/2 w-[72%] px-32 translate-x-[-50%] translate-y-[-50%]  text-white ">
        <h1 className={`opacity-[0.8] bg-black shadow-md p-4 text-center tracking-[10px] uppercase ${montserrat400}`}>-Established 2001-</h1>
      </div>
    </div>
  );
}

export default Estd;

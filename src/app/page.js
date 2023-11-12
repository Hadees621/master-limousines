/* eslint-disable @next/next/no-img-element */
import React from "react";
import Estd from "@/components/home/Estd";
import Fleet from "@/components/home/Fleet";
import Polygons from "@/components/common/Polygons";
import { Banner, LatestNews } from "@/components/home";
import CustomerBase from "@/components/home/CustomerBase";
import HomeContact from "@/components/home/HomeContact";

function Home() {
  return (
    <>
      {/* Banner Section  */}
      <div className="relative">
        <Banner />
        <Polygons active={-1} />
      </div>

      {/* The Fleet Section  */}
      <div class="relative my-10">
        <Fleet />
      </div>

      {/* The Customer Base Section  */}
      <div class="">
        <CustomerBase />
      </div>

      {/* The Latest News Section  */}
      <div class="my-32 relative">
        <LatestNews />
        <Polygons active={12} classes="top[20%]"/>
      </div>

      {/* The Estd. Section  */}
      <div className="relative">
        <Estd />
        <Polygons active={15} />
      </div>

      {/* The Contact Section  */}
      <div>
        <HomeContact/>
      </div>
    </>
  );
}

export default Home;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Fleet from "@/components/home/Fleet";
import { Banner, LatestNews } from "@/components/home";
import CustomerBase from "@/components/home/CustomerBase";
import Estd from "@/components/home/Estd";
import HomeContact from "@/components/home/HomeContact";

function Home() {
  return (
    <>
      {/* Banner Section  */}
      <div className="relative">
        <Banner />
        {/* <Polygons active={-1} /> */}
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
      <div class="my-32">
        <LatestNews />
      </div>

      {/* The Estd. Section  */}
      <div className="">
        <Estd />
      </div>

      {/* The Contact Section  */}
      <div>
        <HomeContact/>
      </div>
    </>
  );
}

export default Home;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as fonts from "@/util/fonts";
import { News, image_urls } from "@/util";
import { Quotes } from "@/assets/icons";
import NavArrows from "./NavArrows";

const TestomonialCard = ({ src, text, name }) => {
  const Montserrat600 = fonts.montserrat600;
  const style = {
    background: "rgba(56, 59, 66, 0.70)",
  };
  return (
    <div
      className="bg mr-3 inline-block h-[250px] w-[300px] flex-col whitespace-normal p-3"
      style={{ ...style }}
    >
      <div className="relative flex items-end justify-between">
        <div class="h-16 w-16 overflow-hidden rounded-full">
          <img
            src={image_urls.home_banner}
            alt="Your Avatar"
            class="h-full w-full object-cover"
          />
        </div>

        <div className="h-[1px] w-[80%] bg-white"></div>
        <div className="absolute right-0 mb-3">
          <Quotes width={40} height={40} />
        </div>
      </div>

      <p className={`my-5 text-center text-xs text-white`}>
        “We have used Masterpiece Limos for a while now and have enjoyed the
        prompt services and great hospitality that we receive not only from the
        owner but the drivers as well. This limo service is highly recommended,
        for any special or fun occasion and we wouldn’t use anyone else.”
      </p>

      <div className="flex items-center justify-end">
        <p className={`text-[8px] text-[#FAC30F] ${Montserrat600}`}>
          MIKE & MONICA BRADBURN
        </p>
        <div className="ml-4 h-[1px] w-[40%] bg-white"></div>
      </div>
    </div>
  );
};

function HomeContact() {
  const Libre = fonts.libre400;
  const Archivo = fonts.archivo300;
  const Montserrat400 = fonts.montserrat400;

  const primaryHeading = `mx-2 text-sm uppercase tracking-[10px] text-[#a9a8a7] ${Montserrat400}`;

  const BackgroundImage = () => {
    return (
      <img
        src={image_urls.home_banner_bottom}
        alt=""
        className="grayscale filter"
      />
    );
  };

  const style = {
    background: ``,
  };

  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute left-10 top-0">
        <div className="flex justify-between lg:pr-52">
          <h1 className={primaryHeading}>Hear it from our valued clients</h1>
          <NavArrows />
        </div>

        <div class="no-scrollbar my-10 mb-32 ml-2 overflow-scroll whitespace-nowrap lg:w-[81%]">
          {News.map((_, idx) => {
            return <TestomonialCard key={idx} {..._} />;
          })}
        </div>
      </div>
      <div className="absolute left-0 top-[450px] h-[320px] w-full whitespace-nowrap">
        <div
          className="relative inline-flex h-full w-[60%] flex-col items-end justify-center whitespace-normal px-10 pr-20"
          style={{
            background:
              "linear-gradient(270deg, #A72211 0%, rgba(141, 73, 73 / 93%) 0%,rgba(33,137,183,0),100%)",
          }}
        >
          <img
            src={image_urls.contact_limosine}
            alt=""
            srcset=""
            className="absolute left-0 mt-5 w-[500px]"
          />
          <h1 className={`text-[30px] text-white ${Libre} w-[300px] text-end `}>
            Require a personalized package?
          </h1>
          <p
            className={`w-[200px] text-end text-sm text-white ${Archivo} mt-5`}
          >
            Get in touch about your queries and we will get back to you as soon
            as possible.
          </p>
        </div>
        <div className="absolute right-10 mr-10 inline-flex h-full w-[30%] flex-col justify-between pr-10">
          <div className="flex">
            <p className={`pe-4 uppercase text-white ${Montserrat400}`}>
              Name:
            </p>
            <input type="text" className="w-full border-b bg-transparent" />
          </div>
          <div className="flex">
            <p className={`pe-4 uppercase text-white ${Montserrat400}`}>
              Email:
            </p>
            <input type="text" className="w-full border-b bg-transparent" />
          </div>

          <div className="flex flex-col">
            <p className="pe-4 text-white">Message:</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              className="border-b bg-transparent"
            ></textarea>
          </div>
          <button
            className={`bg-[#2189B7] p-3  uppercase text-white ${Montserrat400}`}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;

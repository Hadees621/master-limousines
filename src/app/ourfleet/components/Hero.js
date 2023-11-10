import React from 'react'

const Hero = () => {
  return (
    <>
      {/* <img
        src="/ourfleet/hero/fleet-banner.png"
        alt="Background Image"
        className="w-full h-auto"
      /> */}
      <div className="flex bg-black items-center border">
        <div className="w-[50%] border">
          <div className="flex flex-col h-full border">
            <h1 className="text-white font-Leaguespartan text-[90px] font-[700] tracking-[1px]">THE FLEET</h1>
            <p className="text-white font-Archivo text-[20px] leading-[24.8px] w-full h-full">Experience safe and reliable Luxury Ground Transportation with our professional chauffeurs at Masterpiece Limousine. We are fully licensed and insured for your peace of mind, and our fleet of vehicles is perfect for any occasion, whether it's a corporate event or a special occasion. Let us take care of the driving while you sit back, relax, and enjoy the comfort and sophistication of our luxury ground transportation services.</p>
          </div>
        </div>
         <div className="flex-grow border">
          <div className="flex w-full border">
            <img src="/ourfleet/hero/benz.png" alt="" className="w-[500px] h-[197px]" />
            <img src="/ourfleet/hero/ford.png" alt="Background Image" className="w-[500px] h-[197px]" />
            <img src="/ourfleet/hero/cad.png" alt="Background Image" className="w-[500px] h-[197px]" />
          </div>
          <div className="flex w-full justify">
            <img src="/ourfleet/hero/lincoln.png" alt="Background Image" className="w-[500px] h-[197px]" />
            <img src="/ourfleet/hero/chev.png" alt="Background Image" className="w-[500px] h-[197px]" />
          </div>
        </div> 
      </div>
    </>
  )
}

export default Hero


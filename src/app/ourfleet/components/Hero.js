import React from 'react'

const Hero = () => {
  return (
    <>
      <img
        src="/ourfleet/hero/fleet-banner.png"
        alt="Background Image"
        className="w-full h-auto"
      />
      <div className="flex flex-col md:flex-row bg-black items-center">
        <div className="flex w-full justify-center 2xl:justify-center md:w-[45%] 1024:flex-[45%] 1440:flex-[38%] 2xl:flex-[40%]">
          <div className="flex flex-col text-center px-12 md:px-8 md:py-6 1024:px-11 ">
            <h1 className="text-white font-Leaguespartan text-[40px] font-[700] md:text-[47px] 1024:text-[65px] 1440:text-[80px] 2xl:text-[100px]">THE FLEET</h1>
            <p className="text-white font-Archivo text-[10px] md:text-[13px] leading-[12.8px] md:leading-[14.5px] 1024:text-[15px] 1024:leading-[17px] 1440:text-[21px] 1440:leading-[21px] 2xl:text-[30px] 2xl:leading-[30px]">Experience safe and reliable Luxury Ground Transportation with our professional chauffeurs at Masterpiece Limousine. We are fully licensed and insured for your peace of mind, and our fleet of vehicles is perfect for any occasion, whether it's a corporate event or a special occasion. Let us take care of the driving while you sit back, relax, and enjoy the comfort and sophistication of our luxury ground transportation services.</p>
          </div>
        </div>
        <div className="w-full md:flex-[60%] py-5 1024:flex-[55%] 1440:flex-[62%] 2xl:flex-[60%] md:mr-4 1024:mr-8">
          <div className="flex flex-col md:flex-row px-5 justify-center">
            <img src="/ourfleet/hero/benz.png" alt="" className="h-[177px] md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]" />
            <img src="/ourfleet/hero/ford.png" alt="Background Image" className="h-[177px] md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]" />
            <img src="/ourfleet/hero/cad.png" alt="Background Image" className="h-[177px] md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]" />
          </div>
          <div className="flex flex-col md:flex-row px-5 justify-center w-full" >
            <img src="/ourfleet/hero/lincoln.png" alt="Background Image" className="h-[177px] md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]" />
            <img src="/ourfleet/hero/chev.png" alt="Background Image" className="h-[177px] md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero


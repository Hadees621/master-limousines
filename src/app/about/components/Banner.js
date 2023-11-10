import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="relative">
                <img
                    src="/about/banner/banner.png"
                    alt=""
                    className="w-full h-auto max-w-full"
                />
                <div className="absolute top-[24%] left-[32%]">
                    <div className="flex flex-col justify-center items-center  bg-black bg-opacity-50 backdrop-filter backdrop-blur-2 w-[110px] h-[137px] 375:w-[128px] 375:h-[158px] 425:w-[148px] 425:h-[180px] 768:w-[272px] 768:h-[328px] 1024:w-[362px] 1024:h-[438px] 1440:w-[500px] 1440:h-[617px] 2xl:w-[900px] 2xl:h-[1090px]">
                        <p className="text-white text-shadow font-LeagueSpartan text-[15px] font-[700] uppercase 768:text-[35px] 1024:text-[60px] 1440:text-[80px] 2xl:text-[120px]">
                            WHY US?
                        </p>
                        <div className="text-white text-center text-shadow font-Archivo px-3 py-4 375:pb-8 375:pt-4 425:px-5 1024:pb-20 1024:px-14 2xl:px-16 2xl:pb-64">
                            <p className="text-[5px] font-[300] leading-tight 768:text-[12px] 1024:text-[15px] 1440:text-[20px] 2xl:text-[30px]">
                                At Masterpiece Limousine, we understand that when it comes to
                                transportation, our clients expect nothing but the best. That's
                                why we're dedicated to providing the highest quality services
                                that prioritize great customer service, reliability, and safety.
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 22" fill="none" className="w-[16px] h-[6px] 768:w-[20px] 768:h-[10px] 1024:w-[25px] 1024:h-[15px] 1440:w-[30px] 1440:h-[20px] 2xl:w-[40px] 2xl:h-[30px]">
                            <line x1="0.707107" y1="1.29298" x2="19.799" y2="20.3849" stroke="white" stroke-width="2" />
                            <line x1="18.3847" y1="20.3848" x2="37.4766" y2="1.2929" stroke="white" stroke-width="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;


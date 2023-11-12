import React from 'react';

const Middle = () => {
    return (
        <>
            <div className="flex flex-col md:flex-col lg:flex-row bg-black">

                <div className="flex flex-col w-full lg:w-[35%] relative">

                    <div className="w-full h-[40%] relative">
                        <img src="/about/middle/long1.png" alt="Image 1" className="object-cover w-full h-full" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            {/* Block 1 */}
                            <div className="w-[140px] h-[120px] flex-shrink-0 bg-black shadow-md relative  ">
                                <div className="flex flex-col text-white text-center justify-center h-full absolute w-full">
                                    <div className='flex justify-center mb-2'>
                                        <p className="font-league-spartan text-[30px] font-bold uppercase leading-90">
                                            9000
                                        </p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className="text-white text-center text-shadow-md font-Montserrat font-[500] uppercase text-[7px] tracking-wider absolute bottom-3">
                                            HAPPY CUSTOMERS
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Block 2 */}
                            <div className="w-[140px] h-[120px] flex-shrink-0 bg-black shadow-md relative  ">
                                <div className="flex flex-col text-white text-center justify-center h-full absolute w-full">
                                    <div className='flex justify-center mb-2'>
                                        <p className="font-league-spartan text-[30px] font-bold uppercase leading-90">
                                            12
                                        </p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className="text-white text-center text-shadow-md font-Montserrat font-[500] uppercase text-[7px] tracking-wider absolute bottom-3">
                                            LUXURY LIMOS
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Block 3 */}
                            <div className="w-[140px] h-[120px] flex-shrink-0 bg-black shadow-md relative  ">
                                <div className="flex flex-col text-white text-center justify-center h-full absolute w-full">
                                    <div className='flex justify-center mb-2'>
                                        <p className="font-league-spartan text-[30px] font-bold uppercase leading-90">
                                            900K
                                        </p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className="text-white text-center text-shadow-md font-Montserrat font-[500] uppercase text-[7px] tracking-wider absolute bottom-3">
                                            MILES
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Block 4 */}
                            <div className="w-[140px] h-[120px] flex-shrink-0 bg-black shadow-md relative  ">
                                <div className="flex flex-col text-white text-center justify-center h-full absolute w-full">
                                    <div className='flex justify-center mb-2'>
                                        <p className="font-league-spartan text-[30px] font-bold uppercase leading-90">
                                            30
                                        </p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className="text-white text-center text-shadow-md font-Montserrat font-[500] uppercase text-[7px] tracking-wider absolute bottom-3">
                                            QUALIFIED CHAUFFEURS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <div className="flex items-center justify-center w-full h-[60%] relative">
                        <img src="/about/middle/long.png" alt="Image 2" className="object-cover w-full h-full" />
                    </div> */}

                    <div className="hidden md:block items-center justify-center w-full md:h-[60%] lg:h-full relative">
                        <img src="/about/middle/long.png" alt="Image 2" className="object-cover w-full h-full" />
                    </div>
                </div>

                <div className="w-full lg:w-[65%] relative">
                    <div className="flex w-full h-full " style={{ backgroundImage: "url('/about/middle/1.png')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '230px' }}>
                        <h1 className='flex justify-center text-center items-center text-white 320:mx-6 320:text-[11px] md:mx-10 md:text-[18px]'>
                            Our extensive range of luxury vehicles, including traditional limousines and spacious SUV limos, can accommodate groups of any size. From special occasions like weddings and Quinceañeras to corporate events or airport transportation, we have the expertise to provide you with the perfect ride.
                        </h1>
                    </div>
                    <div className="flex w-full h-full " style={{ backgroundImage: "url('/about/middle/2.png')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '230px' }}>
                        <h1 className='flex justify-center text-center items-center text-white 320:mx-6 320:text-[11px] md:mx-10 md:text-[18px]'>
                            We take pride in our commitment to customer satisfaction, trust, and reliability. Our professionally trained drivers are always ready to go above and beyond to make your experience with us unforgettable. With our 24/7 availability, you can trust that we'll be there whenever you need us.
                        </h1>
                    </div>
                    <div className="flex w-full h-full " style={{ backgroundImage: "url('/about/middle/3.png')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '230px' }}>
                        <h1 className='flex justify-center text-center items-center text-white 320:mx-6 320:text-[11px] md:mx-10 md:text-[18px]'>
                            At Masterpiece Limousine, we offer various transportation services, including Temecula wine tours, anniversary celebrations, bachelor and bachelorette parties, and more.
                        </h1>

                    </div>
                </div>

                <h1 className='text-white'> adjust the size of the boxes</h1>
            </div>
        </>
    );
};

export default Middle;

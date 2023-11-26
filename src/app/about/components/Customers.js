import React from 'react';
import Text from './Text';

const texts = [
    'Evofem Biosciences',
    'General Atomics',
    'Cadence Travel',
    'One Call Medical',
    'Cohn Restaurant Group',
    'Diageo Beer Company',
    'ETA Executive Services',
    'Allied Crew Transportation',
    'Southern Wine & Spirits',
    'Showtime University of California San Diego',
    'Texas Roadhouse',
    'Awaken Church',
    'Toyota',
    'DJO Global',
    'Stryker',
    'Jacobs Investment Company LLC',
    'Crest Beverage',
    'Bo-Beau Kitchen & Bar',
    'Corvette Diner Blarney Stone Pub',
    'Courtesy Chevrolet',
    'John Boggs & Associates',
    'San Diego State University',
    'Sycuan Casino',
    'Russell Westbrook Enterprises',
    'Eddie V\'s',
    'Chick-Fil-A',
    'Ronald McDonald House',
    'Lexus Qualtech',
    'Frosch',
    'Discount Tire',
    'Procopio Cory Hargreaves & Savitch LLP',
    'Travelworld International Group',
    'Billy Gene Marketing INC',
    'Higgs Fletcher and Mack',
    'Digitech',
    'iHeart Radio',
    'Make a Wish Foundation',
    'Proximo Spirits',
    'Slater\'s 50/50',
    'The Dana Hotel',
    'Sandbar',
    'Qualcomm',
    'American Wine & Spirits',
    'Jacobs and Cushman San Diego Food Bank',
    'Cartoon Network & Adult Swim',
    'State Farm Insurance',
    'SunTrust Bank',
    'Pacific Wine & Spirits',
    'Jeld-Wen Inc.',
    'San Diego Humane Society',
    'BioAtla',
    'Jägermeister',
    'ForeViva Medical Clinique',
    'Carey Meetings & Events',
    'Regal Entertainment Group',
    'Mercedes Benz',
    'Callaway Golf Odyssey',
];

const Customers = () => {
    return (
        <>
            <div
                className="text-center bg-cover bg-center pb-7"
                style={{ backgroundImage: "url('/about/customer/bg.png')" }}
            >
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="90" viewBox="0 0 100% 90" fill="none">
                        <path d="M1920 150L0 150L1.9233e-05 -5.06498e-09L1920 0.000167847L1920 150Z" fill="url(#paint0_linear_221_296)" />
                        <defs>
                            <linearGradient id="paint0_linear_221_296" x1="960" y1="8.57959e-05" x2="960" y2="113.046" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-librebaskerville italic text-[15px] 425:text-[18px] 768:text-[25px] 1024:text-[30px] 2xl:text-[54px] font-[300] leading-normal">
                        Our prized customer base
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 1440:gap-8 2xl:gap-11 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 p-6 2xl:p-9">
                    {texts.map((text, index) => (
                        <Text key={index} text={text} />
                    ))}
                </div>
            </div>

        </>
    );
};

export default Customers;


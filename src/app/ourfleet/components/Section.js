import React from 'react';
import Button from './Button';

const Section = ({ order, textContent, title, imgURL }) => {
    return (
        <div className={`flex flex-col sm:flex-col md:flex-col lg:flex-row ${order === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-full sm:w-full md:w-full lg:w-[50%] flex items-stretch ${order === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                <img src={imgURL} alt="Image" className="w-full h-auto" />
            </div>
            <div className={`flex flex-col bg-black w-full sm:w-full md:w-full lg:w-[50%] items-center lg:justify-center ${order === 'right' ? 'lg:order-2' : 'lg:order-1'} flex-1 overflow-hidden`}>
                <h1 className="text-white font-Montserrat text-[24px] font-medium tracking-[7px] uppercase text-center my-16 lg: 2xl:text-[40px] md:my-14 1024:mb-10 2xl:my-24">{title}</h1>
                {textContent.map((text, index) => (
                    <React.Fragment key={index}>
                        <p className="text-[12px] font-Archivo text-center text-white mx-14 md:text-[14px] md:mx-20 2xl:text-[25px] 1024:mx-14 1024:text-[15px]">
                            {text}
                        </p>
                        {index < textContent.length - 1 && <br />}
                    </React.Fragment>
                ))}
                <Button />
            </div>
        </div>
    );
};

export default Section;


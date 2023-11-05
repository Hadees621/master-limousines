import React from 'react';
import Button from './Button';

const Section = ({ order, textContent, title, imgURL }) => {
    return (
        <div className={`flex flex-wrap ${order === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`w-full sm:w-full md:w-full lg:w-1/2 ${order === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
                <img src={imgURL} alt="Image" className="w-full h-full" />
            </div>
            <div className={`bg-black w-full sm:w-full md:w-full lg:w-1/2 md:p-32 sm:p-24 flex flex-col items-center justify-center border-gray-100 ${order === 'right' ? 'lg:order-2' : 'lg:order-1'} lg:pt-20`}>

                <h1 className="text-white font-Montserrat text-[33px] font-medium tracking-[14px] uppercase text-center mb-24 pt-32">{title}</h1>

                {textContent.map((text, index) => (
                    <React.Fragment key={index}>
                        <p className="text-[24px] font-Archivo text-center text-white px-5">
                            {text}
                        </p>
                        {index < textContent.length - 1 && <br />}
                    </React.Fragment>
                ))}

                <Button />
            </div>
        </div>
    );
}

export default Section;

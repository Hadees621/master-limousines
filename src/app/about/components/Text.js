import React from 'react';

const Text = ({ text }) => {
    return (
        <p className="text-white text-center font-Montserrat text-[10px] 425:text-[12px] 768:text-[13px] 2xl:text-[16px] font-[700] leading-normal tracking-wider uppercase">
            {text}
        </p>
    );
};

export default Text;

import React from 'react';
import bannerImg from "../../assets/logo.png"

function Banner() {
    return (
        <div className={`flex flex-col justify-center items-center `}>
            <img src={bannerImg} alt="" />
            <div className='ball min-w-20 min-h-20 rounded-full bg-amber-400 animate-bounce mt-20 flex items-center justify-center text-3xl overflow-hidden'>
                <img className='w-10' src="https://thumbs.dreamstime.com/b/black-arrow-pointing-down-long-tail-bright-yellow-background-black-arrow-pointing-down-long-tail-bright-yellow-320212140.jpg" alt="" /></div>
        </div>
    );
}

export default Banner;
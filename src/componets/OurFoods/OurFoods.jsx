import React from 'react';
import bannerImg from "../../assets/logo.png"
function OurFoods() {
    return (
        <>

            <div className='w-11/12 mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-3 mt-9'>
                <div className="left  bg-amber-400 col-span-2 rounded-xl ">
                    <h2 className='text-2xl rounded-2xl text-black text-center bg-white mt-4 mb-8'>Category</h2>
                    <div className="btn-container  border-t-2 border-gray-300">
                        <button className='btn mt-5 border-0 bg-white text-black w-full'>
                            <img className='w-10' src={bannerImg} alt="" />
                            <h3 className='text-black font-semibold'>Sea food</h3>
                        </button>
                    </div>
                </div>
                <div className="middle lg:col-span-7  px-3">
                    <h1 className='text-center text-2xl my-5'>Our Foods</h1>

                    <div className="food-card-container border-t-1 border-gray-300 ">
                        <div className="card flex pt-2 lg:pt-0 lg:flex-row bg-white w-full shadow-sm text-black mt-4 ">
                            <figure className='px-4'>
                                <img
                                    className='w-48 rounded-2xl border'
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    food name is
                                </h2>
                                <div className="badge badge-warning text-black">NEW</div>
                                <div className='flex justify-between items-center gap-2'>
                                    <div className='h-0.5 min-w-2/3 bg-gray-300'></div>
                                    <p className='text-yellow-600 sm:text-xl'>$500 BDT</p>
                                </div>
                                <button className='btn btn-warning w-48'>➕ Add This Item</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right lg:col-span-3 px-2 border-4 border-amber-400 rounded-xl bg-white">
                    <h3 className='border-b-2 border-gray-300 py-5 text-2xl text-black text-center'>Cart</h3>
                    <div className='cart flex gap-2 mt-2 py-3 shadow-2xl rounded-xl px-2'>
                        <figure className='flex '>
                            <img
                                className='h-12 rounded-xl'
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
                        </figure>
                        <div className='relative '>
                            <p className='text-black text-sm'>Roast fennel and aubergine paella </p>
                            <p className='text-yellow-600 text-xl'>$500 BDT</p>
                            <div className='absolute -top-4 -right-4 bg-white p-2 rounded-full'>❌</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurFoods;
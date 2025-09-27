import React from 'react'

export default function FoodsCard({food,handleFood}) {
     const {title,foodImg,price,category}= food
  return (
    <div className="food-card-container border-t-1 border-gray-300 ">
                        <div className="card flex pt-2 lg:pt-0 lg:flex-row bg-white w-full shadow-sm text-black mt-4 ">
                            <figure className='px-4'>
                                <img
                                    className='w-48 rounded-2xl border'
                                    src={foodImg}
                                    alt="food image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {title}
                                </h2>
                                <div className="badge badge-warning text-black">{category}</div>
                                <div className='flex justify-between items-center gap-2'>
                                    <div className='h-0.5 min-w-2/3 bg-gray-300'></div>
                                    <p className='text-yellow-600 sm:text-xl'>${price} BDT</p>
                                </div>
                                <button onClick={()=>handleFood(food)} className='btn btn-warning w-48'>➕ Add This Item</button>
                            </div>
                        </div>
                    </div>
  )
}

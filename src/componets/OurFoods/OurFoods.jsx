import React, { use,useState } from 'react';

import Category from '../Category/Category';
import FoodsCard from '../FoodsCard/FoodsCard';
function OurFoods({ categoryPromiss, randomFoodsPromiss }) {
    const categoriesData = use(categoryPromiss)
    const randomFoodsData = use(randomFoodsPromiss)
    const [cartFood, setCartFood] = useState([])
    const handleFood=(food)=>{
        setCartFood([...cartFood,food])
    }
    console.log("cart food",cartFood)
    return (
        <>

            <div className='w-11/12 mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-3 mt-9'>
                <div className="category bg-amber-400 col-span-2 rounded-xl ">
                    <h2 className='text-2xl rounded-2xl text-black text-center bg-white mt-4 mb-8'>Category</h2>
                    {
                        categoriesData.categories.map(category => <Category key={category.id} category={category} />)
                    }
                </div>
                <div className="food-section lg:col-span-7  px-3">
                    <h1 className='text-center text-2xl my-5'>Our Foods</h1>

                    {
                        randomFoodsData.foods.map(food => <FoodsCard key={food.id} food={food} handleFood={handleFood} />)
                    }
                </div>
                <div className="right lg:col-span-3 px-2 border-4 border-amber-400 rounded-xl bg-white">
                    <h3 className='border-b-2 border-gray-300 py-5 text-2xl text-black text-center'>Cart</h3>
                    <div className='cart flex gap-2 mt-2 py-3 shadow-2xl rounded-xl px-2'>
                        <figure className='flex'>
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
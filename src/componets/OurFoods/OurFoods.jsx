import React, { use, useState } from 'react';

import Category from '../Category/Category';
import FoodsCard from '../FoodsCard/FoodsCard';
import FoodCart from './FoodCart';
import { toast } from 'react-toastify';
function OurFoods({ categoryPromiss, randomFoodsPromiss  }) {
    const categoriesData = use(categoryPromiss)
    const randomFoodsData = use(randomFoodsPromiss)

    const handleCategory = (id) => {
      console.log(id)
    }
    const [cartFoods, setCartFoods] = useState([])
    const handleFood = (food) => {
        toast.success("Food is Added")
        setCartFoods([...cartFoods, food])
    }
    const handleDleletCart = (food) => {
        const filteredFood = cartFoods.filter(f => f.id !== food.id)
        const sure = confirm("Do You Want To Delete this Cart")
        if (sure === true) {
            setCartFoods(filteredFood)
            toast.error("Food is Delete From Cart")
        }
    }
    return (
        <>

            <div className='w-11/12 mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-3 mt-9'>
                <div className="category bg-amber-400 col-span-2 rounded-xl ">
                    <h2 className='text-2xl rounded-2xl text-black text-center bg-white mt-4 mb-8'>Category</h2>
                    {
                        categoriesData.categories.map(category => <Category key={category.id} category={category} handleCategory={handleCategory} />)
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
                    {
                        cartFoods.map(food => <FoodCart key={food.id} food={food} handleDleletCart={handleDleletCart} />)
                    }
                </div>
            </div>
        </>
    );
}

export default OurFoods;
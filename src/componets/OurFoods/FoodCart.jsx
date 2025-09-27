import React from 'react';

const FoodCart = ({food,handleDleletCart}) => {
    
    return (
        <div className='cart flex gap-2 mt-2 py-3 shadow-xl rounded-xl px-2 relative'>
            <figure className='flex'>
                <img
                    className='h-12 rounded-xl'
                    src={food.foodImg} alt={food.title} />
            </figure>
            <div className=' '>
                <p className='text-black text-sm'>{food.title} </p>
                <p className='text-yellow-600 text-xl'>$500 BDT</p>
                <div onClick={()=>handleDleletCart(food)} className='absolute -top-0 -right-2 bg-white p-2 rounded-full  cursor-pointer'>❌</div>
            </div>
        </div>
    );
};

export default FoodCart;
function Category({category,handleCategory}) {
    const { categoryName, categoryImg } = category;
    return (
        <>
            
            <div onClick={()=>handleCategory(category.id)} className="btn-container border-t-2 border-gray-300">
                <button className='btn mt-5 border-0 bg-white text-black w-full'>
                    <img className='w-10' src={categoryImg} alt="" />
                    <h3 className='text-black font-semibold'>{categoryName}</h3>
                </button>
            </div>
        </>
    );
}

export default Category;
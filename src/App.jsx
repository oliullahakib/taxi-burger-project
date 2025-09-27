import { Suspense } from 'react'
import './App.css'
import Banner from './componets/Banner/Banner'
import OurFoods from './componets/OurFoods/OurFoods'
import { ToastContainer} from 'react-toastify';

const categoryPromiss = fetch("https://taxi-kitchen-api.vercel.app/api/v1/categories").then(res => res.json())
const randomFoodsPromiss = fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random").then(res => res.json())
function App() {
  
  return (
    <>
      <div className='bg-[url("https://i.ibb.co.com/5xMvW2tF/bg.png")] bg-fixed min-h-[100vh]'>
        <div className='min-h-full bg-linear-to-t from-[#ffffff] to-[#ffffff30]'>
          <Banner />
          <div className='bg-amber-400 sticky bottom-10 w-full text-black text-center font-medium text-2xl py-4 rounded-xl'>
            <h2>Digital Menu Card For Our Lovely Customer</h2>
          </div>
          <Suspense fallback={<div className=' w-11/12 mx-auto text-center '><span className="loading loading-spinner loading-xl"></span></div>}>
            <OurFoods
              categoryPromiss={categoryPromiss}
              randomFoodsPromiss={randomFoodsPromiss}
              
            />
          </Suspense>
        </div>
        <ToastContainer position='top-center' />
      </div>
    </>
  )
}

export default App

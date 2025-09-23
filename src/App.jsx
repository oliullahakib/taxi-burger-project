import './App.css'
import Banner from './componets/Banner/Banner'
import OurFoods from './componets/OurFoods/OurFoods'

function App() {
 

  return (
    <>
      <div className='bg-[url("https://i.ibb.co.com/5xMvW2tF/bg.png")] bg-fixed min-h-[100vh]'>
        <Banner/>
      <div className='bg-amber-400 sticky bottom-10 w-full text-black text-center font-medium text-2xl py-4 rounded-xl'>
        <h2>Digital Menu Card For Our Lovely Customer</h2>
      </div>
      <OurFoods/>
      </div>
    </>
  )
}

export default App

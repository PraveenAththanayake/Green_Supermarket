import React from 'react'
import ProductCard from '../../components/topsales/ProductCard'




const topsales = () => {
  return (
    <div className="mx-40">
      <div className='flex flex-row pb-[74px] '>
        <div><h1 className="admin-Headers  ">Top Saver Today</h1></div>
        <div className=' mt-[80px] font-light ml-[42px]'><h2 >Ends In :</h2></div>
      </div>
      <div className=' flexCenter'>
      
      <div className="grid grid-cols-4 grid-rows-4 gap-x-[12px] gap-y-[12px] mx-0 items-center justify-between">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

        </div>
        
      </div>
    </div>
    
  )
}

export default topsales

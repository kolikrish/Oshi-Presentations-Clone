import React from 'react'
import Carded from './Mores/Carded'

const Cards = () => {
  return (
    <>
        <div className='bg-zinc-200 h-[90vh] w-full text-black py-14'>
            
            <div className="border-b-[1px] border-zinc-500 pb-14 pl-20">
                <h2 className="text-4xl tracking-tight">Featured Projects</h2>
            </div>

            <div className='w-full flex items-center justify-between px-20 py-6'>
                {
                    ['Karman Ventures' , 'Services:' , 'William Barnes' , 'Read'].map((item , index) => (
                        <h3 key={index} className='text-lg underline underline-offset-5'>{item}</h3>
                    ))
                }
            </div>

            <div className='px-14 pt-5 flex gap-6'>
                <Carded className={`w-[40vw]`} name={"OCho'N"}/>
                <Carded className={`bg-zinc-800 w-[23vw]`} name={"Clutch"}/>
                <Carded className={`bg-zinc-900 w-[28vw]`}/>
            </div>

        </div>
    </>
  )
}

export default Cards
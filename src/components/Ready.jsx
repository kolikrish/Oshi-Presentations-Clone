import React from 'react'
import Button from './Mores/Button'

const Ready = () => {
  return (
    <>
        <div className='h-screen w-full bg-[#CDEA68] flex flex-col gap-6 items-center justify-center text-black font-semibold'>
            {
                ['READY' , 'TO START' , 'THE PROJECT'].map((item , index) => (
                    <h1 className='text-[20vh] leading-[150px]'>{item}</h1>
                ))
            }

            <Button className={'bg-black text-white'}/>
            <h2>Or</h2>
            <Button className={`bg-[#CDEA68] border-[1px] border-zinc-600 text-black`}/>
        </div>
    </>
  )
}

export default Ready
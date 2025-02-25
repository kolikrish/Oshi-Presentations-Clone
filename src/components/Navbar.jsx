import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='bg-zinc-900 w-full text-white flex items-center justify-between px-20 py-8'>
            <h2 className='text-2xl font-bold'>Ochi ,</h2>

            <div className="links">
                {['Services' , 'Our works' , 'About us' , 'Insights' , 'Contact'].map((items,index) => (
                    <a key={index} href="#" className={`text-md font-semibold px-6 ${index === 4 && 'ml-32'}`}>{items}</a>
                ))}
            </div>
        </nav>
    </>
  )
}

export default Navbar
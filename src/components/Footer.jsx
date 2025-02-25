import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='h-screen w-full bg-zinc-300 flex text-black'>
            <div className="FIRST h-full w-1/2 flex flex-col justify-between px-20 py-20">
                <h2 className='text-8xl font-bold'>EYE -<br/>OPENING</h2>
                <h4 className='text-4xl font-medium'>Ochi ,</h4>
            </div>

            {/* GAP OF BOTH BOXES */}

            <div className="SECOND h-full w-1/2">
                <div className='w-full h-[20%] flex items-center justify-center'>
                    <h2 className='text-8xl font-medium'>PRESENTATIONS</h2>
                </div>

                <div className='w-full h-[60%] flex justify-between items-center px-10'>
                    <div className='R flex flex-col gap-8 text-xl'>
                        <div>
                            <h2>S:</h2>
                            <h2>Instagram</h2>
                            <h2>Behance</h2>
                            <h2>Facebook</h2>
                            <h2>Linkedin</h2>
                        </div>

                        <div>
                            <h2>L:</h2>
                            <h2>202-1965 W4th Ave</h2>
                            <h2>Vancouver,Canada</h2>
                            <h2>30,Chukraine</h2>
                            <h2>Rajwads,Indore</h2>
                        </div>

                        <div>
                            <h2>E:</h2>
                            <h2>hello@ochi.design</h2>
                        </div>
                    </div>

                    <div className="L text-xl">
                        <h2 className='font-medium pb-8'>M :</h2>
                        <h2>Home</h2>
                        <h2>Services</h2>
                        <h2>Our work</h2>
                        <h2>About Us</h2>
                        <h2>Insights</h2>
                        <h2>Contact us</h2>
                    </div>
                </div>

                <div className='w-full h-[20%] flex items-center justify-between px-10'>
                    <h3>© ochi design 2025. Legal Terms</h3>
                    <h3>Website by Obys</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
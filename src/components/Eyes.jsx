import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove",(e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY , deltaX) * (180/Math.PI);
            setRotate(angle);
        })
    })
    

  return (
    <>
        <div className='h-screen w-full overflow-hidden'>
            <div data-scroll data-scroll-speed="-.6" className='h-[100%] w-[100%] bg-lime-500 bg-[url("https://res.cloudinary.com/djtagt9xw/image/upload/v1754811222/Image2_rrup5r.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center'>
                <div className="circle-div flex items-center gap-12">
                    <div className="circle h-[13vw] w-[13vw] bg-zinc-50 rounded-full flex items-center justify-center">
                        <div className='h-2/3 w-2/3 bg-black rounded-full relative'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-6 absolute top-[50%] left-[100%] -translate-x-[50%] -translate-y-[50%]">
                                <div className="eye h-6 w-6 rounded-full bg-zinc-100 ml-2"></div>
                            </div>
                        </div>
                    </div>

                    {/* This is the gap b/w two circles */}

                    <div className="circle h-[13vw] w-[13vw] bg-zinc-50 rounded-full flex items-center justify-center">
                        <div className='h-2/3 w-2/3 bg-black rounded-full relative'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-6 absolute top-[50%] left-[100%] -translate-x-[50%] -translate-y-[50%]">
                                <div className="eye h-6 w-6 rounded-full bg-zinc-100 ml-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Eyes


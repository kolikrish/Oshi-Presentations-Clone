import React from 'react'

const Carded = ({className , name}) => {
  return (
    <>
        <div className={`box h-[40vh] bg-green-700 flex items-center justify-center rounded-2xl text-[#CDEA68] text-4xl ${className}`}>
            {name || "Ochi's"}
        </div>
    </>
  )
}

export default Carded
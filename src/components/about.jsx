import React from 'react'

const about = () => {
  return (
    <div name = "about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-centerw-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
               "Everyday is about learning something new", this quote reminds me that we are not limited and we have to work everyday to make our mind sharper and sharper, continious learning makes us ready for the modern world,  
            </p>
            <br/>
            <p  className='text-xl'>
            I started coding when i was in my first year of btech and the first coding language i coded was C, then i started coding in JavaScript and something just sparked my interest in app development and web-development and started to use react for my builds. Then i shifted my interst to AI and ML during my third year of B-TECH and started to work on Ml algorithms and models and made projects like Chatbot and future predictions by analysing data on tumors. Now i'ts been a lot of journey since i started coding many buys and many sleppless nights and many more to come. But one thing is for sure that quote above written should never be forgotten.
            </p>
        </div>
    </div>
  )
}

export default about